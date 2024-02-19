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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/router';
export function UserSignUp() {
    const router = useRouter();
    const handleSubmit = () => {
        console.log("Submitted");
        router.push('/explore');
    }
    return (
        <Card className="w-[350px] rounded-2xl bg-transparent border-2 text-gray-200 border-gray-700 bg-gray-800">
            <CardHeader className="text-gray-200">
                <CardTitle>Register as a User</CardTitle>
                <CardDescription>Get Chance to play amazing games.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input className="bg-transparent border-gray-700" id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email</Label>
                            <Input className="bg-transparent border-gray-700" id="name" placeholder="Name of your project" />
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
