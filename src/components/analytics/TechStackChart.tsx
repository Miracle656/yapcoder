import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface TechStackProps {
    techStack: {
        name: string;
        percentage: number;
        color: string;
    }[];
}

export function TechStackChart({ techStack }: TechStackProps) {
    const data = techStack.map(tech => ({
        name: tech.name,
        value: tech.percentage,
        fill: tech.color
    }));

    return (
        <Card className="border">
            <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4">
                    <ResponsiveContainer width="50%" height={180}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={40}
                                outerRadius={70}
                                dataKey="value"
                                strokeWidth={2}
                                stroke="hsl(var(--background))"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="flex-1 space-y-2">
                        {techStack.map((tech) => (
                            <div key={tech.name} className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="h-3 w-3 rounded-sm"
                                        style={{ backgroundColor: tech.color }}
                                    />
                                    <span className="text-sm font-medium">{tech.name}</span>
                                </div>
                                <span className="text-sm font-semibold">{tech.percentage}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
