import Image from 'next/image'
import React from 'react'
import BentoGridDemo from '@/components/BentoGrid'

function Index() {
    return (
        <div className='className="h-[30rem] w-[80vw] rounded-3xl relative mt-24 flex flex-col items-center justify-center overflow-hidden'>
            <h1 className="text-left text-5xl w-full font-bold p-4 mb-6 text-white relative z-20">
                Top Trending game this week
            </h1>
            <div className='w-full'>
                <Image className="rounded-2xl" src="/games/cypherpunk.jpg" alt="feature" width={500} height={1080} />
            </div>
            <div className='w-full'>
                <h3 className="text-left text-4xl font-bold p-4 mb-3 text-white relative z-20">
                    Other games that topped out charts
                </h3>

                <BentoGridDemo />
            </div>
        </div>
    )
}

export default Index