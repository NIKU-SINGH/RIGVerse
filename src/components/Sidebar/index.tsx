import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Settings,
  FileUp,
  MessageCircleMore,
  MessageCirclePlus,
  Link,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import OverviewChat from "@/components/Sidebar/OverviewChat";
import { GroupedConversation } from "@/lib/supabase";

interface Temp {
  data: GroupedConversation[];
  index: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: React.FC<Temp> = (data) => {
  const res = data.data;
  // const res2 = data.index;
  // console.log("Slider", res2);
  return (
    <div className="relative border-r-2 border-b-2  border-gray-700 w-96 rounded-lg h-screen ">
      <div className="space-y-4">
        <div className="px-3 py-2">
          <div className="flex items-center p-2 bg-gray-800 rounded-lg text-gray-200">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className=" px-2 text-lg font-semibold tracking-tight flex items-center justify-center">
              User name
            </div>
          </div>
        </div>

        <div className=" text-gray-200 ">
          <h2 className=" px-7 text-lg font-semibold tracking-tight divide-y mb-2">
            Direct Messages
          </h2>
          <ScrollArea className="h-[550px] px-1 scrollbar-hide">
            <div className="space-y-1 py-2 px-3">
              {res?.map(({ addr }, index) => {
                // console.log(index);
                return (
                  <div onClick={() => data.index(index)} key={index}>
                    <OverviewChat addr={addr} />
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </div>

        {/* <div className="absolute bottom-0 flex gap-1 flex-col py-2 px-3 w-full mt-2">
                    <Link href="/settings">
                        <Button variant="ghost" className="border-2 hover:text-white text-gray-600 border-gray-800 hover:bg-blue-500 rounded-xl py-6 w-full justify-start flex items-center gap-2">
                            <Settings className="mr-4 h-6 w-6" />
                            Setting
                        </Button>
                    </Link>
                </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
