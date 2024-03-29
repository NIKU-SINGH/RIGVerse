import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import DirectionAwareHoverDemo from "../DirectionAwareHover";

export default function BentoGridDemo() {
    return (
        <BentoGrid className=" mx-auto md:auto-rows-[20rem] py-6">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                // link={item.link}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
    {
        title: "Fifa 19",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <DirectionAwareHoverDemo title="Fifa 19" imageClassName="" imageUrl='/games/fifa19.jpg' className='h-56 w-full' />,
        className: "md:col-span-2",
        link: "/explore",
    },
    {
        title: "Assassin's Creed 4: Black Flag",
        description: "Dive into the transformative power of technology.",
        header: <DirectionAwareHoverDemo title="Assassin's Creed 4: Black Flag" imageClassName="" imageUrl='/games/creed4.jpg' className='h-52 w-full' />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <DirectionAwareHoverDemo title="Call of Duty" imageClassName="" imageUrl='/games/codmw.jpg' className='h-52 w-full' />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <DirectionAwareHoverDemo title="Valorant" imageClassName="" imageUrl='/games/valorant1.jpg' className='h-52 w-full' />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];
