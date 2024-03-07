"use client";

import * as z from 'zod';
import axios from 'axios';
import { Heading } from '@/components/heading';
import { Download, DownloadIcon, ImageIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { 
    Form, 
    FormField, 
    FormItem, 
    FormControl 
} from '@/components/ui/form';
import { amountOptions, formSchema, resolutionOptions } from './constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Loader } from '@/components/loader';
import { cn } from '@/lib/utils';
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue } from '@/components/ui/select';
import { Card, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { usePremiumModal } from '@/hooks/use-premium-modal';

const ImagePage = () => {
    const router = useRouter();
    const premiumModal = usePremiumModal();
    const [ images, setImages ] = useState<string[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
            amount: "1",
            resolution: "512x512"
        }
    });

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        try{
            setImages([]);
            // console.log(values)
            const response = await axios.post("/api/image", values);
            const urls = response.data.map((image: { url: string})=> image.url);
            setImages(urls);
            form.reset();
        } catch(error: any){
            if(error?.response?.status === 403){
                premiumModal.onOpen();
            }
        } finally {
            router.refresh();
        }
    }

    return ( 
            <div>
                <Heading 
                    title="Generate Images" 
                    description="Ask the AI to generate images" 
                    icon={ImageIcon} 
                    iconColor="text-pink-700" 
                    bgColor="bg-pink-700/10"
                />
                {isLoading && (
                        <div className="p-20">
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
                            <FormItem className="col-span-12 lg:col-span-8">
                                <FormControl className="m-0 p-0">
                                    <Input
                                        className="border-0 outline-none focus:visibile:ring-0 focus-visible:ring-transparent"
                                        disabled={isLoading}
                                        placeholder="Tell Zohar what you want to see i.e. ('Generate an image of a unicorn')."
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="amount"
                        render={({ field })=>(
                            <FormItem className="col-span-12 lg:col-span-2">
                                <Select
                                    disabled={isLoading}
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <div className="flex justify-center">
                                        Quantity
                                    </div>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue defaultValue={field.value}/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {amountOptions.map((option)=>(
                                            <SelectItem
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>  
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="resolution"
                        render={({ field })=>(
                            <FormItem className="col-span-12 lg:col-span-2">
                                <Select
                                    disabled={isLoading}
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <div className="flex justify-center">
                                        Resolution
                                    </div>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue defaultValue={field.value}/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {resolutionOptions.map((option)=>(
                                            <SelectItem
                                                key={option.value}
                                                value={option.value}
                                            >

                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>  
                            </FormItem>
                        )}
                    />
                    <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                        Send
                    </Button>
                </form>
            </Form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
               {images.map((src)=>(
                <Card 
                    key={src}
                    className="rounded-lg overflow-hidden"
                >
                   <div className="relative aspect-square">
                        <Image 
                            alt="image"
                            fill
                            src={src}
                        />
                        <CardFooter className="p-2">
                            <Button 
                                onClick={()=>window.open(src)}
                                variant="secondary" 
                                className="w-full"
                            >
                                <Download className="h-4 w-4 mr-2" />
                                Download
                            </Button>
                        </CardFooter>
                    </div> 
                </Card>
               ))}
            </div>
        </div>
    </div>
    );
}
 
export default ImagePage;