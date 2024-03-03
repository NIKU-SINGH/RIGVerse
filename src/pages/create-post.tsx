import MatchCard from "@/components/Cards/MatchCard";
import UserSidebar from "@/components/Sidebar/UserSidebar";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlayCard from "@/components/Cards/PlayCard";
import { SideNavbar } from "@/components/Sidebar/SideNavbar";

function Index() {
        return (
                <div>
                        <div className="flex">
                                 <div className='fixed'>
                                <SideNavbar />
                        </div>
                        <div className='flex w-full ml-32 md:ml-64 flex-col px-4 mt-4'>
                                        <div className=" bg-purple-500 p-4 rounded-2xl">
                                                <h1 className="text-2xl text-gray-200 font-semibold">
                                                        Create a post
                                                </h1>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}

export default Index;
