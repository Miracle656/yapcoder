
import { MapPin, Trophy } from "lucide-react";
import { developers, contributions } from "@/data/mockData";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Developers() {
    return (
        <div className="space-y-6 min-w-0">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Developers</h2>
                    <p className="text-muted-foreground">Top contributors and community members from around the globe.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Top Developers</CardTitle>
                        <CardDescription>Ranked by reputation and contributions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[80px]">Avatar</TableHead>
                                    <TableHead>Developer</TableHead>
                                    <TableHead className="text-right">Reputation</TableHead>
                                    <TableHead className="text-right">Followers</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {developers.map((dev) => (
                                    <TableRow key={dev.handle}>
                                        <TableCell>
                                            <Avatar>
                                                <AvatarImage src={dev.avatar} alt={dev.name} />
                                                <AvatarFallback>{dev.name.substring(0, 2)}</AvatarFallback>
                                            </Avatar>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{dev.name}</span>
                                                <span className="text-xs text-muted-foreground">{dev.handle}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <Trophy className="h-3 w-3 text-yellow-500" />
                                                {dev.reputation}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">{dev.followers.toLocaleString()}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Developer Distribution</CardTitle>
                            <CardDescription>Active developers by region.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                        <span>North America</span>
                                    </div>
                                    <span className="font-bold">45%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                        <span>Europe</span>
                                    </div>
                                    <span className="font-bold">30%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                        <span>Asia</span>
                                    </div>
                                    <span className="font-bold">20%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                        <span>Africa</span>
                                    </div>
                                    <span className="font-bold">5%</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Activity Heatmap</CardTitle>
                            <CardDescription>Global contribution activity over the last week.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-end justify-between gap-2 h-32">
                                {contributions.map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 w-full">
                                        <div
                                            className="w-full bg-primary/80 rounded-t-sm transition-all hover:bg-primary"
                                            style={{ height: `${item.value}%` }}
                                        ></div>
                                        <span className="text-xs text-muted-foreground">{item.day}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

