import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface FriendsCardProps {
    name: string;
    status: string;
    timestamp: string | number;
}
const Index: React.FC<FriendsCardProps> = ({ name, status, timestamp }) => {
    return (
        <div>
            <div className='rounded-lg bg-gray-800 p-1 flex  gap-1'>
                {/* Recent purchases */}
                <div className='flex gap-2 items-center justify-center'>
                    <Avatar className='w-8 h-8'>
                        <AvatarImage src="https://github.com/shadcn.png" className='w-10' />
                    </Avatar>
                </div>
                <div>
                    <p className='text-center text-gray-400 font-semibold'>Name</p>
                    <p className='text-center text-gray-400 font-light text-sm'>48 hrs ago</p>
                </div>
            </div>
        </div>
    )
}

export default Index