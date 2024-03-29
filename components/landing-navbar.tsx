"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

export const LandingNavbar =()=>{
    const { isSignedIn } = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-16 w-16 mr-4">
                    <Image 
                        fill
                        alt="zohar logo"
                        src="/zohar_logo2.png"
                    />
                    <h1 className={cn("text-3xl font-bold text-white px-20 py-4", font.className)}>
                        Zohar
                    </h1>
                </div>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="outline" className="rounded-full">
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}