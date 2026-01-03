
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
        <Sidebar collapsible="icon" className="bg-background border-r-0">
            <SidebarHeader className="h-16 border-b border-border/30 px-4">
                <div className="flex h-full items-center gap-2">
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/yapcoderlogo.png"
                            alt="YapCoder"
                            className="h-8 w-8 rounded-lg object-contain"
                        />
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">YapCoder</span>
                            <span className="truncate text-xs text-muted-foreground">Unfiltered</span>
                        </div>
                    </Link>
                </div>
            </SidebarHeader>

            <SidebarContent className="px-3 py-2">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-[10px] font-semibold tracking-widest text-muted-foreground/50 uppercase px-3 pt-4 pb-2">
                        Platform
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-0.5">
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={location.pathname === item.href}
                                        tooltip={item.name}
                                        className="h-9 px-3 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:font-medium hover:bg-accent text-sm font-normal text-foreground/70 hover:text-foreground transition-all duration-150 rounded-md"
                                    >
                                        <Link to={item.href} className="flex items-center gap-3">
                                            <item.icon className="h-[18px] w-[18px] shrink-0" />
                                            <span>{item.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-3 border-t border-border/30">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild className="hover:bg-accent rounded-lg px-2 py-1.5 h-auto">
                            <Link to="/dashboard/developers/YapCoderUser" className="flex items-center gap-2">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src="/yapcoderlogo.png" alt="YapCoder User" />
                                    <AvatarFallback className="rounded-lg bg-muted text-xs p-1">
                                        <img src="/yapcoderlogo.png" alt="YC" className="h-full w-full object-contain" />
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium text-xs">YapCoder User</span>
                                    <span className="truncate text-[10px] text-muted-foreground">Pro Member</span>
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
