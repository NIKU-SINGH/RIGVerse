"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

interface DirectionAwareHoverDemoProps {
    imageClassName?: string; // Optional prop, hence the '?' modifier
    imageUrl: string;
    className: string,
    title: string // Required prop
}

export default function DirectionAwareHoverDemo({ imageClassName, imageUrl, className, title }: DirectionAwareHoverDemoProps) {
    return (
        <div className="w-full relative flex items-center justify-center ">
            <DirectionAwareHover imageUrl={imageUrl} imageClassName={imageClassName} className={className}>
                <div className='w-full h-full bottom-0 absolute flex items-center justify-center hover:cursor-pointer'>
                    <div className='bg-red-500 opacity-0 hover:opacity-100 w-full flex flex-col gap-2 bottom-0 absolute p-2 items-start justify-center hover:bg-opacity-30 hover:backdrop-blur-md rounded-lg'>
                        <h1 className="text-white scroll-m-20 text-xl font-extrabold tracking-tight">
                            {title}
                        </h1>
                    </div>
                </div>
            </DirectionAwareHover>
        </div>
    );
}
