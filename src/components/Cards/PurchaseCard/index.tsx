import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface PurchaseCardProps {
    name: string;
    price: string | number;
    imageUrl: string;
    description: string;
}
import Image from 'next/image'

const Index: React.FC<PurchaseCardProps> = ({ name, description, imageUrl, price }) => {
    return (
        <div>
            <div className="my-2 w-full flex items-center p-3 px-3 rounded-lg bg-gray-800 ">
                <div className='flex gap-2'>
                    {/* Image of Game */}
                    <div className='h-24 w-24 relative'>
                        <Image
                            src={imageUrl ? imageUrl : "/games/codPoster.jpg"}
                            alt="games"
                            layout="fill" // This makes the image fill the container
                            objectFit="cover" // This will cover the area, cropping the image as needed
                            className="rounded-lg"
                        />
                    </div>


                    <div className='flex flex-col'>
                        <p className='font-medium text-lg'>{name}</p>
                        <p className='font-light text-sm'>$ {price}</p>
                        <p className='font-medium text-xs'>{description}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index