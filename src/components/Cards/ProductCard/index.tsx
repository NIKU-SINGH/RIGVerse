import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function Index() {
    return (
        <div className='cursor-pointer bg-gray-800 rounded-xl p-2 min-w-48'>
            <div className="relative w-full h-48">
                <Image
                    src="/games/cypherpunk.jpg"
                    alt="feature"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className='flex flex-col px-2 py-2 w-full rounded-lg gap-2'>
                {/* Category tag with tooltip */}
                <div className="flex gap-1 flex-wrap">
                    <span className="tooltiptext bg-blue-600 text-white px-2 rounded-lg text-xs">FPS</span>
                    <span className="tooltiptext bg-blue-600 text-white  px-2 rounded-lg text-xs">MOBA</span>
                    <span className="tooltiptext bg-blue-600 text-white  px-2 rounded-lg text-xs">Shooter</span>
                </div>
                {/* Game title and viewer count */}
                <div className="">
                    <span className="text-white bg-red-600 px-2 rounded-full text-xs">4.9K Active Gamers</span>
                    <p className="text-gray-300 text-sm">Fortnite</p>
                </div>

                <h1 className="text-white text-md font-medium  tracking-tight ">
                    Hogwarts Legacy
                </h1>
                <Button variant="secondary" className='h-6'>Play Now</Button>
            </div>


        </div>
    )
}

export default Index