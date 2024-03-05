import { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "./components/Header";
import UserMessageCard from "./components/MessageCards/UserMessageCard";
import FriendMessageCard from "./components/MessageCards/FriendMessageCard";
import { useMoralis } from "react-moralis";
import {
  GroupedConversation,
  Msg,
  fetchfromMessage,
  fetchtoMessage,
  groupConversations,
  insertMessage,
} from "@/lib/supabase";

interface ChatInterface {
  id: number;
  created_at: string;
  to: string;
  from: string;
  message: string;
}

interface Temp1 {
  data: GroupedConversation;
}

const ChatBox: React.FC<Temp1> = (data) => {
  const { account } = useMoralis();
  const [userMessage, setUserMessage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [chatData, setChatData] = useState<ChatInterface[]>(data?.data?.chat);

  useEffect(() => {
    setChatData(data?.data?.chat);
  }, [data.data]);

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    await insertMessage({
      to: data.data.addr || "addr2",
      from: account || "",
      message: userMessage || "",
    });
    window.location.reload();
    setUserMessage("");
    setLoading(false);
  };

  return (
    <div className="w-full">
      {/* Chat */}
      <div className="w-full">
        <div className="rounded-b-xl h-screen flex flex-col">
          {/* Chat Header */}
          <Header addr={data?.data?.addr} />
          <ScrollArea className="h-[83vh] px-8">
            {chatData?.reverse().map(({ from, message }, index) => {
              if (account && account == from) {
                return <UserMessageCard message={message} key={index} />;
              }
              return <FriendMessageCard message={message} key={index} />;
            })}
          </ScrollArea>
          {/* Input */}
          <div className=" flex items-center justify-center py-2 ">
            <div className="w-full">
              {/* <Input /> */}
              <div className="flex justify-center items-center space-x-2 ">
                <Input
                  className="w-4/5 p-6 border-2 border-gray-700 bg-gray-800 rounded-xl text-gray-200"
                  type="text"
                  value={userMessage}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUserMessage(e.target.value)
                  }
                  placeholder="Type your message here..."
                />
                <Button
                  className="w-12 h-12 hover:bg-blue-500 rounded-full bg-gray-800 border-2 border-gray-700"
                  type="submit"
                  onClick={handleSubmit}
                >
                  <Send />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
