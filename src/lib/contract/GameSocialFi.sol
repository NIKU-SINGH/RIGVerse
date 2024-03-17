// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./PostNFT.sol";

contract GameSocialFi {
    struct Donation {
        address donor;
        uint256 amount;
    }

    mapping(address => string) public usernames;
    mapping(address => bool) public studios;
    mapping(uint256 => Donation[]) public postDonations;
    mapping(address => Donation[]) public gamerDonations;
    mapping(address => Donation[]) public chatDonations;
    
    PostNFT public postNFT;

    event DonationToPost(uint256 indexed postId, address donor, uint256 amount);
    event DonationToGamer(address indexed gamer, address donor, uint256 amount);
    event DonationToChat(address indexed chat, address donor, uint256 amount);

    error UserAlreadyRegistered();
    error OnlyStudiosAllowed();
    error CannotDonateToYourself();
    error InvalidDonationAmount();

    function setPostNFTContract(address nftContractAddress) public {
        postNFT = PostNFT(nftContractAddress);
    }

    function register(string calldata username) public {
        if (bytes(usernames[msg.sender]).length != 0) revert UserAlreadyRegistered();
        usernames[msg.sender] = username;
    }

    function registerWithStudio(string calldata username) public {
        if (bytes(usernames[msg.sender]).length != 0) revert UserAlreadyRegistered();
        usernames[msg.sender] = username;
        studios[msg.sender] = true;
    }

    function registerOnlyStudio() public {
        studios[msg.sender] = true;
    }

    modifier onlyStudio() {
        if (!studios[msg.sender]) revert OnlyStudiosAllowed();
        _;
    }

    function createPostWithAdvertisement(string calldata title, string calldata message, string calldata img) public payable onlyStudio {
        postNFT.mintPost(title, message, img, true);
    }

    function donatePost(uint256 postId, uint256 amount) public payable {
        if (postNFT.ownerOf(postId) == msg.sender || amount == 0) revert InvalidDonationAmount();
        postDonations[postId].push(Donation(msg.sender, amount));
        emit DonationToPost(postId, msg.sender, amount);
    }

    function donateGamer(address gamer, uint256 amount) public payable {
        if (gamer == msg.sender || amount == 0) revert CannotDonateToYourself();
        gamerDonations[gamer].push(Donation(msg.sender, amount));
        emit DonationToGamer(gamer, msg.sender, amount);
    }

    function donateInChat(address chat, uint256 amount) public payable {
        if (chat == msg.sender || amount == 0) revert CannotDonateToYourself();
        chatDonations[chat].push(Donation(msg.sender, amount));
        emit DonationToChat(chat, msg.sender, amount);
    }

    function getPostDonations(uint256 postId) public view returns (Donation[] memory) {
        return postDonations[postId];
    }
    
    function getGamerDonations(address gamer) public view returns (Donation[] memory) {
        return gamerDonations[gamer];
    }
    function getChatDonations(address chat) public view returns (Donation[] memory) {
        return chatDonations[chat];
    }

}