import MatchCard from '@/components/Cards/MatchCard'
import StudioSidebar from '@/components/Sidebar/StudioSidebar'
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import PlayCard from '@/components/Cards/PlayCard'
import { useRouter } from 'next/router'

function Index() {
    const router = useRouter();
    const { studioId } = router.query;
    return (
        <div>
            <div className='flex'>
                <StudioSidebar />
                <div className='flex flex-col px-4 w-full mt-10'>
                    <div className='w-full bg-orange-500 p-4 rounded-2xl'>
                        <h1 className='text-2xl text-gray-200 font-semibold'>Upload a New Game</h1>
                    </div>
                    <div className='w-full mt-6 px-10 text-gray-200'>
                        <h2 className="mt-4 pb-2 text-2xl font-semibold">
                            Upoad your game
                        </h2>
                        <form>
                            <label className="block">
                                <span className="sr-only">Choose profile photo</span>
                                <input type="file" className="block w-full text-sm text-gray-500
      file:me-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-600 file:text-white
      hover:file:bg-blue-700
      file:disabled:opacity-50 file:disabled:pointer-events-none
      dark:file:bg-blue-500
      dark:hover:file:bg-blue-400
    " />
                            </label>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Index