import { AppSidebar } from "./Sidebar"
import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export function AppLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="min-w-0 relative">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
                    <div className="flex items-center gap-2 pl-2.5">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                    </div>
                    <Header />
                </header>

                <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 w-full min-w-0">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}