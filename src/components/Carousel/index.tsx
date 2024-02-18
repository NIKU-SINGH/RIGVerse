import * as React from "react"

// Import your components normally
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface Game {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string[];
    viewerCount: string;
    badge: string;
}
interface CarouselComponentProps {
    children: React.ReactNode | string;
    className?: string;
    data: Game[];
}


// Update the function to accept props
const CarouselComponent: React.FC<CarouselComponentProps> = ({ children, className, data }) => {
    // console.log("data of games", data)
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className=" mx-auto overflow-hidden relative z-10"
        >
            <CarouselContent>
                {
                    data?.map((game, index) => (
                        <CarouselItem key={game.id} className={`${className || ''}`}>
                            <div className="p-2">
                                {React.Children.map(children, child =>
                                    React.isValidElement(child) ? React.cloneElement(child as React.ReactElement, { key: game.id, game }) : child
                                )}
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default CarouselComponent
