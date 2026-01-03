import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CampaignHealthGaugesProps {
    health: {
        overallScore: number;
        qualityScore: number;
    };
}

export function CampaignHealthGauges({ health }: CampaignHealthGaugesProps) {
    const getGaugeColor = (score: number) => {
        if (score >= 90) return 'text-green-500';
        if (score >= 70) return 'text-yellow-500';
        if (score >= 50) return 'text-orange-500';
        return 'text-red-500';
    };

    const getGaugeRotation = (score: number) => {
        // Map 0-100 to -90deg to 90deg
        return -90 + (score / 100) * 180;
    };

    const renderGauge = (score: number, label: string) => (
        <div className="flex flex-col items-center gap-2">
            <div className="relative h-32 w-32">
                {/* Background arc */}
                <svg className="absolute inset-0" viewBox="0 0 100 100">
                    <path
                        d="M 15 85 A 40 40 0 0 1 85 85"
                        fill="none"
                        stroke="hsl(var(--muted))"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                </svg>
                {/* Colored arc */}
                <svg className="absolute inset-0" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id={`gradient-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(var(--destructive))" />
                            <stop offset="50%" stopColor="rgb(234 179 8)" />
                            <stop offset="100%" stopColor="rgb(34 197 94)" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M 15 85 A 40 40 0 0 1 85 85"
                        fill="none"
                        stroke={`url(#gradient-${label})`}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="126"
                        strokeDashoffset={126 - (126 * score) / 100}
                    />
                </svg>
                {/* Needle */}
                <div
                    className="absolute left-1/2 top-1/2 h-12 w-1 -translate-x-1/2 origin-bottom bg-foreground rounded-full"
                    style={{
                        transform: `translateX(-50%) rotate(${getGaugeRotation(score)}deg)`,
                        transformOrigin: 'bottom center'
                    }}
                />
                {/* Center score */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center mt-6">
                        <div className={`text-3xl font-bold ${getGaugeColor(score)}`}>
                            {score}
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="text-sm font-semibold">{label}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span>Low</span>
                    <div className="h-px w-12 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
                    <span>High</span>
                </div>
            </div>
        </div>
    );

    return (
        <Card className="border">
            <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Campaign Status</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-6">
                    {renderGauge(health.overallScore, 'Overall Health')}
                    {renderGauge(health.qualityScore, 'Submission Quality')}
                </div>
            </CardContent>
        </Card>
    );
}
