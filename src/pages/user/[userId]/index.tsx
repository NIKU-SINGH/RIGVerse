import MatchCard from '@/components/Cards/MatchCard'
import UserSidebar from '@/components/Sidebar/UserSidebar'
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import PlayCard from '@/components/Cards/PlayCard'

// Add missing import for the Profile component
import Profile from '@/components/Profile/index'

// Add missing import for the Profile component



function Index() {
    return (
        <div>
            <div className='flex'>
                <div className=' w-36 md:p-2 md:w-64'>
                    <UserSidebar />
                </div>
                <div className='flex flex-col px-4 w-full mt-10'>
                    {/* <div className='w-full bg-purple-500 p-4 rounded-2xl'>
                        <h1 className='text-2xl text-gray-200 font-semibold'>Individual game profile</h1>
                    </div> */}
                    <Profile />
                </div>

            </div>
        </div>
    )
}

export default Index