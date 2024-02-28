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
import { LayoutDashboard, List, LineChart, MessageCircleCode, Wallet, SquarePen, Gamepad2, User, Menu, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import JoinCard from "@/components/Cards/JoinCard";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import MatchCard from "../../Cards/MatchCard";
import PlayCard from "../../Cards/PlayCard";
import { useRouter } from 'next/router';

export default function CreateGameSidebar() {
    const [toggle, setToggle] = useState(true)
    const router = useRouter();
    const { studioId } = router.query;
    console.log("Studio ID", studioId)
    const buttonLinks = [
        {
            title: "Dashboard",
            href: `/studio/${studioId}/dashboard`,
            icon: <LayoutDashboard className="h-6 w-6" />,
        },
        {
            title: "Games Listed",
            href: `/studio/${studioId}/games-list`,
            icon: <List className="h-6 w-6" />,
        },
        {
            title: "Analytics",
            href: `/studio/${studioId}/analytics`,
            icon: <LineChart className="h-6 w-6" />,
        },
        {
            title: "Comments",
            href: `/studio/${studioId}/comments`,
            icon: <MessageCircleCode className="h-6 w-6" />,
        },
        {
            title: "Earn",
            href: `/studio/${studioId}/earnings`,
            icon: <Wallet className="h-6 w-6" />,
        },
        {
            title: "Create Post",
            href: `/studio/${studioId}/create-post`, // Update with the correct path
            icon: <SquarePen className="h-6 w-6" />,
        },
        {
            title: "Create Game",
            href: `/studio/${studioId}/create-game`, // Update with the correct path
            icon: <Gamepad2 className="h-6 w-6" />,
        },
        {
            title: "Profile",
            href: `/studio/${studioId}/`, // Update with the correct path
            icon: <User className="h-6 w-6" />,
        },
    ];

    // THis is is a coomment
    return (
        <div className="">
            <div className="relative h-screen border-r-2 border-gray-700  p-1 w-36 md:p-2 md:w-64 rounded-l-lg">
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
                                        <Button key={link.title} variant="ghost" className="w-full justify-start hover:bg-orange-500 hover:text-white flex gap-4 rounded-xl">
                                            {link.icon}
                                            <p className="font-bold">{link.title}</p>
                                        </Button>
                                    </Link>
                                ))
                            }

                        </div>
                        <div className="absolute bottom-10 w-52 space-y-3 text-gray-500 flex flex-col">
                            <Link key="Setting" href="/user/12334343asQ/settings">
                                <Button variant="ghost" className="w-full justify-start hover:bg-orange-500 hover:text-white flex gap-4 rounded-xl">
                                    <Settings className="h-6 w-6" />
                                    <p className="font-bold">Settings</p>
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}