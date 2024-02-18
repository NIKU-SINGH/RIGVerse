import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Tag } from 'lucide-react';
import { OnSaleBadge, PurchasedBadge, RequireGamePassBadge } from '@/components/Badges';
interface GameProps {
    game: {
        id: number;
        name: string;
        price: number;
        image: string;
        category: string[];
        viewerCount: string;
        badge: string;
    }
}
const Index: React.FC<GameProps> = ({ game }) => {
    return (
        <>
            <div className='relative border-2 border-gray-800 cursor-pointer hover:bg-gray-800  rounded-2xl group overflow-hidden h-96 p-4 w-64'>
                <div className="relative w-full h-48">
                    <Image
                        src={game.image}
                        alt="feature"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                    />
                </div>
                <div className='flex flex-col px-2 py-2 w-full rounded-lg gap-2'>
                    {/* Category tag with tooltip */}
                    <div className="flex gap-1 flex-wrap">
                        {game.category.map((category, index) => (
                            <span key={index} className="bg-blue-600 text-white px-2 rounded-lg text-xs">{category}</span>
                        ))}
                    </div>
                    {/* Game title and viewer count */}
                    <div className="">
                        <span className="text-white bg-red-600 px-2 rounded-full text-xs">4.9K Active Gamers</span>
                        <p className="text-gray-300 text-sm">Fortnite</p>
                    </div>

                    <h1 className="text-white text-md font-medium  tracking-tight ">
                        {game.name}
                    </h1>
                    {/* Conditionally display badges */}
                    {game.badge === "OnSale" && <OnSaleBadge />}
                    {game.badge === "Purchased" && <PurchasedBadge />}
                    {game.badge === "RequireGamePass" && <RequireGamePassBadge />}
                </div>
            </div >
        </>

    )
}

export default Index