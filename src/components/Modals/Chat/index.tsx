// VideoCallModal.tsx
import { X } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { createToken } from "@/lib/huddle/Token";
import { usePeerIds } from "@huddle01/react/hooks";
import RemotePeer from "@/lib/huddle/RemotePeer";

interface VideoCallModalProps {
  onClose: () => void;
}

const VideoCallModal: React.FC<VideoCallModalProps> = ({ onClose }) => {
  const [roomID, setRoomID] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);
  const { peerIds } = usePeerIds();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative  bg-gray-900 p-8 rounded-lg shadow-lg">
        <div className="absolute top-0 right-0 pt-1 pr-1">
          <button
            onClick={onClose}
            className="text-white bg-red-400 rounded-full"
          >
            <X size={24} /> {/* Adjust the size as needed */}
          </button>
        </div>
        <h2 className="text-white text-2xl mb-4">Video Call</h2>
        <div className="min-w-[50vw] min-h-[50vh] bg-gray-800 border-2 border-gray-500 rounded-xl"></div>
        <div className="relative aspect-w-16 aspect-h-9">
          {/* Video container */}
          <div className="absolute inset-0 bg-black">
            {peerIds.map((peerId) => (
              <RemotePeer key={peerId} peerId={peerId} />
              // <div>{peerId}</div>
            ))}
          </div>
          {/* Video will be displayed here */}
        </div>
        <div className="flex justify-center mt-4 gap-4 w-full">
          <button className="flex items-center justify-center w-36 h-10 bg-green-500 cursor-pointer hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl">
            Accept
          </button>
          <button className="flex items-center justify-center w-36 h-10 bg-red-500 cursor-pointer hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCallModal;
