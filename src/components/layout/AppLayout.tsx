import { AppSidebar } from "./Sidebar"
import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export function AppLayout() {
    return (
        <SidebarProvider>
            {/* Global Background Gradient */}
            <div className="fixed inset-0 z-[-1] bg-background/50 pointer-events-none">
                <div className="absolute top-[0%] left-[0%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl opacity-50 dark:opacity-30" />
                <div className="absolute bottom-[0%] right-[0%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl opacity-50 dark:opacity-30" />
            </div>

            <AppSidebar />
            <SidebarInset className="min-w-0 relative bg-transparent"> {/* FIX 1: Allow Inset to shrink, transparent for global bg */}
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-background/5 backdrop-blur-sm sticky top-0 z-10 border-white/10">
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