import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SideNavbar } from '@/components/SideNavbar';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';

function GameArena() {
    const router = useRouter();
    const { gameId } = router.query;


    return (
        <div className='flex w-full overflow-hidden'>
            <SideNavbar />
            <div className='flex flex-col px-4 w-full mt-10'>
                <div className='w-full'>
                    <h1 className='text-3xl text-gray-200 font-bold'>Game : {gameId}</h1>
                </div>
                <div className='bg-gray-800 h-screen w-auto rounded-2xl my-10'>
                    {/* Place your game here */}
                </div>

            </div>

        </div>
    );
}

export default GameArena;
