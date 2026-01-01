
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell
} from "recharts";
import { dashboardStats, developerGrowthData, ecosystemDistribution, projectTreemapData, devTreemapData, activeDevsByType } from "@/data/mockData";
// import { ArrowUpRight, Zap } from "lucide-react";
// import { Link } from "react-router-dom";
import { TreemapChart } from "@/components/charts/TreemapChart";

export function Dashboard() {
    return (
        <div className="flex flex-col gap-6 min-w-0 max-w-full">
            {/* Top Stats Row */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {dashboardStats.map((stat, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                            <Badge variant="secondary" className="text-emerald-500 bg-emerald-500/10">
                                {stat.change}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">
                                +{Math.floor(Math.random() * 100)} since last month
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Growth Chart */}
            <Card className="col-span-4 min-w-0">
                <CardHeader>
                    <CardTitle>Total Monthly Active Developers</CardTitle>
                    <CardDescription>
                        Growth of active developers contributing to the ecosystem over time.
                    </CardDescription>
                </CardHeader>
                <CardContent className="h-[350px] min-w-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={developerGrowthData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                            <XAxis
                                dataKey="year"
                                stroke="#737373"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#737373"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `${value}`}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: "hsl(var(--popover))", borderRadius: "8px", border: "1px solid hsl(var(--border))" }}
                                itemStyle={{ color: "hsl(var(--popover-foreground))" }}
                            />
                            <Line
                                type="monotone"
                                dataKey="total"
                                stroke="#737373"
                                strokeWidth={3}
                                dot={false}
                            />
                            <Line
                                type="monotone"
                                dataKey="fullTime"
                                stroke="#3b82f6"
                                strokeWidth={2}
                                dot={false}
                                strokeDasharray="5 5"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Treemap Section - Moved Up */}
            <div className="grid gap-6 md:grid-cols-2 min-w-0">
                {/* Top Projects Treemap */}
                <Card className="flex flex-col min-w-0">
                    <CardHeader className="flex">
                        <CardTitle>Top Projects</CardTitle>
                        <CardDescription>By TVL and activity</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px] p-0 overflow-hidden">
                        <TreemapChart data={projectTreemapData} height={400} />
                    </CardContent>
                </Card>

                {/* Top Developers Treemap */}
                <Card className="flex flex-col min-w-0">
                    <CardHeader className="flex">
                        <CardTitle>Top Developers</CardTitle>
                        <CardDescription>By contributions and impact</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px] p-0 overflow-hidden">
                        <TreemapChart data={devTreemapData} height={400} />
                    </CardContent>
                </Card>
            </div>

            {/* Two Column Layout for Secondary Charts */}
            <div className="grid gap-6 md:grid-cols-12 min-w-0">
                {/* Active Developers by Type Area Chart */}
                <Card className="col-span-12 lg:col-span-8 min-w-0">
                    <CardHeader>
                        <CardTitle>Active Developers by Type</CardTitle>
                        <CardDescription>Breakdown of full-time, part-time, and one-time contributors.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] min-w-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={activeDevsByType}>
                                <defs>
                                    <linearGradient id="colorFull" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPart" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--popover))", borderRadius: "8px", border: "1px solid hsl(var(--border))" }} />
                                <Area type="monotone" dataKey="fullTime" stroke="#3b82f6" fillOpacity={1} fill="url(#colorFull)" />
                                <Area type="monotone" dataKey="partTime" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorPart)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Ecosystem Pie Chart */}
                <Card className="col-span-12 lg:col-span-4 min-w-0">
                    <CardHeader>
                        <CardTitle>Ecosystem Distribution</CardTitle>
                        <CardDescription>Dev activity by sector</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] flex items-center justify-center min-w-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={ecosystemDistribution}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {ecosystemDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} strokeWidth={0} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--popover))", borderRadius: "8px", border: "1px solid hsl(var(--border))" }} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute grid grid-cols-2 gap-x-8 gap-y-2 pointer-events-none">
                            {ecosystemDistribution.map((entry, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.fill }} />
                                    <span className="text-xs font-medium text-muted-foreground">{entry.name}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
