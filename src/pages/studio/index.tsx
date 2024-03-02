import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import ChatBox from '@/components/ChatBox';
import { SideNavbar } from '@/components/Sidebar/SideNavbar'
import NavbarDemo from "@/components/Navbar/globalNavbar";
import { ScrollArea } from "@/components/ui/scroll-area"
import PlayCard from '@/components/Cards/PlayCard'
import CarouselComponent from '@/components/Carousel'
import ProductCard from '@/components/Cards/ProductCard';

const Catalog = [
    {
        "title": "Best Selling",
        "description": "The most popular games on the platform",
        "enpoint": "/studio",
        "games": [
            {
                "id": 1,
                "name": "Call of Duty: Modern Warfare",
                "price": 20,
                "image": "/games/codmw.jpg",
                "viewerCount": "4.9K Active Gamers",
                "badge": "OnSale"
            },
            {
                "id": 2,
                "name": "Cyberpunk 2077",
                "price": 20,
                "image": "/games/cypherpunk.jpg",
                "viewerCount": "4.9K Active Gamers",
                "badge": "Purchased"
            },
            {
                "id": 3,
                "name": "Hogwarts Legacy",
                "price": 20,
                "image": "/games/hogwarts.png",
                "viewerCount": "4.9K Active Gamers",
                "badge": "RequireGamePass"
            },
            {
                "id": 4,
                "name": "Call of Duty: World War 2",
                "price": 20,
                "image": "/games/codPoster.jpg",
                "viewerCount": "4.9K Active Gamers",
                "badge": "OnSale"
            },
            {
                "id": 5,
                "name": "Fifa 19",
                "price": 20,
                "image": "/games/fifa19.jpg",
                "viewerCount": "4.9K Active Gamers",
                "badge": "Purchased"
            },
            {
                "id": 6,
                "name": "GTA 6",
                "price": 20,
                "image": "/games/gta6.jpg",
                "viewerCount": "4.9K Active Gamers",
                "badge": "RequireGamePass"
            },
            {
                "id": 7,
                "name": "Valorant",
                "price": 20,
                "image": "/games/valorant1.jpg",
                "viewerCount": "4.9K Active Gamers",
                "badge": "OnSale"
            },
            {
                "id": 8,
                "name": "God of War",
                "price": 20,
                "image": "/games/gow.jpg",
                "viewerCount": "4.9K Active Gamers",
                "badge": "Purchased"
            },
        ]
    },


]

function Studio() {
    return (
        <div className='flex w-full overflow-hidden'>
            <div className=' w-36 md:p-2 md:w-64'>
                <SideNavbar />
            </div>

            <div className='flex flex-col px-4 w-full mt-10'>
                <div className='w-full'>
                    <h1 className='text-3xl text-gray-200 font-bold'>Studios</h1>
                </div>
                {
                    Catalog.map((section, index) => (
                        <div key={index} className='p-4'>
                            <h3 className="text-left text-3xl font-bold p-4 text-gray-400 relative z-20">
                                {section.title}
                            </h3>
                            <CarouselComponent className="md:basis-1/4" data={section.games}>
                                <ProductCard endpoint={section.enpoint} className="" game={{
                                    id: 0,
                                    name: '',
                                    price: 0,
                                    image: '',
                                    category: [],
                                    viewerCount: '',
                                    badge: ''
                                }} />
                            </CarouselComponent>
                        </div>
                    ))
                }
            </div>

        </div>

    )
}

export default Studio;