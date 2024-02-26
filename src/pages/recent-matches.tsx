import MatchCard from '@/components/Cards/MatchCard'
import { SideNavbar } from '@/components/Sidebar/SideNavbar'
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"

function RecentMatches() {
    return (
        <div className='flex'>
            <SideNavbar />
            <div className='flex flex-col px-4 w-full mt-10'>
                <div className='w-full'>
                    <h1 className='text-3xl text-gray-200 font-bold'>Recent Matches</h1>
                </div>
                <div className='w-full mt-6'>
                    <ScrollArea className="h-screen px-1">
                        <MatchCard name="Aman" points="100" imageUrl="some url" />
                        <MatchCard name="Aman" points="100" imageUrl="some url" />
                        <MatchCard name="Aman" points="100" imageUrl="some url" />
                        <MatchCard name="Aman" points="100" imageUrl="some url" />
                        <MatchCard name="Aman" points="100" imageUrl="some url" />
                        <MatchCard name="Aman" points="100" imageUrl="some url" />
                    </ScrollArea>
                </div>
            </div>

        </div>
    )
}

export default RecentMatches