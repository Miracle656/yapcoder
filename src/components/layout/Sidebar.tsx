
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, FolderGit2, Users, Trophy } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Packages", href: "/dashboard/packages", icon: Package },
    { name: "Projects", href: "/dashboard/projects", icon: FolderGit2 },
    { name: "Developers", href: "/dashboard/developers", icon: Users },
    { name: "Campaigns", href: "/dashboard/campaigns", icon: Trophy },
];

export function AppSidebar() {
    const location = useLocation();

    return (
        <Sidebar collapsible="icon" className="bg-background/60 backdrop-blur-md border-r border-white/10">
            <SidebarHeader className="h-16 border-b border-sidebar-border">
                <div className="flex h-full items-center gap-2 px-2">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                            YC
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">YapCoder</span>
                            <span className="truncate text-xs text-muted-foreground">Unfiltered</span>
                        </div>
                    </Link>
                </div>

            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={location.pathname === item.href}
                                        tooltip={item.name}
                                    >
                                        <Link to={item.href}>
                                            <item.icon />
                                            <span>{item.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                            <Link to="/dashboard/developers/YapCoderUser">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src="/avatars/01.png" alt="YapCoder User" />
                                    <AvatarFallback className="rounded-lg">YP</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">YapCoder User</span>
                                    <span className="truncate text-xs text-muted-foreground">Pro Member</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar >
    );
}
