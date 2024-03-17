import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Video } from "lucide-react";
import VideoCallModal from "@/components/Modals/Chat";
import { createRoom } from "@/lib/huddle";
import { insertMessage } from "@/lib/supabase";
import { useMoralis } from "react-moralis";
import Loader from "@/components/Loader";
import { useRoom } from "@huddle01/react/hooks";
import { createToken } from "@/lib/huddle/Token";

interface Temp {
  addr: string;
}

const Index: React.FC<Temp> = (addr) => {
  const { account } = useMoralis();

  const [loader, setLoader] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { joinRoom, leaveRoom } = useRoom({
    onJoin: () => {
      console.log("Joined the room");
    },
    onLeave: () => {
      console.log("Left the room");
    },
  });

  const handleModalToggle = async () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCreateRoom = async () => {
    setLoader(true);
    const id: string = await createRoom();
    if (account) {
      await insertMessage({
        to: addr?.addr || "addr2",
        from: account || "",
        message: `Room_id:${id}`,
      });
      setLoader(false);
      await joinRoom({ roomId: id, token: await createToken(id) });
      handleModalToggle();
    }
  };
  return (
    <div>
      {loader && <Loader />}
      <div className="w-full border-2 border-gray-800 bg-blue-500 text-gray-200 rounded-xl h-10 md:h-16 p-4 flex items-center mb-4 justify-between">
        {/* Profile photo and status */}
        <div className="flex items-center gap-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="-space-y-1">
            <div className="text-lg font-semibold tracking-tight">
              {addr?.addr}
            </div>
            <div className="text-xs font-light tracking-tight">Online</div>
          </div>
        </div>

        {/* Call and viceo caht */}
        <div className="px-2 text-lg font-semibold tracking-tight flex items-center">
          {/* <div className="mx-4 flex items-center gap-1 cursor-pointer" ><Phone /> Call</div> */}
          <div
            className="m-4 flex items-center gap-1 cursor-pointer"
            onClick={handleCreateRoom}
          >
            <Video /> Video call
          </div>
        </div>
        {isModalOpen && <VideoCallModal onClose={handleModalToggle} />}
      </div>
    </div>
  );
};

export default Index;
