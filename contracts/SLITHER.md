'forge clean' running (wd: /home/maroutis/NFTizeMarket/contracts)
'forge build --build-info' running (wd: /home/maroutis/NFTizeMarket/contracts)
INFO:Detectors:
Escrow.lockFunds(address,address,uint256,uint256,uint256,uint256) (src/core/Escrow.sol#36-48) uses arbitrary from in transferFrom: token.safeTransferFrom(buyer,address(this),price) (src/core/Escrow.sol#45)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#arbitrary-from-in-transferfrom
INFO:Detectors:
StdCheats.vm (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#473) shadows:
	- StdCheatsSafe.vm (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#10)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#state-variable-shadowing
INFO:Detectors:
Marketplace.i_arbiter (src/core/Marketplace.sol#36) is never initialized. It is used in:
	- Marketplace.resolveDispute(uint256,uint256) (src/core/Marketplace.sol#349-362)
Marketplace.i_arbiterFee (src/core/Marketplace.sol#37) is never initialized. It is used in:
	- Marketplace.resolveDispute(uint256,uint256) (src/core/Marketplace.sol#349-362)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#uninitialized-state-variables
INFO:Detectors:
Math.mulDiv(uint256,uint256,uint256) (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#55-134) performs a multiplication on the result of a division:
	- denominator = denominator / twos (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#101)
	- inverse = (3 * denominator) ^ 2 (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#116)
Math.mulDiv(uint256,uint256,uint256) (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#55-134) performs a multiplication on the result of a division:
	- denominator = denominator / twos (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#101)
	- inverse *= 2 - denominator * inverse (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#120)
Math.mulDiv(uint256,uint256,uint256) (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#55-134) performs a multiplication on the result of a division:
	- denominator = denominator / twos (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#101)
	- inverse *= 2 - denominator * inverse (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#121)
Math.mulDiv(uint256,uint256,uint256) (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#55-134) performs a multiplication on the result of a division:
	- denominator = denominator / twos (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#101)
	- inverse *= 2 - denominator * inverse (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#122)
Math.mulDiv(uint256,uint256,uint256) (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#55-134) performs a multiplication on the result of a division:
	- denominator = denominator / twos (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#101)
	- inverse *= 2 - denominator * inverse (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#123)
Math.mulDiv(uint256,uint256,uint256) (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#55-134) performs a multiplication on the result of a division:
	- denominator = denominator / twos (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#101)
	- inverse *= 2 - denominator * inverse (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#124)
Math.mulDiv(uint256,uint256,uint256) (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#55-134) performs a multiplication on the result of a division:
	- denominator = denominator / twos (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#101)
	- inverse *= 2 - denominator * inverse (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#125)
Math.mulDiv(uint256,uint256,uint256) (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#55-134) performs a multiplication on the result of a division:
	- prod0 = prod0 / twos (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#104)
	- result = prod0 * inverse (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#131)
Marketplace._calculateReward(uint256,uint256,uint256) (src/core/Marketplace.sol#400-406) performs a multiplication on the result of a division:
	- rewards = (((postingFee * quantityBought) / totalItems) * REWARD_RATE) / ADJUSTER (src/core/Marketplace.sol#405)
MarketplaceTest.testOrderPhysicalItem() (test/Marketplace.t.sol#186-215) performs a multiplication on the result of a division:
	- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#205)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#divide-before-multiply
INFO:Detectors:
Reentrancy in Marketplace.cancelListing(uint256) (src/core/Marketplace.sol#246-251):
	External calls:
	- escrow.cancelNftListing(itemId) (src/core/Marketplace.sol#248)
	State variables written after the call(s):
	- delete (items[itemId]) (src/core/Marketplace.sol#249)
	Marketplace.items (src/core/Marketplace.sol#45) can be used in cross function reentrancies:
	- Marketplace.cancelListing(uint256) (src/core/Marketplace.sol#246-251)
	- Marketplace.getItemDescription(uint256) (src/core/Marketplace.sol#482-484)
	- Marketplace.getItemImage(uint256) (src/core/Marketplace.sol#478-480)
	- Marketplace.getItemName(uint256) (src/core/Marketplace.sol#474-476)
	- Marketplace.getItemNftAddress(uint256) (src/core/Marketplace.sol#506-508)
	- Marketplace.getItemNftId(uint256) (src/core/Marketplace.sol#510-512)
	- Marketplace.getItemPostingFee(uint256) (src/core/Marketplace.sol#490-492)
	- Marketplace.getItemProductLink(uint256) (src/core/Marketplace.sol#502-504)
	- Marketplace.getItemQuantity(uint256) (src/core/Marketplace.sol#486-488)
	- Marketplace.getItemSeller(uint256) (src/core/Marketplace.sol#494-496)
	- Marketplace.getItemType(uint256) (src/core/Marketplace.sol#498-500)
	- Marketplace.isListed(uint256) (src/core/Marketplace.sol#48-54)
	- Marketplace.listItem(string,string,string,uint256,uint256,ItemType,string,address,uint256) (src/core/Marketplace.sol#144-199)
	- Marketplace.updateItem(uint256,string,string,string,uint256,uint256,string) (src/core/Marketplace.sol#201-238)
Reentrancy in Marketplace.cancelOrder(uint256) (src/core/Marketplace.sol#364-377):
	External calls:
	- escrow.refundFunds(orderId) (src/core/Marketplace.sol#370)
	State variables written after the call(s):
	- orderStates[orderId] = OrderState.CANCELLED (src/core/Marketplace.sol#374)
	Marketplace.orderStates (src/core/Marketplace.sol#46) can be used in cross function reentrancies:
	- Marketplace.getOrderState(uint256) (src/core/Marketplace.sol#526-528)
	- Marketplace.inState(uint256,OrderState) (src/core/Marketplace.sol#96-101)
	- Marketplace.initiateDispute(uint256) (src/core/Marketplace.sol#338-347)
	- Marketplace.orderStates (src/core/Marketplace.sol#46)
Reentrancy in Marketplace.claimRewards() (src/core/Marketplace.sol#384-394):
	External calls:
	- Tom(address(tom)).mint(msg.sender,rewards) (src/core/Marketplace.sol#390)
	State variables written after the call(s):
	- user.spentAmount = 0 (src/core/Marketplace.sol#391)
	Marketplace.users (src/core/Marketplace.sol#43) can be used in cross function reentrancies:
	- Marketplace.getSpentAmount(address) (src/core/Marketplace.sol#427-429)
	- Marketplace.resolveDispute(uint256,uint256) (src/core/Marketplace.sol#349-362)
Reentrancy in Marketplace.confirmDelivery(uint256) (src/core/Marketplace.sol#314-325):
	External calls:
	- escrow.releaseFunds(orderId) (src/core/Marketplace.sol#320)
	State variables written after the call(s):
	- orderStates[orderId] = OrderState.CONFIRMED (src/core/Marketplace.sol#322)
	Marketplace.orderStates (src/core/Marketplace.sol#46) can be used in cross function reentrancies:
	- Marketplace.getOrderState(uint256) (src/core/Marketplace.sol#526-528)
	- Marketplace.inState(uint256,OrderState) (src/core/Marketplace.sol#96-101)
	- Marketplace.initiateDispute(uint256) (src/core/Marketplace.sol#338-347)
	- Marketplace.orderStates (src/core/Marketplace.sol#46)
Reentrancy in Marketplace.orderItem(uint256,uint256) (src/core/Marketplace.sol#261-297):
	External calls:
	- orderId = escrow.lockFunds(item.seller,msg.sender,itemId,item.price * quantity,quantity,rewards) (src/core/Marketplace.sol#275)
	- escrow.releaseFunds(orderId) (src/core/Marketplace.sol#288)
	State variables written after the call(s):
	- orderStates[orderId] = OrderState.CONFIRMED (src/core/Marketplace.sol#289)
	Marketplace.orderStates (src/core/Marketplace.sol#46) can be used in cross function reentrancies:
	- Marketplace.getOrderState(uint256) (src/core/Marketplace.sol#526-528)
	- Marketplace.inState(uint256,OrderState) (src/core/Marketplace.sol#96-101)
	- Marketplace.initiateDispute(uint256) (src/core/Marketplace.sol#338-347)
	- Marketplace.orderStates (src/core/Marketplace.sol#46)
Reentrancy in Marketplace.updateItem(uint256,string,string,string,uint256,uint256,string) (src/core/Marketplace.sol#201-238):
	External calls:
	- Tom(address(tom)).burnFrom(msg.sender,newPostingFee - oldPostingFee) (src/core/Marketplace.sol#218)
	- Tom(address(tom)).mint(msg.sender,oldPostingFee - newPostingFee) (src/core/Marketplace.sol#220)
	State variables written after the call(s):
	- items[itemId] = Item(name,image,description,price,quantity,newPostingFee,msg.sender,items[itemId].itemType,digitalProductLink,items[itemId].nftAddress,items[itemId].tokenId) (src/core/Marketplace.sol#223-235)
	Marketplace.items (src/core/Marketplace.sol#45) can be used in cross function reentrancies:
	- Marketplace.cancelListing(uint256) (src/core/Marketplace.sol#246-251)
	- Marketplace.getItemDescription(uint256) (src/core/Marketplace.sol#482-484)
	- Marketplace.getItemImage(uint256) (src/core/Marketplace.sol#478-480)
	- Marketplace.getItemName(uint256) (src/core/Marketplace.sol#474-476)
	- Marketplace.getItemNftAddress(uint256) (src/core/Marketplace.sol#506-508)
	- Marketplace.getItemNftId(uint256) (src/core/Marketplace.sol#510-512)
	- Marketplace.getItemPostingFee(uint256) (src/core/Marketplace.sol#490-492)
	- Marketplace.getItemProductLink(uint256) (src/core/Marketplace.sol#502-504)
	- Marketplace.getItemQuantity(uint256) (src/core/Marketplace.sol#486-488)
	- Marketplace.getItemSeller(uint256) (src/core/Marketplace.sol#494-496)
	- Marketplace.getItemType(uint256) (src/core/Marketplace.sol#498-500)
	- Marketplace.isListed(uint256) (src/core/Marketplace.sol#48-54)
	- Marketplace.listItem(string,string,string,uint256,uint256,ItemType,string,address,uint256) (src/core/Marketplace.sol#144-199)
	- Marketplace.updateItem(uint256,string,string,string,uint256,uint256,string) (src/core/Marketplace.sol#201-238)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-1
INFO:Detectors:
Marketplace.orderItem(uint256,uint256) (src/core/Marketplace.sol#261-297) contains a tautology or contradiction:
	- item.quantity - quantity < 0 (src/core/Marketplace.sol#263)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#tautology-or-contradiction
INFO:Detectors:
StdCheatsSafe.readEIP1559ScriptArtifact(string).artifact (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#232) is a local variable never initialized
StdCheatsSafe.rawToConvertedEIPTx1559(StdCheatsSafe.RawTx1559).transaction (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#252) is a local variable never initialized
StdCheatsSafe.rawToConvertedReceipt(StdCheatsSafe.RawReceipt).receipt (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#320) is a local variable never initialized
StdCheatsSafe.rawToConvertedEIP1559Detail(StdCheatsSafe.RawTx1559Detail).txDetail (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#268) is a local variable never initialized
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#uninitialized-local-variables
INFO:Detectors:
stdStorageSafe.find(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#32-105) ignores return value by (reads) = vm.accesses(address(who)) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#50)
StdCheatsSafe.isFork() (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#428-432) ignores return value by vm.activeFork() (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#429-431)
MarketplaceTest.setUp() (test/Marketplace.t.sol#27-69) ignores return value by tom.approve(address(marketplace),maxValue) (test/Marketplace.t.sol#42)
MarketplaceTest.setUp() (test/Marketplace.t.sol#27-69) ignores return value by mockUsdt.approve(address(marketplace),maxValue) (test/Marketplace.t.sol#58)
MarketplaceTest.setUp() (test/Marketplace.t.sol#27-69) ignores return value by mockUsdt.approve(address(escrow),maxValue) (test/Marketplace.t.sol#60)
MarketplaceTest.setUp() (test/Marketplace.t.sol#27-69) ignores return value by mockUsdt.approve(address(marketplace),maxValue) (test/Marketplace.t.sol#62)
MarketplaceTest.testlistItem() (test/Marketplace.t.sol#92-107) ignores return value by tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#96)
MarketplaceTest.testlistNftItem() (test/Marketplace.t.sol#109-125) ignores return value by tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#113)
MarketplaceTest.testupdateItem() (test/Marketplace.t.sol#163-184) ignores return value by tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#167)
MarketplaceTest.testOrderPhysicalItem() (test/Marketplace.t.sol#186-215) ignores return value by (reward) = escrow.getOrder(orderIds[0]) (test/Marketplace.t.sol#199)
MarketplaceTest.testOrderNftItem() (test/Marketplace.t.sol#217-248) ignores return value by (reward) = escrow.getOrder(orderIds[0]) (test/Marketplace.t.sol#233)
MarketplaceTest.createListing(ItemType) (test/Marketplace.t.sol#127-161) ignores return value by tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
MarketplaceTest.createListing(ItemType) (test/Marketplace.t.sol#127-161) ignores return value by tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300) ignores return value by (reward) = escrow.getOrder(orderIds[0]) (test/Marketplace.t.sol#265)
MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300) ignores return value by (reward_scope_5) = escrow.getOrder(orderIds_scope_2[0]) (test/Marketplace.t.sol#290)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-return
INFO:Detectors:
VmSafe.addr(uint256).addr (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#39) shadows:
	- VmSafe.addr(uint256) (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#39) (function)
VmSafe.rememberKey(uint256).addr (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#166) shadows:
	- VmSafe.addr(uint256) (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#39) (function)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#local-variable-shadowing
INFO:Detectors:
Modifier StdCheatsSafe.skipWhenForking() (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#434-438) does not always execute _; or revertModifier StdCheatsSafe.skipWhenNotForking() (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#440-444) does not always execute _; or revertReference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-modifier
INFO:Detectors:
Marketplace.orderItem(uint256,uint256) (src/core/Marketplace.sol#261-297) has external calls inside a loop: token.balanceOf(msg.sender) < item.price * quantity (src/core/Marketplace.sol#266)
Marketplace.orderItem(uint256,uint256) (src/core/Marketplace.sol#261-297) has external calls inside a loop: orderId = escrow.lockFunds(item.seller,msg.sender,itemId,item.price * quantity,quantity,rewards) (src/core/Marketplace.sol#275)
Marketplace.orderItem(uint256,uint256) (src/core/Marketplace.sol#261-297) has external calls inside a loop: escrow.releaseFunds(orderId) (src/core/Marketplace.sol#288)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation/#calls-inside-a-loop
INFO:Detectors:
Reentrancy in Marketplace.cancelOrder(uint256) (src/core/Marketplace.sol#364-377):
	External calls:
	- escrow.refundFunds(orderId) (src/core/Marketplace.sol#370)
	State variables written after the call(s):
	- item.quantity += quantity (src/core/Marketplace.sol#372)
Reentrancy in Marketplace.confirmDelivery(uint256) (src/core/Marketplace.sol#314-325):
	External calls:
	- escrow.releaseFunds(orderId) (src/core/Marketplace.sol#320)
	State variables written after the call(s):
	- users[buyer].spentAmount += totalPaid (src/core/Marketplace.sol#321)
Reentrancy in MarketplaceTest.createListing(ItemType) (test/Marketplace.t.sol#127-161):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#129)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
	- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#139)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#139)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.createListing(ItemType) (test/Marketplace.t.sol#127-161):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#129)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
	- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#139)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tom.balanceOf(seller),440 * 10 ** 18) (test/Marketplace.t.sol#140)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(tom.balanceOf(seller),440 * 10 ** 18) (test/Marketplace.t.sol#140)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.createListing(ItemType) (test/Marketplace.t.sol#127-161):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#144)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
	- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
	- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
	- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
	- assertEq(postingFee_scope_0,30 * 10 ** 18) (test/Marketplace.t.sol#155)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(postingFee_scope_0,30 * 10 ** 18) (test/Marketplace.t.sol#155)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.createListing(ItemType) (test/Marketplace.t.sol#127-161):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#144)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
	- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
	- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
	- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
	- assertEq(postingFee_scope_0,30 * 10 ** 18) (test/Marketplace.t.sol#155)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tom.balanceOf(seller),470 * 10 ** 18) (test/Marketplace.t.sol#156)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(tom.balanceOf(seller),470 * 10 ** 18) (test/Marketplace.t.sol#156)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in DSTest.fail() (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#65-76):
	External calls:
	- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in Marketplace.listItem(string,string,string,uint256,uint256,ItemType,string,address,uint256) (src/core/Marketplace.sol#144-199):
	External calls:
	- nft.safeTransferFrom(msg.sender,address(escrow),nftTokenId) (src/core/Marketplace.sol#171)
	- Tom(address(tom)).burnFrom(msg.sender,postingFee) (src/core/Marketplace.sol#176)
	State variables written after the call(s):
	- items[itemId] = newItem (src/core/Marketplace.sol#194)
Reentrancy in StdCheatsSafe.noGasMetering() (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#446-465):
	External calls:
	- vm.pauseGasMetering() (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#447)
	State variables written after the call(s):
	- gasMeteringOff = true (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#456)
	- gasMeteringOff = false (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#462)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
	State variables written after the call(s):
	- orderId = orderIds[0] (test/Marketplace.t.sol#260)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
	- assertEq(quantity,1) (test/Marketplace.t.sol#268)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(quantity,1) (test/Marketplace.t.sol#268)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
	- assertEq(quantity,1) (test/Marketplace.t.sol#268)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#269)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#269)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
	- assertEq(quantity,1) (test/Marketplace.t.sol#268)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#269)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#270)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#270)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
	- assertEq(quantity,1) (test/Marketplace.t.sol#268)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#269)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#270)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#271)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#271)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
	- assertEq(quantity,1) (test/Marketplace.t.sol#268)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#269)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#270)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#271)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(address(escrow)),30 * 10 ** 18 + 50 * 10 ** 18) (test/Marketplace.t.sol#272)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(mockUsdt.balanceOf(address(escrow)),30 * 10 ** 18 + 50 * 10 ** 18) (test/Marketplace.t.sol#272)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#275)
	- orderIds_scope_2 = marketplace.orderCart(itemsIds_scope_0,quantities_scope_1) (test/Marketplace.t.sol#285)
	- assertEq(quantity_scope_4,0) (test/Marketplace.t.sol#293)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(quantity_scope_4,0) (test/Marketplace.t.sol#293)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#275)
	- orderIds_scope_2 = marketplace.orderCart(itemsIds_scope_0,quantities_scope_1) (test/Marketplace.t.sol#285)
	- assertEq(quantity_scope_4,0) (test/Marketplace.t.sol#293)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds_scope_2[0]),4) (test/Marketplace.t.sol#294)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(marketplace.getOrderState(orderIds_scope_2[0]),4) (test/Marketplace.t.sol#294)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#275)
	- orderIds_scope_2 = marketplace.orderCart(itemsIds_scope_0,quantities_scope_1) (test/Marketplace.t.sol#285)
	- assertEq(quantity_scope_4,0) (test/Marketplace.t.sol#293)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds_scope_2[0]),4) (test/Marketplace.t.sol#294)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward_scope_5,((postingFeeBefore * quantities_scope_1[0])) * 70 / 100) (test/Marketplace.t.sol#295)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(reward_scope_5,((postingFeeBefore * quantities_scope_1[0])) * 70 / 100) (test/Marketplace.t.sol#295)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#275)
	- orderIds_scope_2 = marketplace.orderCart(itemsIds_scope_0,quantities_scope_1) (test/Marketplace.t.sol#285)
	- assertEq(quantity_scope_4,0) (test/Marketplace.t.sol#293)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds_scope_2[0]),4) (test/Marketplace.t.sol#294)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward_scope_5,((postingFeeBefore * quantities_scope_1[0])) * 70 / 100) (test/Marketplace.t.sol#295)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(nft.ownerOf(1),buyer) (test/Marketplace.t.sol#296)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(nft.ownerOf(1),buyer) (test/Marketplace.t.sol#296)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in Marketplace.resolveDispute(uint256,uint256) (src/core/Marketplace.sol#349-362):
	External calls:
	- escrow.resolveDispute(orderId,buyerAward,i_arbiter,i_arbiterFee) (src/core/Marketplace.sol#354)
	State variables written after the call(s):
	- users[buyer].spentAmount += totalPaid - buyerAward (src/core/Marketplace.sol#359)
Reentrancy in MarketplaceTest.setUp() (test/Marketplace.t.sol#27-69):
	External calls:
	- owner = makeAddr(Owner) (test/Marketplace.t.sol#28)
		- vm.label(addr,name) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#406)
	- buyer = makeAddr(buyer) (test/Marketplace.t.sol#29)
		- vm.label(addr,name) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#406)
	State variables written after the call(s):
	- buyer = makeAddr(buyer) (test/Marketplace.t.sol#29)
Reentrancy in MarketplaceTest.setUp() (test/Marketplace.t.sol#27-69):
	External calls:
	- owner = makeAddr(Owner) (test/Marketplace.t.sol#28)
		- vm.label(addr,name) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#406)
	- buyer = makeAddr(buyer) (test/Marketplace.t.sol#29)
		- vm.label(addr,name) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#406)
	- seller = makeAddr(seller) (test/Marketplace.t.sol#30)
		- vm.label(addr,name) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#406)
	State variables written after the call(s):
	- marketplace = new Marketplace(address(mockUsdt),18) (test/Marketplace.t.sol#35)
	- mockUsdt = new MockERC20() (test/Marketplace.t.sol#31)
	- nft = new MockERC721() (test/Marketplace.t.sol#32)
	- seller = makeAddr(seller) (test/Marketplace.t.sol#30)
	- tom = new Tom() (test/Marketplace.t.sol#36)
Reentrancy in MarketplaceTest.setUp() (test/Marketplace.t.sol#27-69):
	External calls:
	- owner = makeAddr(Owner) (test/Marketplace.t.sol#28)
		- vm.label(addr,name) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#406)
	- buyer = makeAddr(buyer) (test/Marketplace.t.sol#29)
		- vm.label(addr,name) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#406)
	- seller = makeAddr(seller) (test/Marketplace.t.sol#30)
		- vm.label(addr,name) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#406)
	- tom.grantRole(PAUSER_ROLE,address(marketplace)) (test/Marketplace.t.sol#37)
	- tom.grantRole(MINTER_ROLE,address(marketplace)) (test/Marketplace.t.sol#38)
	- tom.grantRole(BURNER_ROLE,address(marketplace)) (test/Marketplace.t.sol#39)
	- tom.grantRole(DEFAULT_ADMIN_ROLE,owner) (test/Marketplace.t.sol#40)
	- tom.approve(address(marketplace),maxValue) (test/Marketplace.t.sol#42)
	State variables written after the call(s):
	- escrow = new Escrow(address(marketplace)) (test/Marketplace.t.sol#45)
Reentrancy in MarketplaceTest.testBuyToken() (test/Marketplace.t.sol#81-90):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#82)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#84)
	- assertEq(mockUsdt.balanceOf(address(escrow)),50 * 10 ** 18) (test/Marketplace.t.sol#86)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(mockUsdt.balanceOf(address(escrow)),50 * 10 ** 18) (test/Marketplace.t.sol#86)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testBuyToken() (test/Marketplace.t.sol#81-90):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#82)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#84)
	- assertEq(mockUsdt.balanceOf(address(escrow)),50 * 10 ** 18) (test/Marketplace.t.sol#86)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tom.balanceOf(seller),500 * 10 ** 18) (test/Marketplace.t.sol#87)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(tom.balanceOf(seller),500 * 10 ** 18) (test/Marketplace.t.sol#87)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testDeliverySent() (test/Marketplace.t.sol#302-309):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#303)
	- marketplace.deliverySent(orderId) (test/Marketplace.t.sol#305)
	- assertEq(marketplace.getOrderState(orderId),3) (test/Marketplace.t.sol#306)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	- orderItem(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
		- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
		- vm.stopPrank() (test/Marketplace.t.sol#273)
		- vm.startPrank(buyer) (test/Marketplace.t.sol#275)
		- orderIds_scope_2 = marketplace.orderCart(itemsIds_scope_0,quantities_scope_1) (test/Marketplace.t.sol#285)
		- vm.stopPrank() (test/Marketplace.t.sol#297)
	State variables written after the call(s):
	- assertEq(marketplace.getOrderState(orderId),3) (test/Marketplace.t.sol#306)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testDeliverySent() (test/Marketplace.t.sol#302-309):
	External calls:
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	- orderItem(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
		- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
		- vm.stopPrank() (test/Marketplace.t.sol#273)
		- vm.startPrank(buyer) (test/Marketplace.t.sol#275)
		- orderIds_scope_2 = marketplace.orderCart(itemsIds_scope_0,quantities_scope_1) (test/Marketplace.t.sol#285)
		- vm.stopPrank() (test/Marketplace.t.sol#297)
	State variables written after the call(s):
	- orderItem(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
	- orderItem(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
		- orderId = orderIds[0] (test/Marketplace.t.sol#260)
Reentrancy in MarketplaceTest.testOrderNftItem() (test/Marketplace.t.sol#217-248):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#218)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#228)
	- assertEq(quantity,0) (test/Marketplace.t.sol#236)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.NFT) (test/Marketplace.t.sol#217)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	State variables written after the call(s):
	- assertEq(quantity,0) (test/Marketplace.t.sol#236)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testOrderNftItem() (test/Marketplace.t.sol#217-248):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#218)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#228)
	- assertEq(quantity,0) (test/Marketplace.t.sol#236)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),4) (test/Marketplace.t.sol#237)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.NFT) (test/Marketplace.t.sol#217)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	State variables written after the call(s):
	- assertEq(marketplace.getOrderState(orderIds[0]),4) (test/Marketplace.t.sol#237)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testOrderNftItem() (test/Marketplace.t.sol#217-248):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#218)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#228)
	- assertEq(quantity,0) (test/Marketplace.t.sol#236)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),4) (test/Marketplace.t.sol#237)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward,((postingFeeBefore * quantities[0])) * 70 / 100) (test/Marketplace.t.sol#238)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.NFT) (test/Marketplace.t.sol#217)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	State variables written after the call(s):
	- assertEq(reward,((postingFeeBefore * quantities[0])) * 70 / 100) (test/Marketplace.t.sol#238)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testOrderNftItem() (test/Marketplace.t.sol#217-248):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#218)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#228)
	- assertEq(quantity,0) (test/Marketplace.t.sol#236)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),4) (test/Marketplace.t.sol#237)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward,((postingFeeBefore * quantities[0])) * 70 / 100) (test/Marketplace.t.sol#238)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(nft.ownerOf(1),buyer) (test/Marketplace.t.sol#239)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.NFT) (test/Marketplace.t.sol#217)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	State variables written after the call(s):
	- assertEq(nft.ownerOf(1),buyer) (test/Marketplace.t.sol#239)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testOrderPhysicalItem() (test/Marketplace.t.sol#186-215):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#187)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#194)
	- assertEq(quantity,1) (test/Marketplace.t.sol#202)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#186)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	State variables written after the call(s):
	- assertEq(quantity,1) (test/Marketplace.t.sol#202)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testOrderPhysicalItem() (test/Marketplace.t.sol#186-215):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#187)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#194)
	- assertEq(quantity,1) (test/Marketplace.t.sol#202)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#203)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#186)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	State variables written after the call(s):
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#203)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testOrderPhysicalItem() (test/Marketplace.t.sol#186-215):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#187)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#194)
	- assertEq(quantity,1) (test/Marketplace.t.sol#202)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#203)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#204)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#186)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	State variables written after the call(s):
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#204)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testOrderPhysicalItem() (test/Marketplace.t.sol#186-215):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#187)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#194)
	- assertEq(quantity,1) (test/Marketplace.t.sol#202)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#203)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#204)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#205)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#186)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	State variables written after the call(s):
	- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#205)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testOrderPhysicalItem() (test/Marketplace.t.sol#186-215):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#187)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#194)
	- assertEq(quantity,1) (test/Marketplace.t.sol#202)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#203)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#204)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#205)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(address(escrow)),30 * 10 ** 18 + 50 * 10 ** 18) (test/Marketplace.t.sol#206)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#186)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	State variables written after the call(s):
	- assertEq(mockUsdt.balanceOf(address(escrow)),30 * 10 ** 18 + 50 * 10 ** 18) (test/Marketplace.t.sol#206)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testlistItem() (test/Marketplace.t.sol#92-107):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#93)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#95)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#96)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#98-100)
	- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#103)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#103)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testlistItem() (test/Marketplace.t.sol#92-107):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#93)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#95)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#96)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#98-100)
	- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#103)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tom.balanceOf(seller),440 * 10 ** 18) (test/Marketplace.t.sol#104)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(tom.balanceOf(seller),440 * 10 ** 18) (test/Marketplace.t.sol#104)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testlistNftItem() (test/Marketplace.t.sol#109-125):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#110)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#112)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#113)
	- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#114)
	- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#116-118)
	- assertEq(postingFee,30 * 10 ** 18) (test/Marketplace.t.sol#121)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(postingFee,30 * 10 ** 18) (test/Marketplace.t.sol#121)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testlistNftItem() (test/Marketplace.t.sol#109-125):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#110)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#112)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#113)
	- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#114)
	- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#116-118)
	- assertEq(postingFee,30 * 10 ** 18) (test/Marketplace.t.sol#121)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tom.balanceOf(seller),470 * 10 ** 18) (test/Marketplace.t.sol#122)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(tom.balanceOf(seller),470 * 10 ** 18) (test/Marketplace.t.sol#122)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testupdateItem() (test/Marketplace.t.sol#163-184):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#164)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#166)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#167)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#169-171)
	- marketplace.updateItem(0,PS5,Link/Img.png,PS5 in good shape,16 * 10 ** 18,2,) (test/Marketplace.t.sol#175)
	- assertEq(postingFeeAfter,32 * 10 ** 18) (test/Marketplace.t.sol#179)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(postingFeeAfter,32 * 10 ** 18) (test/Marketplace.t.sol#179)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testupdateItem() (test/Marketplace.t.sol#163-184):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#164)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#166)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#167)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#169-171)
	- marketplace.updateItem(0,PS5,Link/Img.png,PS5 in good shape,16 * 10 ** 18,2,) (test/Marketplace.t.sol#175)
	- assertEq(postingFeeAfter,32 * 10 ** 18) (test/Marketplace.t.sol#179)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tomBalanceAfter,tomBalanceBefore + postingFeeBefore - postingFeeAfter) (test/Marketplace.t.sol#180)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(tomBalanceAfter,tomBalanceBefore + postingFeeBefore - postingFeeAfter) (test/Marketplace.t.sol#180)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reentrancy in MarketplaceTest.testupdateItem() (test/Marketplace.t.sol#163-184):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#164)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#166)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#167)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#169-171)
	- marketplace.updateItem(0,PS5,Link/Img.png,PS5 in good shape,16 * 10 ** 18,2,) (test/Marketplace.t.sol#175)
	- assertEq(postingFeeAfter,32 * 10 ** 18) (test/Marketplace.t.sol#179)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tomBalanceAfter,tomBalanceBefore + postingFeeBefore - postingFeeAfter) (test/Marketplace.t.sol#180)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tom.balanceOf(seller),468 * 10 ** 18) (test/Marketplace.t.sol#181)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	State variables written after the call(s):
	- assertEq(tom.balanceOf(seller),468 * 10 ** 18) (test/Marketplace.t.sol#181)
		- _failed = true (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#75)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-2
INFO:Detectors:
Reentrancy in Marketplace.buyTOM(uint256) (src/core/Marketplace.sol#130-136):
	External calls:
	- token.safeTransferFrom(msg.sender,address(escrow),tokenAmount) (src/core/Marketplace.sol#132)
	- Tom(address(tom)).mint(msg.sender,tomAmount) (src/core/Marketplace.sol#133)
	Event emitted after the call(s):
	- Events.TokenBought(msg.sender,tomAmount) (src/core/Marketplace.sol#135)
Reentrancy in Marketplace.cancelListing(uint256) (src/core/Marketplace.sol#246-251):
	External calls:
	- escrow.cancelNftListing(itemId) (src/core/Marketplace.sol#248)
	Event emitted after the call(s):
	- Events.ItemCanceled(msg.sender,itemId) (src/core/Marketplace.sol#250)
Reentrancy in MarketplaceTest.createListing(ItemType) (test/Marketplace.t.sol#127-161):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#129)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
	- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#139)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#139)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#139)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#139)
Reentrancy in MarketplaceTest.createListing(ItemType) (test/Marketplace.t.sol#127-161):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#129)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
	- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#139)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tom.balanceOf(seller),440 * 10 ** 18) (test/Marketplace.t.sol#140)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(tom.balanceOf(seller),440 * 10 ** 18) (test/Marketplace.t.sol#140)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(tom.balanceOf(seller),440 * 10 ** 18) (test/Marketplace.t.sol#140)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(tom.balanceOf(seller),440 * 10 ** 18) (test/Marketplace.t.sol#140)
Reentrancy in MarketplaceTest.createListing(ItemType) (test/Marketplace.t.sol#127-161):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#144)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
	- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
	- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
	- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
	- assertEq(postingFee_scope_0,30 * 10 ** 18) (test/Marketplace.t.sol#155)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(postingFee_scope_0,30 * 10 ** 18) (test/Marketplace.t.sol#155)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(postingFee_scope_0,30 * 10 ** 18) (test/Marketplace.t.sol#155)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(postingFee_scope_0,30 * 10 ** 18) (test/Marketplace.t.sol#155)
Reentrancy in MarketplaceTest.createListing(ItemType) (test/Marketplace.t.sol#127-161):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#144)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
	- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
	- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
	- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
	- assertEq(postingFee_scope_0,30 * 10 ** 18) (test/Marketplace.t.sol#155)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tom.balanceOf(seller),470 * 10 ** 18) (test/Marketplace.t.sol#156)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(tom.balanceOf(seller),470 * 10 ** 18) (test/Marketplace.t.sol#156)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(tom.balanceOf(seller),470 * 10 ** 18) (test/Marketplace.t.sol#156)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(tom.balanceOf(seller),470 * 10 ** 18) (test/Marketplace.t.sol#156)
Reentrancy in stdStorageSafe.find(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#32-105):
	External calls:
	- vm.record() (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#43)
	- (reads) = vm.accesses(address(who)) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#50)
	Event emitted after the call(s):
	- SlotFound(who,fsig,keccak256(bytes)(abi.encodePacked(ins,field_depth)),uint256(reads[0])) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#62)
	- WARNING_UninitedSlot(who,uint256(reads[0])) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#54)
Reentrancy in stdStorageSafe.find(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#32-105):
	External calls:
	- vm.record() (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#43)
	- (reads) = vm.accesses(address(who)) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#50)
	- vm.store(who,reads[i],bytes32(7)) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#72)
	- vm.store(who,reads[i],prev) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#88)
	Event emitted after the call(s):
	- SlotFound(who,fsig,keccak256(bytes)(abi.encodePacked(ins,field_depth)),uint256(reads[i])) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#82)
	- WARNING_UninitedSlot(who,uint256(reads[i])) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#69)
Reentrancy in Marketplace.listItem(string,string,string,uint256,uint256,ItemType,string,address,uint256) (src/core/Marketplace.sol#144-199):
	External calls:
	- nft.safeTransferFrom(msg.sender,address(escrow),nftTokenId) (src/core/Marketplace.sol#171)
	- Tom(address(tom)).burnFrom(msg.sender,postingFee) (src/core/Marketplace.sol#176)
	Event emitted after the call(s):
	- Events.ItemListed(msg.sender,itemId,itemType,postingFee) (src/core/Marketplace.sol#198)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
	- assertEq(quantity,1) (test/Marketplace.t.sol#268)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(quantity,1) (test/Marketplace.t.sol#268)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(quantity,1) (test/Marketplace.t.sol#268)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(quantity,1) (test/Marketplace.t.sol#268)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
	- assertEq(quantity,1) (test/Marketplace.t.sol#268)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#269)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#269)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#269)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#269)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
	- assertEq(quantity,1) (test/Marketplace.t.sol#268)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#269)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#270)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#270)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#270)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#270)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
	- assertEq(quantity,1) (test/Marketplace.t.sol#268)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#269)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#270)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#271)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#271)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#271)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#271)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
	- assertEq(quantity,1) (test/Marketplace.t.sol#268)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#269)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#270)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#271)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(address(escrow)),30 * 10 ** 18 + 50 * 10 ** 18) (test/Marketplace.t.sol#272)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(mockUsdt.balanceOf(address(escrow)),30 * 10 ** 18 + 50 * 10 ** 18) (test/Marketplace.t.sol#272)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(mockUsdt.balanceOf(address(escrow)),30 * 10 ** 18 + 50 * 10 ** 18) (test/Marketplace.t.sol#272)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(mockUsdt.balanceOf(address(escrow)),30 * 10 ** 18 + 50 * 10 ** 18) (test/Marketplace.t.sol#272)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#275)
	- orderIds_scope_2 = marketplace.orderCart(itemsIds_scope_0,quantities_scope_1) (test/Marketplace.t.sol#285)
	- assertEq(quantity_scope_4,0) (test/Marketplace.t.sol#293)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(quantity_scope_4,0) (test/Marketplace.t.sol#293)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(quantity_scope_4,0) (test/Marketplace.t.sol#293)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(quantity_scope_4,0) (test/Marketplace.t.sol#293)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#275)
	- orderIds_scope_2 = marketplace.orderCart(itemsIds_scope_0,quantities_scope_1) (test/Marketplace.t.sol#285)
	- assertEq(quantity_scope_4,0) (test/Marketplace.t.sol#293)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds_scope_2[0]),4) (test/Marketplace.t.sol#294)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(marketplace.getOrderState(orderIds_scope_2[0]),4) (test/Marketplace.t.sol#294)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(marketplace.getOrderState(orderIds_scope_2[0]),4) (test/Marketplace.t.sol#294)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(marketplace.getOrderState(orderIds_scope_2[0]),4) (test/Marketplace.t.sol#294)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#275)
	- orderIds_scope_2 = marketplace.orderCart(itemsIds_scope_0,quantities_scope_1) (test/Marketplace.t.sol#285)
	- assertEq(quantity_scope_4,0) (test/Marketplace.t.sol#293)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds_scope_2[0]),4) (test/Marketplace.t.sol#294)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward_scope_5,((postingFeeBefore * quantities_scope_1[0])) * 70 / 100) (test/Marketplace.t.sol#295)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(reward_scope_5,((postingFeeBefore * quantities_scope_1[0])) * 70 / 100) (test/Marketplace.t.sol#295)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(reward_scope_5,((postingFeeBefore * quantities_scope_1[0])) * 70 / 100) (test/Marketplace.t.sol#295)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(reward_scope_5,((postingFeeBefore * quantities_scope_1[0])) * 70 / 100) (test/Marketplace.t.sol#295)
Reentrancy in MarketplaceTest.orderItem(ItemType) (test/Marketplace.t.sol#250-300):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#275)
	- orderIds_scope_2 = marketplace.orderCart(itemsIds_scope_0,quantities_scope_1) (test/Marketplace.t.sol#285)
	- assertEq(quantity_scope_4,0) (test/Marketplace.t.sol#293)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds_scope_2[0]),4) (test/Marketplace.t.sol#294)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward_scope_5,((postingFeeBefore * quantities_scope_1[0])) * 70 / 100) (test/Marketplace.t.sol#295)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(nft.ownerOf(1),buyer) (test/Marketplace.t.sol#296)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [address]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#109)
		- assertEq(nft.ownerOf(1),buyer) (test/Marketplace.t.sol#296)
	- log_named_address(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#110)
		- assertEq(nft.ownerOf(1),buyer) (test/Marketplace.t.sol#296)
	- log_named_address(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#111)
		- assertEq(nft.ownerOf(1),buyer) (test/Marketplace.t.sol#296)
Reentrancy in Marketplace.resolveDispute(uint256,uint256) (src/core/Marketplace.sol#349-362):
	External calls:
	- escrow.resolveDispute(orderId,buyerAward,i_arbiter,i_arbiterFee) (src/core/Marketplace.sol#354)
	Event emitted after the call(s):
	- Events.OrderSent(seller,buyer,orderId,itemId,totalPaid,quantity,rewards,OrderState.DISPUTED) (src/core/Marketplace.sol#361)
Reentrancy in MarketplaceTest.testBuyToken() (test/Marketplace.t.sol#81-90):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#82)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#84)
	- assertEq(mockUsdt.balanceOf(address(escrow)),50 * 10 ** 18) (test/Marketplace.t.sol#86)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(mockUsdt.balanceOf(address(escrow)),50 * 10 ** 18) (test/Marketplace.t.sol#86)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(mockUsdt.balanceOf(address(escrow)),50 * 10 ** 18) (test/Marketplace.t.sol#86)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(mockUsdt.balanceOf(address(escrow)),50 * 10 ** 18) (test/Marketplace.t.sol#86)
Reentrancy in MarketplaceTest.testBuyToken() (test/Marketplace.t.sol#81-90):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#82)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#84)
	- assertEq(mockUsdt.balanceOf(address(escrow)),50 * 10 ** 18) (test/Marketplace.t.sol#86)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tom.balanceOf(seller),500 * 10 ** 18) (test/Marketplace.t.sol#87)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(tom.balanceOf(seller),500 * 10 ** 18) (test/Marketplace.t.sol#87)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(tom.balanceOf(seller),500 * 10 ** 18) (test/Marketplace.t.sol#87)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(tom.balanceOf(seller),500 * 10 ** 18) (test/Marketplace.t.sol#87)
Reentrancy in MarketplaceTest.testDeliverySent() (test/Marketplace.t.sol#302-309):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#303)
	- marketplace.deliverySent(orderId) (test/Marketplace.t.sol#305)
	- assertEq(marketplace.getOrderState(orderId),3) (test/Marketplace.t.sol#306)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	- orderItem(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
		- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
		- vm.stopPrank() (test/Marketplace.t.sol#273)
		- vm.startPrank(buyer) (test/Marketplace.t.sol#275)
		- orderIds_scope_2 = marketplace.orderCart(itemsIds_scope_0,quantities_scope_1) (test/Marketplace.t.sol#285)
		- vm.stopPrank() (test/Marketplace.t.sol#297)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(marketplace.getOrderState(orderId),3) (test/Marketplace.t.sol#306)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(marketplace.getOrderState(orderId),3) (test/Marketplace.t.sol#306)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(marketplace.getOrderState(orderId),3) (test/Marketplace.t.sol#306)
Reentrancy in MarketplaceTest.testDeliverySent() (test/Marketplace.t.sol#302-309):
	External calls:
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	- orderItem(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
		- vm.startPrank(buyer) (test/Marketplace.t.sol#252)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#259)
		- vm.stopPrank() (test/Marketplace.t.sol#273)
		- vm.startPrank(buyer) (test/Marketplace.t.sol#275)
		- orderIds_scope_2 = marketplace.orderCart(itemsIds_scope_0,quantities_scope_1) (test/Marketplace.t.sol#285)
		- vm.stopPrank() (test/Marketplace.t.sol#297)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [address]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#109)
		- orderItem(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- orderItem(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
	- log_named_address(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#110)
		- orderItem(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
	- log_named_address(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#111)
		- orderItem(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- orderItem(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- orderItem(ItemType.PHYSICAL) (test/Marketplace.t.sol#302)
Reentrancy in MarketplaceTest.testOrderNftItem() (test/Marketplace.t.sol#217-248):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#218)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#228)
	- assertEq(quantity,0) (test/Marketplace.t.sol#236)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.NFT) (test/Marketplace.t.sol#217)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(quantity,0) (test/Marketplace.t.sol#236)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(quantity,0) (test/Marketplace.t.sol#236)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(quantity,0) (test/Marketplace.t.sol#236)
Reentrancy in MarketplaceTest.testOrderNftItem() (test/Marketplace.t.sol#217-248):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#218)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#228)
	- assertEq(quantity,0) (test/Marketplace.t.sol#236)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),4) (test/Marketplace.t.sol#237)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.NFT) (test/Marketplace.t.sol#217)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(marketplace.getOrderState(orderIds[0]),4) (test/Marketplace.t.sol#237)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(marketplace.getOrderState(orderIds[0]),4) (test/Marketplace.t.sol#237)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(marketplace.getOrderState(orderIds[0]),4) (test/Marketplace.t.sol#237)
Reentrancy in MarketplaceTest.testOrderNftItem() (test/Marketplace.t.sol#217-248):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#218)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#228)
	- assertEq(quantity,0) (test/Marketplace.t.sol#236)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),4) (test/Marketplace.t.sol#237)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward,((postingFeeBefore * quantities[0])) * 70 / 100) (test/Marketplace.t.sol#238)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.NFT) (test/Marketplace.t.sol#217)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(reward,((postingFeeBefore * quantities[0])) * 70 / 100) (test/Marketplace.t.sol#238)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(reward,((postingFeeBefore * quantities[0])) * 70 / 100) (test/Marketplace.t.sol#238)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(reward,((postingFeeBefore * quantities[0])) * 70 / 100) (test/Marketplace.t.sol#238)
Reentrancy in MarketplaceTest.testOrderNftItem() (test/Marketplace.t.sol#217-248):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#218)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#228)
	- assertEq(quantity,0) (test/Marketplace.t.sol#236)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),4) (test/Marketplace.t.sol#237)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward,((postingFeeBefore * quantities[0])) * 70 / 100) (test/Marketplace.t.sol#238)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(nft.ownerOf(1),buyer) (test/Marketplace.t.sol#239)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.NFT) (test/Marketplace.t.sol#217)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [address]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#109)
		- assertEq(nft.ownerOf(1),buyer) (test/Marketplace.t.sol#239)
	- log_named_address(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#110)
		- assertEq(nft.ownerOf(1),buyer) (test/Marketplace.t.sol#239)
	- log_named_address(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#111)
		- assertEq(nft.ownerOf(1),buyer) (test/Marketplace.t.sol#239)
Reentrancy in MarketplaceTest.testOrderPhysicalItem() (test/Marketplace.t.sol#186-215):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#187)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#194)
	- assertEq(quantity,1) (test/Marketplace.t.sol#202)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#186)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(quantity,1) (test/Marketplace.t.sol#202)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(quantity,1) (test/Marketplace.t.sol#202)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(quantity,1) (test/Marketplace.t.sol#202)
Reentrancy in MarketplaceTest.testOrderPhysicalItem() (test/Marketplace.t.sol#186-215):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#187)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#194)
	- assertEq(quantity,1) (test/Marketplace.t.sol#202)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#203)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#186)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#203)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#203)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#203)
Reentrancy in MarketplaceTest.testOrderPhysicalItem() (test/Marketplace.t.sol#186-215):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#187)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#194)
	- assertEq(quantity,1) (test/Marketplace.t.sol#202)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#203)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#204)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#186)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#204)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#204)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#204)
Reentrancy in MarketplaceTest.testOrderPhysicalItem() (test/Marketplace.t.sol#186-215):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#187)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#194)
	- assertEq(quantity,1) (test/Marketplace.t.sol#202)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#203)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#204)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#205)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#186)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#205)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#205)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#205)
Reentrancy in MarketplaceTest.testOrderPhysicalItem() (test/Marketplace.t.sol#186-215):
	External calls:
	- vm.startPrank(buyer) (test/Marketplace.t.sol#187)
	- orderIds = marketplace.orderCart(itemsIds,quantities) (test/Marketplace.t.sol#194)
	- assertEq(quantity,1) (test/Marketplace.t.sol#202)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(buyer),(1000 - 30) * 10 ** 18) (test/Marketplace.t.sol#203)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(marketplace.getOrderState(orderIds[0]),0) (test/Marketplace.t.sol#204)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(reward,((postingFee * quantities[0]) / quantity) * 70 / 100) (test/Marketplace.t.sol#205)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(mockUsdt.balanceOf(address(escrow)),30 * 10 ** 18 + 50 * 10 ** 18) (test/Marketplace.t.sol#206)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- createListing(ItemType.PHYSICAL) (test/Marketplace.t.sol#186)
		- vm.startPrank(seller) (test/Marketplace.t.sol#129)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#131)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
		- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#132)
		- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#134-136)
		- vm.stopPrank() (test/Marketplace.t.sol#142)
		- vm.startPrank(seller) (test/Marketplace.t.sol#144)
		- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#146)
		- tom.approve(address(marketplace),30 * 10 ** 18) (test/Marketplace.t.sol#147)
		- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#148)
		- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#150-152)
		- vm.stopPrank() (test/Marketplace.t.sol#158)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(mockUsdt.balanceOf(address(escrow)),30 * 10 ** 18 + 50 * 10 ** 18) (test/Marketplace.t.sol#206)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(mockUsdt.balanceOf(address(escrow)),30 * 10 ** 18 + 50 * 10 ** 18) (test/Marketplace.t.sol#206)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(mockUsdt.balanceOf(address(escrow)),30 * 10 ** 18 + 50 * 10 ** 18) (test/Marketplace.t.sol#206)
Reentrancy in MarketplaceTest.testlistItem() (test/Marketplace.t.sol#92-107):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#93)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#95)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#96)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#98-100)
	- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#103)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#103)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#103)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#103)
Reentrancy in MarketplaceTest.testlistItem() (test/Marketplace.t.sol#92-107):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#93)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#95)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#96)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#98-100)
	- assertEq(postingFee,60 * 10 ** 18) (test/Marketplace.t.sol#103)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tom.balanceOf(seller),440 * 10 ** 18) (test/Marketplace.t.sol#104)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(tom.balanceOf(seller),440 * 10 ** 18) (test/Marketplace.t.sol#104)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(tom.balanceOf(seller),440 * 10 ** 18) (test/Marketplace.t.sol#104)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(tom.balanceOf(seller),440 * 10 ** 18) (test/Marketplace.t.sol#104)
Reentrancy in MarketplaceTest.testlistNftItem() (test/Marketplace.t.sol#109-125):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#110)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#112)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#113)
	- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#114)
	- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#116-118)
	- assertEq(postingFee,30 * 10 ** 18) (test/Marketplace.t.sol#121)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(postingFee,30 * 10 ** 18) (test/Marketplace.t.sol#121)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(postingFee,30 * 10 ** 18) (test/Marketplace.t.sol#121)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(postingFee,30 * 10 ** 18) (test/Marketplace.t.sol#121)
Reentrancy in MarketplaceTest.testlistNftItem() (test/Marketplace.t.sol#109-125):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#110)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#112)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#113)
	- nft.approve(address(marketplace),1) (test/Marketplace.t.sol#114)
	- marketplace.listItem(DOGE_NFT,NFT.xyz,WHO LET THE DOGE OUT ???,30 * 10 ** 18,1,ItemType.NFT,,address(nft),1) (test/Marketplace.t.sol#116-118)
	- assertEq(postingFee,30 * 10 ** 18) (test/Marketplace.t.sol#121)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tom.balanceOf(seller),470 * 10 ** 18) (test/Marketplace.t.sol#122)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(tom.balanceOf(seller),470 * 10 ** 18) (test/Marketplace.t.sol#122)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(tom.balanceOf(seller),470 * 10 ** 18) (test/Marketplace.t.sol#122)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(tom.balanceOf(seller),470 * 10 ** 18) (test/Marketplace.t.sol#122)
Reentrancy in MarketplaceTest.testupdateItem() (test/Marketplace.t.sol#163-184):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#164)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#166)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#167)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#169-171)
	- marketplace.updateItem(0,PS5,Link/Img.png,PS5 in good shape,16 * 10 ** 18,2,) (test/Marketplace.t.sol#175)
	- assertEq(postingFeeAfter,32 * 10 ** 18) (test/Marketplace.t.sol#179)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(postingFeeAfter,32 * 10 ** 18) (test/Marketplace.t.sol#179)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(postingFeeAfter,32 * 10 ** 18) (test/Marketplace.t.sol#179)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(postingFeeAfter,32 * 10 ** 18) (test/Marketplace.t.sol#179)
Reentrancy in MarketplaceTest.testupdateItem() (test/Marketplace.t.sol#163-184):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#164)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#166)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#167)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#169-171)
	- marketplace.updateItem(0,PS5,Link/Img.png,PS5 in good shape,16 * 10 ** 18,2,) (test/Marketplace.t.sol#175)
	- assertEq(postingFeeAfter,32 * 10 ** 18) (test/Marketplace.t.sol#179)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tomBalanceAfter,tomBalanceBefore + postingFeeBefore - postingFeeAfter) (test/Marketplace.t.sol#180)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(tomBalanceAfter,tomBalanceBefore + postingFeeBefore - postingFeeAfter) (test/Marketplace.t.sol#180)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(tomBalanceAfter,tomBalanceBefore + postingFeeBefore - postingFeeAfter) (test/Marketplace.t.sol#180)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(tomBalanceAfter,tomBalanceBefore + postingFeeBefore - postingFeeAfter) (test/Marketplace.t.sol#180)
Reentrancy in MarketplaceTest.testupdateItem() (test/Marketplace.t.sol#163-184):
	External calls:
	- vm.startPrank(seller) (test/Marketplace.t.sol#164)
	- marketplace.buyTOM(50 * 10 ** 18) (test/Marketplace.t.sol#166)
	- tom.approve(address(marketplace),60 * 10 ** 18) (test/Marketplace.t.sol#167)
	- marketplace.listItem(PS5,Link/Img.png,PS5 in good shape,30 * 10 ** 18,2,ItemType.PHYSICAL,,address(0),0) (test/Marketplace.t.sol#169-171)
	- marketplace.updateItem(0,PS5,Link/Img.png,PS5 in good shape,16 * 10 ** 18,2,) (test/Marketplace.t.sol#175)
	- assertEq(postingFeeAfter,32 * 10 ** 18) (test/Marketplace.t.sol#179)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tomBalanceAfter,tomBalanceBefore + postingFeeBefore - postingFeeAfter) (test/Marketplace.t.sol#180)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	- assertEq(tom.balanceOf(seller),468 * 10 ** 18) (test/Marketplace.t.sol#181)
		- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
	Event emitted after the call(s):
	- log(Error: a == b not satisfied [uint]) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#159)
		- assertEq(tom.balanceOf(seller),468 * 10 ** 18) (test/Marketplace.t.sol#181)
	- log_named_uint(  Expected,b) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#160)
		- assertEq(tom.balanceOf(seller),468 * 10 ** 18) (test/Marketplace.t.sol#181)
	- log_named_uint(    Actual,a) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#161)
		- assertEq(tom.balanceOf(seller),468 * 10 ** 18) (test/Marketplace.t.sol#181)
Reentrancy in Marketplace.updateItem(uint256,string,string,string,uint256,uint256,string) (src/core/Marketplace.sol#201-238):
	External calls:
	- Tom(address(tom)).burnFrom(msg.sender,newPostingFee - oldPostingFee) (src/core/Marketplace.sol#218)
	- Tom(address(tom)).mint(msg.sender,oldPostingFee - newPostingFee) (src/core/Marketplace.sol#220)
	Event emitted after the call(s):
	- Events.ItemUpdated(msg.sender,itemId,newPostingFee) (src/core/Marketplace.sol#237)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3
INFO:Detectors:
ERC721._checkOnERC721Received(address,address,uint256,bytes) (lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol#399-421) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol#413-415)
Address._revert(bytes,string) (lib/openzeppelin-contracts/contracts/utils/Address.sol#231-243) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/contracts/utils/Address.sol#236-239)
Strings.toString(uint256) (lib/openzeppelin-contracts/contracts/utils/Strings.sol#19-39) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/contracts/utils/Strings.sol#25-27)
	- INLINE ASM (lib/openzeppelin-contracts/contracts/utils/Strings.sol#31-33)
Math.mulDiv(uint256,uint256,uint256) (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#55-134) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#62-66)
	- INLINE ASM (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#85-92)
	- INLINE ASM (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#99-108)
DSTest.hasHEVMContext() (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#78-84) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#80-82)
StdChains.getChainWithUpdatedRpcUrl(string,StdChains.Chain) (lib/openzeppelin-contracts/lib/forge-std/src/StdChains.sol#123-145) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/lib/forge-std/src/StdChains.sol#138-140)
StdCheatsSafe.assumeNoPrecompiles(address) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#191-198) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#194-196)
StdCheatsSafe.deployCode(string,bytes) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#361-369) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#364-366)
StdCheatsSafe.deployCode(string) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#371-379) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#374-376)
StdCheatsSafe.deployCode(string,bytes,uint256) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#382-390) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#385-387)
StdCheatsSafe.deployCode(string,uint256) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#392-400) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#395-397)
stdStorageSafe.flatten(bytes32[]) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#181-192) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#186-188)
stdStorage.checked_write(StdStorage,bool) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#242-249) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#245-247)
stdStorage.flatten(bytes32[]) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#315-326) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#320-322)
console._sendLogPayload(bytes) (lib/openzeppelin-contracts/lib/forge-std/src/console.sol#7-15) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/lib/forge-std/src/console.sol#11-14)
console2._sendLogPayload(bytes) (lib/openzeppelin-contracts/lib/forge-std/src/console2.sol#12-20) uses assembly
	- INLINE ASM (lib/openzeppelin-contracts/lib/forge-std/src/console2.sol#16-19)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage
INFO:Detectors:
Different versions of Solidity are used:
	- Version used: ['>=0.4.22<0.9.0', '>=0.5.0', '>=0.6.0<0.9.0', '>=0.6.2<0.9.0', '^0.8.0', '^0.8.1', '^0.8.13', '^0.8.17', '^0.8.18']
	- >=0.4.22<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/console.sol#2)
	- >=0.4.22<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/console2.sol#2)
	- >=0.5.0 (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#16)
	- >=0.6.0<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdJson.sol#2)
	- >=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/Base.sol#2)
	- >=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdAssertions.sol#2)
	- >=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdChains.sol#2)
	- >=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#2)
	- >=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdError.sol#3)
	- >=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdMath.sol#2)
	- >=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#2)
	- >=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#2)
	- >=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/Test.sol#2)
	- >=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#2)
	- ABIEncoderV2 (lib/openzeppelin-contracts/lib/forge-std/src/StdChains.sol#4)
	- ABIEncoderV2 (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#4)
	- ABIEncoderV2 (lib/openzeppelin-contracts/lib/forge-std/src/StdJson.sol#4)
	- ABIEncoderV2 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/access/AccessControl.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/access/IAccessControl.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/access/Ownable.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/security/Pausable.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/security/ReentrancyGuard.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/utils/Context.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/utils/Counters.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/utils/Strings.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#4)
	- ^0.8.0 (lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol#4)
	- ^0.8.1 (lib/openzeppelin-contracts/contracts/utils/Address.sol#4)
	- ^0.8.13 (test/Mocks/MockERC20.sol#2)
	- ^0.8.13 (test/Mocks/MockERC721.sol#2)
	- ^0.8.17 (src/libraries/DataTypes.sol#2)
	- ^0.8.17 (src/libraries/Errors.sol#2)
	- ^0.8.17 (src/libraries/Events.sol#2)
	- ^0.8.17 (src/tokens/Tom.sol#2)
	- ^0.8.17 (test/Marketplace.t.sol#2)
	- ^0.8.18 (src/core/Escrow.sol#2)
	- ^0.8.18 (src/core/Marketplace.sol#2)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#different-pragma-directives-are-used
INFO:Detectors:
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/access/AccessControl.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/access/IAccessControl.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/access/Ownable.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/security/Pausable.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/security/ReentrancyGuard.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol#4) allows old versions
Pragma version^0.8.1 (lib/openzeppelin-contracts/contracts/utils/Address.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/utils/Context.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/utils/Counters.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/utils/Strings.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/utils/math/Math.sol#4) allows old versions
Pragma version^0.8.0 (lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol#4) allows old versions
Pragma version>=0.5.0 (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#16) allows old versions
Pragma version>=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/Base.sol#2) is too complex
Pragma version>=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdAssertions.sol#2) is too complex
Pragma version>=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdChains.sol#2) is too complex
Pragma version>=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#2) is too complex
Pragma version>=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdError.sol#3) is too complex
Pragma version>=0.6.0<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdJson.sol#2) is too complex
Pragma version>=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdMath.sol#2) is too complex
Pragma version>=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#2) is too complex
Pragma version>=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#2) is too complex
Pragma version>=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/Test.sol#2) is too complex
Pragma version>=0.6.2<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#2) is too complex
Pragma version>=0.4.22<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/console.sol#2) is too complex
Pragma version>=0.4.22<0.9.0 (lib/openzeppelin-contracts/lib/forge-std/src/console2.sol#2) is too complex
Pragma version^0.8.17 (src/libraries/DataTypes.sol#2) allows old versions
Pragma version^0.8.17 (src/libraries/Errors.sol#2) allows old versions
Pragma version^0.8.17 (src/libraries/Events.sol#2) allows old versions
Pragma version^0.8.17 (src/tokens/Tom.sol#2) allows old versions
Pragma version^0.8.17 (test/Marketplace.t.sol#2) allows old versions
Pragma version^0.8.13 (test/Mocks/MockERC20.sol#2) allows old versions
Pragma version^0.8.13 (test/Mocks/MockERC721.sol#2) allows old versions
solc-0.8.21 is not recommended for deployment
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-versions-of-solidity
INFO:Detectors:
Low level call in SafeERC20._callOptionalReturnBool(IERC20,bytes) (lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol#134-142):
	- (success,returndata) = address(token).call(data) (lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol#139)
Low level call in Address.sendValue(address,uint256) (lib/openzeppelin-contracts/contracts/utils/Address.sol#64-69):
	- (success) = recipient.call{value: amount}() (lib/openzeppelin-contracts/contracts/utils/Address.sol#67)
Low level call in Address.functionCallWithValue(address,bytes,uint256,string) (lib/openzeppelin-contracts/contracts/utils/Address.sol#128-137):
	- (success,returndata) = target.call{value: value}(data) (lib/openzeppelin-contracts/contracts/utils/Address.sol#135)
Low level call in Address.functionStaticCall(address,bytes,string) (lib/openzeppelin-contracts/contracts/utils/Address.sol#155-162):
	- (success,returndata) = target.staticcall(data) (lib/openzeppelin-contracts/contracts/utils/Address.sol#160)
Low level call in Address.functionDelegateCall(address,bytes,string) (lib/openzeppelin-contracts/contracts/utils/Address.sol#180-187):
	- (success,returndata) = target.delegatecall(data) (lib/openzeppelin-contracts/contracts/utils/Address.sol#185)
Low level call in DSTest.failed() (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#47-63):
	- (retdata) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(load(address,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed)))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#53-58)
Low level call in DSTest.fail() (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#65-76):
	- (status) = HEVM_ADDRESS.call(abi.encodePacked(bytes4(keccak256(bytes)(store(address,bytes32,bytes32))),abi.encode(HEVM_ADDRESS,bytes32(failed),bytes32(uint256(0x01))))) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#67-72)
Low level call in StdCheats.deal(address,address,uint256,bool) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#545-564):
	- (balData) = token.call(abi.encodeWithSelector(0x70a08231,to)) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#547)
	- (totSupData) = token.call(abi.encodeWithSelector(0x18160ddd)) (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#555)
Low level call in stdStorageSafe.find(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#32-105):
	- (rdat) = who.staticcall(cald) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#46)
	- (success,rdat_scope_0) = who.staticcall(cald) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#76)
Low level call in stdStorage.checked_write(StdStorage,bytes32) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#251-281):
	- (rdat) = who.staticcall(cald) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#265)
Low level call in StdUtils.console2_log(string,uint256) (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#114-117):
	- (status) = address(CONSOLE2_ADDRESS).staticcall(abi.encodeWithSignature(log(string,uint256),p0,p1)) (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#115)
Low level call in StdUtils.console2_log(string,string) (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#119-122):
	- (status) = address(CONSOLE2_ADDRESS).staticcall(abi.encodeWithSignature(log(string,string),p0,p1)) (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#120)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
INFO:Detectors:
Function IERC20Permit.DOMAIN_SEPARATOR() (lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol#59) is not in mixedCase
Function ERC721.__unsafe_increaseBalance(address,uint256) (lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol#463-465) is not in mixedCase
Event DSTest.log(string) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#19) is not in CapWords
Event DSTest.logs(bytes) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#20) is not in CapWords
Event DSTest.log_address(address) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#22) is not in CapWords
Event DSTest.log_bytes32(bytes32) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#23) is not in CapWords
Event DSTest.log_int(int256) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#24) is not in CapWords
Event DSTest.log_uint(uint256) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#25) is not in CapWords
Event DSTest.log_bytes(bytes) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#26) is not in CapWords
Event DSTest.log_string(string) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#27) is not in CapWords
Event DSTest.log_named_address(string,address) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#29) is not in CapWords
Event DSTest.log_named_bytes32(string,bytes32) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#30) is not in CapWords
Event DSTest.log_named_decimal_int(string,int256,uint256) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#31) is not in CapWords
Event DSTest.log_named_decimal_uint(string,uint256,uint256) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#32) is not in CapWords
Event DSTest.log_named_int(string,int256) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#33) is not in CapWords
Event DSTest.log_named_uint(string,uint256) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#34) is not in CapWords
Event DSTest.log_named_bytes(string,bytes) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#35) is not in CapWords
Event DSTest.log_named_string(string,string) (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#36) is not in CapWords
Variable DSTest.IS_TEST (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#38) is not in mixedCase
Modifier DSTest.logs_gas() (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#86-91) is not in mixedCase
Constant CommonBase.vm (lib/openzeppelin-contracts/lib/forge-std/src/Base.sol#20) is not in UPPER_CASE_WITH_UNDERSCORES
Constant ScriptBase.vmSafe (lib/openzeppelin-contracts/lib/forge-std/src/Base.sol#30) is not in UPPER_CASE_WITH_UNDERSCORES
Event StdAssertions.log_array(uint256[]) (lib/openzeppelin-contracts/lib/forge-std/src/StdAssertions.sol#8) is not in CapWords
Event StdAssertions.log_array(int256[]) (lib/openzeppelin-contracts/lib/forge-std/src/StdAssertions.sol#9) is not in CapWords
Event StdAssertions.log_array(address[]) (lib/openzeppelin-contracts/lib/forge-std/src/StdAssertions.sol#10) is not in CapWords
Event StdAssertions.log_named_array(string,uint256[]) (lib/openzeppelin-contracts/lib/forge-std/src/StdAssertions.sol#11) is not in CapWords
Event StdAssertions.log_named_array(string,int256[]) (lib/openzeppelin-contracts/lib/forge-std/src/StdAssertions.sol#12) is not in CapWords
Event StdAssertions.log_named_array(string,address[]) (lib/openzeppelin-contracts/lib/forge-std/src/StdAssertions.sol#13) is not in CapWords
Constant StdChains.vm (lib/openzeppelin-contracts/lib/forge-std/src/StdChains.sol#38) is not in UPPER_CASE_WITH_UNDERSCORES
Constant StdCheatsSafe.vm (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#10) is not in UPPER_CASE_WITH_UNDERSCORES
Constant StdCheats.vm (lib/openzeppelin-contracts/lib/forge-std/src/StdCheats.sol#473) is not in UPPER_CASE_WITH_UNDERSCORES
Contract stdError (lib/openzeppelin-contracts/lib/forge-std/src/StdError.sol#5-15) is not in CapWords
Contract stdJson (lib/openzeppelin-contracts/lib/forge-std/src/StdJson.sol#29-179) is not in CapWords
Constant stdJson.vm (lib/openzeppelin-contracts/lib/forge-std/src/StdJson.sol#30) is not in UPPER_CASE_WITH_UNDERSCORES
Contract stdMath (lib/openzeppelin-contracts/lib/forge-std/src/StdMath.sol#4-43) is not in CapWords
Contract stdStorageSafe (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#16-193) is not in CapWords
Event stdStorageSafe.WARNING_UninitedSlot(address,uint256) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#18) is not in CapWords
Parameter stdStorageSafe.target(StdStorage,address)._target (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#107) is not in mixedCase
Parameter stdStorageSafe.sig(StdStorage,bytes4)._sig (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#112) is not in mixedCase
Parameter stdStorageSafe.sig(StdStorage,string)._sig (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#117) is not in mixedCase
Function stdStorageSafe.with_key(StdStorage,address) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#122-125) is not in mixedCase
Function stdStorageSafe.with_key(StdStorage,uint256) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#127-130) is not in mixedCase
Function stdStorageSafe.with_key(StdStorage,bytes32) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#132-135) is not in mixedCase
Parameter stdStorageSafe.depth(StdStorage,uint256)._depth (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#137) is not in mixedCase
Function stdStorageSafe.read_bytes32(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#148-150) is not in mixedCase
Function stdStorageSafe.read_bool(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#152-157) is not in mixedCase
Function stdStorageSafe.read_address(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#159-161) is not in mixedCase
Function stdStorageSafe.read_uint(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#163-165) is not in mixedCase
Function stdStorageSafe.read_int(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#167-169) is not in mixedCase
Constant stdStorageSafe.vm (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#20) is not in UPPER_CASE_WITH_UNDERSCORES
Contract stdStorage (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#195-327) is not in CapWords
Parameter stdStorage.target(StdStorage,address)._target (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#206) is not in mixedCase
Parameter stdStorage.sig(StdStorage,bytes4)._sig (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#210) is not in mixedCase
Parameter stdStorage.sig(StdStorage,string)._sig (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#214) is not in mixedCase
Function stdStorage.with_key(StdStorage,address) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#218-220) is not in mixedCase
Function stdStorage.with_key(StdStorage,uint256) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#222-224) is not in mixedCase
Function stdStorage.with_key(StdStorage,bytes32) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#226-228) is not in mixedCase
Parameter stdStorage.depth(StdStorage,uint256)._depth (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#230) is not in mixedCase
Function stdStorage.checked_write(StdStorage,address) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#234-236) is not in mixedCase
Function stdStorage.checked_write(StdStorage,uint256) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#238-240) is not in mixedCase
Function stdStorage.checked_write(StdStorage,bool) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#242-249) is not in mixedCase
Function stdStorage.checked_write(StdStorage,bytes32) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#251-281) is not in mixedCase
Function stdStorage.read_bytes32(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#283-285) is not in mixedCase
Function stdStorage.read_bool(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#287-289) is not in mixedCase
Function stdStorage.read_address(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#291-293) is not in mixedCase
Function stdStorage.read_uint(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#295-297) is not in mixedCase
Function stdStorage.read_int(StdStorage) (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#299-301) is not in mixedCase
Constant stdStorage.vm (lib/openzeppelin-contracts/lib/forge-std/src/StdStorage.sol#196) is not in UPPER_CASE_WITH_UNDERSCORES
Function StdUtils.console2_log(string,uint256) (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#114-117) is not in mixedCase
Function StdUtils.console2_log(string,string) (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#119-122) is not in mixedCase
Constant StdUtils.vm (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#8) is not in UPPER_CASE_WITH_UNDERSCORES
Contract console (lib/openzeppelin-contracts/lib/forge-std/src/console.sol#4-1534) is not in CapWords
Contract console2 (lib/openzeppelin-contracts/lib/forge-std/src/console2.sol#9-1547) is not in CapWords
Parameter Escrow.resolveDispute(uint256,uint256,address,uint256)._orderId (src/core/Escrow.sol#77) is not in mixedCase
Parameter Escrow.resolveDispute(uint256,uint256,address,uint256)._buyerAward (src/core/Escrow.sol#77) is not in mixedCase
Parameter Escrow.resolveDispute(uint256,uint256,address,uint256)._arbiter (src/core/Escrow.sol#77) is not in mixedCase
Parameter Escrow.resolveDispute(uint256,uint256,address,uint256)._arbiterFee (src/core/Escrow.sol#77) is not in mixedCase
Parameter Marketplace.activate(address,address)._tomAddress (src/core/Marketplace.sol#108) is not in mixedCase
Parameter Marketplace.activate(address,address)._escrowAddress (src/core/Marketplace.sol#108) is not in mixedCase
Variable Marketplace.i_arbiter (src/core/Marketplace.sol#36) is not in mixedCase
Variable Marketplace.i_arbiterFee (src/core/Marketplace.sol#37) is not in mixedCase
Event Events.userRegistered(address) (src/libraries/Events.sol#8) is not in CapWords
Parameter Tom.burn(uint256)._amount (src/tokens/Tom.sol#50) is not in mixedCase
Parameter MockERC20.mint(address,uint256)._to (test/Mocks/MockERC20.sol#8) is not in mixedCase
Parameter MockERC20.mint(address,uint256)._amount (test/Mocks/MockERC20.sol#8) is not in mixedCase
Parameter MockERC721.safeMint(address,uint256)._to (test/Mocks/MockERC721.sol#8) is not in mixedCase
Parameter MockERC721.safeMint(address,uint256)._tokenId (test/Mocks/MockERC721.sol#8) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Detectors:
Redundant expression "status (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#73)" inDSTest (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#18-469)
Redundant expression "status (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#116)" inStdUtils (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#7-123)
Redundant expression "status (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#121)" inStdUtils (lib/openzeppelin-contracts/lib/forge-std/src/StdUtils.sol#7-123)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#redundant-statements
INFO:Detectors:
Variable Vm.expectEmit(bool,bool,bool,bool).checkTopic1 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#312) is too similar to Vm.expectEmit(bool,bool,bool,bool,address).checkTopic2 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#313)
Variable Vm.expectEmit(bool,bool,bool,bool).checkTopic1 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#312) is too similar to Vm.expectEmit(bool,bool,bool,bool).checkTopic2 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#312)
Variable Vm.expectEmit(bool,bool,bool,bool,address).checkTopic1 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#313) is too similar to Vm.expectEmit(bool,bool,bool,bool,address).checkTopic2 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#313)
Variable Vm.expectEmit(bool,bool,bool,bool).checkTopic1 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#312) is too similar to Vm.expectEmit(bool,bool,bool,bool).checkTopic3 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#312)
Variable Vm.expectEmit(bool,bool,bool,bool,address).checkTopic1 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#313) is too similar to Vm.expectEmit(bool,bool,bool,bool,address).checkTopic3 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#313)
Variable Vm.expectEmit(bool,bool,bool,bool).checkTopic1 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#312) is too similar to Vm.expectEmit(bool,bool,bool,bool,address).checkTopic3 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#313)
Variable Vm.expectEmit(bool,bool,bool,bool,address).checkTopic1 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#313) is too similar to Vm.expectEmit(bool,bool,bool,bool).checkTopic2 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#312)
Variable Vm.expectEmit(bool,bool,bool,bool).checkTopic2 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#312) is too similar to Vm.expectEmit(bool,bool,bool,bool,address).checkTopic3 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#313)
Variable Vm.expectEmit(bool,bool,bool,bool,address).checkTopic2 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#313) is too similar to Vm.expectEmit(bool,bool,bool,bool,address).checkTopic3 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#313)
Variable Vm.expectEmit(bool,bool,bool,bool).checkTopic2 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#312) is too similar to Vm.expectEmit(bool,bool,bool,bool).checkTopic3 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#312)
Variable Vm.expectEmit(bool,bool,bool,bool,address).checkTopic1 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#313) is too similar to Vm.expectEmit(bool,bool,bool,bool).checkTopic3 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#312)
Variable Vm.expectEmit(bool,bool,bool,bool,address).checkTopic2 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#313) is too similar to Vm.expectEmit(bool,bool,bool,bool).checkTopic3 (lib/openzeppelin-contracts/lib/forge-std/src/Vm.sol#312)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#variable-names-too-similar
INFO:Detectors:
CommonBase.CONSOLE (lib/openzeppelin-contracts/lib/forge-std/src/Base.sol#11) is never used in MarketplaceTest (test/Marketplace.t.sol#10-355)
CommonBase.DEFAULT_SENDER (lib/openzeppelin-contracts/lib/forge-std/src/Base.sol#13) is never used in MarketplaceTest (test/Marketplace.t.sol#10-355)
CommonBase.DEFAULT_TEST_CONTRACT (lib/openzeppelin-contracts/lib/forge-std/src/Base.sol#15) is never used in MarketplaceTest (test/Marketplace.t.sol#10-355)
CommonBase.UINT256_MAX (lib/openzeppelin-contracts/lib/forge-std/src/Base.sol#17-18) is never used in MarketplaceTest (test/Marketplace.t.sol#10-355)
CommonBase.stdstore (lib/openzeppelin-contracts/lib/forge-std/src/Base.sol#21) is never used in MarketplaceTest (test/Marketplace.t.sol#10-355)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-state-variable
INFO:Detectors:
DSTest.IS_TEST (lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/test.sol#38) should be constant 
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#state-variables-that-could-be-declared-constant
INFO:Detectors:
Escrow.parentContract (src/core/Escrow.sol#18) should be immutable 
Escrow.token (src/core/Escrow.sol#16) should be immutable 
Marketplace.token (src/core/Marketplace.sol#41) should be immutable 
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#state-variables-that-could-be-declared-immutable
INFO:Slither:. analyzed (50 contracts with 88 detectors), 316 result(s) found
