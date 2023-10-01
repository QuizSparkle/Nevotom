// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

library Errors {
    error Marketplace__PriceMustBeAboveZero();
    error Marketplace__InsufficientTomBalance();
    error Marketplace__InsufficientTokenBalance();
    error Marketplace__EmptyLink();
    error Marketplace__NotOwner();
    error Marketplace__ItemSoldOut();
    error Marketplace__NotListed(uint256 itemId);
    error Marketplace__UserAlreadyExists(address user);
    error Marketplace__UserDoesNotExist(address user);
    error Marketplace__OnlyArbiter();
    error Marketplace__OnlyBuyer();
    error Marketplace__OnlySeller();
    error Marketplace__OnlyBuyerOrSeller();
    error Marketplace__InWrongState();
    error Marketplace__NotEligibleForRewards();

    error Escrow__TotalFeeExceedsBalance(uint256 orderId, uint256 fee);
    error Escrow__OnlyMarketplace();
}
