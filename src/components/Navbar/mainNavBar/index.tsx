import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ConnectWallet } from "@/lib/walletConnect";

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
];

function index() {
  return (
    <div className=" mt-4 p-2">
      <NavigationMenu className="min-w-[98vw]">
        <NavigationMenuList className="px-6  w-[90vw] flex mx-10 items-center justify-between">
          <NavigationMenuItem className="w-96">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={150} height={150} />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-30">
            <ConnectWallet />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default index;
