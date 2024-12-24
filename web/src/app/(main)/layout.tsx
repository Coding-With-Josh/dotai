import { Navbar } from '@/components/landing/Navbar';
import React from 'react';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="relative overflow-hidden w-screen h-screen bg-zinc-900 flex flex-col items-center justify-center">
            <Navbar/>
            {children}
        </main>

    );
};
