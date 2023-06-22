// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "forge-std/Test.sol";
import "./Mocks/MockERC20.sol";
import "../src/Marketplace.sol";


contract MarketplaceTest is Test {
    MockERC20 private mockToken1;
    Marketplace private marketplace;
    TOM private token;

    function setUp() public {
        mockToken1 = new MockERC20();
        vm.startPrank(address(1));

        marketplace = new Marketplace(address(mockToken1), 18);
        token = new TOM(address(marketplace));

        marketplace.activate(address(token));

        mockToken1.mint(address(1), 1000 * 10 ** 18);
        mockToken1.approve(address(marketplace), 1000 * 10 ** 18);
    }

    function testRegister() public {
        marketplace.registerUser(address(1));
        assertEq(marketplace.getUser(0), address(1));
        assertEq(marketplace.getSpentAmount(address(1)), 0);
    }

    function testBuyToken() public {
        marketplace.registerUser(address(1));
        marketplace.buyTOM(50 * 10 ** 18);
        assertEq(mockToken1.balanceOf(address(marketplace)), 50 * 10 ** 18);
        assertEq(token.balanceOf(address(1)), 500 * 10 ** 18);
    }

    function testlistItem() public {
        marketplace.registerUser(address(1));
        marketplace.buyTOM(50 * 10 ** 18);
        token.approve(address(marketplace), 1000 * 10 ** 18);
        marketplace.listItem(
            "Item1",
            "Img.png",
            "Description",
            30 * 10 ** 18,
            2
        );
        (, , , , , uint256 postingFee, ) = marketplace.getItem(0);
        assertEq(postingFee, 60 * 10 ** 18);
        assertEq(token.balanceOf(address(1)), 440 * 10 ** 18);
    }

    function testbuyItem() public {
        marketplace.registerUser(address(1));
        marketplace.buyTOM(50 * 10 ** 18);
        token.approve(address(marketplace), 1000 * 10 ** 18);
        marketplace.listItem(
            "Item1",
            "Img.png",
            "Description",
            30 * 10 ** 18,
            2
        );
        marketplace.buyItem(0, 1);
        (, , , , uint256 quantity, uint256 postingFee, ) = marketplace.getItem(
            0
        );
        assertEq(token.balanceOf(address(1)), 461 * 10 ** 18);
        assertEq(quantity, 1);
        assertEq(marketplace.getSpentAmount(address(1)), 30 * 10 ** 18);
    }
}
