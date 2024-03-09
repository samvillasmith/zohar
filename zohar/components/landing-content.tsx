"use client";
import { Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";

const features = [
    {
        title: "Conversational Chatbot",
        description: "Engage our chatbot in conversation for advice or support.",
        image: "/chatbot.png",
    },
    {
        title: "Image Generation",
        description: "Generate images from text descriptions. Want a picture of a cat in a Corvette? Just ask!",
        image: "/image.png",
    },
    {
        title: "Video Generation",
        description: "Generate detailed videos of anything you can dream of from simple text descriptions. ",
        image: "/video.png",
    },
    {
        title: "Music Generation",
        description: "Generate anything from guitar solos to synthwave beats using our AI.",
        image: "/music.png",
    },
    {
        title: "Code Generation",
        description: "Whether you are a software engineer or just learning how to code, our AI can help you.",
        image: "/code.png",
    },
    {
        title: "GPT-4",
        description: "Use the latest GPT-4 model consisting of 1.76 trillion parameters for generating content.",
        image: "/text.png",
    },
    {
        title: "No Contracts",
        description: "Pay one low price monthly with no suprises or complex credit or token systems. Cancel anytime.",
        image: "/contract.png",
    },
    {
        title: "Chat Support",
        description: "Premium chat support for all customers. We are here to help you with any questions or issues.",
        image: "/chat.png",
    }
];

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Features
            </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {features.map((item)=>(
                <Card 
                    key={item.title} 
                    className="bg-[#192339] border-none text-white"
                    >
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-2">
                            <div>
                                <p className="text-lg">{item.title}</p>
                            </div>
                        </CardTitle>
                            <CardContent className="pt-4 px-0">
                            <p className="text-zinc-400 text-sm">{item.description}</p>
                            </CardContent>
                    </CardHeader>
                </Card>
            ))}
        </div>
        </div>
    )
}