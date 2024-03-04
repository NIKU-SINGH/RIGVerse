import React from "react";
import { Sidebar } from "@/components/Sidebar";
import ChatBox from "@/components/ChatBox";
import { SideNavbar } from "@/components/Sidebar/SideNavbar";
import NavbarDemo from "@/components/Navbar/globalNavbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlayCard from "@/components/Cards/PlayCard";
import Link from "next/link";
function Games() {
  return (
    <div className="flex w-full overflow-hidden">
      <div className="fixed">
        <SideNavbar />
      </div>
      <div className="flex w-full ml-32 md:ml-64 flex-col">
        <div className="w-full">
          <h1 className="text-3xl text-gray-200 font-bold">
            Recent Played games Hello
          </h1>
        </div>
        <div className="w-full mt-6 px-10">
          <ScrollArea className="h-screen px-1">
            <Link href={"https://hyperland-liard.vercel.app/"}>
              <PlayCard name="Hyperland" imageUrl="/games/hyperland.jpeg" />
            </Link>
            <Link href={"https://eth-india-2023.vercel.app/"}>
              <PlayCard name="Arcave" imageUrl="/games/arcave.jpeg" />
            </Link>
            <Link href={"https://warfield.vercel.app/"}>
              <PlayCard name="Warfield" imageUrl="/games/warfield.jpeg" />
            </Link>
            <PlayCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
            <PlayCard name="Assasins Creed" imageUrl="/games/creed4.jpg" />
            <PlayCard name="FIFA 23" imageUrl="/games/fifa23.jpeg" />
            <PlayCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
            <PlayCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default Games;
