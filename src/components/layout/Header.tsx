
import { Search } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { Input } from "@/components/ui/input"

export function Header() {
    return (
        <div className="flex w-full items-center justify-between gap-4">
            <div className="flex w-full max-w-sm items-center space-x-2">
                <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full bg-background pl-8"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <ThemeToggle />
            </div>
        </div>
    )
}
