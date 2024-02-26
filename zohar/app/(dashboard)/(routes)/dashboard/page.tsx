"use client";

import { Code, Image, MessageSquare, Music, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation";


const tools = [
  {
    label: "Conversational Chatbot",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/chatbot",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/code",
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/image",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/music",
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/video",
  }
]

const DashboardPage = () => {
  const router = useRouter();
  return (
  <div className="mb-8 space-y-4">
    <h2 className="text-2xl md:text-4xl font-bold text-center">
      Explore the Power of AI
    </h2>
    <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
      Zohar is a powerful all-in-one AI platform that helps provides you with a chatbot advisor and all the capabilities of AI generation ranging from code and images to music and video.
    </p>
    <div className="px-4 md:px-20 lg:px-32 space-y-4">
      {tools.map((tool)=>(
        <Card
          onClick={() => router.push(tool.href)}
          key={tool.href}
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">
                  {tool.label}
                </div>
              </div>
        </Card>
      ))}
    </div>
  </div>
  );
}

export default DashboardPage;
