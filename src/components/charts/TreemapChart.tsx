import { ResponsiveContainer, Treemap, Tooltip, AreaChart, Area } from "recharts";
import { cn } from "@/lib/utils";
import { Crown } from "lucide-react";

const CustomTreemapContent = (props: any) => {
    const { x, y, width, height, name, change, trend, index } = props;
    const isPositive = change >= 0;

    // Generate unique ID for each cell's gradient
    const gradientId = `gradient-${name.replace(/\s+/g, '-')}`;

    return (
        <g>
            <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity={0.9} />
                    <stop offset="100%" stopColor={isPositive ? "#059669" : "#b91c1c"} stopOpacity={1} />
                </linearGradient>
            </defs>

            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                className="transition-all duration-300"
                style={{
                    fill: `url(#${gradientId})`,
                    stroke: "#000",
                    strokeWidth: 1.5,
                    strokeOpacity: 0.1,
                }}
            />

            {/* Glossy Overlay effect */}
            <rect x={x} y={y} width={width} height={height / 2} fill="white" fillOpacity={0.05} />

            {width > 70 && height > 50 && (
                <foreignObject x={x} y={y} width={width} height={height}>
                    <div className="flex flex-col h-full justify-between p-3 text-white select-none">
                        <div className="flex justify-between items-start w-full gap-1">
                            <div className="flex flex-col min-w-0">
                                <span className="font-black text-sm uppercase tracking-tighter truncate leading-tight">
                                    {name}
                                </span>
                                <span className="text-[10px] font-bold opacity-80 leading-tight">
                                    {isPositive ? "▲" : "▼"} {Math.abs(change)}%
                                </span>
                            </div>

                            {/* Leaderboard Icons for Top 3 */}
                            {index < 3 && (
                                <div className="bg-black/20 rounded-full p-1 backdrop-blur-sm">
                                    <Crown className={cn("h-3 w-3",
                                        index === 0 ? "text-yellow-400" : index === 1 ? "text-slate-300" : "text-orange-400"
                                    )} />
                                </div>
                            )}
                        </div>

                        {/* Modernized Sparkline using AreaChart */}
                        {trend && width > 100 && height > 80 && (
                            <div className="h-[30%] w-full opacity-40">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={trend.map((v: number, i: number) => ({ i, v }))}>
                                        <Area
                                            type="monotone"
                                            dataKey="v"
                                            stroke="#fff"
                                            fill="#fff"
                                            fillOpacity={0.2}
                                            strokeWidth={1.5}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </div>
                </foreignObject>
            )}
        </g>
    );
};

export function TreemapChart({ data, height = 450 }: { data: any[]; height?: number }) {
    return (
        <div style={{ width: "100%", height }} className="rounded-2xl overflow-hidden border-4 border-black bg-black shadow-2xl">
            <ResponsiveContainer width="100%" height="100%">
                <Treemap
                    data={data}
                    dataKey="size"
                    aspectRatio={1}
                    stroke="transparent"
                    content={<CustomTreemapContent />}
                >
                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const d = payload[0].payload;
                                return (
                                    <div className="bg-black/90 backdrop-blur-xl border border-white/20 text-white p-4 rounded-xl shadow-2xl">
                                        <div className="text-xs uppercase tracking-widest opacity-50 mb-1 font-bold">Project Info</div>
                                        <div className="font-black text-lg">{d.name}</div>
                                        <div className="h-px bg-white/10 my-2" />
                                        <div className="flex justify-between gap-8 text-sm">
                                            <span>Market Share</span>
                                            <span className="font-mono">{d.size}%</span>
                                        </div>
                                        <div className="flex justify-between gap-8 text-sm mt-1">
                                            <span>24h Performance</span>
                                            <span className={cn("font-mono font-bold", d.change >= 0 ? "text-emerald-400" : "text-red-400")}>
                                                {d.change > 0 ? "+" : ""}{d.change}%
                                            </span>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                </Treemap>
            </ResponsiveContainer>
        </div>
    );
}