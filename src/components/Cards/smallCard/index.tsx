import React from 'react'
import Image from 'next/image'
interface SmallCardProps {
    name: string;
    imageUrl: string;
}
const Index: React.FC<SmallCardProps> = ({ name, imageUrl }) => {
    return (
        <div className='rounded-lg bg-gray-800 p-1 flex flex-col justify-center items-center'>
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
            <div className='text-center text-gray-400 font-semibold'>{name}</div>
        </div>
    )
}

export default Index