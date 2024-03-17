import MatchCard from "@/components/Cards/MatchCard";
import UserSidebar from "@/components/Sidebar/UserSidebar";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlayCard from "@/components/Cards/PlayCard";
import { Button } from "@/components/ui/button";
// Add missing import for the Profile component
import Profile from "@/components/Profile/index";
import { SideNavbar } from "@/components/Sidebar/SideNavbar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserData, searchAddress } from "@/lib/supabase";
import { useRouter } from "next/router";
import Link from "next/link";

// Add missing import for the Profile component

const tempData = [
  {
    id: "1e01e610-faaf-4a7b-aac5-56ed7329c4b4",
    name: "Go Dash",
    email: "shivam_v@ar.iitr.ac.in",
    bio: "Go like Dash",
    studio: false,
    address: "",
    followers: 0,
    following: 0,
  },
];

const Index: React.FC = () => {
  const [text, setText] = useState<string>("");
  const router = useRouter();
  const [result, setResult] = useState<UserData[]>(tempData);

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = async () => {
    setResult((await searchAddress(text)) || tempData);
  };

  return (
    <div>
      <div className="flex">
        <div className="fixed">
          <SideNavbar />
        </div>
        <div className="flex w-full ml-32 md:ml-64 flex-col px-4 mt-4">
          <div className=" bg-purple-500 p-4 rounded-2xl">
            <h1 className="text-2xl text-gray-200 font-semibold">Search</h1>
          </div>
          <div className="my-10 text-white">
            <div className="flex flex-col">
              <label className="mb-3">Profile</label>
              <div className="flex">
                <Input
                  className="bg-transparent border-gray-700 w-96"
                  placeholder="Search profile address"
                  value={text}
                  onChange={handleOnChange}
                />
                <Button className="ml-2" onClick={handleClick}>
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="text-white w-[400px]">
            {result.map((item) => {
              return (
                <Link href={`/search/${item?.address}`} key={item?.address}>
                  <div className="p-1 hover:border cursor-pointer">
                    {item?.address}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
