// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "forge-std/Script.sol";
import "forge-std/Test.sol";
import "../src/core/Marketplace.sol";

contract DeployMarketplace is Script {
    uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
    address deployerAddress = vm.envAddress("DEPLOYER_ADDRESS");

    address LINK = 0xfaFedb041c0DD4fA2Dc0d87a6B0979Ee6FA7af5F; //For testnet
    address USDT = 0x049d68029688eAbF473097a2fC38ef61633A3C7A; // For mainnet

    Marketplace private marketplace;
    Tom private tom;
    Escrow private escrow;
    address arbiter;
    uint256 arbiterFee = 5 * 10 ** 18;

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;
    uint256 public constant maxValue = type(uint256).max;

    function run() public {
        IERC20 usdt = IERC20(USDT);

        vm.startBroadcast(deployerPrivateKey);

        arbiter = deployerAddress;

        marketplace = new Marketplace(address(usdt), 18, arbiter, arbiterFee);
        tom = new Tom();
        tom.grantRole(PAUSER_ROLE, address(marketplace));
        tom.grantRole(MINTER_ROLE, address(marketplace));
        tom.grantRole(BURNER_ROLE, address(marketplace));
        tom.grantRole(DEFAULT_ADMIN_ROLE, deployerAddress);

        escrow = new Escrow(address(marketplace));

        marketplace.activate(address(tom), address(escrow));

        marketplace.transferOwnership(deployerAddress);

        // link.approve(address(marketplace), 100 * 10 ** 18);
        // link.approve(address(escrow), 100 * 10 ** 18);
        // tom.approve(address(marketplace), 100 * 10 ** 18);

        vm.stopBroadcast();
    }
}
