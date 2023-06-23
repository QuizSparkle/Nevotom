// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import "forge-std/Script.sol";
import "forge-std/Test.sol";
import "../src/Marketplace.sol";

contract DeployMarketplace is Script {
    uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
    address deployerAddress = vm.envAddress("DEPLOYER_ADDRESS");

    address LINK = 0xfaFedb041c0DD4fA2Dc0d87a6B0979Ee6FA7af5F;

    Marketplace private marketplace;
    TOM private token;

    function run() public {
        IERC20 link = IERC20(LINK);

        vm.startBroadcast(deployerPrivateKey);

        marketplace = new Marketplace(address(link), 18);
        token = new TOM(address(marketplace));

        marketplace.activate(address(token));

        link.approve(address(marketplace), 10 * 10 ** 18);
        token.approve(address(marketplace), 10 * 10 ** 18);

        vm.stopBroadcast();
    }
}
