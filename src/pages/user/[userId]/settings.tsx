import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SideNavbar } from '@/components/SideNavbar';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';

function UserSettings() {
    const router = useRouter();
    const { userId } = router.query;
    const [userProfile, setUserProfile] = useState({
        userName: 'User name', // Default username
        email: '', // Default email
        password: '', // Default password
    });
    const [profileImage, setProfileImage] = useState("https://github.com/shadcn.png"); // Default profile image

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
        console.log("Image changed")
    };

    // Handle form field changes
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Profile Updated", userProfile);
        // Here, you would typically integrate an API call to update the user profile
    };

    return (
        <div className='flex w-full overflow-hidden'>
            <SideNavbar />

            <div className='flex flex-col px-4 mt-10 w-full text-gray-200'>
                <div className="w-full border-2 border-gray-800 bg-blue-500 rounded-xl h-10 md:h-16 p-4 flex items-center mb-4 justify-between">
                    <div className="flex items-center gap-x-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={profileImage} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="-space-y-1">
                            <div className="text-lg font-semibold tracking-tight">{userProfile.userName}</div>
                            <div className="text-xs font-light tracking-tight">Online</div>
                        </div>
                    </div>
                </div>

                <h2 className="mt-4 pb-2 text-2xl font-semibold">
                    Account Settings
                </h2>

                {/* Profile image upload */}
                <div className="mb-4">
                    <h2 className="mt-4 pb-2 text-lg font-semibold">
                        Profile Image
                    </h2>
                    <div className='flex gap-6'>
                        <div className='relative h-48 w-48 my-2 overflow-hidden bg-red-400 rounded-full'>
                            <Image src='/background.png' alt='logo' layout='fill' objectFit='cover' />
                        </div>
                        <div className='flex flex-col gap-4 items-start justify-center'>

                            <input
                                type="file"
                                onChange={handleImageChange}
                            />
                            <button
                                className="flex items-center justify-center h-10 bg-blue-500 cursor-pointer hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl"
                            // onClick={}
                            >
                                Upload
                            </button>
                        </div>
                    </div>

                </div>

                {/* User settings form */}
                <div className='w-96'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="userName">
                                <h2 className="mt-4 pb-2 text-lg font-semibold">
                                    Username
                                </h2>
                            </label>
                            <input type="text" name="userName" value={userProfile.userName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="userName">
                                <h2 className="mt-4 pb-2 text-lg font-semibold">
                                    Email
                                </h2>
                            </label>
                            <input type="email" name="email" value={userProfile.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2" htmlFor="userName">
                                <h2 className="mt-4 pb-2 text-lg font-semibold">
                                    Password
                                </h2>
                            </label>
                            <input type="password" name="password" value={userProfile.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="submit">
                                Save Changes
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default UserSettings;
