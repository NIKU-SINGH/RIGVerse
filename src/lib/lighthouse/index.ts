import lighthouse from "@lighthouse-web3/sdk";

interface UploadProgress {
  total?: number;
  uploaded?: number;
}
// const progressCallback = (progressData: UploadProgress): void => {
//   const percentageDone =
//     100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
//   console.log(percentageDone);
// };

export const uploadFile = async (file: File): Promise<string> => {
  console.log(file);
  console.log(process.env.NEXT_PUBLIC_LIGHTHOUSE);
  const output = await lighthouse.upload(
    file,
    process.env.NEXT_PUBLIC_LIGHTHOUSE || ""
  );

  console.log("File Status:", output);

  console.log(
    "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
  );

  return output.data.Hash;
};
