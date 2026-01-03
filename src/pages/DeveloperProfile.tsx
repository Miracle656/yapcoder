import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { MapPin, Github, Star, GitFork } from "lucide-react";

export function DeveloperProfile() {
    useParams();

    // Mock data based on API response structure
    const profileData = {
        profile: {
            user_id: 115021119,
            name: "Emmanuel Sipe",
            username: "LukoOG",
            bio: "Young, vibrant, smart, social",
            status: "Hireable",
            company: "",
            location: "Ikeja, Lagos, Nigeria",
            profile_url: "https://github.com/LukoOG",
            avatar_url: "https://avatars.githubusercontent.com/u/115021119?v=4",
            followers: 17,
            following: 41
        },
        reputation: {
            username: "LukoOG",
            score: 27,
            details: {
                total_stars: 1,
                total_commits: 255,
                sui_repo_count: 4,
                experience_days: 283,
                total_size_kb: 32664,
                language_count: 4,
                last_activity: "2025-12-31",
                onboarded_date: "2025-03-25"
            }
        },
        sui_repos: [
            {
                id: 1070788676,
                name: "sui-move-bootcamp",
                full_name: "LukoOG/sui-move-bootcamp",
                description: "Code for Sui & Move bootcamp lessons",
                language: "TypeScript",
                languages: ["JavaScript", "TypeScript", "Move", "Rust", "Shell", "HTML", "PLpgSQL"],
                html_url: "https://github.com/LukoOG/sui-move-bootcamp",
                stargazers_count: 0,
                forks_count: 0,
                commits: 254,
                contributors: 8,
                pushed_at: "2025-10-15T12:43:20Z"
            },
            {
                id: 1076908717,
                name: "sui-voting-dapp",
                full_name: "LukoOG/sui-voting-dapp",
                description: "A Fun platform where users can rank their favorite topics and interests against others, built on the sui blockchain",
                language: "TypeScript",
                languages: ["TypeScript", "Move", "CSS", "JavaScript"],
                html_url: "https://github.com/LukoOG/sui-voting-dapp",
                stargazers_count: 0,
                forks_count: 0,
                commits: 70,
                contributors: 2,
                pushed_at: "2025-12-31T16:16:17Z"
            },
            {
                id: 1005554980,
                name: "sui-profile-dapp",
                full_name: "LukoOG/sui-profile-dapp",
                description: "",
                language: "TypeScript",
                languages: ["JavaScript", "TypeScript", "Move", "CSS"],
                html_url: "https://github.com/LukoOG/sui-profile-dapp",
                stargazers_count: 1,
                forks_count: 0,
                commits: 52,
                contributors: 1,
                pushed_at: "2025-07-10T00:17:58Z"
            },
            {
                id: 1119821216,
                name: "abyss",
                full_name: "LukoOG/abyss",
                description: "",
                language: "TypeScript",
                languages: ["TypeScript", "CSS", "Move", "JavaScript"],
                html_url: "https://github.com/LukoOG/abyss",
                stargazers_count: 0,
                forks_count: 1,
                commits: 26,
                contributors: 2,
                pushed_at: "2025-12-22T18:35:00Z"
            },
            {
                id: 954413950,
                name: "FarmFi-backend",
                full_name: "LukoOG/FarmFi-backend",
                description: "A dapp that breaks the bridge between rural farmers and local consumers and eventually the international market at large",
                language: "TypeScript",
                languages: ["CSS", "JavaScript", "TypeScript", "Move"],
                html_url: "https://github.com/LukoOG/FarmFi-backend",
                stargazers_count: 0,
                forks_count: 0,
                commits: 107,
                contributors: 1,
                pushed_at: "2025-06-08T21:56:32Z"
            }
        ]
    };

    const { profile, reputation, sui_repos } = profileData;

    const languageColor: { [key: string]: string } = {
        TypeScript: "bg-blue-500",
        JavaScript: "bg-yellow-500",
        Move: "bg-purple-500",
        CSS: "bg-pink-500",
        Rust: "bg-orange-600",
        Shell: "bg-green-600",
        HTML: "bg-red-500",
        PLpgSQL: "bg-indigo-500"
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 min-w-0">
            {/* Left Sidebar */}
            <div className="w-full lg:w-80 shrink-0 space-y-4">
                {/* Profile Card */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <Avatar className="w-32 h-32 border-4 border-border">
                                <AvatarImage src={profile.avatar_url} alt={profile.name} />
                                <AvatarFallback className="text-4xl">{profile.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="text-xl font-bold">{profile.name}</h2>
                                <p className="text-sm text-muted-foreground">@{profile.username}</p>
                            </div>

                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{profile.location}</span>
                            </div>

                            {profile.status === "Hireable" && (
                                <Badge className="bg-green-600 hover:bg-green-700">Hireable</Badge>
                            )}

                            <p className="text-sm text-muted-foreground">{profile.bio}</p>

                            <Button variant="outline" className="w-full" asChild>
                                <a href={profile.profile_url} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4 mr-2" />
                                    View GitHub Profile
                                </a>
                            </Button>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground w-full justify-between pt-2 border-t">
                                <span>Followers: {profile.followers}</span>
                                <span>Following: {profile.following}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Reputation Card */}
                <Card>
                    <CardContent className="pt-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Github className="h-5 w-5" />
                                <span className="font-semibold">Reputation</span>
                            </div>
                            <span className="text-2xl font-bold">{reputation.score}</span>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Sui Repos</span>
                                <span className="font-semibold">{reputation.details.sui_repo_count}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Onboarded</span>
                                <span className="font-semibold">{formatDate(reputation.details.onboarded_date)}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground text-center">Reputation Score</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-center">{reputation.score}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground text-center">Total Commits</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-center">{reputation.details.total_commits}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground text-center">Total Stars</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-center">{reputation.details.total_stars}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground text-center">Languages Used</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-center">{reputation.details.language_count}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground text-center">Experience Days</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-center">{reputation.details.experience_days}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground text-center">Last Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xl font-semibold text-center">{formatDate(reputation.details.last_activity)}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Repositories Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Repositories</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="min-w-[200px]">Repository</TableHead>
                                    <TableHead className="min-w-[150px]">Language</TableHead>
                                    <TableHead className="text-right">Commits</TableHead>
                                    <TableHead className="text-right">Contributors</TableHead>
                                    <TableHead className="text-right">Stars</TableHead>
                                    <TableHead className="text-right">Forks</TableHead>
                                    <TableHead className="min-w-[120px]">Last Updated</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sui_repos.map((repo) => (
                                    <TableRow key={repo.id}>
                                        <TableCell>
                                            <div className="max-w-xs">
                                                <div className="font-semibold truncate">{repo.name}</div>
                                                {repo.description && (
                                                    <div className="text-xs text-muted-foreground truncate">{repo.description}</div>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-wrap gap-1">
                                                {repo.languages.slice(0, 3).map((lang, idx) => (
                                                    <Badge key={idx} variant="secondary" className="text-xs">
                                                        <span className={`w-2 h-2 rounded-full mr-1 ${languageColor[lang] || 'bg-gray-500'}`}></span>
                                                        {lang}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right font-medium">{repo.commits}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                {repo.contributors}
                                                {repo.contributors > 1 && <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <Star className="h-3 w-3" />
                                                {repo.stargazers_count}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <GitFork className="h-3 w-3" />
                                                {repo.forks_count}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-sm whitespace-nowrap">{formatDate(repo.pushed_at)}</TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="sm" asChild>
                                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                                    View
                                                </a>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
