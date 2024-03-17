import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import MatchCard from "@/components/Cards/MatchCard";
import PurchaseCard from "@/components/Cards/PurchaseCard";
import SmallCard from "@/components/Cards/PlayCard";
import Link from "next/link";
import Image from "next/image";

function Index() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  return (
    <div className="fixed z-50 h-screen left-0 ">
      <div>
        {isExpanded ? (
          <>
            <div className="absolute my-10">
              <div className="relative inline-flex h-[85vh] w-80  overflow-hidden rounded-e-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex flex-col gap-4 p-2  h-full w-full cursor-pointer rounded-e-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <Button className="z-10" onClick={toggleExpanded}>
                    Collapse
                  </Button>
                  <ScrollArea className="h-[100vh] rounded-xl  p-4">
                    <div className="">
                      {/* Last matches played */}
                      <h3 className="text-center mt-2 scroll-m-20 text-lg font-semibold tracking-tight">
                        Recent Games
                      </h3>
                      {/* Match card */}
                      {/* Propos would be name, points/rating, userimage */}
                      {/* need to send both the users data player 1 vs player 2 */}
                      <MatchCard name="Aman" points="100" imageUrl="some url" />
                      <MatchCard name="Aman" points="100" imageUrl="some url" />
                      <MatchCard name="Aman" points="100" imageUrl="some url" />
                      <div></div>
                      <Link href="/recent-matches">
                        <Button
                          variant="outline"
                          className="w-full bg-transparent border-primary hover:bg-primary hover:text-white"
                        >
                          View All
                        </Button>
                      </Link>
                    </div>

                    <div className="mt-8">
                      {/* Last matches played */}
                      <h3 className="text-center mt-2 scroll-m-20 text-lg font-semibold tracking-tight">
                        Recent Play history
                      </h3>

                      <div>
                        <PurchaseCard
                          name="Call of Duty"
                          price="100"
                          imageUrl="/games/codPoster.jpg"
                          description="It is the most popular game"
                        />
                        <PurchaseCard
                          name="Fifa"
                          price="100"
                          imageUrl="/games/fifa19.jpg"
                          description="It is the most popular game"
                        />
                        <PurchaseCard
                          name="COD MW3"
                          price="100"
                          imageUrl="/games/codmw.jpg"
                          description="It is the most popular game"
                        />
                        <PurchaseCard
                          name="Assasins Creed"
                          price="100"
                          imageUrl="/games/creed4.jpg"
                          description="It is the most popular game"
                        />
                        <PurchaseCard
                          name="Valorant"
                          price="100"
                          imageUrl="/games/valorant1.jpg"
                          description="It is the most popular game"
                        />
                      </div>
                      <Link href="/recent-purchases">
                        <Button
                          variant="outline"
                          className="w-full bg-transparent border-primary hover:bg-primary hover:text-white"
                        >
                          View All
                        </Button>
                      </Link>
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute my-10">
            <div className="relative inline-flex h-[85vh] w-32 overflow-hidden rounded-e-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex flex-col gap-4 p-2 h-full w-full cursor-pointer  rounded-e-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <Button className="bottom-0 relative" onClick={toggleExpanded}>
                  Expand
                </Button>
                <ScrollArea className="h-[100vh] ">
                  <div className="flex gap-4 flex-col">
                    {/* Recent played games */}
                    <SmallCard
                      name="Valorant"
                      imageUrl="/games/valorant1.jpg"
                    />
                    <SmallCard
                      name="Call of Duty"
                      imageUrl="/games/codPoster.jpg"
                    />
                    <SmallCard
                      name="Call of Duty"
                      imageUrl="/games/codmw.jpg"
                    />
                    <SmallCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
                    <SmallCard
                      name="Assasins Creed"
                      imageUrl="/games/creed4.jpg"
                    />
                    <SmallCard name="FIFA 23" imageUrl="/games/fifa23.jpeg" />
                    <SmallCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
                    <SmallCard name="FIFA 19" imageUrl="/games/fifa19.jpg" />
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
