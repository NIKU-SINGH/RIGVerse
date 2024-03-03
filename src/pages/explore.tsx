import React from 'react'
import Feature from '@/components/Feature'
import { SideNavbar } from '@/components/Sidebar/SideNavbar'
import NavbarDemo from "@/components/Navbar/globalNavbar"; // Import the Navbar component
import DirectionAwareHoverDemo from '@/components/DirectionAwareHover';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import JoinCard from "@/components/Cards/JoinCard";
import CarouselComponent from '@/components/Carousel'
import ProductCard from '@/components/Cards/ProductCard';
import GameCard from '@/components/Cards/GameCard';

const Catalog = [
        {
                "title": "Best Selling",
                "description": "The most popular games on the platform",
                "enpoint": "/game",
                "games": [
                        {
                                "id": 1,
                                "name": "Call of Duty: Modern Warfare",
                                "price": 20,
                                "image": "/games/codmw.jpg",
                                "category": ["FPS", "MOBA", "Shooter"],
                                "viewerCount": "4.9K Active Gamers",
                                "badge": "OnSale"
                        },
                        {
                                "id": 2,
                                "name": "Cyberpunk 2077",
                                "price": 20,
                                "image": "/games/cypherpunk.jpg",
                                "category": ["FPS", "MOBA", "Shooter"],
                                "viewerCount": "4.9K Active Gamers",
                                "badge": "Purchased"
                        },
                        {
                                "id": 3,
                                "name": "Hogwarts Legacy",
                                "price": 20,
                                "image": "/games/hogwarts.png",
                                "category": ["FPS", "MOBA", "Shooter"],
                                "viewerCount": "4.9K Active Gamers",
                                "badge": "RequireGamePass"
                        },
                        {
                                "id": 4,
                                "name": "Call of Duty: World War 2",
                                "price": 20,
                                "image": "/games/codPoster.jpg",
                                "category": ["FPS", "MOBA", "Shooter"],
                                "viewerCount": "4.9K Active Gamers",
                                "badge": "OnSale"
                        },
                        {
                                "id": 5,
                                "name": "Fifa 19",
                                "price": 20,
                                "image": "/games/fifa19.jpg",
                                "category": ["Sports", "Football", "Soccer"],
                                "viewerCount": "4.9K Active Gamers",
                                "badge": "Purchased"
                        },
                        {
                                "id": 6,
                                "name": "GTA 6",
                                "price": 20,
                                "image": "/games/gta6.jpg",
                                "category": ["Open World", "Adventure", "RPG"],
                                "viewerCount": "4.9K Active Gamers",
                                "badge": "RequireGamePass"
                        },
                        {
                                "id": 7,
                                "name": "Valorant",
                                "price": 20,
                                "image": "/games/valorant1.jpg",
                                "category": ["FPS", "MOBA", "Shooter"],
                                "viewerCount": "4.9K Active Gamers",
                                "badge": "OnSale"
                        },
                        {
                                "id": 8,
                                "name": "God of War",
                                "price": 20,
                                "image": "/games/gow.jpg",
                                "category": ["Cinematic", "Adventure", "RPG"],
                                "viewerCount": "4.9K Active Gamers",
                                "badge": "Purchased"
                        },
                ]
        },
        {
                "title": "Upcoming Releases",
                "description": "Get ready for these highly anticipated titles coming soon",
                "enpoint": "/game",
                "games": [
                        {
                                "id": 9,
                                "name": "Elden Ring",
                                "price": 60,
                                "image": "/games/codmw.jpg",
                                "category": ["RPG", "Open World", "Adventure"],
                                "viewerCount": "3.2K Waiting",
                                "badge": "RequireGamePass"
                        },
                        {
                                "id": 10,
                                "name": "Horizon Forbidden West",
                                "price": 60,
                                "image": "/games/cypherpunk.jpg",
                                "category": ["RPG", "Open World", "Adventure"],
                                "viewerCount": "2.8K Waiting",
                                "badge": "OnSale"
                        },
                        {
                                "id": 11,
                                "name": "Resident Evil Village",
                                "price": 50,
                                "image": "/games/hogwarts.png",
                                "category": ["Horror", "Survival", "Action"],
                                "viewerCount": "1.9K Waiting",
                                "badge": "OnSale"
                        },
                        {
                                "id": 12,
                                "name": "Final Fantasy XVI",
                                "price": 60,
                                "image": "/games/codPoster.jpg",
                                "category": ["RPG", "Adventure", "Action"],
                                "viewerCount": "2.5K Waiting",
                                "badge": "OnSale"
                        }
                ]
        },
        {
                "title": "Indie Gems",
                "description": "Explore these masterpieces from independent developers",
                "enpoint": "/game",
                "games": [
                        {
                                "id": 13,
                                "name": "Hollow Knight: Silksong",
                                "price": 30,
                                "image": "/games/fifa19.jpg",
                                "category": ["Platformer", "Adventure", "Indie"],
                                "viewerCount": "3.1K Active Gamers",
                                "badge": "RequireGamePass"
                        },
                        {
                                "id": 14,
                                "name": "Cuphead: The Delicious Last Course",
                                "price": 20,
                                "image": "/games/gta6.jpg",
                                "category": ["Run and Gun", "Indie", "Action"],
                                "viewerCount": "1.2K Active Gamers",
                                "badge": "Purchased"
                        },
                        {
                                "id": 15,
                                "name": "Stardew Valley",
                                "price": 15,
                                "image": "/games/valorant1.jpg",
                                "category": ["Farming", "Simulation", "RPG"],
                                "viewerCount": "4.5K Active Gamers",
                                "badge": "OnSale"
                        },
                        {
                                "id": 16,
                                "name": "Undertale",
                                "price": 10,
                                "image": "/games/gow.jpg",
                                "category": ["RPG", "Indie", "Adventure"],
                                "viewerCount": "2.2K Active Gamers",
                                "badge": "RequireGamePass"
                        }
                ]
        }
]

