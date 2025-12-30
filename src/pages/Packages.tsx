
import { BadgeCheck, Globe, MessageCircle, Twitter } from "lucide-react";
import { topPackages, newPackages, type Package } from "@/data/mockData";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function PackageTable({ data }: { data: Package[] }) {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[300px]">Package Name</TableHead>
                        <TableHead>Socials</TableHead>
                        <TableHead className="text-right">Tx Count</TableHead>
                        <TableHead className="text-right">Modules</TableHead>
                        <TableHead className="text-right">Created</TableHead>
                        <TableHead className="text-center">Verified</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((pkg) => (
                        <TableRow key={pkg.name}>
                            <TableCell className="font-medium">
                                <div className="flex flex-col">
                                    <span className="flex items-center gap-2">
                                        {pkg.name}
                                        <a href="#" className="text-muted-foreground hover:text-primary">
                                            <Globe className="h-3 w-3" />
                                        </a>
                                    </span>
                                    <span className="text-xs text-muted-foreground">{pkg.description}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    {pkg.socials.twitter && (
                                        <a href={pkg.socials.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                                            <Twitter className="h-4 w-4" />
                                        </a>
                                    )}
                                    {pkg.socials.discord && (
                                        <a href={pkg.socials.discord} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                                            <MessageCircle className="h-4 w-4" />
                                        </a>
                                    )}
                                    {pkg.socials.website && (
                                        <a href={pkg.socials.website} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                                            <Globe className="h-4 w-4" />
                                        </a>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell className="text-right">{pkg.txCount.toLocaleString()}</TableCell>
                            <TableCell className="text-right">{pkg.moduleCount}</TableCell>
                            <TableCell className="text-right">{pkg.createdDate}</TableCell>
                            <TableCell className="text-center">
                                {pkg.verified && (
                                    <Badge variant="outline" className="border-green-500 text-green-500">
                                        <BadgeCheck className="mr-1 h-3 w-3" /> Verified
                                    </Badge>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export function Packages() {
    return (
        <div className="space-y-6 min-w-0">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Packages</h2>
                    <p className="text-muted-foreground">Explore the top and newest packages in the Sui ecosystem.</p>
                </div>
            </div>

            <Tabs defaultValue="top" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="top">Top Packages</TabsTrigger>
                    <TabsTrigger value="new">New Packages</TabsTrigger>
                </TabsList>
                <TabsContent value="top" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Top Packages</CardTitle>
                            <CardDescription>
                                Most active packages by transaction volume.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <PackageTable data={topPackages} />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="new" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>New Packages</CardTitle>
                            <CardDescription>
                                Recently published packages.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <PackageTable data={newPackages} />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
