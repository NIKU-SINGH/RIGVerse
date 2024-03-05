// VideoCallModal.tsx
import {
  Mic,
  Mic2,
  MicOff,
  PhoneMissed,
  Video,
  VideoIcon,
  VideoOff,
  VideotapeIcon,
  X,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { createToken } from "@/lib/huddle/Token";
import {
  useLocalAudio,
  useLocalVideo,
  usePeerIds,
  useRoom,
} from "@huddle01/react/hooks";
import RemotePeer from "@/lib/huddle/RemotePeer";
import { Button } from "@/components/ui/moving-border";

interface VideoCallModalProps {
  onClose: () => void;
}

const VideoCallModal: React.FC<VideoCallModalProps> = ({ onClose }) => {
  const [roomID, setRoomID] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);
  const { peerIds } = usePeerIds();
  const { stream, enableVideo, disableVideo, isVideoOn } = useLocalVideo();
  const {
    stream: audioStream,
    enableAudio,
    disableAudio,
    isAudioOn,
  } = useLocalAudio();

  const { leaveRoom } = useRoom({
    onJoin: () => {
      console.log("Joined the room");
    },
    onLeave: () => {
      console.log("Left the room");
    },
  });

  const handleLeave = async () => {
    leaveRoom();
    onClose();
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

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
        <div className="min-w-[700px] min-h-[400px] bg-gray-800 border-2 border-gray-500 rounded-xl overflow-hidden">
          {peerIds.map((peerId) => (
            <RemotePeer key={peerId} peerId={peerId} />
            // <div>{peerId}</div>
          ))}
        </div>
        <div className="relative aspect-w-16 aspect-h-9">
          {/* Video container */}
          {/* <div className="absolute inset-0 bg-black"> */}
          {/* {peerIds.map((peerId) => (
            <RemotePeer key={peerId} peerId={peerId} />
            // <div>{peerId}</div>
          ))} */}
          {/* </div> */}
          {/* Video will be displayed here */}
        </div>
        <div className="gap-2 w-full flex mt-2  items-center text-center text-gray-400 font-semibold">
          <button
            onClick={() => {
              isVideoOn ? disableVideo() : enableVideo();
            }}
            className="h-6 px-5 py-7 flex text-lg items-center justify-center text-white rounded w-full bg-green-600 hover:bg-green-700"
          >
            {isVideoOn ? (
              <div className="flex justify-center items-center gap-2">
                Video is on
                <VideoIcon />
              </div>
            ) : (
              <div className="flex justify-center items-center gap-2">
                Video in off
                <VideoOff />
              </div>
            )}
          </button>
          <button
            onClick={() => {
              isAudioOn ? disableAudio() : enableAudio();
            }}
            className="h-6 px-5 py-7 flex text-lg items-center justify-center text-white rounded w-full bg-blue-600 hover:bg-blue-700"
          >
            {isAudioOn ? (
              <div className="flex justify-center items-center gap-2">
                Mic is on
                <Mic />
              </div>
            ) : (
              <div className="flex justify-center items-center gap-2">
                Mic in off
                <MicOff />
              </div>
            )}
          </button>
          <button
            onClick={() => handleLeave()}
            className="h-6 px-5 py-7 flex text-lg items-center justify-center text-white rounded w-full bg-red-700 hover:bg-red-800"
          >
            Cancel
            <PhoneMissed />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCallModal;
