import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import ChatBox from "@/components/ChatBox";
import { SideNavbar } from "@/components/Sidebar/SideNavbar";
import NavbarDemo from "@/components/Navbar/globalNavbar";
import { useMoralis } from "react-moralis";
import {
  GroupedConversation,
  Message,
  fetchfromMessage,
  fetchtoMessage,
  groupConversations,
} from "@/lib/supabase";

const tempChat = [
  {
    id: 1,
    created_at: "",
    to: "",
    from: "",
    message: "",
  },
];

function Chat() {
  const { account } = useMoralis();
  const [chatIndex, setChatIndex] = useState<number>(0);
  const [selectedChat, setSelectedChat] = useState<GroupedConversation>({
    addr: "",
    chat: tempChat,
  });
  const [chatData, setChatData] = useState<GroupedConversation[]>([
    {
      addr: "",
      chat: tempChat,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      if (account) {
        const data1: Message[] = (await fetchfromMessage(account)) || [
          tempChat,
        ];
        const data2: Message[] = (await fetchtoMessage(account)) || [tempChat];
        console.log(data2);
        const res = groupConversations(
          [...data1, ...data2] || tempChat,
          account
        );
        // console.log(res);
        setChatData(res);
        setSelectedChat(res[0]);
      }
    };
    fetchData();
  }, [account]);

  useEffect(() => {
    setSelectedChat(chatData[chatIndex]);
  }, [chatIndex]);

  return (
    <div className="flex">
      <div className="fixed">
        <SideNavbar />
      </div>
      <div className="flex w-full ml-32 md:ml-64 flex-col">
        {/* <NavbarDemo /> */}
        <div className={`flex px-4 w-full mt-6`}>
          <Sidebar data={chatData} index={setChatIndex} />
          <div className="hidden md:inline-block w-full">
            <ChatBox data={selectedChat} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
