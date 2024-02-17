import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface MatchCardProps {
    name: string;
    points: string | number;
    imageUrl: string;
}
const Index: React.FC<MatchCardProps> = ({ name, points, imageUrl }) => {
    return (
        <div>
            <div className="my-2 w-full flex items-center justify-center p-2 px-2 rounded-lg bg-gray-800 hover:bg-primary text-gray-300 ">
                <div className='flex gap-2'>
                    <Avatar className='w-8 h-8'>
                        <AvatarImage src="https://github.com/shadcn.png" className='w-10' />
                    </Avatar>
                    <div className='flex flex-col'>
                        <p className='font-medium text-sm'>Name</p>
                        <p className='font-light text-xs'>4500</p>
                    </div>

                </div>

                <p className='mx-1'>V/S</p>
                <div className='flex gap-2'>

                    <div className='flex flex-col'>
                        <p className='font-medium text-sm'>{name}</p>
                        <p className='font-light text-xs'>{points}</p>
                    </div>
                    <Avatar className='w-8 h-8'>
                        {
                            imageUrl ?
                                <AvatarImage src={imageUrl} className='w-10' />
                                :
                                <AvatarImage src="https://github.com/shadcn.png" className='w-10' />
                        }

                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default Index