import React from "react";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";

import Spotlight from "@/components/ui/Spotlight";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Landing() {
    return (
        <div className="h-[40rem] rounded-3xl relative w-[80vw] bg-black flex items-center justify-center overflow-hidden">
            <div className="h-[50rem] w-full bg-black  bg-grid-white/[0.2] relative flex flex-col  items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="w-full absolute inset-0 h-screen">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="purple"
                    />
                    {/* <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    /> */}
                </div>
                <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">

                    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        RIGLabs <br /> is the New Trend.
                    </h1>
                    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                        RIGLabs represents the forefront of gaming innovation, serving as a dynamic
                        studio that intertwines players with their favorite games through a cutting-edge
                        Web3 platform. Our mission is to revolutionize the gaming landscape by
                        leveraging blockchain technology and decentralized principles to empower
                        players and developers alike. With a commitment to fostering community engagement and creativity.
                    </p>
                </div>
                <div className="w-full flex items-center justify-center mt-8 gap-2 ">
                    <button className="w-48 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full hover:bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Play
                        </span>
                    </button>
                    <button className="w-48 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full hover:bg-transparent bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Register
                        </span>
                    </button>

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