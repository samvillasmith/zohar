"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { 
    Code,
    ImageIcon, 
    LayoutDashboard, 
    MessageSquare, 
    Music, 
    Settings, 
    VideoIcon } from "lucide-react";
import { usePathname } from 'next/navigation';
import { FreeCounter } from '@/components/free-counter';

import { cn } from "@/lib/utils";


const montserrat = Montserrat({ 
    weight: "600", 
    subsets: ["latin"] });

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversational Chatbot",
        icon: MessageSquare,
        href: "/chatbot",
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-rose-700"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700"
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500"
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-700"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings"
    }
];

interface SidebarProps {
    apiLimitCount: number;
};

const Sidebar = ({
    apiLimitCount = 0
}: SidebarProps) => {
    const pathname = usePathname();
    return ( 
        <div className="space-y-4 py-5 flex flex-col h-full bg-[#030a18] text-white">
            <div className="px-3 py-5 flex-1">
                <Link href="/dashboard" className="flex items-center pl-1 mb-4">
                    <div className="relative w-20 h-20 mr-1 px-10 py-6">
                        <Image 
                            fill
                            alt="logo"
                            src="/zohar_logo2.png"
                        />
                        </div>
                        <h1 className={cn("text-3xl font-bold", montserrat.className)}>
                            Zohar
                        </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route)=>(
                        <Link 
                        href={route.href} 
                        key={route.href}
                        className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", 
                        pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <FreeCounter 
                apiLimitCount={apiLimitCount}
            />
        </div>
     );
}
 
export default Sidebar;