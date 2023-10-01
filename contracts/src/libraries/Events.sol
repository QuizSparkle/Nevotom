// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {ItemType, OrderState} from "./DataTypes.sol";

library Events {
    event TokenBought(address indexed buyer, uint256 amount);
    event userRegistered(address indexed user);
    event ItemListed(
        address indexed seller,
        uint256 indexed itemId,
        ItemType itemType,
        uint256 postingFee
    );
    event ItemUpdated(
        address indexed seller,
        uint256 indexed itemId,
        uint256 postingFee
    );
    event ItemCanceled(address indexed seller, uint256 indexed itemId);
    event RewardsClaimed(address indexed user, uint256 rewards);

    event OrderSent(
        address indexed seller,
        address indexed buyer,
        uint256 indexed order,
        uint256 itemId,
        uint256 price,
        uint256 quantity,
        uint256 rewards,
        OrderState state
    );
    event FundsLocked(uint256 orderId, address buyer, uint256 amount);
    event FundsReleased(uint256 orderId, address seller, uint256 amount);
    event FundsRefunded(uint256 orderId, address buyer, uint256 amount);
}
