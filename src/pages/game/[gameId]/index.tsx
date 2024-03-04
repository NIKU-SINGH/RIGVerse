import React, { useState } from "react";
import { useRouter } from "next/router";
import { SideNavbar } from "@/components/Sidebar/SideNavbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Contact, Play, ShoppingCart } from "lucide-react";

function GameArena() {
  const router = useRouter();
  const query = router.query;
  const game = query.game ? JSON.parse(query.game) : null;
  return (
    <div className="flex w-full overflow-hidden">
      <div className="fixed">
        <SideNavbar />
      </div>
      <div className="flex w-full ml-32 md:ml-64 flex-col px-4 mt-4">
        <div className="w-full">
          <h1 className="text-3xl text-gray-200 font-bold">
            Game : {game?.name}
          </h1>
          <p className="text-lg text-gray-400 mt-4">
            {game?.description ||
              "Step into the world of magic with Hogwarts an open-world action RPG set in the 1800s wizarding world. Forge your destiny as a student at Hogwarts School of Witchcraft and Wizardry."}
          </p>
        </div>
        <div className="bg-gray-800 h-screen w-full rounded-2xl my-10">
          <div className="relative h-full w-full cursor-pointer overflow-hidden rounded-2xl group">
            {/* Image with conditional blur on hover */}
            <Image
              src={game?.image}
              alt="feature"
              height={5000}
              width={5000}
              objectFit="cover"
              className="rounded-2xl h-full w-full transition-all duration-300 ease-in-out group-hover:blur-sm"
            />

            <div
              className="flex flex-col bottom-0 absolute px-4 py-2 w-full rounded-lg h-64"
              style={{
                background: "rgba( 255, 255, 255, 0.25 )",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
              }}
            >
              {/* Text content that appears on hover */}
              <div className="flex flex-col bottom-24  transition-y absolute px-4 py-2 w-full rounded-lg  duration-300 ease-in-out">
                <div className="items-center justify-center flex gap-4 my-2">
                  <button className="flex items-center justify-center w-48 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl">
                    <Play className="mr-2" size={16} /> Play Solo
                  </button>
                  <button className="flex items-center justify-center w-48 bg-gray-800 hover:bg-primary text-white font-bold py-4 px-6 rounded-xl">
                    <Contact className="mr-2" size={16} /> Invite Friend
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameArena;
