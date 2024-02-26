import MatchCard from '@/components/Cards/MatchCard'
import { SideNavbar } from '@/components/Sidebar/SideNavbar'
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import PlayCard from '@/components/Cards/PlayCard'

function RecentPurchases() {
    return (
        <div>
            <div className='flex'>
                <SideNavbar />
                <div className='flex flex-col px-4 w-full mt-10'>
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
        </div>
    )
}

export default RecentPurchases