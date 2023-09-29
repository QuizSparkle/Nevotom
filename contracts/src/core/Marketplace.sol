// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {console} from "forge-std/Test.sol";
import {Counters} from "@openzeppelin/contracts/utils/Counters.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Tom} from "../tokens/Tom.sol";
import {Escrow} from "./Escrow.sol";
import {User, OrderState, ItemType, Item} from "../libraries/DataTypes.sol";
import {Events} from "../libraries/Events.sol";
import {Errors} from "../libraries/Errors.sol";

/**
 * @title The Marketplace contract
 * @notice the Marketplace is where the logic for reward/fee transfers are implemented
 * @dev main functionalities are implemented.
 *
 * For now the token used to buy items is Usdt but later we will
 * Need to Add some whitelists of tokens
 * We will also have to add Functions to updates constants and addresses
 *
 * For now the Tom token price is pegged to 1/10 of USD. Later on, we will implement an oracle + liquidity pool on some DEX
 */

contract Marketplace is Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    using SafeERC20 for IERC20;

    uint256 private constant FEE_RATE = 10;
    uint256 private constant REWARD_RATE = 70;
    uint256 private constant TOM_USD_PRICE = 10;
    uint256 private constant ADJUSTER = 100;
    uint256 private constant MIN_SPENT_AMOUNT = 500;
    uint8 private immutable decimals;
    address private immutable i_arbiter;
    uint256 private immutable i_arbiterFee;

    IERC20 private tom;
    Escrow private escrow;
    IERC20 private token;
    Counters.Counter private _itemIdCounter;
    mapping(address => User) users;
    mapping(uint256 itemId => Item) private items;
    mapping(uint256 orderId => OrderState) public orderStates;
    mapping(address user => uint256 rewards) public userTotalRewards;

    modifier isListed(uint256 itemId) {
        Item memory item = items[itemId];
        if (item.price <= 0) {
            revert Errors.Marketplace__NotListed(itemId);
        }
        _;
    }

    // modifier isNotUser(address user) {
    //     uint256 length = usersList.length;
    //     for (uint256 i = 0; i < length; ++i) {
    //         if (usersList[i] == user) {
    //             revert Errors.Marketplace__UserAlreadyExists(user);
    //         }
    //     }
    //     _;
    // }

    modifier amountIsNotNull(uint256 amount) {
        if (amount == 0) {
            revert Errors.Marketplace__PriceMustBeAboveZero();
        }
        _;
    }

    // modifier isUser(address user) {
    //     uint256 length = usersList.length;
    //     bool exists = false;
    //     for (uint256 i = 0; i < length; ++i) {
    //         if (usersList[i] == user) {
    //             exists = true;
    //             break;
    //         }
    //     }
    //     if (exists == false) {
    //         revert Errors.Marketplace__UserDoesNotExist(user);
    //     }
    //     _;
    // }

    /// @dev Throws if called by any account other than arbiter.
    modifier onlyArbiter() {
        if (msg.sender != i_arbiter) {
            revert Errors.Marketplace__OnlyArbiter();
        }
        _;
    }

    modifier inState(uint256 orderId, OrderState expectedState) {
        if (orderStates[orderId] != expectedState) {
            revert Errors.Marketplace__InWrongState();
        }
        _;
    }

    constructor(address _tokenAddress, uint8 _decimals, address _arbiter, uint256 _arbiterFee) {
        token = IERC20(_tokenAddress);
        decimals = _decimals;
        i_arbiter = _arbiter;
        i_arbiterFee = _arbiterFee;
    }

    function activate(address _tomAddress, address _escrowAddress) external onlyOwner {
        tom = IERC20(_tomAddress);
        escrow = Escrow(_escrowAddress);
    }

    /**
     * @notice Get registered
     * @dev emits an event
     */

    // function registerUser(address user) public isNotUser(user) {
    //     users[user] = User(0);
    //     usersList.push(user);
    //     emit Events.userRegistered(user);
    // }

    /**
     * @notice Function to purchase TOM token.
     * @dev Approve function needs to run first
     * For now 1 USDT = 10 TOM
     */

    function buyTOM(uint256 tokenAmount) external {
        uint256 tomAmount = _calculateTOMAmount(tokenAmount);
        token.safeTransferFrom(msg.sender, address(escrow), tokenAmount);
        Tom(address(tom)).mint(msg.sender, tomAmount);

        emit Events.TokenBought(msg.sender, tomAmount);
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
        uint256 quantity,
        ItemType itemType,
        // string memory digitalProductLink,
        address nftContract,
        uint256 nftTokenId
    ) external amountIsNotNull(price) {
        require(price > 0 && quantity > 0, "Price/Quantity must be more than 0");
        uint256 postingFee = _calculatePostingFee(price, quantity);
        if (tom.balanceOf(msg.sender) < postingFee) {
            revert Errors.Marketplace__InsufficientTomBalance();
        }

        // if (itemType == ItemType.DIGITAL) {
        //     require(bytes(digitalProductLink).length > 0, "Must provide link for digital products");
        // } else
        if (itemType == ItemType.NFT) {
            require(nftContract != address(0) && nftTokenId > 0, "Must provide valid NFT details");
            IERC721 nft = IERC721(nftContract);
            address NftOwner = nft.ownerOf(nftTokenId);
            if (msg.sender != NftOwner) {
                revert Errors.Marketplace__NotOwner();
            }

            nft.safeTransferFrom(msg.sender, address(escrow), nftTokenId);
        }

        postingFee = postingFee < 10 ? 10 : postingFee;

        Tom(address(tom)).burnFrom(msg.sender, postingFee);

        Item memory newItem = Item(
            name,
            image,
            description,
            price,
            quantity,
            postingFee,
            msg.sender,
            itemType,
            // digitalProductLink,
            nftContract,
            nftTokenId
        );

        uint256 itemId = _itemIdCounter.current();

        items[itemId] = newItem;

        _itemIdCounter.increment();

        emit Events.ItemListed(msg.sender, itemId, itemType, postingFee);
    }

    function updateItem(
        uint256 itemId,
        string memory name,
        string memory image,
        string memory description,
        uint256 price,
        uint256 quantity
    )
        // string memory digitalProductLink
        external
        isListed(itemId)
    {
        require(msg.sender == items[itemId].seller, "Caller must be Seller");
        require(price > items[itemId].price / 2, "New price must be more than half of the old price");
        uint256 oldPostingFee = items[itemId].postingFee;
        uint256 newPostingFee = _calculatePostingFee(price, quantity);

        newPostingFee = newPostingFee < 10 ? 10 : newPostingFee;

        if (newPostingFee > oldPostingFee) {
            Tom(address(tom)).burnFrom(msg.sender, newPostingFee - oldPostingFee);
        } else {
            Tom(address(tom)).mint(msg.sender, oldPostingFee - newPostingFee);
        }

        items[itemId] = Item(
            name,
            image,
            description,
            price,
            quantity,
            newPostingFee,
            msg.sender,
            items[itemId].itemType,
            // digitalProductLink,
            items[itemId].nftAddress,
            items[itemId].tokenId
        );

        emit Events.ItemUpdated(msg.sender, itemId, newPostingFee);
    }

    /**
     * @notice Cancel a listing
     * @dev Can only be run by seller or contract Owner.
     * We also need to automate the canceling of sold out items using chainlink keepers maybe.
     */

    function cancelListing(uint256 itemId) external isListed(itemId) {
        require(msg.sender == items[itemId].seller || msg.sender == owner(), "Caller must be Seller or Owner");
        escrow.cancelNftListing(itemId);
        delete (items[itemId]);
        emit Events.ItemCanceled(msg.sender, itemId);
    }

    /**
     * @notice Buy an item, get the reward and increase spent amount.
     * @dev Approve function needs to run first
     *
     * NFT items are exchanged immediately
     * For Physical and Digital products, buyer + seller confirmation are needed before the funds are unlocked
     * One of both party can call the initiate dispute in order for an arbiter to decide who is in the wrong
     *
     */

    function orderItem(uint256 itemId, uint256 quantity) internal isListed(itemId) returns (uint256) {
        Item storage item = items[itemId];
        if (item.quantity - quantity < 0) {
            revert Errors.Marketplace__ItemSoldOut();
        }
        if (token.balanceOf(msg.sender) < item.price * quantity) {
            revert Errors.Marketplace__InsufficientTokenBalance();
        }

        uint256 rewards = _calculateReward(item.postingFee, quantity, item.quantity);

        item.postingFee = item.postingFee - (item.postingFee * quantity) / item.quantity;

        if (items[itemId].itemType != ItemType.DIGITAL) {
            item.quantity -= quantity;
        }

        uint256 orderId = escrow.lockFunds(item.seller, msg.sender, itemId, item.price * quantity, quantity, rewards);

        orderStates[orderId] == OrderState.CREATED;

        emit Events.ItemUpdated(item.seller, itemId, item.postingFee);

        emit Events.OrderSent(
            item.seller, msg.sender, orderId, itemId, item.price * quantity, quantity, rewards, orderStates[orderId]
        );

        if (item.itemType == ItemType.NFT) {
            escrow.releaseFunds(orderId);
            orderStates[orderId] = OrderState.CONFIRMED;
            userTotalRewards[msg.sender] += rewards;
            users[msg.sender].spentAmount += item.price;

            emit Events.OrderSent(
                item.seller, msg.sender, orderId, itemId, item.price * quantity, quantity, rewards, OrderState.CONFIRMED
            );
        }

        return orderId;
    }

    /**
     * Realistically, there is no overflow in i because a user will never be able to buy > MAX(UINT256) number of items
     */

    function orderCart(uint256[] calldata itemId, uint256[] calldata quantity)
        external
        nonReentrant
        returns (uint256[] memory ids)
    {
        uint256 length = itemId.length;
        ids = new uint256[](length);
        for (uint256 i = 0; i < length;) {
            ids[i] = orderItem(itemId[i], quantity[i]);
            unchecked {
                ++i;
            }
        }
    }
    /**
     * First step after the buyer orders an item, The seller confirms the delivery on his part right before (or at the same time) of sending the item.
     * He must confirm this state just as he is sending the item to lock the state and prevent the buyer from cancelling the order.
     */

    function deliverySent(uint256 orderId) external inState(orderId, OrderState.CREATED) nonReentrant {
        (address seller, address buyer, uint256 itemId, uint256 totalPaid, uint256 quantity, uint256 rewards) =
            escrow.getOrder(orderId);
        if (msg.sender != seller) {
            revert Errors.Marketplace__OnlySeller();
        }
        orderStates[orderId] = OrderState.DELIVERED;

        emit Events.OrderSent(seller, buyer, orderId, itemId, totalPaid, quantity, rewards, OrderState.DELIVERED);
    }

    /**
     * After the sellers confirmation. the buyer checks that his item is received then confirms the delivery. The funds are unlocked to the seller
     *
     */
    function confirmDelivery(uint256 orderId) external inState(orderId, OrderState.DELIVERED) nonReentrant {
        (address seller, address buyer, uint256 itemId, uint256 totalPaid, uint256 quantity, uint256 rewards) =
            escrow.getOrder(orderId);
        if (msg.sender != buyer) {
            revert Errors.Marketplace__OnlyBuyer();
        }
        escrow.releaseFunds(orderId);
        users[buyer].spentAmount += totalPaid;
        userTotalRewards[msg.sender] += rewards;
        orderStates[orderId] = OrderState.CONFIRMED;

        emit Events.OrderSent(seller, buyer, orderId, itemId, totalPaid, quantity, rewards, OrderState.CONFIRMED);
    }
    /**
     * After seller confirmation, either the buyer or seller can initiate a dispute if they think that either party has not fullfilled their engagement.
     * The buyer will initiate the dispute if he argues that the seller did not send the product
     * The seller will initiate the dispute if the product is correctly sent and received but the buyer refuses to confirm the transaction and unlock the funds.
     */

    function initiateDispute(uint256 orderId) external inState(orderId, OrderState.DELIVERED) nonReentrant{
        (address seller, address buyer, uint256 itemId, uint256 totalPaid, uint256 quantity, uint256 rewards) =
            escrow.getOrder(orderId);
        if (msg.sender != buyer && msg.sender != seller) {
            revert Errors.Marketplace__OnlyBuyerOrSeller();
        }
        orderStates[orderId] = OrderState.DISPUTED;

        emit Events.OrderSent(seller, buyer, orderId, itemId, totalPaid, quantity, rewards, OrderState.DISPUTED);
    }

    /**
     * A trusted arbiter will negotiate between both parties, then decides which party will receive the funds. The negociation have to be done in web2.
     * The arbiter receives a fee on every dispute.
     */
    function resolveDispute(uint256 orderId, uint256 buyerAward, uint256 quantityOfItemsEffectivelyReceived)
        external
        onlyArbiter
        inState(orderId, OrderState.DISPUTED)
    {
        escrow.resolveDispute(orderId, buyerAward, i_arbiter, i_arbiterFee);

        (address seller, address buyer, uint256 itemId, uint256 totalPaid, uint256 quantity, uint256 rewards) =
            escrow.getOrder(orderId);

        orderStates[orderId] = OrderState.RESOLVED;

        users[buyer].spentAmount += buyerAward;

        Item storage item = items[itemId];
        if (items[itemId].itemType == ItemType.DIGITAL) {
            quantity = 0;
        }

        uint256 postingFee = _calculatePostingFee(item.price, item.quantity + quantity);

        uint256 newRewards = _calculateReward(postingFee, quantityOfItemsEffectivelyReceived, item.quantity + quantity);

        userTotalRewards[buyer] += newRewards;

        item.postingFee = postingFee - (postingFee * quantityOfItemsEffectivelyReceived) / (item.quantity + quantity);

        if (items[itemId].itemType != ItemType.DIGITAL) {
            item.quantity = (item.quantity + quantity) - quantityOfItemsEffectivelyReceived;
        }

        escrow.updateOrder(
            orderId, quantityOfItemsEffectivelyReceived, item.price * quantityOfItemsEffectivelyReceived, newRewards
        );

        // order to be updated

        emit Events.OrderSent(seller, buyer, orderId, itemId, totalPaid, quantity, rewards, OrderState.RESOLVED);
    }

    /**
     * The buyer can cancel the order at any moment before the seller confirms the delivery on his part (which means that the item was not sent yet).
     */
    function cancelOrder(uint256 orderId) external nonReentrant inState(orderId, OrderState.CREATED) {
        (address seller, address buyer, uint256 itemId, uint256 totalPaid, uint256 quantity, uint256 rewards) =
            escrow.getOrder(orderId);
        if (msg.sender != buyer) {
            revert Errors.Marketplace__OnlyBuyer();
        }
        escrow.refundFunds(orderId);
        Item storage item = items[itemId];
        item.quantity += quantity;
        item.postingFee = item.postingFee + (item.postingFee * quantity) / item.quantity;

        orderStates[orderId] = OrderState.CANCELLED;

        emit Events.OrderSent(seller, buyer, orderId, itemId, totalPaid, quantity, rewards, OrderState.CANCELLED);
    }

    /**
     * @notice Claims rewards if amount spent > 500 dollars
     * @dev after claiming, the spent amount is fixed to 0 again.
     */

    function claimRewards() external nonReentrant {
        User storage user = users[msg.sender];
        if (user.spentAmount < MIN_SPENT_AMOUNT * 10 ** decimals) {
            revert Errors.Marketplace__NotEligibleForRewards();
        }
        uint256 totalRewards = userTotalRewards[msg.sender];
        Tom(address(tom)).mint(msg.sender, totalRewards);
        user.spentAmount = 0;

        emit Events.RewardsClaimed(msg.sender, totalRewards);
    }

    function _calculatePostingFee(uint256 price, uint256 quantity) internal view returns (uint256 postingFee) {
        postingFee = _calculateTOMAmount((FEE_RATE * price * quantity) / ADJUSTER);
    }

    function _calculateReward(uint256 postingFee, uint256 quantityBought, uint256 totalItems)
        internal
        pure
        returns (uint256 rewards)
    {
        rewards = (((postingFee * quantityBought) / totalItems) * REWARD_RATE) / ADJUSTER;
    }

    function _calculateTOMAmount(uint256 tokenAmount) internal view returns (uint256) {
        return (tokenAmount * TOM_USD_PRICE * 10 ** Tom(address(tom)).decimals()) / 10 ** decimals;
    }

    /**
     * @notice Register using a referal
     * @dev both parties get 50 TOM
     */

    // function UseReferalLink(address referedBy) external isUser(referedBy) nonReentrant {
    //     registerUser(msg.sender);
    //     tom.safeTransfer(msg.sender, 50 * 10 ** Tom(address(tom)).decimals());
    //     tom.safeTransfer(referedBy, 50 * 10 ** Tom(address(tom)).decimals());
    // }

    // function getUser(uint256 key) external view returns (address) {
    //     return usersList[key];
    // }

    function getSpentAmount(address user) external view returns (uint256) {
        return users[user].spentAmount;
    }

    // function isRegistered(address user) external view returns (bool) {
    //     uint256 length = usersList.length;
    //     for (uint256 i = 0; i < length; ++i) {
    //         if (usersList[i] == user) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // Stack too deep
    // function getItem(uint256 itemId)
    //     external
    //     view
    //     returns (
    //         string memory,
    //         string memory,
    //         string memory,
    //         uint256,
    //         uint256,
    //         uint256,
    //         address,
    //         ItemType,
    //         string memory,
    //         address,
    //         uint256
    //     )
    // {
    //     return (
    //         items[itemId].name,
    //         items[itemId].image,
    //         items[itemId].description,
    //         items[itemId].price,
    //         items[itemId].quantity,
    //         items[itemId].postingFee,
    //         items[itemId].seller,
    //         items[itemId].itemType,
    //         items[itemId].digitalProductLink,
    //         items[itemId].nftAddress,
    //         items[itemId].tokenId
    //     );
    // }

    function getItemName(uint256 itemId) external view returns (string memory) {
        return (items[itemId].name);
    }

    function getItemImage(uint256 itemId) external view returns (string memory) {
        return (items[itemId].image);
    }

    function getItemDescription(uint256 itemId) external view returns (string memory) {
        return (items[itemId].description);
    }

    function getItemQuantity(uint256 itemId) external view returns (uint256) {
        return (items[itemId].quantity);
    }

    function getItemPostingFee(uint256 itemId) external view returns (uint256) {
        return (items[itemId].postingFee);
    }

    function getItemSeller(uint256 itemId) external view returns (address) {
        return (items[itemId].seller);
    }

    function getItemType(uint256 itemId) external view returns (ItemType) {
        return (items[itemId].itemType);
    }

    // function getItemProductLink(uint256 itemId) external view returns (string memory) {
    //     return (items[itemId].digitalProductLink);
    // }

    function getItemNftAddress(uint256 itemId) external view returns (address) {
        return (items[itemId].nftAddress);
    }

    function getItemNftId(uint256 itemId) external view returns (uint256) {
        return (items[itemId].tokenId);
    }

    function getEscrowAddress() external view returns (address) {
        return address(escrow);
    }

    function getTomAddress() external view returns (address) {
        return address(tom);
    }

    function getTokenAddress() external view returns (address) {
        return address(token);
    }

    function getOrderState(uint256 orderId) external view returns (uint256) {
        return uint256(orderStates[orderId]);
    }
}
