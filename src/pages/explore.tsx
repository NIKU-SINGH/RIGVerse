import CarouselCompoent from '@/components/Carousel'
import React from 'react'
import Feature from '@/components/Feature'
function explore() {
    return (
        <div className='flex min-h-screen flex-col items-center justify-between px-10 md:px-24 py-10'>
            {/* Carousel 1 */}
            <div className='w-full'>
                <h1 className="text-left text-5xl font-bold  text-black relative z-20">
                    Build great products
                </h1>
                {/* Cards here */}
                <Feature />
                <div className='mt-10 w-full flex items-start'>
                    <CarouselCompoent />
                </div>
            </div>
        </div>

    )
}

export default explore