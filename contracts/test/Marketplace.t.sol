// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "forge-std/Test.sol";
import "./Mocks/MockERC20.sol";
import "./Mocks/MockERC721.sol";
import "../src/core/Marketplace.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MarketplaceTest is Test {
    MockERC20 private mockUsdt;
    MockERC721 private nft;
    Marketplace private marketplace;
    Tom private tom;
    Escrow private escrow;
    address private owner;
    address private buyer;
    address private seller;
    address arbiter;
    uint256 orderId;

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;
    uint256 public constant maxValue = type(uint256).max;
    uint256 arbiterFee = 5 * 10 ** 18;

    function setUp() public {
        owner = makeAddr("Owner");
        arbiter = makeAddr("Arbiter");
        buyer = makeAddr("buyer");
        seller = makeAddr("seller");
        mockUsdt = new MockERC20();
        nft = new MockERC721();

        marketplace = new Marketplace(address(mockUsdt), 18, arbiter, arbiterFee);
        tom = new Tom();
        tom.grantRole(PAUSER_ROLE, address(marketplace));
        tom.grantRole(MINTER_ROLE, address(marketplace));
        tom.grantRole(BURNER_ROLE, address(marketplace));
        tom.grantRole(DEFAULT_ADMIN_ROLE, owner);

        escrow = new Escrow(address(marketplace));

        marketplace.activate(address(tom), address(escrow));

        marketplace.transferOwnership(owner);

        mockUsdt.mint(owner, 1000 * 10 ** 18);
        mockUsdt.mint(buyer, 1000 * 10 ** 18);
        mockUsdt.mint(seller, 1000 * 10 ** 18);
        nft.safeMint(seller, 1);

        vm.prank(buyer);
        mockUsdt.approve(address(marketplace), maxValue);
        vm.prank(buyer);
        mockUsdt.approve(address(escrow), maxValue);
        vm.prank(seller);
        mockUsdt.approve(address(marketplace), maxValue);
    }

    // function testRegister() public {

    //     marketplace.registerUser(owner);
    //     marketplace.registerUser(user);
    //     assertEq(marketplace.getUser(0), owner);
    //     assertEq(marketplace.getUser(1), user);
    //     assertEq(marketplace.getSpentAmount(owner), 0);
    //     assertEq(marketplace.getSpentAmount(user), 0);
    // }

    function testBuyToken() public {
        vm.startPrank(seller);

        marketplace.buyTOM(50 * 10 ** 18);

        assertEq(mockUsdt.balanceOf(address(escrow)), 50 * 10 ** 18);
        assertEq(tom.balanceOf(seller), 500 * 10 ** 18);

        vm.stopPrank();
    }

    function testlistItem() public {
        vm.startPrank(seller);

        marketplace.buyTOM(50 * 10 ** 18);
        tom.approve(address(marketplace), 60 * 10 ** 18);

        marketplace.listItem(
            "PS5", "Link/Img.png", "PS5 in good shape", 30 * 10 ** 18, 2, ItemType.PHYSICAL, address(0), 0
        );
        uint256 postingFee = marketplace.getItemPostingFee(0);

        assertEq(postingFee, 60 * 10 ** 18);
        assertEq(tom.balanceOf(seller), 440 * 10 ** 18);

        vm.stopPrank();
    }

    function testlistNftItem() public {
        vm.startPrank(seller);

        marketplace.buyTOM(50 * 10 ** 18);
        tom.approve(address(marketplace), 60 * 10 ** 18);
        nft.approve(address(marketplace), 1);

        marketplace.listItem(
            "DOGE_NFT", "NFT.xyz", "WHO LET THE DOGE OUT ???", 30 * 10 ** 18, 1, ItemType.NFT, address(nft), 1
        );
        uint256 postingFee = marketplace.getItemPostingFee(0);

        assertEq(postingFee, 30 * 10 ** 18);
        assertEq(tom.balanceOf(seller), 470 * 10 ** 18);

        vm.stopPrank();
    }

    modifier createListing(ItemType productType) {
        if (productType == ItemType.PHYSICAL) {
            vm.startPrank(seller);

            marketplace.buyTOM(50 * 10 ** 18);
            tom.approve(address(marketplace), 60 * 10 ** 18);

            marketplace.listItem(
                "PS5", "Link/Img.png", "PS5 in good shape", 30 * 10 ** 18, 2, ItemType.PHYSICAL, address(0), 0
            );
            uint256 postingFee = marketplace.getItemPostingFee(0);

            assertEq(postingFee, 60 * 10 ** 18);
            assertEq(tom.balanceOf(seller), 440 * 10 ** 18);

            vm.stopPrank();
        } else if (productType == ItemType.NFT) {
            vm.startPrank(seller);

            marketplace.buyTOM(50 * 10 ** 18);
            tom.approve(address(marketplace), 30 * 10 ** 18);
            nft.approve(address(marketplace), 1);

            marketplace.listItem(
                "DOGE_NFT", "NFT.xyz", "WHO LET THE DOGE OUT ???", 30 * 10 ** 18, 1, ItemType.NFT, address(nft), 1
            );
            uint256 postingFee = marketplace.getItemPostingFee(0);

            assertEq(postingFee, 30 * 10 ** 18);
            assertEq(tom.balanceOf(seller), 470 * 10 ** 18);

            vm.stopPrank();
        }
        _;
    }

    function testupdateItem() public {
        vm.startPrank(seller);

        marketplace.buyTOM(50 * 10 ** 18);
        tom.approve(address(marketplace), 60 * 10 ** 18);

        marketplace.listItem(
            "PS5", "Link/Img.png", "PS5 in good shape", 30 * 10 ** 18, 2, ItemType.PHYSICAL, address(0), 0
        );
        uint256 tomBalanceBefore = tom.balanceOf(seller);
        uint256 postingFeeBefore = marketplace.getItemPostingFee(0);

        marketplace.updateItem(0, "PS5", "Link/Img.png", "PS5 in good shape", 16 * 10 ** 18, 2);
        uint256 tomBalanceAfter = tom.balanceOf(seller);
        uint256 postingFeeAfter = marketplace.getItemPostingFee(0);

        assertEq(postingFeeAfter, 32 * 10 ** 18);
        assertEq(tomBalanceAfter, tomBalanceBefore + postingFeeBefore - postingFeeAfter);
        assertEq(tom.balanceOf(seller), 468 * 10 ** 18);

        vm.stopPrank();
    }

    function testOrderPhysicalItem() public createListing(ItemType.PHYSICAL) {
        vm.startPrank(buyer);
        uint256[] memory itemsIds = new uint256[](1);
        uint256[] memory quantities = new uint256[](1);
        itemsIds[0] = 0;
        quantities[0] = 1;
        uint256[] memory orderIds = new uint256[](1);
        console.log(marketplace.getItemPostingFee(0));
        orderIds = marketplace.orderCart(itemsIds, quantities);

        uint256 postingFee = marketplace.getItemPostingFee(0);
        uint256 quantity = marketplace.getItemQuantity(0);

        (,,,,, uint256 reward) = escrow.getOrder(orderIds[0]);

        // assertEq(tom.balanceOf(seller), 440 * 10 ** 18);
        assertEq(quantity, 1);
        assertEq(mockUsdt.balanceOf(buyer), (1000 - 30) * 10 ** 18);
        assertEq(marketplace.getOrderState(orderIds[0]), 0);
        assertEq(reward, ((postingFee * quantities[0]) / quantity) * 70 / 100);
        assertEq(mockUsdt.balanceOf(address(escrow)), 30 * 10 ** 18 + 50 * 10 ** 18);
        console.log(reward);
        console.log(postingFee);

        // marketplace.deliverySent(orderIds[0]);
        // marketplace.confirmDelivery(orderIds[0]);
        // assertEq(marketplace.getSpentAmount(user), 30 * 10 ** 18);

        vm.stopPrank();
    }

    function testOrderNftItem() public createListing(ItemType.NFT) {
        vm.startPrank(buyer);
        uint256[] memory itemsIds = new uint256[](1);
        uint256[] memory quantities = new uint256[](1);
        itemsIds[0] = 0;
        quantities[0] = 1;
        uint256[] memory orderIds = new uint256[](1);
        console.log(marketplace.getItemPostingFee(0));

        uint256 postingFeeBefore = marketplace.getItemPostingFee(0);

        orderIds = marketplace.orderCart(itemsIds, quantities);

        uint256 postingFee = marketplace.getItemPostingFee(0);
        uint256 quantity = marketplace.getItemQuantity(0);

        (,,,,, uint256 reward) = escrow.getOrder(orderIds[0]);

        // assertEq(tom.balanceOf(user), 470 * 10 ** 18);
        assertEq(quantity, 0);
        assertEq(marketplace.getOrderState(orderIds[0]), 4);
        assertEq(reward, ((postingFeeBefore * quantities[0])) * 70 / 100);
        assertEq(nft.ownerOf(1), buyer);
        assertEq(mockUsdt.balanceOf(seller), (1000 + 30 - 50) * 10 ** 18);
        console.log(reward);
        console.log(postingFee);

        // marketplace.deliverySent(orderIds[0]);
        // marketplace.confirmDelivery(orderIds[0]);
        // assertEq(marketplace.getSpentAmount(user), 30 * 10 ** 18);

        vm.stopPrank();
    }

    modifier orderItem(ItemType productType) {
        if (productType == ItemType.PHYSICAL) {
            vm.startPrank(buyer);
            uint256[] memory itemsIds = new uint256[](1);
            uint256[] memory quantities = new uint256[](1);
            itemsIds[0] = 0;
            quantities[0] = 1;
            uint256[] memory orderIds = new uint256[](1);
            console.log(marketplace.getItemPostingFee(0));
            orderIds = marketplace.orderCart(itemsIds, quantities);
            orderId = orderIds[0];

            uint256 postingFee = marketplace.getItemPostingFee(0);
            uint256 quantity = marketplace.getItemQuantity(0);

            (,,,,, uint256 reward) = escrow.getOrder(orderIds[0]);

            // assertEq(tom.balanceOf(user), 440 * 10 ** 18);
            assertEq(quantity, 1);
            assertEq(mockUsdt.balanceOf(buyer), (1000 - 30) * 10 ** 18);
            assertEq(mockUsdt.balanceOf(seller), (1000 - 50) * 10 ** 18);
            assertEq(marketplace.getOrderState(orderIds[0]), 0);
            assertEq(reward, ((postingFee * quantities[0]) / quantity) * 70 / 100);
            assertEq(mockUsdt.balanceOf(address(escrow)), 30 * 10 ** 18 + 50 * 10 ** 18);
            vm.stopPrank();
        } else if (productType == ItemType.NFT) {
            vm.startPrank(buyer);
            uint256[] memory itemsIds = new uint256[](1);
            uint256[] memory quantities = new uint256[](1);
            itemsIds[0] = 0;
            quantities[0] = 1;
            uint256[] memory orderIds = new uint256[](1);
            console.log(marketplace.getItemPostingFee(0));

            uint256 postingFeeBefore = marketplace.getItemPostingFee(0);

            orderIds = marketplace.orderCart(itemsIds, quantities);

            uint256 postingFee = marketplace.getItemPostingFee(0);
            uint256 quantity = marketplace.getItemQuantity(0);

            (,,,,, uint256 reward) = escrow.getOrder(orderIds[0]);

            // assertEq(tom.balanceOf(user), 470 * 10 ** 18);
            assertEq(mockUsdt.balanceOf(seller), (1000 + 30 - 50) * 10 ** 18);
            assertEq(quantity, 0);
            assertEq(marketplace.getOrderState(orderIds[0]), 4);
            assertEq(reward, ((postingFeeBefore * quantities[0])) * 70 / 100);
            assertEq(nft.ownerOf(1), buyer);
            vm.stopPrank();
        }
        _;
    }

    function testlistAndOrderManyItems() public returns (uint256[] memory) {
        vm.startPrank(seller);

        marketplace.buyTOM(100 * 10 ** 18);
        tom.approve(address(marketplace), 1000 * 10 ** 18);

        marketplace.listItem(
            "PS5", "Link/Img.png", "PS5 in good shape", 100 * 10 ** 18, 5, ItemType.PHYSICAL, address(0), 0
        );
        uint256 quantityLeft = marketplace.getItemQuantity(0);

        assert(quantityLeft == 5);
        assert(marketplace.getItemPostingFee(0) == 500 * 10 ** 18);

        marketplace.listItem(
            "Macbook", "Link/Img.png", "Macbook in good shape", 400 * 10 ** 18, 1, ItemType.PHYSICAL, address(0), 0
        );

        nft.approve(address(marketplace), 1);

        marketplace.listItem(
            "DOGE_NFT", "NFT.xyz", "WHO LET THE DOGE OUT ???", 30 * 10 ** 18, 1, ItemType.NFT, address(nft), 1
        );

        marketplace.listItem(
            "Ebook", "Ebook_Peview.pdf", "Title of Ebook", 60 * 10 ** 18, 1, ItemType.DIGITAL, address(0), 0
        );
        marketplace.listItem(
            "Pictures", "Pictures_Preveiw.png", "Licensed Pictures", 10 * 10 ** 18, 1, ItemType.DIGITAL, address(0), 0
        );

        vm.stopPrank();

        vm.startPrank(buyer);

        uint256[] memory itemsIds = new uint256[](6);
        uint256[] memory quantities = new uint256[](6);
        itemsIds[0] = 0;
        itemsIds[1] = 1;
        itemsIds[2] = 2;
        itemsIds[3] = 3;
        itemsIds[4] = 4;
        itemsIds[5] = 4;
        quantities[0] = 2;
        quantities[1] = 1;
        quantities[2] = 1;
        quantities[3] = 1;
        quantities[4] = 1;
        quantities[5] = 1;
        uint256[] memory orderIds = new uint256[](5);

        orderIds = marketplace.orderCart(itemsIds, quantities);

        (address sellerOfitem, address buyerOfitem, uint256 itemId, uint256 price, uint256 quantity, uint256 reward) =
            escrow.getOrder(orderIds[0]);
        assertEq(buyerOfitem, buyer);
        assertEq(sellerOfitem, seller);
        assert(itemId == 0);
        assert(price == 200 * 10 ** 18);
        assert(quantity == 2);
        quantityLeft = marketplace.getItemQuantity(0);
        assert(quantityLeft == 3);
        assert(marketplace.getItemPostingFee(0) == 500 * 10 ** 18 - (2 * 500 * 10 ** 18) / 5);
        assert(reward == ((2 * 500 * 10 ** 18) / 5) * 70 / 100);

        (sellerOfitem, buyerOfitem, itemId, price, quantity, reward) = escrow.getOrder(orderIds[2]);
        assertEq(buyerOfitem, buyer);
        assertEq(sellerOfitem, seller);
        assert(itemId == 2);
        assert(price == 30 * 10 ** 18);
        assert(quantity == 1);
        quantityLeft = marketplace.getItemQuantity(2);
        assert(quantityLeft == 0);
        assert(marketplace.getItemPostingFee(2) == 30 * 10 ** 18 - (1 * 30 * 10 ** 18) / 1);
        assert(reward == ((1 * 30 * 10 ** 18) / 1) * 70 / 100);

        (sellerOfitem, buyerOfitem, itemId, price, quantity, reward) = escrow.getOrder(orderIds[3]);
        assertEq(buyerOfitem, buyer);
        assertEq(sellerOfitem, seller);
        assert(itemId == 3);
        assert(price == 60 * 10 ** 18);
        assert(quantity == 1);
        quantityLeft = marketplace.getItemQuantity(3);
        assert(quantityLeft == 1);
        assert(marketplace.getItemPostingFee(3) == 60 * 10 ** 18 - (1 * 60 * 10 ** 18) / 1);
        assert(reward == ((1 * 60 * 10 ** 18) / 1) * 70 / 100);

        return orderIds;
    }

    function testDeliverySent() public createListing(ItemType.PHYSICAL) orderItem(ItemType.PHYSICAL) {
        vm.startPrank(seller);

        marketplace.deliverySent(orderId);
        assertEq(marketplace.getOrderState(orderId), 3);

        vm.stopPrank();
    }

    function testConfirm() public createListing(ItemType.PHYSICAL) orderItem(ItemType.PHYSICAL) {
        vm.startPrank(seller);

        vm.expectRevert();
        marketplace.confirmDelivery(orderId);

        marketplace.deliverySent(orderId);
        vm.stopPrank();

        vm.prank(buyer);
        marketplace.confirmDelivery(orderId);
        assertEq(marketplace.getOrderState(orderId), 4);
        assertEq(mockUsdt.balanceOf(buyer), (1000 - 30) * 10 ** 18);
        assertEq(mockUsdt.balanceOf(seller), (1000 - 50 + 30) * 10 ** 18);
    }

    function testInitiateAndResolveDispute() public createListing(ItemType.PHYSICAL) orderItem(ItemType.PHYSICAL) {
        vm.startPrank(seller);

        vm.expectRevert();
        marketplace.confirmDelivery(orderId);

        marketplace.deliverySent(orderId);

        marketplace.initiateDispute(orderId);
        assertEq(marketplace.getOrderState(orderId), 1);

        vm.expectRevert();
        marketplace.deliverySent(orderId);

        vm.expectRevert();
        marketplace.confirmDelivery(orderId);

        vm.expectRevert();
        marketplace.cancelOrder(orderId);

        vm.expectRevert();
        marketplace.initiateDispute(orderId);

        vm.stopPrank();

        (,,, uint256 price,,) = escrow.getOrder(orderId);
        vm.prank(arbiter);
        marketplace.resolveDispute(orderId, price - arbiterFee, 0);
        assertEq(marketplace.getOrderState(orderId), 2);
        assertEq(mockUsdt.balanceOf(buyer), (1000 - 5) * 10 ** 18);
        assertEq(mockUsdt.balanceOf(arbiter), 5 * 10 ** 18);
        assertEq(mockUsdt.balanceOf(seller), (1000 - 50) * 10 ** 18);
    }

    function testdoManyThingsWithManyOrders() public {
        uint256[] memory orderIds = testlistAndOrderManyItems();

        vm.startPrank(seller);
        marketplace.deliverySent(orderIds[0]);
        marketplace.deliverySent(orderIds[1]);
        marketplace.deliverySent(orderIds[3]);
        marketplace.deliverySent(orderIds[4]);
        marketplace.deliverySent(orderIds[5]);
        vm.stopPrank();

        vm.prank(buyer);
        marketplace.initiateDispute(orderIds[0]);
        vm.prank(arbiter);
        marketplace.resolveDispute(orderIds[0], 100 * 10 ** 18 - arbiterFee, 1);
        (
            address sellerOfitem,
            address buyerOfitem,
            uint256 itemId,
            uint256 totalprice,
            uint256 quantity,
            uint256 reward
        ) = escrow.getOrder(orderIds[0]);
        assertEq(buyerOfitem, buyer);
        assertEq(sellerOfitem, seller);
        assert(itemId == 0);
        assert(totalprice == 100 * 10 ** 18);
        assert(quantity == 1);
        uint256 quantityLeft = marketplace.getItemQuantity(0);
        assert(quantityLeft == 4);
        assert(marketplace.getItemPostingFee(0) == 500 * 10 ** 18 - (1 * 500 * 10 ** 18) / 5);
        console.log(reward);
        assert(reward == ((1 * 500 * 10 ** 18) / 5) * 70 / 100);

        // vm.prank(buyer);
        // marketplace.initiateDispute(orderIds[1]);

        vm.prank(buyer);
        marketplace.confirmDelivery(orderIds[1]);

        vm.prank(seller);
        marketplace.initiateDispute(orderIds[4]);

        vm.prank(arbiter);
        marketplace.resolveDispute(orderIds[4], 0, 1);

        vm.prank(buyer);
        marketplace.initiateDispute(orderIds[5]);

        (,,, uint256 price,,) = escrow.getOrder(orderIds[5]);

        vm.prank(arbiter);
        marketplace.resolveDispute(orderIds[5], price - arbiterFee, 0);
    }

    function testCancel() public createListing(ItemType.PHYSICAL) orderItem(ItemType.PHYSICAL) {
        vm.prank(buyer);
        marketplace.cancelOrder(orderId);

        vm.prank(arbiter);
        assertEq(marketplace.getOrderState(orderId), 5);
        assertEq(mockUsdt.balanceOf(buyer), (1000) * 10 ** 18);
        assertEq(mockUsdt.balanceOf(seller), (1000 - 50) * 10 ** 18);
    }

    // function testclaimRewardsWithRevert() public {
    //     marketplace.registerUser(address(1));
    //     marketplace.buyTOM(60 * 10 ** 18);
    //     tom.approve(address(marketplace), 1000 * 10 ** 18);
    //     marketplace.listItem("Item1", "Img.png", "Description", 500 * 10 ** 18, 1);
    //     uint256 orderId = marketplace.orderItem(0, 1);
    //     vm.expectRevert("Not eligible for rewards yet");
    //     marketplace.claimRewards();
    // }

    function testclaimRewards() public {
        testdoManyThingsWithManyOrders();

        vm.prank(buyer);
        marketplace.claimRewards();

        assertEq(marketplace.getSpentAmount(buyer), 0);
    }

    // function testUseReferalLink() public {
    //     marketplace.registerUser(address(1));
    //     vm.startPrank(address(2));
    //     marketplace.UseReferalLink(address(1));
    //     assertEq(tom.balanceOf(address(1)), 50 * 10 ** 18);
    //     assertEq(tom.balanceOf(address(2)), 50 * 10 ** 18);
    // }
}
