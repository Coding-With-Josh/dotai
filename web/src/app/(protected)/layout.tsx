import '../globals.css'
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { SidebarProvider } from '@/components/ui/sidebar'

export const metadata = {
    title: 'DAO Dashboard',
    description: 'A comprehensive dashboard for DAO activities',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
        <div className="flex min-h-screen bg-dao-bg w-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 overflow-auto p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
        </SidebarProvider>
    )
}

