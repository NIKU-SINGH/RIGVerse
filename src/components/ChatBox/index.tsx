import { useState, ChangeEvent, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Send, Video } from "lucide-react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import llmLogo from "/llmLogo.png";
import { Skeleton } from "@/components/ui/skeleton";

interface responseSchema {
    question?: string;
    answer?: string;
    error?: string;
}

function ChatBox() {

    const [question, setQuestion] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [responses, setResponses] = useState<responseSchema[]>([]);

    const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("The question is", question, loading);
        setResponses((prevState: responseSchema[]) => {
            return [...prevState, { question }];
        });
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:8000/api/v1/query", {
                query: question,
            });
            const answer: string = res.data.response.text;
            setResponses((prevState: responseSchema[]) => {
                return prevState.map((entry) =>
                    entry.question === question ? { ...entry, answer } : entry
                );
            });
        } catch (e: unknown) {
            console.log(e);
            setResponses((prevState: responseSchema[]) => {
                return prevState.map((entry) =>
                    entry.question === question
                        ? { ...entry, error: "there was an error" }
                        : entry
                );
            });
        }
        setQuestion("");
        setLoading(false);
    };
    console.log(responses);



    // useEffect(() => {
    // },[currentResponse])
    return (
        <div className="w-full">
            {/* Chat */}
            <div className="w-full">
                <div className="rounded-b-xl h-screen flex flex-col">
                    <div className="w-full border-2 border-gray-800 bg-blue-500 text-gray-200 rounded-xl h-10 md:h-16 p-4 flex items-center mb-4 justify-between">
                        {/* Profile photo and status */}
                        <div className="flex items-center gap-x-2">
                            <Avatar className="h-8 w-8" >
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="-space-y-1">
                                <div className="text-lg font-semibold tracking-tight">User name</div>
                                <div className="text-xs font-light tracking-tight">Online</div>
                            </div>
                        </div>

                        {/* Call and viceo caht */}
                        <div className="px-2 text-lg font-semibold tracking-tight flex items-center">
                            <div className="mx-4 flex items-center gap-1"><Phone /> Call</div>
                            <div className="m-4 flex items-center gap-1"><Video /> Video call</div>
                        </div>

                    </div>
                    <ScrollArea className="h-[83vh] px-8">
                        {responses?.map((data, id) => (
                            <div key={id} className="mt-4">
                                {/* Original users message */}
                                <div className="mt-2 flex space-x-2 flex-row-reverse">
                                    {/* User Avatar */}
                                    <Avatar className="ml-4">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="flex items-center bg-blue-500 rounded-lg p-2 px-4 max-w-md mx-auto text-white whitespace-normal break-words">
                                        {data.question}
                                    </div>
                                </div>

                                {/* Reply from the friend */}
                                <div className="mt-2 flex space-x-2 ">
                                    {/* User Avatar */}
                                    <Avatar className="mx-2">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    {/* Replied meessage */}
                                    <div className="flex items-center rounded-lg p-2 px-4 bg-gray-800 border-2 border-gray-700  max-w-md mx-auto text-white">
                                        {data.question}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </ScrollArea>
                    {/* Input */}
                    <div className=" flex items-center justify-center py-2 ">
                        <div className="w-full">
                            {/* <Input /> */}
                            <div className="flex justify-center items-center space-x-2 ">
                                <Input
                                    className="w-4/5 p-6 border-2 border-gray-700 bg-gray-800 rounded-xl"
                                    type="text"
                                    value={question}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        setQuestion(e.target.value)
                                    }
                                    placeholder="Type your message here..."
                                />
                                <Button
                                    className="w-12 h-12 hover:bg-blue-500 rounded-full bg-gray-800 border-2 border-gray-700"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    <Send />
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default ChatBox;