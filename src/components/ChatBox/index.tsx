import { useState, ChangeEvent, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
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
        <div className="w-full flex flex-col">
            {/* Chat */}
            <div className="w-full">
                <div className="bg-gray-800 rounded-b-xl h-screen flex flex-col">
                    <div className="w-full bg-primary rounded-r-lg h-10 md:h-16 p-4 flex items-center mb-4 justify-between">
                        {/* Profile photo and status */}
                        <div className="flex items-center gap-x-2">
                            <Avatar className="h-8 w-8" >
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="text-lg font-semibold tracking-tight">User name</div>
                                <div className="text-xs font-light tracking-tight">Online</div>
                            </div>
                        </div>

                        {/* Call and viceo caht */}
                        <div className="px-2 text-lg font-semibold tracking-tight flex items-center">
                            <div className="mx-4">Call</div>
                            <div className="m-4">Video call</div>
                        </div>

                    </div>
                    <ScrollArea className="h-[83vh] px-8">
                        {responses?.map((data, id) => (
                            <div key={id} className="mt-4">
                                {/* Question Box */}
                                <div className="mt-2 flex space-x-2">
                                    {/* User Avatar */}
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    {/* Question Box */}
                                    <div className="  bg-gray-700 rounded-md p-4 w-full text-left">
                                        {data.question}
                                    </div>
                                </div>
                                {/* //Answer Box */}
                                <div className="mt-4 flex space-x-2  flex-row-reverse">
                                    {/* Avatar */}
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    {/* Messages */}
                                    <div className="rounded-md p-4 w-full text-left">
                                        {!data.answer ? (
                                            <div>
                                                <Skeleton className=" h-[20px] rounded-full m-1" />
                                                <Skeleton className=" h-[20px] rounded-full m-1" />
                                                <Skeleton className=" h-[20px] rounded-full m-1" />
                                            </div>
                                        ) : (
                                            data.answer
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ScrollArea>
                    {/* Input */}
                    <div className=" flex items-center justify-center py-2">
                        <div className="w-full">
                            {/* <Input /> */}

                            <div className="flex justify-center items-center space-x-2">
                                <Input
                                    className="w-4/5 p-6"
                                    type="text"
                                    value={question}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        setQuestion(e.target.value)
                                    }
                                    placeholder="Type your message here..."
                                />
                                <Button
                                    className="w-20 p-6 bg-primary"
                                    type="submit"
                                    onClick={handleSubmit}
                                    onKeyPress={(e) => {
                                        if (e.key === "Enter") console.log("Bhaina enter");
                                    }}
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