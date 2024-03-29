import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Image from 'next/image';

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Home",
        href: "/",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Explore",
        href: "/explore",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Chat",
        href: "/chat",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Games",
        href: "/games",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
]

function index() {
    return (
        <div className='p-2 px-4 h-16 flex items-center justify-center'>
            <NavigationMenu>
                <NavigationMenuList className=''>

                    <NavigationMenuItem className='w-96'>
                        {/* <Link href='/'>
                            <Image src='/logo.png' alt='logo' width={150} height={150} />
                        </Link> */}
                        <h3 className='text-gray-200 text-2xl font-bold'>PageName .</h3>
                    </NavigationMenuItem>

                    {components.map((component) => (
                        <NavigationMenuItem key={component.title}>
                            <NavigationMenuLink href={component.href}>
                                <div className='mx-2 text-white hover:border-b-2'>
                                    {component.title}
                                </div>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}

                    <div className='flex w-96 items-center justify-center gap-4'>
                        <NavigationMenuItem>
                            <Button className='bg-primary'>Donate</Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button>Register</Button>
                        </NavigationMenuItem>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>

            <div>

            </div>

        </div>
    )
}

export default index