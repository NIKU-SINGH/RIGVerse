import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Settings, MessageCircleMore, ShoppingCart, Menu, Expand, Gamepad2, TrendingUp, SearchCode } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import JoinCard from "@/components/Cards/JoinCard";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import MatchCard from "../Cards/MatchCard";
import SmallCard from "../Cards/PlayCard";
export function SideNavbar() {
    const [toggle, setToggle] = useState(true)
    // THis is is a coomment
    return (
        <div className="">

            {
                toggle ?
                    (
                        <div className="border-r-2 border-gray-700  p-1 w-36 md:p-2 md:w-64 rounded-l-lg">
                            <div className="space-y-4 divide-y-2 divide-gray-700">
                                <div className="px-3 py-2">
                                    <div className="flex items-center mb-4 p-2 ">
                                        <Link href='/'>
                                            <Image src='/logo.png' alt='logo' width={150} height={150} />
                                        </Link>
                                        <Menu
                                            onClick={() => setToggle(!toggle)}
                                            size={24} className="text-gray-300 cursor-pointer"
                                        />
                                    </div>

                                    <div className="space-y-3 text-gray-500">
                                        <Button variant="ghost" className="w-full justify-start hover:bg-primary hover:text-white">
                                            <SearchCode className="mr-4 h-6 w-6" />
                                            <p className="font-bold">Explore</p>
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start hover:bg-primary hover:text-white">
                                            <TrendingUp className="mr-4 h-6 w-6" />
                                            <p className="font-bold">
                                                Trending
                                            </p>

                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start hover:bg-primary hover:text-white">
                                            <ShoppingCart className="mr-4 h-6 w-6" />
                                            <p className="font-bold">
                                                Purchase
                                            </p>
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start hover:bg-primary hover:text-white">
                                            <Gamepad2 className="mr-4 h-6 w-6" />
                                            <p className="font-bold">
                                                Battle History
                                            </p>
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start hover:bg-primary hover:text-white">
                                            <MessageCircleMore className="mr-4 h-6 w-6" />
                                            <p className="font-bold">
                                                Chat
                                            </p>
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start hover:bg-primary hover:text-white">
                                            <Settings className="mr-4 h-6 w-6" />
                                            <p className="font-bold">
                                                Setting
                                            </p>
                                        </Button>
                                    </div>
                                </div>

                                <div className="py-2 px-3">
                                    <h2 className="relative text-lg font-semibold tracking-tight text-gray-200 text-left">
                                        Last Game
                                    </h2>
                                    <ScrollArea className="h-[250px] px-1">
                                        <MatchCard name="Aman" points="100" imageUrl="some url" />
                                        <MatchCard name="Aman" points="100" imageUrl="some url" />
                                        <MatchCard name="Aman" points="100" imageUrl="some url" />
                                        <MatchCard name="Aman" points="100" imageUrl="some url" />
                                        <MatchCard name="Aman" points="100" imageUrl="some url" />
                                        <MatchCard name="Aman" points="100" imageUrl="some url" />
                                    </ScrollArea>
                                </div>
                                <div className="py-2 px-3">
                                    <h2 className="relative text-lg font-semibold tracking-tight text-gray-200 text-left">
                                        Recent Play history
                                    </h2>
                                    <ScrollArea className="h-[250px] px-1">
                                        <SmallCard name="Valorant" imageUrl="/games/valorant1.jpg" />
                                        <SmallCard name="Call of Duty" imageUrl="/games/codPoster.jpg" />
                                        <SmallCard name="Call of Duty" imageUrl="/games/codmw.jpg" />
                                        <SmallCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
                                        <SmallCard name="Assasins Creed" imageUrl="/games/creed4.jpg" />
                                        <SmallCard name="FIFA 23" imageUrl="/games/fifa23.jpeg" />
                                        <SmallCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
                                        <SmallCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
                                    </ScrollArea>
                                </div>
                                <div className="py-2 px-3">
                                    <JoinCard />
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className=" border-r-2 border-gray-700 p-1 w-24 rounded-l-lg h-screen">
                            <div className="space-y-4">
                                <div className="px-3 py-2">
                                    <div className="flex items-center mb-4 p-2 ">
                                        <Expand
                                            onClick={() => setToggle(!toggle)}
                                            size={24} className="text-gray-500 ml-2 items-center justify-center flex cursor-pointer"
                                        />
                                    </div>

                                    <div className="space-y-3 text-gray-500">
                                        <Button variant="ghost" className="w-full hover:bg-primary hover:text-white">
                                            <SearchCode className="h-6 w-6" />
                                        </Button>
                                        <Button variant="ghost" className="w-full t hover:bg-primary hover:text-white">
                                            <TrendingUp className=" h-6 w-6" />


                                        </Button>
                                        <Button variant="ghost" className="w-full  hover:bg-primary hover:text-white">
                                            <ShoppingCart className=" h-6 w-6" />

                                        </Button>
                                        <Button variant="ghost" className="w-full  hover:bg-primary hover:text-white">
                                            <Gamepad2 className=" h-6 w-6" />

                                        </Button>
                                        <Button variant="ghost" className="w-full  hover:bg-primary hover:text-white">
                                            <MessageCircleMore className=" h-6 w-6" />

                                        </Button>
                                        <Button variant="ghost" className="w-full hover:bg-primary hover:text-white">
                                            <Settings className="h-6 w-6" />

                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
            }

        </div>
    )
}