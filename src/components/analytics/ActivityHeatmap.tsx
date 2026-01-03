import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ActivityHeatmapProps {
    data: {
        date: string;
        count: number;
    }[];
}

export function ActivityHeatmap({ data }: ActivityHeatmapProps) {
    // Group by weeks
    const weeks: { date: string; count: number }[][] = [];
    for (let i = 0; i < data.length; i += 7) {
        weeks.push(data.slice(i, i + 7));
    }

    const getColor = (count: number) => {
        if (count === 0) return 'bg-muted';
        if (count <= 3) return 'bg-green-200 dark:bg-green-900/30';
        if (count <= 6) return 'bg-green-300 dark:bg-green-800/40';
        if (count <= 9) return 'bg-green-400 dark:bg-green-700/50';
        if (count <= 12) return 'bg-green-500 dark:bg-green-600/60';
        return 'bg-green-600 dark:bg-green-500/70';
    };

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <Card className="border">
            <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Activity Heatmap</CardTitle>
                <p className="text-xs text-muted-foreground mt-1">Last 90 Days</p>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {/* Day labels */}
                    <div className="flex gap-1">
                        <div className="w-6" />
                        {days.map((day, idx) => (
                            <div key={idx} className="text-xs font-medium text-muted-foreground w-3 text-center">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Heatmap grid */}
                    <div className="flex gap-1 overflow-x-auto">
                        {weeks.map((week, weekIdx) => (
                            <div key={weekIdx} className="flex flex-col gap-1">
                                {week.map((day, dayIdx) => (
                                    <div
                                        key={dayIdx}
                                        className={`h-3 w-3 rounded-sm ${getColor(day.count)} border border-border/50`}
                                        title={`${day.date}: ${day.count} submissions`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Legend */}
                    <div className="flex items-center justify-end gap-2 pt-2 border-t">
                        <span className="text-xs text-muted-foreground">Less</span>
                        {[0, 3, 6, 9, 12, 15].map((count, idx) => (
                            <div
                                key={idx}
                                className={`h-3 w-3 rounded-sm ${getColor(count)} border border-border/50`}
                            />
                        ))}
                        <span className="text-xs text-muted-foreground">More</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
