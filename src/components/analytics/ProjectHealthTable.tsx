import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface ProjectHealthTableProps {
    projects: {
        name: string;
        lastActivity: string;
        status: 'Active' | 'Moderate' | 'Inactive';
        commits: number;
        prs: number;
        issues: number;
        quality: number;
    }[];
}

export function ProjectHealthTable({ projects }: ProjectHealthTableProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20';
            case 'Moderate':
                return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20';
            case 'Inactive':
                return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
            default:
                return '';
        }
    };

    const getQualityColor = (quality: number) => {
        if (quality >= 90) return 'text-green-500';
        if (quality >= 70) return 'text-yellow-500';
        if (quality >= 50) return 'text-orange-500';
        return 'text-red-500';
    };

    const renderQualityRing = (quality: number) => {
        const radius = 20;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (quality / 100) * circumference;

        return (
            <div className="relative h-12 w-12 flex items-center justify-center">
                <svg className="transform -rotate-90 h-12 w-12">
                    <circle
                        cx="24"
                        cy="24"
                        r={radius}
                        stroke="hsl(var(--muted))"
                        strokeWidth="4"
                        fill="none"
                    />
                    <circle
                        cx="24"
                        cy="24"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className={getQualityColor(quality)}
                    />
                </svg>
                <span className={`absolute text-xs font-bold ${getQualityColor(quality)}`}>
                    {quality}%
                </span>
            </div>
        );
    };

    return (
        <Card className="border col-span-2">
            <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Project Status</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b text-left">
                                <th className="pb-3 text-xs font-semibold text-muted-foreground">Project</th>
                                <th className="pb-3 text-xs font-semibold text-muted-foreground">Last Activity</th>
                                <th className="pb-3 text-xs font-semibold text-muted-foreground">Status</th>
                                <th className="pb-3 text-xs font-semibold text-muted-foreground text-center">Commits</th>
                                <th className="pb-3 text-xs font-semibold text-muted-foreground text-center">PRs</th>
                                <th className="pb-3 text-xs font-semibold text-muted-foreground text-center">Issues</th>
                                <th className="pb-3 text-xs font-semibold text-muted-foreground text-center">Quality</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {projects.map((project, idx) => (
                                <tr key={idx} className="group hover:bg-muted/50 transition-colors">
                                    <td className="py-3">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={`https://i.pravatar.cc/150?img=${idx + 20}`}
                                                alt={project.name}
                                                className="h-8 w-8 rounded-full"
                                            />
                                            <span className="font-medium text-sm">{project.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                            <Clock className="h-3.5 w-3.5" />
                                            {project.lastActivity}
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <Badge className={`${getStatusColor(project.status)} text-xs px-2 py-0.5`}>
                                            {project.status}
                                        </Badge>
                                    </td>
                                    <td className="py-3 text-center text-sm font-semibold">{project.commits}</td>
                                    <td className="py-3 text-center text-sm font-semibold">{project.prs}</td>
                                    <td className="py-3 text-center text-sm font-semibold">{project.issues}</td>
                                    <td className="py-3">
                                        <div className="flex justify-center">
                                            {renderQualityRing(project.quality)}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
