import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';
import { auth } from "@clerk/nextjs";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from '@/lib/subscription';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,});


export async function POST(
    
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!openai.apiKey){
            return new NextResponse("OpenAI API Key Not Configured", { status: 500})
        }

        if(!messages){
            return new NextResponse("Messages are required", { status: 400})
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if(!freeTrial && !isPro){
            return new NextResponse("You have exceeded the free trial limit", { status: 403})
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages
        });    

        if(!isPro){
            await increaseApiLimit();
        }

        if (!response.choices[0].message.content) {
          return new NextResponse("Unexpected response from OpenAI", { status: 500 });
        }        
   
        return NextResponse.json({ message: response.choices[0].message.content });
   
      } catch (error){
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal error", { status: 500})
      }
    }