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

interface CarouselComponentProps {
    children: React.ReactNode | string;
    className?: string; // Optional className prop
}

// Update the function to accept props
const CarouselComponent: React.FC<CarouselComponentProps> = ({ children, className }) => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full mx-auto overflow-hidden relative z-10 "
        >
            <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className= {`${className || ''}`}>
                        <div className="p-2 ">
                            {children}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default CarouselComponent
