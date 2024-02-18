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
import { Settings, FileUp, MessageCircleMore, MessageCirclePlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export function Sidebar() {
    return (
        <div className="relative border-r-2 border-b-2  border-gray-700 w-96 rounded-lg h-screen ">
            <div className="space-y-4">
                <div className="px-3 py-2">
                    <div className="flex items-center p-2 bg-gray-800 rounded-lg text-gray-200">
                        <Avatar className="h-8 w-8" >
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className=" px-2 text-lg font-semibold tracking-tight flex items-center justify-center">
                            User name
                        </div>
                    </div>
                </div>

                <div className=" text-gray-200 ">
                    <h2 className=" px-7 text-lg font-semibold tracking-tight divide-y mb-2">
                        Direct Messages
                    </h2>
                    <ScrollArea className="h-[500px] px-1 scrollbar-hide">
                        <div className="space-y-1 py-2 px-3">
                            {Array.from({ length: 10 }, (_, index) => (
                                <Button key={index} variant="ghost" className="border-2 border-gray-800 hover:bg-blue-500 rounded-xl py-8 w-full justify-start flex items-center gap-2">
                                    <Avatar className="h-10 w-10 relative ring-2 ring-blue-500 rounded-full">
                                        <AvatarImage src="https://github.com/shadcn.png" className="rounded-full p-1" />
                                        <AvatarFallback>CN</AvatarFallback>
                                        <span className="absolute top-0 right-0 block h-3 w-3 transform translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full ring-2 ring-white"></span>
                                    </Avatar>

                                    <div className="flex flex-col text-gray-300 leading-3">
                                        <div className="text-lg font-semibold tracking-tight flex items-center">
                                            User name
                                        </div>
                                        <p>Description of message goes here</p>
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                <div className="absolute bottom-0 flex gap-1 flex-col py-2 px-3 w-full mt-2">
                    <Button variant="ghost" className="border-2 hover:text-white text-gray-600 border-gray-800 hover:bg-blue-500 rounded-xl py-6 w-full justify-start flex items-center gap-2">
                        <Settings className="mr-4 h-6 w-6" />
                        <p className="font-bold">
                            Setting
                        </p>
                    </Button>
                </div>
            </div>
        </div>
    )
}