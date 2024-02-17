"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Index() {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] cursor-pointer overflow-hidden rounded-2xl group">
            {/* Image with conditional blur on hover */}
            <Image
                src="/games/hogwarts.png"
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
                    Hogwarts Legacy
                </h1>
                <p className="text-gray-200">
                    Step into the world of magic with Hogwarts an open-world action RPG set in the 1800s wizarding world.
                    Forge your destiny as a student at Hogwarts School of Witchcraft and Wizardry.
                </p>
                <div className="flex gap-4 my-2">
                    <button className="w-36 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Play
                    </button>
                    <button className="w-36 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Purchase
                    </button>
                </div>
            </div>
        </div>
    );
}
