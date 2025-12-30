import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, Users, TrendingUp, Award, Target } from "lucide-react";

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

    const analytics = [
        { label: "Total Submissions", value: "342", change: "+12%", icon: Trophy },
        { label: "Active Teams", value: "156", change: "+8%", icon: Users },
        { label: "Countries", value: "45", change: "+3", icon: TrendingUp },
        { label: "Total Views", value: "12.4k", change: "+25%", icon: Target }
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
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {analytics.map((stat, idx) => (
                            <Card key={idx}>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stat.value}</div>
                                    <p className="text-xs text-emerald-500">{stat.change}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Submission Timeline</CardTitle>
                            <CardDescription>Track submissions over time</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                                Chart placeholder - submissions over time
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Top Contributors</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={`https://i.pravatar.cc/150?img=${i + 40}`}
                                                alt="Contributor"
                                                className="h-8 w-8 rounded-full"
                                            />
                                            <div>
                                                <p className="font-semibold text-sm">Contributor {i}</p>
                                                <p className="text-xs text-muted-foreground">{10 - i} submissions</p>
                                            </div>
                                        </div>
                                        <Badge variant="outline">#{i}</Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
