import { Signer, ethers } from "ethers";
import {
  POST_CONTRACT_ABI,
  POST_CONTRACT_ADDRESS,
  USER_CONTRACT_ABI,
  USER_CONTRACT_ADDRESS,
} from "./contract/constant";

export const registerUserFn = async (signer: Signer, userName: string) => {
  try {
    const contract = new ethers.Contract(
      USER_CONTRACT_ADDRESS,
      USER_CONTRACT_ABI,
      signer
    );
    // Call a function of your contract
    const tx = await contract.register(userName);
    await tx.wait();
    console.log(tx);
    // Handle the transaction response or receipt as needed
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};

export const registerStudioFn = async (signer: Signer) => {
  try {
    const contract = new ethers.Contract(
      USER_CONTRACT_ADDRESS,
      USER_CONTRACT_ABI,
      signer
    );
    // Call a function of your contract
    const tx = await contract.registerStudio();
    await tx.wait();
    console.log(tx);
    // Handle the transaction response or receipt as needed
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};
export const setPostNFTContractFn = async (signer: Signer) => {
  try {
    const contract = new ethers.Contract(
      USER_CONTRACT_ADDRESS,
      USER_CONTRACT_ABI,
      signer
    );
    // Call a function of your contract
    const tx = await contract.setPostNFTContract(POST_CONTRACT_ADDRESS);
    await tx.wait();
    console.log(tx);
    // Handle the transaction response or receipt as needed
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};

export const mintPostFn = async (signer: Signer) => {
  try {
    const account = await signer.getAddress();
    const contract = new ethers.Contract(
      POST_CONTRACT_ADDRESS,
      POST_CONTRACT_ABI,
      signer
    );
    // Call a function of your contract
    const tx = await contract.mintPost(account, "post content", true);
    await tx.wait();
    console.log(tx);
    // Handle the transaction response or receipt as needed
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};
