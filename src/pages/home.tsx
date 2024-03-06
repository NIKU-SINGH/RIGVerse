import MatchCard from "@/components/Cards/MatchCard";
import UserSidebar from "@/components/Sidebar/UserSidebar";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlayCard from "@/components/Cards/PlayCard";
import { SideNavbar } from "@/components/Sidebar/SideNavbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import InstagramPost from "@/components/Cards/Instagram";
import { Post, fetchAllPost } from "@/lib/supabase";

const tempData = [
  {
    id: 1,
    name: "Hyperland",
    price: 20,
    image: "/games/hyperland.jpeg",
    category: ["FPS", "MOBA", "Shooter"],
    viewerCount: "4.9K Active Gamers",
    badge: "Purchased",
  },
  {
    id: 2,
    name: "Arcave",
    price: 20,
    image: "/games/arcave.jpeg",
    category: ["FPS", "MOBA", "Shooter"],
    viewerCount: "4.9K Active Gamers",
    badge: "Purchased",
  },
  {
    id: 3,
    name: "Warfield",
    price: 20,
    image: "/games/warfield.jpeg",
    category: ["FPS", "MOBA", "Shooter"],
    viewerCount: "4.9K Active Gamers",
    badge: "OnSale",
  },
];

function Index() {
  const [postData, setPostData] = useState<Post[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetchAllPost();
      setPostData(data1);
      //       console.log(data1);
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="flex">
        <div className="fixed">
          <SideNavbar />
        </div>
        <div className="flex ml-32 md:ml-64 flex-col px-4 mt-4 items-center justify-center  w-full">
          <div className="w-11/12  bg-gray-800  h-24 px-2 rounded-2xl">
            {/* Stories like feature like instagram */}
            {/* Stories */}
            <div className="h-24 flex items-center ">
              {/* profile image */}
              <Carousel className="w-full ">
                <CarouselContent>
                  {tempData.map(({ image }, index) => (
                    <CarouselItem key={index} className="md:basis-1/12">
                      <Image
                        src={image}
                        alt="profile"
                        width={1000}
                        height={1000}
                        className="cursor-pointer h-16 w-16 object-cover border-2 border-pink-600 p-1 rounded-full"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="w-full mt-10">
              <div className="py-2 px-3 flex justify-center">
                <ScrollArea className="w-3/4 px-1">
                  {postData?.reverse().map((item) => {
                    return <InstagramPost data={item} key={item.images} />;
                  })}
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
