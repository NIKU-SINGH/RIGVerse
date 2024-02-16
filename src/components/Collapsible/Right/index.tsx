import React, { useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area";
import SmallCard from "@/components/Cards/smallCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FriendsCard from "@/components/Cards/FriendsCard";
import ChatBox from '@/components/ChatBox';

function Index() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => setIsExpanded(!isExpanded);
    return (
        <div className='fixed z-10 h-screen right-36'>
            <div>
                {isExpanded ? (
                    <>

                        <div className='absolute my-10'>
                            <div className="relative w-80 direction-reverse inline-flex h-[85vh]  overflow-hidden rounded-s-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <div className="inline-flex flex-col gap-4  h-full w-full cursor-pointer rounded-s-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    <Button onClick={toggleExpanded}>Collapse</Button>
                                    <ScrollArea className="h-[100vh] rounded-xl p-2">
                                        <div className=''>
                                            <ChatBox />

                                        </div>
                                    </ScrollArea>


                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='absolute my-10'>
                        <div className="relative inline-flex h-[85vh] w-36 overflow-hidden rounded-s-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <div className="inline-flex flex-col gap-4 p-2 h-full w-full cursor-pointer  rounded-s-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                <Button className="bottom-0 relative" onClick={toggleExpanded}>Expand</Button>
                                <ScrollArea className="h-[100vh] ">
                                    <div className='flex gap-4 flex-col'>
                                        <h3 className="text-center mt-2 scroll-m-20 text-lg font-semibold tracking-tight">
                                            Online
                                        </h3>
                                        <FriendsCard name="Naman" status="In a game" timestamp="24 min" />
                                        <FriendsCard name="Naman" status="In a game" timestamp="24 min" />
                                        <FriendsCard name="Naman" status="In a game" timestamp="24 min" />
                                        <FriendsCard name="Naman" status="In a game" timestamp="24 min" />



                                    </div>
                                    <div className='flex gap-4 flex-col'>
                                        <h3 className="text-center mt-2 scroll-m-20 text-lg font-semibold tracking-tight">
                                            Offline
                                        </h3>
                                        <FriendsCard name="Naman" status="In a game" timestamp="24 min" />
                                        <FriendsCard name="Naman" status="In a game" timestamp="24 min" />
                                        <FriendsCard name="Naman" status="In a game" timestamp="24 min" />
                                        <FriendsCard name="Naman" status="In a game" timestamp="24 min" />



                                    </div>
                                </ScrollArea>


                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Index