import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, Users, TrendingUp, Award, Target } from "lucide-react";
import { campaignAnalytics } from "@/data/mockData";
import { TopContributorsCard } from "@/components/analytics/TopContributorsCard";
import { TechStackChart } from "@/components/analytics/TechStackChart";
import { ActivityHeatmap } from "@/components/analytics/ActivityHeatmap";
import { CampaignHealthGauges } from "@/components/analytics/CampaignHealthGauges";
import { ProjectHealthTable } from "@/components/analytics/ProjectHealthTable";

export function CampaignDetail() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState("details");

    // Mock campaign data
    const campaign = {
        id: id || "1",
        name: "Sui Overflow Hackathon",
        tagline: "Build the Future of DeFi on Sui",
        description: "Join us for the biggest Sui hackathon of the year! Build innovative DeFi applications and compete for a $500k prize pool.",
        gradient: "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 50%, #FF8E53 100%)",
        prizePool: "$500,000",
        participants: "2,450",
        deadline: "Dec 31, 2024",
        status: "Active"
    };

    const teams = [
        {
            name: "DeFi Innovators",
            members: ["Alice Chen", "Bob Smith", "Charlie Davis"],
            project: "Cross-chain Liquidity Protocol",
            registered: "2 days ago",
            avatar: "https://i.pravatar.cc/150?img=1"
        },
        {
            name: "Sui Builders",
            members: ["Dana Lee", "Evan Martinez", "Fiona Wang"],
            project: "NFT Marketplace with AMM",
            registered: "3 days ago",
            avatar: "https://i.pravatar.cc/150?img=2"
        },
        {
            name: "Move Masters",
            members: ["George Park", "Hannah Kim", "Ivan Chen"],
            project: "Decentralized Lending Platform",
            registered: "5 days ago",
            avatar: "https://i.pravatar.cc/150?img=3"
        },
        {
            name: "Blockchain Wizards",
            members: ["Jack Wilson", "Kelly Brown", "Liam Davis"],
            project: "Yield Optimization Protocol",
            registered: "1 week ago",
            avatar: "https://i.pravatar.cc/150?img=4"
        }
    ];

    const winners = [
        {
            place: "1st Place",
            team: "DeFi Pioneers",
            project: "Advanced Liquidity Aggregator",
            prize: "$200,000",
            badge: "🥇",
            color: "text-yellow-500",
            members: ["Sarah Johnson", "Mike Chen", "Laura Kim"]
        },
        {
            place: "2nd Place",
            team: "Sui Legends",
            project: "Decentralized Options Protocol",
            prize: "$100,000",
            badge: "🥈",
            color: "text-slate-400",
            members: ["Tom Harris", "Emma Wilson", "Chris Lee"]
        },
        {
            place: "3rd Place",
            team: "Move Experts",
            project: "Cross-chain Bridge Protocol",
            prize: "$50,000",
            badge: "🥉",
            color: "text-orange-600",
            members: ["James Park", "Nina Zhang", "Alex Martinez"]
        }
    ];



    return (
        <div className="space-y-6 min-w-0">
            {/* Gradient Header */}
            <div
                className="h-48 rounded-2xl shadow-lg relative overflow-hidden"
                style={{ background: campaign.gradient }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Campaign Info */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{campaign.name}</h1>
                    <p className="text-muted-foreground mt-1">{campaign.tagline}</p>
                </div>
                <Badge className="text-sm">{campaign.status}</Badge>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                    <TabsTrigger value="details" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                        Details
                    </TabsTrigger>
                    <TabsTrigger value="teams" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                        Teams
                    </TabsTrigger>
                    <TabsTrigger value="winners" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                        Winners
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                        Analytics
                    </TabsTrigger>
                </TabsList>

                {/* Details Tab */}
                <TabsContent value="details" className="space-y-6 mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>The Current Battle of Sui</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {campaign.description}
                            </p>

                            <div className="space-y-2">
                                <h4 className="font-semibold text-sm">Current Rules & Goals</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                    <li>Build a complete DeFi application on Sui blockchain</li>
                                    <li>Integration with at least 2 Sui protocols</li>
                                    <li>Deploy to Sui testnet with working demo</li>
                                    <li>Submit before deadline: {campaign.deadline}</li>
                                </ul>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3 pt-4">
                                <div className="flex items-center gap-2">
                                    <Trophy className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Prize Pool</p>
                                        <p className="font-semibold">{campaign.prizePool}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Participants</p>
                                        <p className="font-semibold">{campaign.participants}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Deadline</p>
                                        <p className="font-semibold">{campaign.deadline}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Button className="w-full" size="lg">
                        Join Campaign
                    </Button>
                </TabsContent>

                {/* Teams Tab */}
                <TabsContent value="teams" className="space-y-4 mt-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Registered Teams ({teams.length})</h3>
                    </div>
                    {teams.map((team, idx) => (
                        <Card key={idx}>
                            <CardContent className="p-4">
                                <div className="flex items-start gap-4">
                                    <img
                                        src={team.avatar}
                                        alt={team.name}
                                        className="h-12 w-12 rounded-full"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold">{team.name}</h4>
                                            <Badge variant="secondary" className="text-xs">Team</Badge>
                                        </div>
                                        <p className="text-sm font-medium text-muted-foreground mb-2">{team.project}</p>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {team.members.map((member, i) => (
                                                <Badge key={i} variant="outline" className="text-xs">
                                                    {member}
                                                </Badge>
                                            ))}
                                        </div>
                                        <p className="text-xs text-muted-foreground">Registered {team.registered}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    <Button className="w-full" variant="outline">
                        View All Teams
                    </Button>
                </TabsContent>

                {/* Winners Tab */}
                <TabsContent value="winners" className="space-y-4 mt-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Campaign Winners</h3>
                    </div>
                    {winners.map((winner, idx) => (
                        <Card key={idx} className="border-2">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{winner.badge}</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-bold text-lg">{winner.team}</h4>
                                            <Badge className={winner.color}>{winner.place}</Badge>
                                        </div>
                                        <p className="text-sm font-medium text-muted-foreground mb-2">{winner.project}</p>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Award className="h-4 w-4 text-primary" />
                                            <span className="font-bold text-primary">{winner.prize}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-xs text-muted-foreground">Team Members:</span>
                                            {winner.members.map((member, i) => (
                                                <Badge key={i} variant="secondary" className="text-xs">
                                                    {member}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>

                {/* Analytics Tab */}
                <TabsContent value="analytics" className="space-y-6 mt-6">
                    {/* Big Stats Cards */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="border">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-2">
                                    <Trophy className="h-4 w-4 text-muted-foreground" />
                                    <CardTitle className="text-xs font-medium text-muted-foreground">Total Submissions</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">{campaignAnalytics.keyMetrics.totalSubmissions.toLocaleString()}</div>
                                <p className="text-xs text-emerald-500 mt-1">+12% from last month</p>
                            </CardContent>
                        </Card>
                        <Card className="border">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                                    <CardTitle className="text-xs font-medium text-muted-foreground">Pull Requests</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">{campaignAnalytics.keyMetrics.pullRequests}</div>
                                <p className="text-xs text-emerald-500 mt-1">+8% from last month</p>
                            </CardContent>
                        </Card>
                        <Card className="border">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-2">
                                    <Award className="h-4 w-4 text-muted-foreground" />
                                    <CardTitle className="text-xs font-medium text-muted-foreground">Total Issues</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">{campaignAnalytics.keyMetrics.issues}</div>
                                <p className="text-xs text-emerald-500 mt-1">Resolved 67%</p>
                            </CardContent>
                        </Card>
                        <Card className="border">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-2">
                                    <Target className="h-4 w-4 text-muted-foreground" />
                                    <CardTitle className="text-xs font-medium text-muted-foreground">Active Projects</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">{campaignAnalytics.keyMetrics.activeProjects}</div>
                                <p className="text-xs text-emerald-500 mt-1">+15% from last month</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Top Row: Contributors, Tech Stack, Heatmap */}
                    <div className="grid gap-4 lg:grid-cols-3">
                        <TopContributorsCard contributors={campaignAnalytics.topContributors} />
                        <TechStackChart techStack={campaignAnalytics.techStack} />
                        <ActivityHeatmap data={campaignAnalytics.activityHeatmap} />
                    </div>

                    {/* Bottom Row: Health Gauges and Project Table */}
                    <div className="grid gap-4 lg:grid-cols-3">
                        <CampaignHealthGauges health={campaignAnalytics.campaignHealth} />
                        <ProjectHealthTable projects={campaignAnalytics.projectHealth} />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
