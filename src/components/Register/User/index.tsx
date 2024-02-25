import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/router';
import { Switch } from "@/components/ui/switch"
export function UserSignUp() {
    const router = useRouter();
    const handleSubmit = () => {
        console.log("Submitted");
        router.push('/explore');
    }
    const [selected, setSelected] = React.useState(false);
    const handleSelect = () => {
        setSelected(!selected);
    }

    return (
        <Card className="w-1/2 rounded-2xl bg-transparent border-2 text-gray-200 border-gray-700 bg-gray-800">
            <CardHeader className="text-gray-200">
                <CardTitle>Register</CardTitle>
                <CardDescription>Get Chance to play amazing games.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex items-center justify-center gap-4">
                            <Label htmlFor="name" className="w-32">Name</Label>
                            <Input className="bg-transparent border-gray-700" id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <Label htmlFor="name" className="w-32">Email</Label>
                            <Input className="bg-transparent border-gray-700" id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <Label htmlFor="name" className="w-32">Verification Code</Label>
                            <Input className="bg-transparent border-gray-700" id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <Label htmlFor="name" className="w-32">Bio</Label>
                            {/* <Input className="bg-transparent border-gray-700" id="name" placeholder="Name of your project" /> */}
                            <Textarea className="bg-transparent border-gray-700" placeholder="Type your message here." />
                        </div>
                        <div className="flex items-center gap-4">
                            <Label htmlFor="name" className="w-32">Register as a Studio</Label>
                            <Switch id="studio" onClick={handleSelect} />
                            <div className="w-full flex justify-end gap-4">
                                {
                                    selected ? (
                                        <div className="flex items-center justify-center gap-4">
                                            <button onClick={handleSubmit} className="flex items-center justify-center  h-10 bg-blue-500 cursor-pointer hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl">
                                                Next
                                            </button>
                                        </div>
                                    ) : null
                                }
                                <button onClick={handleSubmit} className="flex items-center justify-center h-10 bg-blue-500 cursor-pointer hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <button onClick={handleSubmit} className="flex items-center justify-center w-full h-10 bg-blue-500 cursor-pointer hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl">
                    REGISTER
                </button>
            </CardFooter>
        </Card>
    )
}
