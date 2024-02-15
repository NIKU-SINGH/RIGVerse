import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Cards from '@/components/Cards'

function CarouselCompoent() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full mx-auto overflow-hidden relative z-10"
        >
            <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/3">
                        <div className="p-2">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                                    <Cards />

                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
export default CarouselCompoent

