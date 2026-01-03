import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TopContributorsProps {
    contributors: {
        rank: number;
        name: string;
        avatar: string;
        submissions: number;
    }[];
}

export function TopContributorsCard({ contributors }: TopContributorsProps) {
    return (
        <Card className="border">
            <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Top Contributors</CardTitle>
                <p className="text-xs text-muted-foreground mt-1">Most Active Participants</p>
            </CardHeader>
            <CardContent className="space-y-3">
                {contributors.map((contributor) => (
                    <div key={contributor.rank} className="flex items-center gap-3">
                        <div className="text-sm font-semibold text-muted-foreground w-6">
                            {contributor.rank}.
                        </div>
                        <img
                            src={contributor.avatar}
                            alt={contributor.name}
                            className="h-8 w-8 rounded-full"
                        />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{contributor.name}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold">{contributor.submissions}</p>
                            <p className="text-xs text-muted-foreground">submissions</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
