// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./Tom.sol";
import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";

/**
 * @title The Marketplace contract
 * @notice the Marketplace is where the logic for reward/fee transfers are implemented
 * @dev main functionalities are implemented.
 */

contract Marketplace is Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;

    struct User {
        uint256 spentAmount;
    }

    struct Item {
        string name;
        string image;
        string description;
        uint256 price;
        uint256 quantity;
        uint256 postingFee;
        address seller;
    }

    TOM private token;
    IERC20 private usdt;
    Counters.Counter private _itemIdCounter;
    mapping(address => User) users;
    address[] usersList;
    mapping(uint256 => Item) private items;
    uint256 private constant FEE_RATE = 10;
    uint256 private constant REWARD_RATE = 10;
    uint256 private constant TOM_USD_PRICE = 10;
    uint8 private immutable decimals;

    event TokenBought(address indexed buyer, uint256 amount);
    event userRegistered(address indexed user);
    event ItemListed(
        address indexed seller,
        uint256 indexed itemId,
        uint256 price,
        uint256 quantity,
        uint256 postingFee
    );
    event ItemCanceled(address indexed seller, uint256 indexed itemId);
    event ItemBought(
        address indexed seller,
        address indexed buyer,
        uint256 indexed itemId,
        uint256 price,
        uint256 quantity,
        uint256 rewards
    );
    event RewardsClaimed(address indexed user, uint256 rewards);

    // error AlreadyListed(uint256 itemId);
    error PriceMustBeAboveZero();
    error InsufficientTomBalance();
    error InsufficientUsdtBalance();
    error ItemSoldOut();
    error NotListed(uint256 itemId);
    error UserAlreadyExists(address user);
    error UserDoesNotExist(address user);

    modifier isListed(uint256 itemId) {
        Item memory item = items[itemId];
        if (item.price <= 0) {
            revert NotListed(itemId);
        }
        _;
    }

    modifier isNotUser(address user) {
        uint256 length = usersList.length;
        for (uint256 i = 0; i < length; ++i) {
            if (usersList[i] == user) {
                revert UserAlreadyExists(user);
            }
        }
        _;
    }

    modifier isUser(address user) {
        uint256 length = usersList.length;
        bool exists = false;
        for (uint256 i = 0; i < length; ++i) {
            if (usersList[i] == user) {
                exists = true;
                break;
            }
        }
        if (exists == false) {
            revert UserDoesNotExist(user);
        }
        _;
    }

    constructor(address _usdtAddress, uint8 _decimals) {
        usdt = IERC20(_usdtAddress);
        decimals = _decimals;
    }

    function activate(address _tomAddress) public onlyOwner {
        token = TOM(_tomAddress);
    }

    /**
     * @notice Get registered
     * @dev emits an event
     */

    function registerUser(address user) public isNotUser(user) {
        users[user] = User(0);
        usersList.push(user);
        emit userRegistered(user);
    }

    /**
     * @notice Function to purchase TOM token.
     * @dev Approve function needs to run first
     * For now 1 USDT = 10 TOM
     */

    function buyTOM(uint256 usdtAmount) public isUser(msg.sender) {
        uint256 tomAmount = calculateTOMAmount(usdtAmount);
        usdt.transferFrom(msg.sender, address(this), usdtAmount);
        token.transfer(msg.sender, tomAmount);

        emit TokenBought(msg.sender, tomAmount);
    }

    /**
     * @notice List an item in the marketplace
     * @dev Approve function needs to run first
     * The Posting FEE = 10% of sell price
     */

    function listItem(
        string memory name,
        string memory image,
        string memory description,
        uint256 price,
        uint256 quantity
    ) external isUser(msg.sender) {
        uint256 postingFee = calculateTOMAmount(
            (FEE_RATE * price * quantity) / 100
        );
        if (token.balanceOf(msg.sender) < postingFee) {
            revert InsufficientTomBalance();
        }

        if (price <= 0) {
            revert PriceMustBeAboveZero();
        }

        if (postingFee < 10) {
            postingFee = 10;
        }

        token.transferFrom(msg.sender, address(this), postingFee);

        Item memory newItem = Item(
            name,
            image,
            description,
            price,
            quantity,
            postingFee,
            msg.sender
        );

        uint256 itemId = _itemIdCounter.current();

        items[itemId] = newItem;

        _itemIdCounter.increment();

        emit ItemListed(msg.sender, itemId, price, quantity, postingFee);
    }

    /**
     * @notice Cancel a listing
     * @dev Can only be run by seller or contract Owner.
     * We also need to automate the canceling of sold out items using chainlink keepers maybe.
     */

    function cancelListing(uint256 itemId) external isListed(itemId) {
        require(
            msg.sender == items[itemId].seller || msg.sender == owner(),
            "Caller must be Seller or Owner"
        );
        delete (items[itemId]);
        emit ItemCanceled(msg.sender, itemId);
    }

    /**
     * @notice Buy an item, get the reward and increase spent amount.
     * @dev Approve function needs to run first
     * For later versions, the amount paid will be locked in a third party contract until buyer confirms
     * that product has been received or times run out (chainlink keepers ?)
     * This part needs further thinking as how to further secure this process
     */

    function buyItem(
        uint256 itemId,
        uint256 quantity
    ) public isListed(itemId) isUser(msg.sender) nonReentrant {
        Item storage item = items[itemId];
        if (item.quantity - quantity < 0) {
            revert ItemSoldOut();
        }
        if (usdt.balanceOf(msg.sender) < item.price * quantity) {
            revert InsufficientUsdtBalance();
        }

        uint256 rewards = (((item.postingFee * quantity) / item.quantity) *
            70) / 100;

        usdt.transferFrom(msg.sender, item.seller, item.price * quantity);
        for (uint256 i = 0; i < quantity; i++) {
            item.quantity--;
        }

        token.transfer(msg.sender, rewards);

        users[msg.sender].spentAmount += item.price * quantity;

        emit ItemBought(
            item.seller,
            msg.sender,
            itemId,
            item.price * quantity,
            quantity,
            rewards
        );
    }

    /**
     * @notice Claims rewards if amount spent > 500 dollars
     * @dev after claiming, the spent amount is fixed to 0 again.
     */

    function claimRewards() public isUser(msg.sender) nonReentrant {
        User storage user = users[msg.sender];
        require(
            user.spentAmount >= 500 * 10 ** decimals,
            "Not eligible for rewards yet"
        );
        uint256 rewards = calculateTOMAmount(
            (REWARD_RATE * user.spentAmount) / 100
        );
        token.transfer(msg.sender, rewards);
        user.spentAmount = 0;

        emit RewardsClaimed(msg.sender, rewards);
    }

    /**
     * @notice Register using a referal
     * @dev both parties get 50 TOM
     */

    function UseReferalLink(
        address referedBy
    ) public isUser(referedBy) nonReentrant {
        registerUser(msg.sender);
        token.transfer(msg.sender, 50);
        token.transfer(referedBy, 50);
    }

    function calculateTOMAmount(
        uint256 usdtAmount
    ) public pure returns (uint256) {
        return usdtAmount * TOM_USD_PRICE;
    }

    function getUser(uint256 key) public view returns (address) {
        return usersList[key];
    }

    function getSpentAmount(address user) public view returns (uint256) {
        return users[user].spentAmount;
    }

    function getItem(
        uint256 itemId
    )
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            uint256,
            uint256,
            uint256,
            address
        )
    {
        return (
            items[itemId].name,
            items[itemId].image,
            items[itemId].description,
            items[itemId].price,
            items[itemId].quantity,
            items[itemId].postingFee,
            items[itemId].seller
        );
    }
}
