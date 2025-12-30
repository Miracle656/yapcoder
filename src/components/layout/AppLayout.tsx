import { AppSidebar } from "./Sidebar"
import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export function AppLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="min-w-0"> {/* FIX 1: Allow Inset to shrink */}
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 pl-2.5">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                    </div>
                    <Header />
                </header>

                {/* FIX 2: Added 'min-w-0' and ensured 'w-full' is working correctly */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 w-full min-w-0">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}