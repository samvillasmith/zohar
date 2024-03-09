"use client";

import axios from "axios";
import { useState } from "react";
import { 
    Dialog, 
    DialogContent, 
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter

} from "@/components/ui/dialog";
import { usePremiumModal } from "@/hooks/use-premium-modal";
import { Badge } from "@/components/ui/badge";
import { 
    Code, 
    Image, 
    MessageSquare, 
    Music, 
    Video, 
    Check ,
    Zap
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

const tools = [
    {
      label: "Conversational Chatbot",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: "Code Generation",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "Image Generation",
      icon: Image,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      label: "Music Generation",
      icon: Music,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      label: "Video Generation",
      icon: Video,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    }
  ]

export const PremiumModal = () => {
    const proModal = usePremiumModal();
    const [loading, setLoading] = useState(false);
    
    const onSubscribe = async () => {
        try {
            setLoading(true);
            const response = axios.get("/api/stripe");
            window.location.href = (await response).data.url;
        } catch (error){
            toast.error("Something went wrong.")
        } finally {
            setLoading(false);
        }
    }

    return ( 
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        Upgrade to Premium and Enjoy 
                        <br></br>
                        <div className="flex justify-center items-center">
                        Unlimited AI Generations 
                        </div>
                        <div className="flex items-center gap-x-2 font-bold py-1">
                        <Badge className="uppercase text-sm py-1" variant="premium">
                            Premium
                        </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool)=> (
                            <Card
                                key={tool.label}
                                className="p-3 border-black/5 flex items-center justify-between"
                            >   
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-6 h-6", tool.color)} />
                                    </div>
                                        <div className="font-semibold text-sm">
                                            {tool.label}
                                        </div>
                                    <Check className="text-primary w-5 h-5"/>
                                </div>
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button 
                        onClick={onSubscribe}
                        disabled={loading}
                        size="lg" 
                        variant="premium" 
                        className="w-full"
                    >
                        Upgrade
                    <Zap className="w-4 h-4 ml-2 fill-white"/>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
     );
}