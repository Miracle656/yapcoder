import { useState } from "react";
import { suiTools, type Tool } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText, TrendingUp, Users, Star, Activity } from "lucide-react";

export default function Tools() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [sortBy, setSortBy] = useState<"ranking" | "trending" | "projects">("ranking");

    const categories = ["All", "Storage", "Security", "Identity", "DeFi", "Infrastructure", "Developer Tools", "Oracle"];

    const filteredTools = suiTools
        .filter(tool => selectedCategory === "All" || tool.category === selectedCategory)
        .sort((a, b) => {
            switch (sortBy) {
                case "ranking":
                    return a.ranking - b.ranking;
                case "trending":
                    return b.trendingScore - a.trendingScore;
                case "projects":
                    return b.stats.projectsUsing - a.stats.projectsUsing;
                default:
                    return 0;
            }
        });

    const getCategoryColor = (category: Tool['category']) => {
        const colors: Record<Tool['category'], string> = {
            'Storage': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
            'Security': 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
            'Identity': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
            'DeFi': 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
            'Infrastructure': 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
            'Developer Tools': 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
            'Oracle': 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20'
        };
        return colors[category];
    };

    return (
        <div className="flex flex-col gap-6 p-6">
            {/* Header */}
            <div className="flex flex-col gap-4">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">Sui Ecosystem Tools</h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Discover and explore tools powering the Sui blockchain ecosystem
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all ${selectedCategory === category
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-background hover:bg-accent border-border"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Sort By */}
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Sort by:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="px-3 py-1.5 text-xs font-medium rounded-md border bg-background border-border"
                        >
                            <option value="ranking">Ranking</option>
                            <option value="trending">Trending</option>
                            <option value="projects">Projects Using</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredTools.map((tool) => (
                    <Card key={tool.id} className="p-6 hover:shadow-md transition-shadow border">
                        <div className="flex flex-col gap-4">
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="text-4xl">{tool.logo}</div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold text-lg">{tool.name}</h3>
                                            {tool.trendingScore >= 90 && (
                                                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 gap-1 px-1.5 py-0">
                                                    <TrendingUp className="h-3 w-3" />
                                                    <span className="text-xs">Hot</span>
                                                </Badge>
                                            )}
                                        </div>
                                        <Badge className={`w-fit text-xs ${getCategoryColor(tool.category)}`}>
                                            {tool.category}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <div className="text-2xl font-bold text-primary">#{tool.ranking}</div>
                                    <div className="text-xs text-muted-foreground">Rank</div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-foreground/80 leading-relaxed">
                                {tool.description}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <Users className="h-3.5 w-3.5" />
                                        <span className="text-xs">Projects</span>
                                    </div>
                                    <div className="text-lg font-semibold">{tool.stats.projectsUsing}</div>
                                </div>
                                {tool.stats.stars && (
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1 text-muted-foreground">
                                            <Star className="h-3.5 w-3.5" />
                                            <span className="text-xs">Stars</span>
                                        </div>
                                        <div className="text-lg font-semibold">{tool.stats.stars.toLocaleString()}</div>
                                    </div>
                                )}
                                {tool.stats.weeklyDownloads && (
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1 text-muted-foreground">
                                            <Activity className="h-3.5 w-3.5" />
                                            <span className="text-xs">Weekly DL</span>
                                        </div>
                                        <div className="text-lg font-semibold">{tool.stats.weeklyDownloads.toLocaleString()}</div>
                                    </div>
                                )}
                                {tool.stats.totalTransactions && (
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1 text-muted-foreground">
                                            <Activity className="h-3.5 w-3.5" />
                                            <span className="text-xs">Total TX</span>
                                        </div>
                                        <div className="text-lg font-semibold">{(tool.stats.totalTransactions / 1000000).toFixed(1)}M</div>
                                    </div>
                                )}
                            </div>

                            {/* Projects Using */}
                            <div className="flex flex-col gap-2">
                                <div className="text-xs font-medium text-muted-foreground">Used by:</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {tool.projects.slice(0, 4).map((project, idx) => (
                                        <Badge key={idx} variant="secondary" className="text-xs px-2 py-0.5">
                                            {project.name}
                                        </Badge>
                                    ))}
                                    {tool.projects.length > 4 && (
                                        <Badge variant="secondary" className="text-xs px-2 py-0.5 text-muted-foreground">
                                            +{tool.projects.length - 4} more
                                        </Badge>
                                    )}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-3 pt-2 border-t">
                                <a
                                    href={tool.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <ExternalLink className="h-3.5 w-3.5" />
                                    Website
                                </a>
                                {tool.github && (
                                    <a
                                        href={tool.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Github className="h-3.5 w-3.5" />
                                        GitHub
                                    </a>
                                )}
                                {tool.docs && (
                                    <a
                                        href={tool.docs}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <FileText className="h-3.5 w-3.5" />
                                        Docs
                                    </a>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {filteredTools.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    No tools found in this category
                </div>
            )}
        </div>
    );
}
