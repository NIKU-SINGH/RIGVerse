import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import Spotlight from "@/components/ui/Spotlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { Play, NotebookPen } from "lucide-react";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="h-[40rem] rounded-3xl relative w-[80vw] bg-black flex items-center justify-center overflow-hidden">
      <div className="h-[50rem] w-full bg-black  bg-grid-white/[0.2] relative flex flex-col  items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="w-full absolute inset-0 h-screen">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="blue"
          />
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div> */}
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            RIGVerse <br /> is the New Trend.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            RIGLabs represents the forefront of gaming innovation, serving as a
            dynamic studio that intertwines players with their favorite games
            through a cutting-edge Web3 platform. Our mission is to
            revolutionize the gaming landscape by leveraging blockchain
            technology and decentralized principles to empower players and
            developers alike. With a commitment to fostering community
            engagement and creativity.
          </p>
        </div>
        <div className="w-full flex items-center justify-center mt-8 gap-4 z-50 ">
          <Link href="/explore">
            <button className="flex items-center justify-center w-48 h-12 bg-blue-500 cursor-pointer hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl">
              <Play className="mr-2" size={16} /> Play
            </button>
          </Link>
          <Link href="/register">
            <button className="flex items-center justify-center w-48 h-12 border-2 cursor-pointer border-gray-700 bg-gray-800 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl">
              <NotebookPen className="mr-2" size={16} /> Register
            </button>
          </Link>

          {/* <button className="p-[3px] relative w-96 rounded-full">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-purple-500" />
                    <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
                        Lit up borders
                    </div>
                </button> */}
        </div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </div>
  );
}
