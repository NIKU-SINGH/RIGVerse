// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./PostNFT.sol";

contract GameSocialFi {

  mapping(address => string) public usernames;
  mapping(address => bool) public studios;

  PostNFT public postNFT;

  function setPostNFTContract(address nftContractAddress) public {
    postNFT = PostNFT(nftContractAddress);
  }

  function register(string memory username) public {
    usernames[msg.sender] = username;
  }

  function registerStudio() public {
    studios[msg.sender] = true;
  }

modifier onlyStudio() {
    require(studios[msg.sender], "Only studios can perform this action");
    _;
}
  function createPostWithAdvertisement(string memory content) public payable onlyStudio {
    postNFT.mintPost(msg.sender, content, true);
  }

  function donatePost(uint256 tokenId) public view {
    // Check if user owns the post (optional)
    require(postNFT.ownerOf(tokenId) != msg.sender, "Cannot like your own post");

  }

}