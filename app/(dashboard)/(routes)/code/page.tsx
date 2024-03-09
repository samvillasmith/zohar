"use client";

import * as z from 'zod';
import axios from 'axios';
import { ChatCompletionMessageParam } from "openai/resources/chat";
import { Heading } from '@/components/heading';
import { Code } from 'lucide-react';
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
import { cn } from '@/lib/utils';
import { UserAvatar } from '@/components/user-avatar';
import { BotAvatar } from '@/components/bot-avatar';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { usePremiumModal } from '@/hooks/use-premium-modal';
import { toast } from 'react-hot-toast';


const CodePage = () => {
    const premiumModal = usePremiumModal();   
    const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
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
            const userMessage: ChatCompletionMessageParam = {
                role: "user",
                content: values.prompt
            };
            
            const newMessages = [...messages, userMessage];
            const response = await axios.post("/api/code", { messages: newMessages });
            // console.log("Received response:", response);
            // console.log("Received response:", response.choices[0].message.content);
            const responseData = await response.data;
            console.log("Received response:", responseData);
            setMessages((current) => [...current, userMessage, { role: 'assistant', content: responseData.message }]);
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
                    title="Code Generation" 
                    description="Generate code snippets with descriptive texts by using GPT-4" 
                    icon={Code} 
                    iconColor="text-green-700" 
                    bgColor="bg-green-700/10"
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
                                        placeholder="Ask Zohar anything about code (i.e., 'Write a function to calculate factorials in Python'.)"
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
            </div>
            <div className="space-y-4 mt-4">
                <div className="flex flex-col-reverse gap-y-4">
                    {messages.map((message, index)=>(
                        <div 
                        key={index}
                        className={cn(
                            "p-8 w-full flex items-start gap-x-8 rounded-lg",
                            message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                        )}
                        >
                            {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                            <ReactMarkdown
                                components={{
                                    // Override the code component
                                    code({ node, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return match ? (
                                        <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" {...props}>
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>


                                    ) : (
                                        // Apply basic styling for inline code
                                        <code className={`bg-black/80 text-blue-200 rounded px-1 p-1 ${className}`} {...props}>
                                        {children}
                                        </code>
                                    );
                                    }
                                }}
                                className="text-sm overflow-hidden leading-7"
                                >
                                {message.content || ""}
                                </ReactMarkdown>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default CodePage;