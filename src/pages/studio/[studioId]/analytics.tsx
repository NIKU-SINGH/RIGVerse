import MatchCard from '@/components/Cards/MatchCard'
import StudioSidebar from '@/components/Sidebar/StudioSidebar'
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import PlayCard from '@/components/Cards/PlayCard'

function Index() {
    return (
        <div>
            <div className='flex'>
                <StudioSidebar />
                <div className='flex flex-col px-4 w-full mt-10'>
                    <div className='w-full bg-orange-500 p-4 rounded-2xl'>
                        <h1 className='text-2xl text-gray-200 font-semibold'>Analytics</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Index