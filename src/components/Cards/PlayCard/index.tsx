import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
interface SmallCardProps {
    name: string;
    imageUrl: string;
}
const Index: React.FC<SmallCardProps> = ({ name, imageUrl }) => {
    return (
        <div className='my-2 rounded-lg p-2 bg-gray-800 flex justify-start items-center gap-2'>
            {/* Recent purchases */}
            <div className='h-16 w-16 relative'>
                <Image
                    src={imageUrl ? imageUrl : "/games/codPoster.jpg"}
                    alt="games"
                    layout="fill" // This makes the image fill the container
                    objectFit="cover" // This will cover the area, cropping the image as needed
                    className="rounded-lg"
                />
            </div>
            <div className='gap-2 flex flex-col items-center text-center text-gray-400 font-semibold'>
                {name}
                <Button className='h-6'>Launch</Button>
            </div>
        </div>
    )
}

export default Index