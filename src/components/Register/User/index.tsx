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

// Form Validation
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    verificationCode: z.string().min(6).max(6),
    bio: z.string().max(1000),
})

export function UserSignUp() {
    const [selected, setSelected] = React.useState(false);
    const [showNext, setShowNext] = React.useState(false);
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            verificationCode: "",
            bio: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const handleSubmit = () => {
        console.log("Submitted");
        router.push('/studio-register');
    }
    const handleSelect = () => {
        setSelected(!selected);
    }

    const handleNextClick = () => {
        setShowNext(true); // Show the NextComponent
    }


    return (
        <Card className="w-full max-w-lg mx-auto my-4 rounded-2xl bg-transparent border-2 text-gray-200 border-gray-700 bg-gray-800">
            <CardHeader className="text-gray-200">
                <CardTitle>Register</CardTitle>
                <CardDescription>Get a chance to play amazing games.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <>
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input className="bg-transparent border-gray-700 w-full" id="name" placeholder="Enter your name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="email" className="bg-transparent border-gray-700 w-full" placeholder="Enter your email" />
                                    </FormControl>
                                    <FormMessage /> {/* Display validation message if needed */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="verificationCode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Verification code</FormLabel>
                                    <FormControl>
                                        <div className="flex gap-4 items-center">
                                            <Input {...field} className="bg-transparent border-gray-700 w-full" placeholder="Enter 6 digit Verification Code .." />
                                            <Button type="button" onClick={handleNextClick} className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl">
                                                Send Code
                                            </Button>
                                        </div>
                                    </FormControl>

                                    <FormMessage /> {/* Display validation message if needed */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} className="bg-transparent border-gray-700 w-full" id="bio" placeholder="Tell us about yourself." />
                                    </FormControl>
                                    <FormMessage /> {/* Display validation message if needed */}
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Label htmlFor="studio">Register as a Studio</Label>
                                <Switch id="studio" onClick={handleSelect} />
                            </div>
                            {selected && (
                                <Button type="button" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl">
                                    Next
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button onClick={form.handleSubmit(onSubmit)} type="submit" className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl">
                    SUBMIT
                </Button>
            </CardFooter>
        </Card>
    )
}
