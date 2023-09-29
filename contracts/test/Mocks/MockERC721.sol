// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC721} from "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";

contract MockERC721 is ERC721("MockERC721", "ERC721") {

    function safeMint(address _to, uint256 _tokenId) public {
        _safeMint(_to, _tokenId);
    }
}
