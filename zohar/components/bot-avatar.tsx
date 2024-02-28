import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const BotAvatar = () => {
    return ( 
        <Avatar className="h-8 w-8">
            <AvatarImage className="p-1" src="/zohar_logo2.png"/>
            <AvatarFallback>
                Z
            </AvatarFallback>
        </Avatar>
     );
}