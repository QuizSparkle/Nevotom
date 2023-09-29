// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Marketplace} from "./Marketplace.sol";
import {Order, OrderState, ItemType} from "../libraries/DataTypes.sol";
import {Errors} from "../libraries/Errors.sol";
import {console} from "forge-std/Test.sol";

contract Escrow is IERC721Receiver {
    using SafeERC20 for IERC20;

    IERC20 private token;
    mapping(uint256 => Order) private orders;
    Marketplace private parentContract;
    uint256 salt;

    modifier onlyMarketplace() {
        if (msg.sender != address(parentContract)) {
            revert Errors.Escrow__OnlyMarketplace();
        }
        _;
    }

    constructor(address _marketplace) {
        parentContract = Marketplace(_marketplace);
        token = IERC20(parentContract.getTokenAddress());
    }

    function onERC721Received(address, address, uint256, bytes calldata) external pure returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }

    function lockFunds(address seller, address buyer, uint256 itemId, uint256 price, uint256 quantity, uint256 rewards)
        external
        onlyMarketplace
        returns (uint256)
    {
        uint256 orderId = uint256(keccak256(abi.encodePacked(msg.sender, seller, block.timestamp, itemId, salt)));
        salt += 1;
        orders[orderId] =
            Order({seller: seller, buyer: buyer, itemId: itemId, price: price, quantity: quantity, reward: rewards});

        token.safeTransferFrom(buyer, address(this), price);

        return orderId;
    }

    function releaseFunds(uint256 orderId) external onlyMarketplace {
        ItemType itemType = parentContract.getItemType(orders[orderId].itemId);
        Order storage order = orders[orderId];

        if (itemType == ItemType.NFT) {
            address nftAddress = parentContract.getItemNftAddress(orders[orderId].itemId);
            uint256 tokenId = parentContract.getItemNftId(orders[orderId].itemId);
            IERC721 nft = IERC721(nftAddress);
            nft.safeTransferFrom(address(this), order.buyer, tokenId);
        }

        token.safeTransfer(order.seller, order.price);
    }

    function cancelNftListing(uint256 itemId) external onlyMarketplace {
        address nftAddress = parentContract.getItemNftAddress(itemId);
        uint256 tokenId = parentContract.getItemNftId(itemId);
        address seller = parentContract.getItemSeller(itemId);
        IERC721 nft = IERC721(nftAddress);
        nft.safeTransferFrom(address(this), seller, tokenId);
    }

    function updateOrder(uint256 orderId, uint256 quantityPurshased, uint256 itemPrice, uint256 newReward) external onlyMarketplace {
        (address seller, address buyer, uint256 itemId, uint256 totalPaid, uint256 quantity, uint256 rewards) =
            getOrder(orderId);
        orders[orderId] = Order({
            seller: seller,
            buyer: buyer,
            itemId: itemId,
            price: itemPrice * quantityPurshased,
            quantity: quantityPurshased,
            reward: newReward
        });
    }

    function refundFunds(uint256 orderId) external onlyMarketplace {
        Order storage order = orders[orderId];
        token.safeTransfer(order.buyer, order.price);
    }

    function resolveDispute(uint256 _orderId, uint256 _buyerAward, address _arbiter, uint256 _arbiterFee)
        external
        onlyMarketplace
    {
        Order storage order = orders[_orderId];

        uint256 totalFee = _buyerAward + _arbiterFee;
        if (totalFee > order.price) {
            revert Errors.Escrow__TotalFeeExceedsBalance(order.price, totalFee);
        }

        if (_buyerAward > 0) {
            token.safeTransfer(order.buyer, _buyerAward);
        }

        if (_arbiterFee > 0) {
            token.safeTransfer(_arbiter, _arbiterFee);
        }

        uint256 remainingBalance = order.price - totalFee;
        if (remainingBalance > 0) {
            token.safeTransfer(order.seller, remainingBalance);
        }
    }

    function getOrder(uint256 orderId) public view returns (address, address, uint256, uint256, uint256, uint256) {
        return (
            orders[orderId].seller,
            orders[orderId].buyer,
            orders[orderId].itemId,
            orders[orderId].price,
            orders[orderId].quantity,
            orders[orderId].reward
        );
    }
}
