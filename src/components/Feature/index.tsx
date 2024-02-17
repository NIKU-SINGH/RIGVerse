import Image from 'next/image'
import React from 'react'
import BentoGridDemo from '@/components/BentoGrid'
import DirectionAwareHoverDemo from '@/components/DirectionAwareHover';
import { Button } from '@/components/ui/button';

function Index() {
    let childComponent = null
    return (
        <div className='bg-gray-800 px-6 className="h-[30rem] w-[80vw] rounded-3xl relative mt-36 flex flex-col items-center justify-center overflow-hidden'>
            <h1 className="text-left text-4xl w-full font-bold p-4 mb-6 text-white relative z-20">
                Upcoming Event
            </h1>
            <div className="relative w-full h-[500px] cursor-pointer">
                <Image
                    src="/games/cypherpunk.jpg"
                    alt="feature"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />

                <div className='w-full h-full bottom-0 absolute flex items-center justify-center hover:cursor-pointer'>
                    <div className='px-10 opacity-0 hover:opacity-100 transition-opacity duration-300 w-full flex flex-col gap-2 bottom-0 absolute p-4 items-start justify-center hover:bg-opacity-30 hover:backdrop-blur-md rounded-lg'>
                        <h1 className="text-white scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            Cypherpunk
                        </h1>
                        <p className="text-gray-200 leading-7 w-2/3">
                            Once upon a time, in a far-off land, there was a very lazy king who
                            spent all day lounging on his throne. One day, his advisors came to him
                            with a problem: the kingdom was running out of money.
                        </p>
                        <div className='flex gap-4'>
                            <button className="w-48 relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg hover:bg-transparent bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    Play
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <DirectionAwareHoverDemo title="Cypherpunk" imageClassName="rounded-2xl" imageUrl='/games/cypherpunk.jpg' className='h-[500px] w-full' /> */}
            </div>
            <div className='w-full mt-24'>
                <h3 className="text-left text-4xl font-bold p-4 mb-3 text-white relative z-20">
                    Other games that topped out charts
                </h3>
                <BentoGridDemo />
            </div>
        </div>
    )
}

export default Index