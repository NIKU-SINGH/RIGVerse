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
import { Settings, MessageCircleMore, ShoppingCart, Menu, Expand, Gamepad2, TrendingUp, SearchCode, Clapperboard, User, Home, SquarePen, MessageCircleCode } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import JoinCard from "@/components/Cards/JoinCard";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import MatchCard from "../../Cards/MatchCard";
import PlayCard from "../../Cards/PlayCard";
import { useRouter } from "next/router";

const buttonLinks = [
        {
                title: "Home",
                href: `/home`,
                icon: <Home className="h-6 w-6" />,
        },
        {
                title: "Explore",
                href: "/explore", // Update with the correct path
                icon: <SearchCode className="h-6 w-6" />,
        },
        {
                title: "Play Now",
                href: "/game", // Update with the correct path
                icon: <Gamepad2 className="h-6 w-6" />,
        },
        {
                title: "Studio",
                href: "/studio", // Update with the correct path
                icon: <Clapperboard className="h-6 w-6" />,
        },
        // {
        //     title: "Purchase",
        //     href: "/purchase", // Update with the correct path
        //     icon: <ShoppingCart className="h-6 w-6" />,
        // },
        {
                title: "Recent Matches",
                href: "/recent-matches", // Update with the correct path
                icon: <TrendingUp className="h-6 w-6" />,
        },
        {
                title: "Chat",
                href: "/chat", // Update with the correct path
                icon: <MessageCircleMore className="h-6 w-6" />,
        },

        {
                title: "Comments",
                href: `/user/comments`,
                icon: <MessageCircleCode className="h-6 w-6" />,
        },
        {
                title: "Create Post",
                href: `/create-post`, // Update with the correct path
                icon: <SquarePen className="h-6 w-6" />,
        },
        {
                title: "Profile",
                href: "/user/12334343asQ", // Update with the correct path
                icon: <User className="h-6 w-6" />,
        },
];


export function SideNavbar() {
        const [toggle, setToggle] = useState(true)
        // THis is is a coomment
        const router = useRouter();
        const { studioId } = router.query;
        console.log("Studio ID", studioId)
        return (
                <div className="">

                        {
                                toggle ?
                                        (
                                                <div className="fixed border-r-2 border-gray-700  p-1 w-36 md:p-2 md:w-64 rounded-l-lg h-full">
                                                        <div className="space-y-4 divide-y-2 divide-gray-700">
                                                                <div className="px-3 py-2">
                                                                        <div className="flex items-center mb-4 p-2 ">
                                                                                <Link href='/'>
                                                                                        <Image src='/logo.png' alt='logo' width={150} height={150} />
                                                                                </Link>
                                                                                <Menu
                                                                                        onClick={() => setToggle(!toggle)}
                                                                                        size={24} className="text-gray-200 cursor-pointer ml-6"
                                                                                />
                                                                        </div>

                                                                        <div className="space-y-3 text-gray-500 flex flex-col">
                                                                                {
                                                                                        buttonLinks.map((link) => (
                                                                                                <Link key={link.title} href={link.href}>
                                                                                                        <Button key={link.title} variant="ghost" className="w-full justify-start hover:bg-blue-500 hover:text-white flex gap-4 rounded-xl">
                                                                                                                {link.icon}
                                                                                                                <p className="font-bold">{link.title}</p>
                                                                                                        </Button>
                                                                                                </Link>
                                                                                        ))
                                                                                }

                                                                        </div>
                                                                        <div className="border-2 border-gray-700 rounded-2xl absolute bottom-10 w-52 text-gray-500 flex flex-col">
                                                                                <Link key="Setting" href="/settings">
                                                                                        <Button variant="ghost" className="w-full justify-start hover:bg-blue-500 hover:text-white flex gap-4 rounded-xl">
                                                                                                <Settings className="h-6 w-6" />
                                                                                                <p className="font-bold">Settings</p>
                                                                                        </Button>
                                                                                </Link>

                                                                        </div>
                                                                </div>


                                                                {/* <div className="py-2 px-3">
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
                                                                </div> */}
                                                                {/* <div className="py-2 px-3">
                                                                        <h2 className="relative text-lg font-semibold tracking-tight text-gray-200 text-left">
                                                                                Recent Play history
                                                                        </h2>
                                                                        <ScrollArea className="h-[250px] px-1">
                                                                                <PlayCard name="Valorant" imageUrl="/games/valorant1.jpg" />
                                                                                <PlayCard name="Call of Duty" imageUrl="/games/codPoster.jpg" />
                                                                                <PlayCard name="Call of Duty" imageUrl="/games/codmw.jpg" />
                                                                                <PlayCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
                                                                                <PlayCard name="Assasins Creed" imageUrl="/games/creed4.jpg" />
                                                                                <PlayCard name="FIFA 23" imageUrl="/games/fifa23.jpeg" />
                                                                                <PlayCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
                                                                                <PlayCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
                                                                        </ScrollArea>
                                                                </div> */}
                                                                {/* <div className="py-2 px-3">
                                                                        <JoinCard />
                                                                </div> */}
                                                        </div>
                                                </div>

                                        )
                                        :
                                        (
                                                <div className=" border-r-2 border-gray-700 p-1 w-24 rounded-l-lg h-screen">
                                                        <div className="space-y-4 flex flex-col h-screen">
                                                                <div className="mt-4">
                                                                        <Link href='/'>
                                                                                <Image src='/logo.png' alt='logo' width={250} height={250} />
                                                                        </Link>
                                                                </div>

                                                                <div className="px-3 py-2">
                                                                        {/* <div>
                                                                                <Expand
                                                                                        onClick={() => setToggle(!toggle)}
                                                                                        className="h-6 w-6 text-gray-200 "
                                                                                />
                                                                        </div> */}
                                                                        <div className=" my-2 text-gray-500 flex flex-col">
                                                                                        <Button  onClick={() => setToggle(!toggle)} variant="ghost" className="w-full justify-start hover:bg-blue-500 hover:text-white flex gap-4 rounded-xl">
                                                                                                <Expand className="h-6 w-6" />
                                                                                        </Button>
                                                                        </div>

                                                                        <div className="space-y-3 text-gray-500 flex flex-col">
                                                                                {
                                                                                        buttonLinks.map((link) => (
                                                                                                <Link key={link.title} href={link.href}>
                                                                                                        <Button key={link.title} variant="ghost" className="w-full justify-start hover:bg-blue-500 hover:text-white flex gap-4 rounded-xl">
                                                                                                                {link.icon}
                                                                                                        </Button>
                                                                                                </Link>
                                                                                        ))
                                                                                }

                                                                        </div>
                                                                        <div className="border-2 border-gray-700 rounded-2xl absolute bottom-10 text-gray-500 flex flex-col">
                                                                                <Link key="Setting" href="/settings">
                                                                                        <Button variant="ghost" className="w-full justify-start hover:bg-blue-500 hover:text-white flex gap-4 rounded-xl">
                                                                                                <Settings className="h-6 w-6" />
                                                                                        </Button>
                                                                                </Link>
                                                                        </div>
                                                                </div>

                                                        </div>
                                                </div>
                                        )
                        }
                </div>
        )
}