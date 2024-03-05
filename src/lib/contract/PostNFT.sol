// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract PostNFT is ERC721 {

  struct Post {
    address creator;
    string content;
    bool isAdvertisement;
  }

  mapping(uint256 => Post) public posts;

  uint256 private _currentTokenId = 1;

  event PostCreated(address creator, string username, uint256 tokenId, bool isAdvertisement);

  constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

  function mintPost(address creator, string memory content, bool isAdvertisement) public {
    uint256 newTokenId = _currentTokenId++;
    posts[newTokenId] = Post(creator, content, isAdvertisement);
    _mint(creator, newTokenId); // Mint the token to the creator
    emit PostCreated(creator, "", newTokenId, isAdvertisement); // Username omitted as it's not stored here
  }

  function getPost(uint256 tokenId) public view returns (Post memory) {
    require(ownerOf(tokenId) != address(0), "ERC721: token does not exist");
    return posts[tokenId];
}

function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        require(!posts[tokenId].isAdvertisement, "PostNFT: Advertisement posts cannot be transferred");
        super.transferFrom(from, to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) public override {
        require(!posts[tokenId].isAdvertisement, "PostNFT: Advertisement posts cannot be transferred");
        super.safeTransferFrom(from, to, tokenId, _data);
    }

}
