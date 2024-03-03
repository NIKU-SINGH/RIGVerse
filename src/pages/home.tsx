import MatchCard from "@/components/Cards/MatchCard";
import UserSidebar from "@/components/Sidebar/UserSidebar";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlayCard from "@/components/Cards/PlayCard";
import { SideNavbar } from "@/components/Sidebar/SideNavbar";
import {
        Carousel,
        CarouselContent,
        CarouselItem,
        CarouselNext,
        CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import InstagramPost from "@/components/Cards/Instagram";
function Index() {
        return (
                <div>
                        <div className="flex">
                                <div className='fixed'>
                                        <SideNavbar />
                                </div>
                                <div className='flex ml-32 md:ml-64 flex-col px-4 mt-4 items-center justify-center  w-full'>
                                        <div className="w-11/12  bg-gray-800  h-24 px-2 rounded-2xl">
                                                {/* Stories like feature like instagram */}
                                                {/* Stories */}
                                                <div className='h-24 flex items-center '>
                                                        {/* profile image */}
                                                        <Carousel className="w-full ">
                                                                <CarouselContent>
                                                                        {
                                                                                Array.from({ length: 20 }).map((_, index) => (
                                                                                        <CarouselItem key={index} className='md:basis-1/12'>
                                                                                                <Image
                                                                                                        src='/games/cypherpunk.jpg'
                                                                                                        alt="profile"
                                                                                                        width={1000}
                                                                                                        height={1000}
                                                                                                        className="cursor-pointer h-16 w-16 object-cover border-2 border-pink-600 p-1 rounded-full"
                                                                                                />
                                                                                        </CarouselItem>
                                                                                ))
                                                                        }
                                                                </CarouselContent>
                                                                <CarouselPrevious />
                                                                <CarouselNext />
                                                        </Carousel>
                                                </div>

                                                <div className="w-full mt-10">
                                                        <div className="py-2 px-3">
                                                                <ScrollArea className="w-1/2 px-1">
                                                                       <InstagramPost />
                                                                       <InstagramPost />
                                                                       <InstagramPost />
                                                                       <InstagramPost />
                                                                       <InstagramPost />
                                                                       <InstagramPost />
                                                                       <InstagramPost />
                                                                       <InstagramPost />
                                                                       <InstagramPost />
                                                                       <InstagramPost />
                                                                </ScrollArea>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}

export default Index;