const topRatedGames = [{
        "title": "Top Rated Games",
        "description": "A curated list of the highest-rated games across various genres, celebrated for their engaging gameplay, compelling narratives, and artistic innovation.",
        "enpoint": "/game",
        "games": [
                {
                        "id": 17,
                        "name": "Hogwarts Legacy",
                        "price": 20,
                        "image": "/games/hogwarts.png",
                        "description": "Step into the world of magic with Hogwarts an open-world action RPG set in the 1800s wizarding world. Forge your destiny as a student at Hogwarts School of Witchcraft and Wizardry.",
                        "category": ["Platformer", "Indie", "Adventure"],
                        "viewerCount": "2.5K Active Gamers",
                        "badge": "CriticalAcclaim"
                },
                {
                        "id": 18,
                        "name": "The Witness",
                        "price": 40,
                        "image": "/games/codmw.jpg",
                        "description": "A mesmerizing world filled with puzzles and breathtaking landscapes.",
                        "category": ["Puzzle", "Indie", "Open World"],
                        "viewerCount": "1.8K Active Gamers",
                        "badge": "TopPuzzle"
                },
                {
                        "id": 19,
                        "name": "Ori and the Will of the Wisps",
                        "price": 30,
                        "image": "/games/cypherpunk.jpg",
                        "description": "A visually stunning, emotionally charged platformer that's a sequel to Ori and the Blind Forest.",
                        "category": ["Platformer", "Adventure"],
                        "viewerCount": "2.9K Active Gamers",
                        "badge": "MustPlay"
                },
                {
                        "id": 20,
                        "name": "Shovel Knight",
                        "price": 25,
                        "image": "/games/codPoster.jpg",
                        "description": "An action-packed adventure with an 8-bit retro aesthetic.",
                        "category": ["Action", "Platformer", "Indie"],
                        "viewerCount": "2.1K Active Gamers",
                        "badge": "RetroGem"
                },
                {
                        "id": 21,
                        "name": "Cuphead",
                        "price": 20,
                        "image": "/games/gow.jpg",
                        "description": "A run and gun platformer with unique visuals inspired by 1930s cartoons.",
                        "category": ["Run and Gun", "Indie", "Action"],
                        "viewerCount": "3.0K Active Gamers",
                        "badge": "UniqueArt"
                }
        ]
}
]

function explore() {
        return (
                <div className='flex w-full overflow-hidden'>
                        <div className='fixed'>
                                <SideNavbar />
                        </div>
                        <div className='flex w-full ml-32 md:ml-64 flex-col '>
                                {/* <NavbarDemo /> */}
                                {/* Carpousel  goes here*/}
                                {
                                        topRatedGames.map((section, index) => (
                                                <div key={index} className='p-4'>
                                                        <h3 className="text-left text-3xl font-bold p-4 text-gray-400 relative z-20">
                                                                {section.title}
                                                        </h3>
                                                        <CarouselComponent className="md:basis-1/2" data={section.games}>
                                                                <GameCard endpoint={section.enpoint} game={{
                                                                        id: 0,
                                                                        name: '',
                                                                        price: 0,
                                                                        description: '',
                                                                        image: '',
                                                                        category: [],
                                                                        viewerCount: '',
                                                                        badge: ''
                                                                }} />
                                                        </CarouselComponent>
                                                </div>
                                        ))
                                }
                                {
                                        Catalog.map((section, index) => (
                                                <div key={index} className='p-4'>
                                                        <h3 className="text-left text-3xl font-bold p-4 text-gray-400 relative z-20">
                                                                {section.title}
                                                        </h3>
                                                        <CarouselComponent className="md:basis-1/5" data={section.games}>
                                                                <ProductCard endpoint={section.enpoint} className='h-96 w-64' game={{
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

export default explore