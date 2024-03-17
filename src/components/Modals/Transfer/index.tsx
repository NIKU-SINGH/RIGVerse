import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  donateGamerFn,
  donatePostFn,
  getPostsByCreatorFn,
  transferFromFn,
} from "@/lib/contractFuncationCall";
import { ethers } from "ethers";
import Loader from "@/components/Loader";
import { transferPost } from "@/lib/supabase";

interface DonateModalProps {
  onClose: () => void;
  id: number;
}

const TransferModal: React.FC<DonateModalProps> = ({ onClose, id }) => {
  const [address, setAddress] = useState("");
  const [loader, setLoader] = useState(false);
  const handleTransfer = async () => {
    setLoader(true);
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum,
      "any"
    );
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    // const id = await getPostsByCreatorFn(signer);
    await transferFromFn(signer, address, id);
    await transferPost(id, address);

    onClose();
    setLoader(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {loader && <Loader />}
      <div className="relative  bg-gray-900 p-8 rounded-lg shadow-lg">
        <div className="absolute top-0 right-0 pt-1 pr-1">
          <button
            onClick={onClose}
            className="text-white bg-red-400 rounded-full"
          >
            <X size={24} /> {/* Adjust the size as needed */}
          </button>
        </div>
        <h2 className="text-white text-2xl mb-4">Enter Address</h2>
        <Input
          className="w-96"
          type="string"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <div className="gap-2 w-full flex justify-center mt-5  items-center text-center text-gray-400 font-semibold">
          <Button onClick={() => handleTransfer()}>Donate</Button>
        </div>
      </div>
    </div>
  );
};

export default TransferModal;
