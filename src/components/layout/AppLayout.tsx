import { AppSidebar } from "./Sidebar"
import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export function AppLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="min-w-0 relative"> {/* FIX 1: Allow Inset to shrink */}
                {/* Background Gradient to match Landing Page feel */}
                <div className="fixed inset-0 z-[-1] bg-background">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 opacity-50 dark:opacity-30 pointer-events-none" />
                    <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
                </div>

                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-background/50 backdrop-blur-sm sticky top-0 z-10">
                    <div className="flex items-center gap-2 pl-2.5">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                    </div>
                    <Header />
                </header>

                {/* FIX 2: Added 'min-w-0' and ensured 'w-full' is working correctly */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 w-full min-w-0 relative z-0">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}