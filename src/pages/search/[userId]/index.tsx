import MatchCard from "@/components/Cards/MatchCard";
import UserSidebar from "@/components/Sidebar/UserSidebar";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlayCard from "@/components/Cards/PlayCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// Add missing import for the Profile component
import Profile from "@/components/Profile/index";
import { SideNavbar } from "@/components/Sidebar/SideNavbar";
import { useRouter } from "next/router";
import {
  Bookmark,
  CoinsIcon,
  Contact2,
  Grid3X3,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import {
  UserData,
  Post as PostInterface,
  fetchUserPost,
  fetchUserData,
  insertMessage,
} from "@/lib/supabase";
import Post from "@/components/Cards/Post";
import { useMoralis } from "react-moralis";
import DonateAmountModal from "@/components/Modals/DonateGamer";
import Link from "next/link";
// Add missing import for the Profile component

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

function Index() {
  const router = useRouter();
  const { account } = useMoralis();
  const game = router.query;
  const address: string = game.userId as string;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setuserData] = useState<UserData>();
  const [postData, setpostData] = useState<PostInterface[]>();

  useEffect(() => {
    const fetchData = async () => {
      if (address) {
        const data1 = await fetchUserPost(address);
        // console.log(data1);
        setpostData(data1);
        const data2 = await fetchUserData(address);
        console.log(data2);
        setuserData(data2);
      }
    };
    fetchData();
  }, [router]);

  const sendMsg = async () => {
    if (account) {
      await insertMessage({
        to: address,
        from: account || "",
        message: "Hi",
      });

      router.push("/chat");
    }
  };
  const handleModalToggle = async () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <DonateAmountModal
          onClose={handleModalToggle}
          address={userData?.address || ""}
        />
      )}
      <div className="flex">
        <div className="fixed">
          <SideNavbar />
        </div>
        <div className="flex w-full ml-32 md:ml-64 flex-col">
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

                    {/* Chat */}
                    <button
                      onClick={() => sendMsg()}
                      className="bg-blue-500 px-2 hover:bg-blue-700 mr-2 py-1 text-white font-semibold text-sm rounded flex text-center gap-1 "
                    >
                      <MessageCircle />
                    </button>
                    <button
                      onClick={() => handleModalToggle()}
                      className="bg-blue-500 px-2 hover:bg-blue-700 mr-2 py-1 text-white font-semibold text-sm rounded flex text-center gap-1 "
                    >
                      Donate
                    </button>
                    {/* follow button */}
                    <a
                      href="#"
                      className="bg-blue-500 px-2 py-1 w-16 hover:bg-blue-700 text-white font-semibold text-sm rounded block text-center sm:inline-block "
                    >
                      Follow
                    </a>
                  </div>

                  {/* post, following, followers list for medium screens */}
                  <ul className="text-gray-100 hidden md:flex space-x-8 mb-4">
                    <li>
                      <span className="font-semibold">{postData?.length} </span>
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
                  {/* <div className="">{userData?.bio}</div> */}
                </div>
              </div>
            </header>{" "}
            {userData?.studio && (
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  {tempData.map(({ image, link }, index) => (
                    <Link href={link} key={index}>
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
              {postData?.map((item, index) => {
                // console.log(item);
                return <Post data={item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
