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

export default function Profile() {
  const { account } = useMoralis();
  const [userData, setuserData] = useState<UserData>();
  const [postData, setpostData] = useState<PostInterface[]>();

  useEffect(() => {
    const fetchData = async () => {
      if (account) {
        const data1 = await fetchUserPost(account);
        console.log(data1);
        setpostData(data1);
        const data2 = await fetchUserData(account);
        setuserData(data2);
      }
    };
    fetchData();
  }, [account]);

  return (
    <>
      <main className="">
        <div className="lg:w-9/12 lg:mx-auto mb-8">
          <header className="flex flex-wrap items-center p-4 md:py-8">
            <div className="flex flex-wrap items-center justify-center w-full">
              <div className="md:w-3/12 md:ml-16">
                {/* profile image */}
                <Image
                  src="/games/cypherpunk.jpg"
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
          {/* Post grid */}
          <div className="flex flex-wrap justify-center">
            {postData?.map((item) => {
              console.log(item);
              return <Post data={item} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
