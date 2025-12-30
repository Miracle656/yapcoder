
import { Link } from "react-router-dom"; import { Trophy, Calendar, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const sectorData = [
    { name: "DeFi", value: 45, color: "#3b82f6" },
    { name: "NFTs", value: 25, color: "#ec4899" },
    { name: "Tooling", value: 20, color: "#f97316" },
    { name: "Gaming", value: 10, color: "#10b981" },
];

const topContributors = [
    { name: "SuiOverlord", img: "https://github.com/shadcn.png" },
    { name: "MoveMaster", img: "https://github.com/shadcn.png" },
    { name: "CryptoKing", img: "https://github.com/shadcn.png" },
    { name: "BlockchainBaron", img: "https://github.com/shadcn.png" },
    { name: "DeFiDuke", img: "https://github.com/shadcn.png" },
];

export function Campaigns() {
    return (
        <div className="space-y-6 min-w-0 max-w-full">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Campaigns</h2>
                    <p className="text-muted-foreground">Participate in hackathons, workshops, and community events.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Active Campaigns</CardTitle>
                        <CardDescription>Join these events to earn rewards and reputation.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Link to="/campaigns/1">
                            <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Trophy className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Sui Overflow Hackathon</h4>
                                        <p className="text-sm text-muted-foreground">$500k Prize Pool • Global</p>
                                    </div>
                                </div>
                                <Badge>Active</Badge>
                            </div>
                        </Link>
                        <Link to="/campaigns/2">
                            <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
                                        <Calendar className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Move Workshop Series</h4>
                                        <p className="text-sm text-muted-foreground">Weekly live coding sessions</p>
                                    </div>
                                </div>
                                <Badge variant="secondary">Register</Badge>
                            </div>
                        </Link>
                        <Link to="/campaigns/3">
                            <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500">
                                        <Zap className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Liquid Staking Sprint</h4>
                                        <p className="text-sm text-muted-foreground">Build the next big LST protocol</p>
                                    </div>
                                </div>
                                <Badge variant="outline">Coming Soon</Badge>
                            </div>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="min-w-0">
                    <CardHeader>
                        <CardTitle>Sector Distribution</CardTitle>
                        <CardDescription>Current focus of developer campaigns.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={sectorData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {sectorData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)', borderRadius: '8px' }}
                                        itemStyle={{ color: 'var(--foreground)' }}
                                    />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>Leaderboard</CardTitle>
                    <CardDescription>Top campaign contributors this month.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative flex overflow-x-hidden py-4 max-w-full">
                        <div className="animate-marquee whitespace-nowrap flex gap-8 min-w-full">
                            {[...topContributors, ...topContributors].map((contributor, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <Avatar className="h-16 w-16 border-2 border-primary">
                                        <AvatarImage src={contributor.img} />
                                        <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm font-medium">{contributor.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
