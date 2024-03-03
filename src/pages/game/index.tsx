import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import ChatBox from '@/components/ChatBox';
import { SideNavbar } from '@/components/Sidebar/SideNavbar'
import NavbarDemo from "@/components/Navbar/globalNavbar";
import { ScrollArea } from "@/components/ui/scroll-area"
import PlayCard from '@/components/Cards/PlayCard'
function Games() {
        return (
                <div className='flex w-full overflow-hidden'>
                        <div className='fixed'>
                                <SideNavbar />
                        </div>
                        <div className='flex w-full ml-32 md:ml-64 flex-col'>
                                <div className='w-full'>
                                        <h1 className='text-3xl text-gray-200 font-bold'>Recent Played games</h1>
                                </div>
                                <div className='w-full mt-6 px-10'>
                                        <ScrollArea className="h-screen px-1">
                                                <PlayCard name="Valorant" imageUrl="/games/valorant1.jpg" />
                                                <PlayCard name="Call of Duty" imageUrl="/games/codPoster.jpg" />
                                                <PlayCard name="Call of Duty" imageUrl="/games/codmw.jpg" />
                                                <PlayCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
                                                <PlayCard name="Assasins Creed" imageUrl="/games/creed4.jpg" />
                                                <PlayCard name="FIFA 23" imageUrl="/games/fifa23.jpeg" />
                                                <PlayCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
                                                <PlayCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
                                        </ScrollArea>
                                </div>
                        </div>

                </div>

        )
}

export default Games;