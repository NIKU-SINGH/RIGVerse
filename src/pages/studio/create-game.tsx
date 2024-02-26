import MatchCard from '@/components/Cards/MatchCard'
import CreateGameSidebar from '@/components/Sidebar/CreateGameSidebar'
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import PlayCard from '@/components/Cards/PlayCard'

function Index() {
    return (
        <div>
            <div className='flex'>
                <CreateGameSidebar />
                <div className='flex flex-col px-4 w-full mt-10'>
                    <div className='w-full'>
                        <h1 className='text-3xl text-gray-200 font-bold'>Create Game</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Index