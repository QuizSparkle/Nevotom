// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


struct User {
        uint256 spentAmount;
    }

    enum OrderState {
        CREATED,
        DISPUTED,
        RESOLVED,
        DELIVERED,
        CONFIRMED,
        CANCELLED
    }

    enum ItemType {
        PHYSICAL,
        DIGITAL,
        NFT
    }

    struct Item {
        string name;
        string image;
        string description;
        uint256 price;
        uint256 quantity;
        uint256 postingFee;
        address seller;
        ItemType itemType;
        // string digitalProductLink;
        address nftAddress;
        uint256 tokenId;
    }


    struct Order {
        address seller;
        address buyer;
        uint256 itemId;
        uint256 price;
        uint256 quantity;
        uint256 reward;
        // OrderState state;
    }