import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bookmark,
  Eye,
  HandCoins,
  Heart,
  Repeat,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { Post as PostInterface } from "@/lib/supabase";

interface Temp {
  data: PostInterface;
}

const InstagramPost: React.FC<Temp> = (data) => {
  const resData = data.data;
  console.log(resData);
  // Simulated comments array
  const comments = [
    { username: "user1", text: "This is an awesome post!" },
    // { username: 'user2', text: 'Great content!' },
    // { username: 'user3', text: 'Love it!' },
  ];
  return (
    <div className="p-4">
      <div className="  border-t-[1px] border-gray-700 text-gray-200 w-full">
        <div className="flex items-center px-4 py-3">
          <div className="border-2 border-pink-600 p-1 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="ml-3">
            <span className="text-sm font-semibold antialiased block leading-tight">
              {resData?.title}
            </span>
            <span className="text-gray-400 text-xs block">
              Asheville, North Carolina
            </span>
          </div>
        </div>
        <Image
          src={
            resData.images
              ? `https://ipfs.io/ipfs/${resData.images}`
              : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
          }
          alt="Post Image"
          width={1080} // Adjust the width based on your requirements
          height={1080} // Adjust the height based on your requirements
          className="h-96  object-cover"
        />
        <div className="flex items-center justify-between mx-4 mt-3 mb-2">
          <div className="flex gap-5 text-gray-200">
            {/* Repost */}
            <Repeat className="h-6 w-6 cursor-pointer" />
            {/* like */}
            <Heart className="h-6 w-6 cursor-pointer" />

            {/* Donate */}
            <HandCoins className="h-6 w-6 cursor-pointer" />
            {/* View */}
            <Eye className="h-6 w-6 cursor-pointer" />
          </div>
          <div className="flex">
            <Bookmark className="h-6 w-6" />
          </div>
        </div>
        <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
        {/* Comment section */}
        <div className="p-4">
          <div className=" border-t-[1px] border-gray-700 text-gray-200 w-full">
            {/* ... other components ... */}
            <div className="space-y-2 mx-4 mt-4 mb-2">
              {/* Comment section header */}
              <div className="font-semibold text-sm">Comments</div>
              {/* Add a comment input form */}
              <div className="flex items-center space-x-2">
                <div className="border-2 border-pink-600 p-1 rounded-full">
                  <Avatar className="h-6 w-6">
                    {/* Replace the AvatarImage and AvatarFallback components with your actual components */}
                    <AvatarImage src="https://your-profile-image-url.jpg" />
                    <AvatarFallback>Your Initials</AvatarFallback>
                  </Avatar>
                </div>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full border-none outline-none text-gray-200 placeholder-gray-400 bg-transparent"
                />
              </div>
              {/* Render comments */}
              {comments.map((comment, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="border-2 border-pink-600 p-1 rounded-full">
                    <Avatar className="h-6 w-6">
                      {/* Replace the AvatarImage and AvatarFallback components with your actual components */}
                      <AvatarImage
                        src={`https://github.com/${comment.username}.png`}
                      />
                      <AvatarFallback>
                        {comment.username[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <span className="text-sm font-semibold">
                      {comment.username}
                    </span>
                    <span className="text-gray-400 text-xs block">
                      {comment.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramPost;
