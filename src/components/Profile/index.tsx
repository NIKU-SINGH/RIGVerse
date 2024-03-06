import Image from "next/image";
import { Bookmark, Contact2, Grid3X3 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMoralis } from "react-moralis";
import {
  Post as PostInterface,
  UserData,
  fetchUserData,
  fetchUserPost,
} from "@/lib/supabase";
import React, { useEffect, useState } from "react";
import Post from "../Cards/Post";
import Link from "next/link";
import { link } from "fs";

const tempData = [
  {
    id: 1,
    name: "Hyperland",
    price: 20,
    link: "https://hyperland-liard.vercel.app",
    image: "/games/hyperland.jpeg",
    category: ["FPS", "MOBA", "Shooter"],
    viewerCount: "4.9K Active Gamers",
    badge: "Purchased",
  },
  {
    id: 2,
    name: "Arcave",
    price: 20,
    link: "https://eth-india-2023.vercel.app",
    image: "/games/arcave.jpeg",
    category: ["FPS", "MOBA", "Shooter"],
    viewerCount: "4.9K Active Gamers",
    badge: "Purchased",
  },
  {
    id: 3,
    name: "Warfield",
    price: 20,
    link: "https://warfield.vercel.app/",
    image: "/games/warfield.jpeg",
    category: ["FPS", "MOBA", "Shooter"],
    viewerCount: "4.9K Active Gamers",
    badge: "OnSale",
  },
];

export default function Profile() {
  const { account } = useMoralis();
  const [userData, setuserData] = useState<UserData>();
  const [postData, setpostData] = useState<PostInterface[]>();

  useEffect(() => {
    const fetchData = async () => {
      if (account) {
        const data1 = await fetchUserPost(account);
        setpostData(data1);
        const data2 = await fetchUserData(account);
        setuserData(data2);
        console.log(data2);
      }
    };
    fetchData();
  }, [account]);

  console.log(userData?.studio);
  return (
    <>
      <main className="">
        <div className="lg:w-9/12 lg:mx-auto mb-8">
          <header className="flex flex-wrap items-center p-4 md:py-8">
            <div className="flex flex-wrap items-center justify-center w-full">
              <div className="md:w-3/12 md:ml-16">
                {/* profile image */}
                <Image
                  src="/games/profile.jpg"
                  alt="profile"
                  width={1000}
                  height={1000}
                  className="h-36 w-36 object-cover border-2 border-pink-600 p-1 rounded-full"
                />
              </div>

              {/* profile meta */}
              <div className=" ml-4 text-gray-100">
                <div className="md:flex md:flex-wrap md:items-center mb-4">
                  <h2 className="text-3xl text-gray-100 inline-block font-light md:mr-2 mb-2 sm:mb-0">
                    {userData?.name}
                  </h2>

                  {/* badge */}
                  <span
                    className="inline-block fas fa-certificate fa-lg text-blue-500 relative mr-6 text-xl transform -translate-y-2"
                    aria-hidden="true"
                  >
                    <i className="fas fa-check text-white text-xs absolute inset-x-0 ml-1 mt-px"></i>
                  </span>

                  {/* follow button */}
                  <a
                    href="#"
                    className="bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded block text-center sm:inline-block "
                  >
                    Follow
                  </a>
                </div>

                {/* post, following, followers list for medium screens */}
                <ul className="text-gray-100 hidden md:flex space-x-8 mb-4">
                  <li>
                    <span className="font-semibold"> {postData?.length} </span>
                    posts
                  </li>

                  <li>
                    <span className="font-semibold">
                      {userData?.followers}{" "}
                    </span>
                    followers
                  </li>
                  <li>
                    <span className="font-semibold">
                      {userData?.following}{" "}
                    </span>
                    following
                  </li>
                </ul>

                {/* user meta form medium screens */}
                <div className="">{userData?.bio}</div>
              </div>
            </div>
          </header>
          {/* posts */}
          <div className="px-px md:px-3 ">
            {/* user following for mobile only */}
            <ul className="flex md:hidden justify-around space-x-8 border-t text-center p-2 text-gray-600 leading-snug text-sm">
              <li>
                <span className="font-semibold text-gray-100 block">
                  {postData?.length}
                </span>
                posts
              </li>

              <li>
                <span className="font-semibold text-gray-100 block">
                  {userData?.followers}{" "}
                </span>
                followers
              </li>
              <li>
                <span className="font-semibold text-gray-100 block">
                  {userData?.following}{" "}
                </span>
                following
              </li>
            </ul>

            {/* insta features */}
            <ul className="text-gray-100 flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs border-t">
              {/* posts tab is active */}
              <li className="md:border-t hover:md:border-gray-700 md:-mt-px cursor-pointer">
                <div className="flex items-center justify-center flex-col p-3">
                  <Grid3X3 className="h-6 w-6" />
                  <span className="hidden md:inline">post</span>
                </div>
              </li>
              <li className="md:border-t hover:md:border-gray-700 md:-mt-px cursor-pointer">
                <div className="flex items-center justify-center flex-col p-3">
                  <Bookmark className="h-6 w-6" />
                  <span className="hidden md:inline">saved</span>
                </div>
              </li>
              <li className="md:border-t hover:md:border-gray-700 md:-mt-px cursor-pointer">
                <div className="flex items-center justify-center flex-col p-3">
                  <Contact2 className="h-6 w-6" />
                  <span className="hidden md:inline">tagged</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Post grid */}{" "}
          <div className="h-24 flex items-center ">
            {/* profile image */}
            {userData?.studio && (
              <Carousel className="w-full ">
                <CarouselContent>
                  {tempData.map(({ image, link }, index) => (
                    <Link href={link}>
                      <CarouselItem key={index} className="md:basis-1/12">
                        <Image
                          src={image}
                          alt="profile"
                          width={1000}
                          height={1000}
                          className="cursor-pointer h-16 w-16 object-cover border-2 border-pink-600 p-1 rounded-full"
                        />
                      </CarouselItem>
                    </Link>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            )}
          </div>
          <div className="flex flex-wrap justify-center">
            {postData?.map((item, index) => {
              console.log(item);
              return <Post data={item} key={index} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
