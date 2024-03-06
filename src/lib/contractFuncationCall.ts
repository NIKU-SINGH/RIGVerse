import { Signer, ethers } from "ethers";
import {
  POST_CONTRACT_ABI,
  POST_CONTRACT_ADDRESS,
  USER_CONTRACT_ABI,
  USER_CONTRACT_ADDRESS,
} from "./contract/constant";
import { Post } from "./supabase";

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

export const registerOnlyStudioFn = async (signer: Signer) => {
  try {
    const contract = new ethers.Contract(
      USER_CONTRACT_ADDRESS,
      USER_CONTRACT_ABI,
      signer
    );
    // Call a function of your contract
    const tx = await contract.registerOnlyStudio();
    await tx.wait();
    console.log(tx);
    // Handle the transaction response or receipt as needed
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};
export const registerWithStudioFn = async (
  signer: Signer,
  userName: string
) => {
  try {
    const contract = new ethers.Contract(
      USER_CONTRACT_ADDRESS,
      USER_CONTRACT_ABI,
      signer
    );
    // Call a function of your contract
    const tx = await contract.registerWithStudio(userName);
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

// export interface mintPostInterface {
//   title: string;
//   constent: string;
//   image: string;
//   advertise: boolean;
// }

export const mintPostFn = async (signer: Signer, res: Post) => {
  console.log(res);
  const { title, content, images } = res;
  try {
    const account = await signer.getAddress();
    const contract = new ethers.Contract(
      POST_CONTRACT_ADDRESS,
      POST_CONTRACT_ABI,
      signer
    );
    // Call a function of your contract
    const tx = await contract.mintPost(title, content, images, false);
    await tx.wait();
    console.log(tx);
    // Handle the transaction response or receipt as needed
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};
export const donateGamerFn = async (
  signer: Signer,
  address: string,
  amount: string
) => {
  try {
    const account = await signer.getAddress();
    const contract = new ethers.Contract(
      USER_CONTRACT_ADDRESS,
      USER_CONTRACT_ABI,
      signer
    );
    console.log("amount", amount);
    console.log("address", address);
    // Call a function of your contract
    const tx = await contract.donateGamer(
      address,
      ethers.utils.parseEther(amount)
    );

    await tx.wait();
    console.log(tx);
    // Handle the transaction response or receipt as needed
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};
export const donatePostFn = async (
  signer: Signer,
  id: number,
  amount: number
) => {
  try {
    const account = await signer.getAddress();
    const contract = new ethers.Contract(
      USER_CONTRACT_ADDRESS,
      USER_CONTRACT_ABI,
      signer
    );
    console.log("amount", amount);
    console.log("id", id);
    // Call a function of your contract
    const tx = await contract.donatePost(id, amount);

    await tx.wait();
    console.log(tx);
    // Handle the transaction response or receipt as needed
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};

export const transferFromFn = async (
  signer: Signer,
  to: string,
  id: number
) => {
  try {
    const account = await signer.getAddress();
    const contract = new ethers.Contract(
      POST_CONTRACT_ADDRESS,
      POST_CONTRACT_ABI,
      signer
    );
    console.log("to", to);
    console.log("id", id);
    // Call a function of your contract
    const tx = await contract.transferFrom(account, to, id);

    await tx.wait();
    console.log(tx);
    // Handle the transaction response or receipt as needed
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};

export const getPostsByCreatorFn = async (signer: Signer) => {
  try {
    const account = await signer.getAddress();
    const contract = new ethers.Contract(
      POST_CONTRACT_ADDRESS,
      POST_CONTRACT_ABI,
      signer
    );
    // Call a function of your contract
    const tx = await contract.getPostsByCreator(account);
    // await tx.wait();
    return tx[tx?.length - 1]?.toNumber();
    // Handle the transaction response or receipt as needed
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};
