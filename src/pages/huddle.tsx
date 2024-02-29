import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { createToken } from "@/lib/huddle/Token";
import {
  useRoom,
  useLocalVideo,
  useLocalAudio,
  usePeerIds,
} from "@huddle01/react/hooks";
import RemotePeer from "@/lib/huddle/RemotePeer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mic2, PhoneMissed } from "lucide-react";
const huddle = () => {
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

  const createRoom = async () => {
    try {
      const response = await axios.post(
        "https://api.huddle01.com/api/v1/create-room",
        {
          title: "Huddle01-Test",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
          },
        }
      );
      console.log("roomID : " + response.data.data.roomId);
      setRoomID(response.data.data.roomId);
      setToken(await createToken(response.data.data.roomId));

      // socket.emit("setroomId", { roomId: roomId });
      // Handle the response as needed
    } catch (error) {
      console.log(error);
    }
  };

  const { joinRoom, leaveRoom } = useRoom({
    onJoin: () => {
      console.log("Joined the room");
    },
    onLeave: () => {
      console.log("Left the room");
    },
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  console.log("peerids = " + peerIds);
  console.log("roomID = " + roomID);

  return (
    <div className="text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="my-2   p-2 flex flex-col justify-start items-center gap-2  hover:text-gray-200">
        <div className="w-full h-80 rounded-xl border-2 border-gray-800"></div>
        <div className="gap-2 w-full flex items-center text-center text-gray-400 font-semibold">
          <Button className="h-6 px-5 py-5 w-full bg-green-600 hover:bg-green-700">
            share
          </Button>
          <Button className="h-6 px-5 py-5 w-full">
            <Mic2 />
          </Button>
          <Button className="h-6 px-5 py-5 w-full bg-red-700 hover:bg-red-800">
            <PhoneMissed />
          </Button>
        </div>
      </div>
      <div className="menu">
        <div className="menu-query">
          {roomID && <div>{roomID}</div>}
          <button onClick={() => createRoom()}>Create Room</button>
        </div>
        <div className="menu-query">
          <input
            value={roomID}
            onChange={(e) => setRoomID(e.target.value)}
            placeholder="room Id ..."
          />
          <button
            onClick={async () => {
              joinRoom({ roomId: roomID, token: await createToken(roomID) });
            }}
          >
            Join Room
          </button>
        </div>
        <button onClick={() => leaveRoom()}>Leave Room</button>
        <div>
          {/* Webcam */}
          <button
            onClick={() => {
              isVideoOn ? disableVideo() : enableVideo();
            }}
          >
            Fetch and Produce Video Stream
          </button>

          {/* Mic */}
          <button
            onClick={() => {
              isAudioOn ? disableAudio() : enableAudio();
            }}
          >
            Fetch and Produce Audio Stream
          </button>
        </div>
      </div>
      {peerIds.map((peerId) => (
        <RemotePeer key={peerId} peerId={peerId} />
        // <div>{peerId}</div>
      ))}
      {isVideoOn && (
        <div className="w-[80%] h-[135px] rounded-lg bg-black my-2 overflow-hidden">
          <button
            onClick={async () => await disableVideo()}
            className="text-white absolute translate-x-[205px] z-10"
          >
            X
          </button>
          <video ref={videoRef} style={{ height: "100%" }} autoPlay></video>
        </div>
      )}
    </div>
  );
};

export default huddle;
