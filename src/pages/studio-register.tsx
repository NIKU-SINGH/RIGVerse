import React from 'react';
import { StudioSignup } from '@/components/Register/Studio';
import { UserSignUp } from '@/components/Register/User';
import NavbarDemo from "@/components/Navbar/mainNavBar";

function Register() {
    return (
        <div className="min-h-screen relative flex flex-wrap items-start px-6 md:px-24 py-2 text-white">
            {/* Overlay div for background image with low opacity */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('/background.png')] bg-cover bg-center opacity-50 z-0"></div>

            {/* Content */}
            <NavbarDemo />
            <div className="relative flex w-full h-scren">
                <div className="h-auto w-full rounded-2xl flex flex-col items-center justify-center">
                    <StudioSignup />
                </div>

            </div>
        </div>
    );
}

export default Register;
