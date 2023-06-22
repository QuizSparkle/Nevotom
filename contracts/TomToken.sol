// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TomToken is ERC20 {
    constructor() ERC20("TomToken", "TOM") {
        _mint(msg.sender, 1000000 * (10 ** decimals())); //This mint 1,000,000 Tomtoken
    }
}
