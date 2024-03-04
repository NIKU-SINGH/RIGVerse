"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Play, ShoppingCart } from 'lucide-react';
import Link from "next/link";
import { useRouter } from 'next/router';

interface GameProps {
        game: {
                id: number;
                name: string;
                price: number;
                description: string;
                image: string;
                category: string[];
                viewerCount: string;
                badge: string;
        }
        endpoint?: string;

}

const Index: React.FC<GameProps> = ({ game, endpoint }) => {
        const router = useRouter();

        const handleRedirect = () => {
                router.push({
                        pathname: endpoint + "/" + game.id,
                        query: { ...game },
                });
        };
        return (
                <div onClick={handleRedirect}>
                        <div className="relative  h-[300px] md:h-[400px] cursor-pointer overflow-hidden rounded-2xl group">
                                {/* Image with conditional blur on hover */}
                                <Image
                                        src={game.image}
                                        alt="feature"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-2xl transition-all duration-300 ease-in-out group-hover:blur-sm"
                                />

                                {/* Gradient Overlay that appears on hover */}
                                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black to-[#0000ff20] transition-opacity duration-300 ease-in-out"></div>

                                {/* Yellow Ribbon with "Trending" text */}
                                <div className="absolute flex items-center justify-center gap-1 top-4 left-4 rounded-xl px-2 py-1 bg-yellow-400 text-black font-bold ">
                                        <Star className="w-4 h-4" /> Top Rated
                                </div>

                                {/* Text content that appears on hover */}
                                <div className='flex flex-col bottom-0 absolute px-4 py-2 w-full rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                        <h1 className="text-white text-xl md:text-3xl font-extrabold tracking-tight">
                                                {game.name}
                                        </h1>
                                        <p className="text-gray-200">
                                                {game.description}
                                        </p>
                                        <div className="flex gap-4 my-2">
                                                <button className="flex items-center justify-center w-36 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                                        <Play className="mr-2" size={16} /> Play
                                                </button>
                                                <button className="flex items-center justify-center w-36 border-2 border-gray-700 bg-gray-800 hover:bg-primary text-white font-bold py-2 px-4 rounded-xl">
                                                        <ShoppingCart className="mr-2" size={16} /> Purchase
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>

        );
}
export default Index