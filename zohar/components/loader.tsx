import Image from 'next/image';

export const Loader = () => {
    return ( 
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image
                    alt="logo"
                    fill
                    src="/zohar_logo2.png"
                />
            </div>
            <p className="text-sm text-muted-foregrdoun">
                Zohar is thinking... (this could take a while if it's your first time)
            </p>
        </div>
     );
}