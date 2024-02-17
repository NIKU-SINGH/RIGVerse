import CarouselCompoent from '@/components/Carousel'
import React from 'react'
import Feature from '@/components/Feature'
import { SideNavbar } from '@/components/SideNavbar'
import NavbarDemo from "@/components/Navbar/globalNavbar"; // Import the Navbar component
import DirectionAwareHoverDemo from '@/components/DirectionAwareHover';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import JoinCard from "@/components/Cards/JoinCard";
import ProductCard from '@/components/Cards/ProductCard';
import GameCard from '@/components/Cards/GameCard';
function explore() {
    return (
        <div className='flex'>
            <SideNavbar />

            <div className='flex flex-col w-full'>
                <NavbarDemo />
                {/* Main content */}
                {/* Carpousel */}
                <div className='w-full p-4'>
                    <CarouselCompoent className="md:basis-1/2">
                        <GameCard />
                    </CarouselCompoent>
                </div>

                {/* Top Rated List */}
                <div className='p-4'>
                    <h3 className="text-left text-3xl font-bold p-4 text-gray-400 relative z-20">
                        Genre 1
                    </h3>
                    <CarouselCompoent className="md:basis-1/6">
                        <ProductCard />
                    </CarouselCompoent>
                </div>
                <div className='p-4'>
                    <h3 className="text-left text-3xl font-bold p-4 text-gray-400 relative z-20">
                        Genre 2
                    </h3>
                    <CarouselCompoent className="md:basis-1/6">
                        <ProductCard />
                    </CarouselCompoent>
                </div>
                <div className='p-4'>
                    <h3 className="text-left text-3xl font-bold p-4 text-gray-400 relative z-20">
                        Genre 3
                    </h3>
                    <CarouselCompoent className="md:basis-1/6">
                        <ProductCard />
                    </CarouselCompoent>
                </div>


            </div>

        </div>

    )
}

export default explore