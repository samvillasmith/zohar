
"use client";

import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { MAX_FREE_COUNTS } from '@/constants';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button'
import { usePremiumModal } from '@/hooks/use-premium-modal';


interface FreeCounterProps {
    apiLimitCount: number;
    isPro: boolean;
};

export const FreeCounter =({
    apiLimitCount = 0,
    isPro = false
}: FreeCounterProps) => {
    const premiumModal = usePremiumModal();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted){
        return null;
    }

    if(isPro){
        return null;
    }

    return (
        <div className='px-3 flex'>
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p>
                            {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations Used
                        </p>
                        <Progress 
                            className="h-3"
                            
                            value={apiLimitCount / MAX_FREE_COUNTS * 100}
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                    <Button className="w-fulls" variant="premium" onClick={premiumModal.onOpen}>
                        Upgrade to Premium 
                        <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
};