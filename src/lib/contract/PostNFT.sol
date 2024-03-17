// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract PostNFT is ERC721 {
    struct Post {
        string title;
        string message;
        string img;
        bool isAdvertisement;
    }

    mapping(uint256 => Post) public posts;
    mapping(address => uint256[]) private postsByCreator;

    uint256 private _currentTokenId = 1;

    error AdvertisementPostCannotBeTransferred();
    error TokenDoesNotExist();

    event PostCreated(address indexed creator, uint256 tokenId, bool isAdvertisement);

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function mintPost(string memory title, string memory message, string memory img, bool isAdvertisement) public {
        uint256 newTokenId = _currentTokenId;
        _currentTokenId++;

        posts[newTokenId] = Post(title, message, img, isAdvertisement);
        postsByCreator[msg.sender].push(newTokenId);

        _mint(msg.sender, newTokenId);
        emit PostCreated(msg.sender, newTokenId, isAdvertisement);
    }

    function getPostsByCreator(address creator) public view returns (uint256[] memory) {
        return postsByCreator[creator];
    }

    function transferFrom(address from, address to, uint256 tokenId) public override {
        if (posts[tokenId].isAdvertisement) revert AdvertisementPostCannotBeTransferred();
        super.transferFrom(from, to, tokenId);
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public override {
        if (posts[tokenId].isAdvertisement) revert AdvertisementPostCannotBeTransferred();
        super.safeTransferFrom(from, to, tokenId, _data);
    }

    function getPost(uint256 tokenId) public view returns (Post memory) {
        if (ownerOf(tokenId) == address(0)) revert TokenDoesNotExist();
        return posts[tokenId];
    }
}