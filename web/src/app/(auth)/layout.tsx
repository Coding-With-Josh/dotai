import { ModeToggle } from '@/components/ui/mode-toggler';
import Image from 'next/image';
import React from 'react';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className=''>
            {/* <Image src={require("@/assets/images/template.jpg")} className='h-screen w-screen z-0 absolute'/> */}
            {/* <div className="w-fit h-fit absolute top-1/2 right-0"><ModeToggle /></div> */}
            <main>{children}</main>
        </div>
    );
};
