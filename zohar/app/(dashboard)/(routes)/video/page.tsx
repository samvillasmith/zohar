"use client";

import * as z from 'zod';
import axios from 'axios';
import Replicate from 'replicate';
import { Heading } from '@/components/heading';
import { VideoIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { 
    Form, 
    FormField, 
    FormItem, 
    FormControl 
} from '@/components/ui/form';
import { formSchema } from './constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Loader } from '@/components/loader';
import { usePremiumModal } from '@/hooks/use-premium-modal';
import { toast } from 'react-hot-toast';


const VideoPage = () => {
    const premiumModal = usePremiumModal();
    const [video, setVideo] = useState<string>();
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        try{
            setVideo(undefined);

            const response = await axios.post("/api/video", values);
            
            setVideo(response.data[0]);

            form.reset();
        } catch(error: any){
            if(error?.response?.status === 403){
                premiumModal.onOpen();
            } else {
                toast.error("An error occurred. Please try again.");
            }
        } finally {
            router.refresh();
        }
    }

    return ( 
            <div>
                <Heading 
                    title="Video Generation" 
                    description="Generate videos using AI with descriptive texts." 
                    icon={VideoIcon} 
                    iconColor="text-orange-500" 
                    bgColor="bg-orange-500/10"
                />
                {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader />
                        </div>
                        )}
            <div className="p-4 md:px-8">
            <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="
                    rounded-lg
                    border
                    w-full
                    p-4
                    md:px-6
                    focus-within:shadow-sm
                    grid
                    grid-cols-12
                    gap-2
                    "
                >
                    <FormField 
                        name="prompt"
                        render={({ field })=>(
                            <FormItem className="col-span-12 lg:col-span-10">
                                <FormControl className="m-0 p-0">
                                    <Input
                                        className="border-0 outline-none focus:visibile:ring-0 focus-visible:ring-transparent"
                                        disabled={isLoading}
                                        placeholder="A clown fish swimming around a coral reef..."
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                        Send
                    </Button>
                </form>
            </Form>
                {video && (
                    <video controls className="w-full aspect-video mt-8 rounded-lg">
                        <source src={video} type="audio/wav"/>
                    </video>
                )}
            </div>
        </div>
    </div>
    );
}
 
export default VideoPage;