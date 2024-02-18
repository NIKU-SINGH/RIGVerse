import { useState, ChangeEvent, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "./components/Header";
import UserMessageCard from "./components/MessageCards/UserMessageCard";
import FriendMessageCard from "./components/MessageCards/FriendMessageCard";
interface responseSchema {
    userMessage?: string;
    replies?: string;
    error?: string;
}

function ChatBox() {

    const [userMessage, setUserMessage] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [replies, setReplies] = useState<responseSchema[]>([]);

    const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("The message is", userMessage, loading);
        setReplies((prevState: responseSchema[]) => {
            return [...prevState, { userMessage }];
        });
        setLoading(true);

        // try {
        //     const res = await axios.post("http://localhost:8000/api/v1/query", {
        //         userMessage: userMessage,
        //     });
        //     const answer: string = res.data.response.text;
        //     setReplies((prevState: responseSchema[]) => {
        //         return prevState.map((entry) =>
        //             entry.userMessage === userMessage ? { ...entry, replies: [] } : entry
        //         );
        //     });
        // } catch (e: unknown) {
        //     console.log(e);
        //     setReplies((prevState: responseSchema[]) => {
        //         return prevState.map((entry) =>
        //             entry.userMessage === userMessage
        //                 ? { ...entry, error: "there was an error" }
        //                 : entry
        //         );
        //     });
        // }
        setUserMessage("");
        setLoading(false);
    };
    console.log(replies);
    // useEffect(() => {
    // },[currentResponse])
    return (
        <div className="w-full">
            {/* Chat */}
            <div className="w-full">
                <div className="rounded-b-xl h-screen flex flex-col">
                    {/* Chat Header */}
                    <Header />
                    <ScrollArea className="h-[83vh] px-8">
                        {replies?.map((data, id) => (
                            <div key={id} className="mt-4">
                                {/* Original users message */}
                                <UserMessageCard message={data.userMessage} />

                                {/* Reply from the friend */}
                                <FriendMessageCard message={data.userMessage} />
                            </div>
                        ))}
                    </ScrollArea>
                    {/* Input */}
                    <div className=" flex items-center justify-center py-2 ">
                        <div className="w-full">
                            {/* <Input /> */}
                            <div className="flex justify-center items-center space-x-2 ">
                                <Input
                                    className="w-4/5 p-6 border-2 border-gray-700 bg-gray-800 rounded-xl text-gray-200"
                                    type="text"
                                    value={userMessage}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        setUserMessage(e.target.value)
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