
import { GitFork, Star, CircleDot, GitPullRequest, FolderGit2 } from "lucide-react";
import { topRepos, trendingProjects } from "@/data/mockData";
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
import { Badge } from "@/components/ui/badge";

export function Projects() {
    return (
        <div className="space-y-6 min-w-0">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                    <p className="text-muted-foreground">Discover top repositories and tooling in the Sui ecosystem.</p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Repositories</CardTitle>
                        <FolderGit2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,234</div>
                        <p className="text-xs text-muted-foreground">+180 from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Issues</CardTitle>
                        <CircleDot className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">573</div>
                        <p className="text-xs text-muted-foreground">+201 since last week</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pull Requests</CardTitle>
                        <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2,400</div>
                        <p className="text-xs text-muted-foreground">+12% acceptance rate</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Contributors</CardTitle>
                        <GitFork className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">890</div>
                        <p className="text-xs text-muted-foreground">+45 new developers</p>
                    </CardContent>
                </Card>
            </div>

            {/* Trending Sui Projects Carousel */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-tight">Trending Sui Projects</h3>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                    {trendingProjects.map((project, idx) => (
                        <Card key={idx} className="min-w-[320px] snap-start shrink-0">
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between gap-2">
                                    <CardTitle className="text-base">{project.name}</CardTitle>
                                    <Badge variant={project.isPositive ? "default" : "destructive"} className="text-xs shrink-0">
                                        {project.isPositive ? "▲" : "▼"} {project.change} ({project.period})
                                    </Badge>
                                </div>
                                <CardDescription className="text-xs line-clamp-2">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="text-xs text-muted-foreground font-mono">{project.address}</div>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        {project.contributors.map((avatar, i) => (
                                            <img
                                                key={i}
                                                src={avatar}
                                                alt={`Contributor ${i + 1}`}
                                                className="h-6 w-6 rounded-full border-2 border-background"
                                            />
                                        ))}
                                    </div>
                                    <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                                        View Package →
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Top Repositories</CardTitle>
                        <CardDescription>
                            Most starred and forked repositories on GitHub.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[200px]">Repository</TableHead>
                                    <TableHead className="text-right">Stars</TableHead>
                                    <TableHead className="text-right">Forks</TableHead>
                                    <TableHead className="text-right">Issues</TableHead>
                                    <TableHead className="text-right">PRs</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {topRepos.map((repo) => (
                                    <TableRow key={repo.name}>
                                        <TableCell className="font-medium">
                                            <span className="flex items-center gap-2">
                                                <FolderGit2 className="h-4 w-4 text-muted-foreground" />
                                                {repo.name}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <span className="flex items-center justify-end gap-1">
                                                {repo.stars.toLocaleString()} <Star className="h-3 w-3 text-yellow-500" fill="currentColor" />
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">{repo.forks.toLocaleString()}</TableCell>
                                        <TableCell className="text-right">{repo.issues}</TableCell>
                                        <TableCell className="text-right">{repo.prs}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Top Stacks & Tooling</CardTitle>
                        <CardDescription>
                            Popular libraries and frameworks used in Sui projects.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 rounded bg-blue-500/10 p-1 flex items-center justify-center text-blue-500 font-bold">R</div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">React</p>
                                        <p className="text-xs text-muted-foreground">Frontend Framework</p>
                                    </div>
                                </div>
                                <Badge>92%</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 rounded bg-cyan-500/10 p-1 flex items-center justify-center text-cyan-500 font-bold">T</div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">Tailwind CSS</p>
                                        <p className="text-xs text-muted-foreground">Utility-first CSS</p>
                                    </div>
                                </div>
                                <Badge variant="secondary">85%</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 rounded bg-orange-500/10 p-1 flex items-center justify-center text-orange-500 font-bold">M</div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">Move</p>
                                        <p className="text-xs text-muted-foreground">Smart Contract Lang</p>
                                    </div>
                                </div>
                                <Badge variant="outline">100%</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
