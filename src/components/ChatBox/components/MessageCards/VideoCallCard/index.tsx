import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRoom } from "@huddle01/react/hooks";
import { createToken } from "@/lib/huddle/Token";
import VideoCallModal from "@/components/Modals/Chat";
import Loader from "@/components/Loader";
interface IndexProps {
  message?: string;
  from?: string;
  to?: string;
}
const Index: React.FC<IndexProps> = ({ message, from, to }) => {
  //   console.log(message, from, to);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loader, setLoader] = useState<boolean>(false);

  const id: string = message?.replace("Room_id:", "") || "";

  const handleModalToggle = async () => {
    setIsModalOpen(!isModalOpen);
  };

  const { joinRoom, leaveRoom } = useRoom({
    onJoin: () => {
      console.log("Joined the room");
    },
    onLeave: () => {
      console.log("Left the room");
    },
  });
  const handleJoinRoom = async () => {
    setLoader(true);
    await joinRoom({ roomId: id, token: await createToken(id) });
    handleModalToggle();
    setLoader(false);
  };

  return (
    <div>
      {loader && <Loader />}
      <div className="mt-2 flex space-x-2 ">
        {isModalOpen && <VideoCallModal onClose={handleModalToggle} />}
        {/* User Avatar */}
        {/* <Avatar className="ml-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
        <div className="flex items-center border text-center text-sm rounded-lg p-1 px-4 my-2  mx-auto text-white whitespace-normal break-words overflow-hidden">
          {`Call Started by ${from?.slice(0, 5)}...${from?.slice(
            from.length - 5
          )} with Call ID <${message?.replace("Room_id:", "")}>`}
          <button
            onClick={() => handleJoinRoom()}
            className="bg-white text-gray-900 font-bold text-xs rounded p-1 ml-1 hover:bg-gray-200"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Index;
