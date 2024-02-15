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

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Home",
        href: "/",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "About",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
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
        title: "Volunteer",
        href: "/",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
]

function index() {
    return (
        <div className='w-full mt-4 p-2 flex items-center justify-center'>
            <NavigationMenu>
                <NavigationMenuList className=''>

                    <NavigationMenuItem className='w-96'>
                        <Link href='/'>

                            Logo
                        </Link>
                    </NavigationMenuItem>

                    {components.map((component) => (
                        <NavigationMenuItem key={component.title}>
                            <NavigationMenuLink href={component.href}>
                                <Button variant="ghost">
                                    {component.title}
                                </Button>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}

                    <div className='flex w-96 items-center justify-center gap-4'>
                        <NavigationMenuItem>
                            <Button>Donate</Button>
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