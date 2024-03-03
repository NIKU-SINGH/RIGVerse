import MatchCard from "@/components/Cards/MatchCard";
import UserSidebar from "@/components/Sidebar/UserSidebar";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlayCard from "@/components/Cards/PlayCard";

// Add missing import for the Profile component
import Profile from "@/components/Profile/index";
import { SideNavbar } from "@/components/Sidebar/SideNavbar";

// Add missing import for the Profile component

function Index() {
        return (
                <div>
                        <div className="flex">
                           <div className='fixed'>
                                <SideNavbar />
                        </div>
                        <div className='flex w-full ml-32 md:ml-64 flex-col'>
                                        {/* <div className='w-full bg-purple-500 p-4 rounded-2xl'>
                                <h1 className='text-2xl text-gray-200 font-semibold'>Individual game profile</h1>
                    </div> */}
                                        <Profile />
                                </div>
                        </div>
                </div>
        );
}

export default Index;
