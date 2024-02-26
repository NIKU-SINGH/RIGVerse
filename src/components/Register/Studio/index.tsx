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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const formSchema = z.object({
    studioname: z.string().min(2).max(50),
    estd_year: z.string(),
    game_category: z.array(z.string().max(1000)), // Changed to an array of strings
    country: z.string().max(20),
    website_url: z.string().url(),
    user_list: z.string().max(1000),
})

export function StudioSignup() {
    const [selected, setSelected] = React.useState(false);
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]); // Initialize as an empty array of strings    
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            studioname: "",
            estd_year: "",
            game_category: [],
            country: "",
            website_url: "",
            user_list: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        router.push('/studio/create-game');
    }

    // Function to handle selection changes
    const handleSelect = (value: string) => {
        // // Check if the value is already selected
        // if (selectedCategories.includes(value)) {
        //     // If selected, remove it
        //     setSelectedCategories(selectedCategories.filter((category) => category !== value));
        // } else {
        //     // If not selected, add it
        //     setSelectedCategories([...selectedCategories, value]);
        // }
        console.log(value);
        selectedCategories.push(value);
    };



    return (
        <Card className="w-full max-w-lg mx-auto my-4 rounded-2xl bg-transparent border-2 text-gray-200 border-gray-700 bg-gray-800">
            <CardHeader className="text-gray-200">
                <CardTitle>Register as a Studio</CardTitle>
                <CardDescription>Get a chance to play amazing games.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="studioname"
                            render={({ field }) => (
                                <>
                                    <FormItem>
                                        <FormLabel>Studio Name</FormLabel>
                                        <FormControl>
                                            <Input className="bg-transparent border-gray-700 w-full" id="name" placeholder="Enter Studio Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="estd_year"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Enter Established year</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="date" className="bg-transparent border-gray-700 w-full" placeholder="Enter estbd date" />
                                    </FormControl>
                                    <FormMessage /> {/* Display validation message if needed */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="game_category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Enter Game Category</FormLabel>
                                    <FormControl>
                                        <div>
                                            <Select >
                                                <SelectTrigger className="bg-transparent border-gray-700 w-full">
                                                    <SelectValue placeholder="Select categories" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-gray-800 text-white hover:cursor-pointer">
                                                    {/* Iterate over categories and make them selectable */}
                                                    {['light', 'dark', 'system'].map((category) => (
                                                        <SelectItem
                                                            key={category}
                                                            value={category}
                                                            onClick={() => console.log(category)}
                                                        >
                                                            {category}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </FormControl>
                                    <FormMessage /> {/* Display validation message if needed */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="string" className="bg-transparent border-gray-700 w-full" placeholder="Enter country" />
                                    </FormControl>
                                    <FormMessage /> {/* Display validation message if needed */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="website_url"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Enter Website URL</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="string" className="bg-transparent border-gray-700 w-full" placeholder="Enter website URL" />
                                    </FormControl>
                                    <FormMessage /> {/* Display validation message if needed */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="user_list"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Enter Users List</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="string" className="bg-transparent border-gray-700 w-full" placeholder="Enter the User list" />
                                    </FormControl>
                                    <FormMessage /> {/* Display validation message if needed */}
                                </FormItem>
                            )}
                        />


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
