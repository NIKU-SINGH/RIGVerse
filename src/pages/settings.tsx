import React, { useState } from "react";
import { useRouter } from "next/router";
import UserSidebar from "@/components/Sidebar/UserSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Facebook, Twitter, GitHub, Dribbble, Settings } from 'lucide-react';
import { SideNavbar } from "@/components/Sidebar/SideNavbar";

function UserSettings() {
        const router = useRouter();
        const { userId } = router.query;
        const [userProfile, setUserProfile] = useState({
                userName: "User name", // Default username
                email: "", // Default email
                password: "", // Default password
        });
        const [profileImage, setProfileImage] = useState(
                "https://github.com/shadcn.png"
        ); // Default profile image

        // Handle profile image change
        const handleImageChange = () => {
                // const file = e.target.files[0];
                // const reader = new FileReader();
                // reader.onloadend = () => {
                //     if (reader.result !== null) {
                //         setProfileImage(reader.result.toString());
                //     }
                // };
                // reader.readAsDataURL(file);
                console.log("Image changed");
        };

        // Handle form field changes
        const handleChange = (e: { target: { name: any; value: any } }) => {
                setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
        };

        // Handle form submission
        const handleSubmit = (e: { preventDefault: () => void }) => {
                e.preventDefault();
                console.log("Profile Updated", userProfile);
                // Here, you would typically integrate an API call to update the user profile
        };

        return (
                <div className="flex w-full overflow-hidden">
                        <div className='fixed'>
                                <SideNavbar />
                        </div>
                        <div className='flex w-full ml-32 md:ml-64 flex-col px-4 mt-4'>
                                {/* Headiung */}
                                <div className="w-full bg-purple-500 p-4 rounded-2xl">
                                        <h1 className="text-2xl text-gray-200 font-semibold">
                                                Profile Setting
                                        </h1>
                                </div>

                                {/* Profile image upload */}
                                <div className="flex gap-4">
                                        <div className="my-4 p-4 rounded-2xl bg-gray-800 w-96">
                                                {/* <h2 className="text-lg font-semibold">Profile Image</h2> */}
                                                <div className="flex gap-2 flex-col items-center justify-center">
                                                        <div className="relative h-36 w-36 my-2 overflow-hidden rounded-full">
                                                                <Image
                                                                        src="/background.png"
                                                                        alt="logo"
                                                                        layout="fill"
                                                                        objectFit="cover"
                                                                />
                                                        </div>
                                                        <div>
                                                                <h2 className="text-xl font-semibold">Username</h2>
                                                        </div>
                                                        <div className="text-center">
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora borum nostrum nemo at similique!</p>
                                                        </div>
                                                        <div className="flex  gap-4 items-start justify-center">
                                                                {/* <input type="file" onChange={handleImageChange} />
                                                        <button className="flex items-center justify-center h-10 bg-blue-500 cursor-pointer hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl"
                                                        >
                                                                Upload
                                                        </button> */}
                                                                <form>
                                                                        <label className="block">
                                                                                <span className="sr-only">Choose profile photo</span>
                                                                                <input type="file" className="block border-2 border-gray-700 rounded-lg text-sm text-gray-500
                                                                                file:me-4 file:py-2 file:px-4
                                                                                file:rounded-lg file:border-0
                                                                                file:text-sm file:font-semibold
                                                                                file:bg-blue-600 file:text-white
                                                                                hover:file:bg-blue-700
                                                                                file:disabled:opacity-50 file:disabled:pointer-events-none
                                                                                dark:file:bg-blue-500
                                                                                dark:hover:file:bg-blue-400 " />
                                                                        </label>
                                                                </form>
                                                        </div>
                                                </div>
                                        </div>

                                        {/* User settings form */}
                                        <div className="my-4 p-4 rounded-2xl bg-gray-800 w-full">
                                                <form onSubmit={handleSubmit}>
                                                        <div className="mb-4">
                                                                <label
                                                                        className="block text-sm font-bold mb-2"
                                                                        htmlFor="userName"
                                                                >
                                                                        <h2 className="mt-4 pb-2 text-lg font-semibold">Username</h2>
                                                                </label>
                                                                <input
                                                                        type="text"
                                                                        name="userName"
                                                                        value={userProfile.userName}
                                                                        onChange={handleChange}
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                />
                                                        </div>

                                                        <div className="mb-4">
                                                                <label
                                                                        className="block text-sm font-bold mb-2"
                                                                        htmlFor="userName"
                                                                >
                                                                        <h2 className="mt-4 pb-2 text-lg font-semibold">Email</h2>
                                                                </label>
                                                                <input
                                                                        type="email"
                                                                        name="email"
                                                                        value={userProfile.email}
                                                                        onChange={handleChange}
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                />
                                                        </div>

                                                        <div className="mb-6">
                                                                <label
                                                                        className="block text-sm font-bold mb-2"
                                                                        htmlFor="userName"
                                                                >
                                                                        <h2 className="mt-4 pb-2 text-lg font-semibold">Password</h2>
                                                                </label>
                                                                <input
                                                                        type="password"
                                                                        name="password"
                                                                        value={userProfile.password}
                                                                        onChange={handleChange}
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                                />
                                                        </div>

                                                        <div className="flex items-center justify-between">
                                                                <button
                                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                                                                        type="submit"
                                                                >
                                                                        Save Changes
                                                                </button>
                                                        </div>
                                                </form>
                                        </div>
                                </div>

                                {/* Profile settinmg */}
                                <div className="bg-gray-800 my-4 p-8 rounded-lg shadow-lg max-w-md w-full">
                                        <h2 className="text-2xl font-bold mb-6 text-gray-200">Social Accounts</h2>

                                        <div className="space-y-4">
                                                <div className="flex justify-between items-center py-2">
                                                        <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                                                <span className="ml-2 text-sm">Github account</span>
                                                        </div>
                                                        <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                                                                Disconnect
                                                        </button>
                                                </div>

                                                <div className="flex justify-between items-center py-2">
                                                        <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> 
                                                                <span className="ml-2 text-sm">Twitter account</span>
                                                        </div>
                                                        <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                                                                Disconnect
                                                        </button>
                                                </div>

                                        </div>

                                        <div className="mt-6">
                                                <button className="w-full bg-blue-600 text-white px-3 py-2 rounded-lg">
                                                        Save all
                                                </button>
                                        </div>
                                </div>
                        </div>

                </div>
        );
}

export default UserSettings;
