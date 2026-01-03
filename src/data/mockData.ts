
export interface Package {
    name: string;
    description: string;
    txCount: number;
    moduleCount: number;
    createdDate: string;
    verified: boolean;
    socials: {
        twitter?: string;
        discord?: string;
        website?: string;
    };
}

export const topPackages: Package[] = [
    {
        name: "DeepBook",
        description: "Central Limit Order Book for Sui",
        txCount: 154200,
        moduleCount: 12,
        createdDate: "2024-05-15",
        verified: true,
        socials: { twitter: "https://x.com/DeepBook", website: "https://sui.io" },
    },
    {
        name: "Aftermath",
        description: "DEX, Staking, and NFTfi",
        txCount: 89000,
        moduleCount: 24,
        createdDate: "2024-06-01",
        verified: true,
        socials: { twitter: "https://x.com/AftermathFi", discord: "https://discord.gg/aftermath" },
    },
    {
        name: "Sui-Framework",
        description: "Core Sui Framework modules",
        txCount: 5000000,
        moduleCount: 50,
        createdDate: "2023-01-01",
        verified: true,
        socials: { website: "https://sui.io" },
    },
    {
        name: "Cetus-AMM",
        description: "Concentrated Liquidity Protocol",
        txCount: 340000,
        moduleCount: 8,
        createdDate: "2024-02-10",
        verified: true,
        socials: { twitter: "https://x.com/CetusProtocol" },
    },
    {
        name: "Navi-Protocol",
        description: "One-Stop Liquidity Protocol",
        txCount: 220000,
        moduleCount: 15,
        createdDate: "2024-03-20",
        verified: true,
        socials: { twitter: "https://x.com/navi_protocol" },
    },
];

export const newPackages: Package[] = [
    {
        name: "Sui-Lend-V2",
        description: "Next gen lending protocol",
        txCount: 1200,
        moduleCount: 5,
        createdDate: "2024-12-01",
        verified: false,
        socials: { twitter: "https://x.com/SuiLend" },
    },
    {
        name: "Move-Pump",
        description: "Meme coin launchpad",
        txCount: 500,
        moduleCount: 3,
        createdDate: "2024-12-05",
        verified: false,
        socials: {},
    },
    {
        name: "BlueMove-Sui",
        description: "NFT Marketplace",
        txCount: 45000,
        moduleCount: 10,
        createdDate: "2024-11-15",
        verified: true,
        socials: { twitter: "https://x.com/BlueMove_OA" },
    },
];

export const topRepos = [
    { name: "mysten/sui", stars: 8500, forks: 1200, issues: 340, prs: 50 },
    { name: "MystenLabs/sui-explorer", stars: 450, forks: 120, issues: 20, prs: 5 },
    { name: "scallop-io/sui-scallop-protocol", stars: 320, forks: 80, issues: 15, prs: 8 },
    { name: "typus-finance/typus-safu", stars: 210, forks: 45, issues: 5, prs: 2 },
];

export const developers = [
    { name: "Evan Cheng", handle: "@EvanCheng", avatar: "https://github.com/EvanCheng.png", reputation: 9000, followers: 15000, location: "USA" },
    { name: "Sam Blackshear", handle: "@SamBlackshear", avatar: "https://github.com/SamBlackshear.png", reputation: 8500, followers: 12000, location: "USA" },
    { name: "Adeniyi", handle: "@adeniyi", avatar: "https://github.com/adeniyi.png", reputation: 4500, followers: 3000, location: "Nigeria" },
    { name: "0xMoveDev", handle: "@0xmovedev", avatar: "https://github.com/shadcn.png", reputation: 3200, followers: 1500, location: "Vietnam" },
];

export const contributions = [
    { day: "Mon", value: 10 },
    { day: "Tue", value: 40 },
    { day: "Wed", value: 30 },
    { day: "Thu", value: 70 },
    { day: "Fri", value: 50 },
    { day: "Sat", value: 20 },
    { day: "Sun", value: 10 },
];

export const dashboardStats = [
    { label: "Full-time devs", value: "1,240", change: "+12%", trend: "up" },
    { label: "Monthly active devs", value: "4,820", change: "+8.5%", trend: "up" },
    { label: "Total repos", value: "12,450", change: "+24%", trend: "up" },
    { label: "Total commits", value: "8.2M", change: "+15%", trend: "up" },
];

export const developerGrowthData = [
    { year: "2018", total: 120, fullTime: 40, partTime: 80 },
    { year: "2019", total: 350, fullTime: 120, partTime: 230 },
    { year: "2020", total: 900, fullTime: 300, partTime: 600 },
    { year: "2021", total: 2400, fullTime: 800, partTime: 1600 },
    { year: "2022", total: 4500, fullTime: 1500, partTime: 3000 },
    { year: "2023", total: 6200, fullTime: 2100, partTime: 4100 },
    { year: "2024", total: 8500, fullTime: 3200, partTime: 5300 },
    { year: "2025", total: 10400, fullTime: 4100, partTime: 6300 },
];

export const ecosystemDistribution = [
    { name: "DeFi", value: 45, fill: "#3b82f6" },
    { name: "Gaming", value: 25, fill: "#8b5cf6" },
    { name: "Infrastructure", value: 20, fill: "#f97316" },
    { name: "NFTs", value: 10, fill: "#10b981" },
];

export const activeDevsByType = [
    { month: "Jan", fullTime: 1200, partTime: 800, oneTime: 400 },
    { month: "Feb", fullTime: 1250, partTime: 850, oneTime: 300 },
    { month: "Mar", fullTime: 1400, partTime: 900, oneTime: 500 },
    { month: "Apr", fullTime: 1500, partTime: 1100, oneTime: 600 },
    { month: "May", fullTime: 1600, partTime: 1200, oneTime: 400 },
    { month: "Jun", fullTime: 1800, partTime: 1400, oneTime: 700 },
];

export const projectTreemapData = [
    { name: "Cetus", size: 4000, change: +12.5, type: "DeFi", trend: [10, 15, 13, 18, 20, 25, 22, 30] },
    { name: "Navi", size: 3000, change: +8.2, type: "DeFi", trend: [20, 18, 22, 25, 24, 28, 32, 35] },
    { name: "Scallop", size: 2500, change: -2.4, type: "DeFi", trend: [30, 28, 25, 22, 24, 20, 18, 15] },
    { name: "DeepBook", size: 2000, change: +5.1, type: "DeFi", trend: [10, 12, 11, 14, 16, 18, 20, 22] },
    { name: "Aftermath", size: 1800, change: +15.3, type: "DeFi", trend: [5, 8, 12, 15, 20, 25, 30, 35] },
    { name: "Turbos", size: 1500, change: -5.6, type: "DeFi", trend: [25, 22, 20, 18, 15, 12, 10, 8] },
    { name: "BlueMove", size: 1200, change: +3.4, type: "NFT", trend: [10, 11, 12, 13, 14, 15, 16, 17] },
    { name: "Kriya", size: 1000, change: -1.2, type: "DeFi", trend: [15, 14, 13, 12, 11, 10, 9, 8] },
];

export const devTreemapData = [
    { name: "Mysten Labs", size: 5000, change: +20.5, type: "Core", trend: [50, 55, 60, 65, 70, 75, 80, 85] },
    { name: "OtterSec", size: 2800, change: +10.2, type: "Audit", trend: [30, 32, 35, 38, 40, 42, 45, 48] },
    { name: "MoveBit", size: 2200, change: -4.5, type: "Audit", trend: [40, 38, 35, 32, 30, 28, 25, 22] },
    { name: "Zellic", size: 1800, change: +8.8, type: "Audit", trend: [20, 22, 25, 28, 30, 32, 35, 38] },
    { name: "SuiNS", size: 1500, change: +12.1, type: "Identity", trend: [15, 18, 20, 23, 25, 28, 30, 32] },
    { name: "Pyth", size: 1200, change: +6.3, type: "Oracle", trend: [10, 12, 14, 16, 18, 20, 22, 24] },
    { name: "Wormhole", size: 1000, change: -2.1, type: "Bridge", trend: [25, 24, 23, 22, 21, 20, 19, 18] },
];

export const trendingProjects = [
    {
        name: "SuiNs Protocol",
        description: "Decentralized name service for Sui addresses",
        address: "0x7f2a...d4c8",
        change: "+6%",
        period: "7d",
        isPositive: true,
        contributors: [
            "https://i.pravatar.cc/150?img=1",
            "https://i.pravatar.cc/150?img=2",
            "https://i.pravatar.cc/150?img=3",
        ]
    },
    {
        name: "Kriya Finance",
        description: "Multi-asset AMM protocol on Sui",
        address: "0x7f2a...d4c8",
        change: "-0.9%",
        period: "7d",
        isPositive: false,
        contributors: [
            "https://i.pravatar.cc/150?img=4",
            "https://i.pravatar.cc/150?img=5",
            "https://i.pravatar.cc/150?img=6",
        ]
    },
    {
        name: "Cetus Protocol",
        description: "Concentrated liquidity protocol for Sui",
        address: "0x8a3b...e5f7",
        change: "+12%",
        period: "7d",
        isPositive: true,
        contributors: [
            "https://i.pravatar.cc/150?img=7",
            "https://i.pravatar.cc/150?img=8",
            "https://i.pravatar.cc/150?img=9",
        ]
    },
    {
        name: "Scallop",
        description: "Lending and borrowing protocol",
        address: "0x9c4d...f6g8",
        change: "+3.2%",
        period: "7d",
        isPositive: true,
        contributors: [
            "https://i.pravatar.cc/150?img=10",
            "https://i.pravatar.cc/150?img=11",
            "https://i.pravatar.cc/150?img=12",
        ]
    },
    {
        name: "Navi Protocol",
        description: "DeFi lending marketplace on Sui",
        address: "0x1e5f...h7i9",
        change: "+8.5%",
        period: "7d",
        isPositive: true,
        contributors: [
            "https://i.pravatar.cc/150?img=13",
            "https://i.pravatar.cc/150?img=14",
            "https://i.pravatar.cc/150?img=15",
        ]
    },
];

export interface Tool {
    id: string;
    name: string;
    description: string;
    category: 'Storage' | 'Security' | 'Identity' | 'DeFi' | 'Infrastructure' | 'Developer Tools' | 'Oracle';
    logo: string;
    website: string;
    github?: string;
    docs?: string;
    stats: {
        projectsUsing: number;
        weeklyDownloads?: number;
        stars?: number;
        totalTransactions?: number;
    };
    ranking: number;
    trendingScore: number; // 0-100
    projects: {
        name: string;
        category: string;
    }[];
    tags: string[];
}

export const suiTools: Tool[] = [
    {
        id: '1',
        name: 'Walrus',
        description: 'Decentralized storage protocol and data availability layer for Sui blockchain',
        category: 'Storage',
        logo: '🌊',
        website: 'https://walrus.site',
        github: 'https://github.com/MystenLabs/walrus',
        docs: 'https://docs.walrus.site',
        stats: {
            projectsUsing: 47,
            totalTransactions: 1250000,
            stars: 890
        },
        ranking: 1,
        trendingScore: 95,
        projects: [
            { name: 'SuiNS', category: 'Identity' },
            { name: 'BlueMove', category: 'NFT' },
            { name: 'Cetus', category: 'DeFi' },
            { name: 'Aftermath', category: 'DeFi' }
        ],
        tags: ['storage', 'data-availability', 'decentralized', 'infrastructure']
    },
    {
        id: '2',
        name: 'Enoki',
        description: 'zkLogin infrastructure and authentication layer for seamless Web3 onboarding',
        category: 'Identity',
        logo: '🍄',
        website: 'https://enoki.mystenlabs.com',
        docs: 'https://docs.enoki.mystenlabs.com',
        stats: {
            projectsUsing: 38,
            totalTransactions: 850000,
            weeklyDownloads: 12500
        },
        ranking: 2,
        trendingScore: 92,
        projects: [
            { name: 'Navi Protocol', category: 'DeFi' },
            { name: 'Scallop', category: 'DeFi' },
            { name: 'Kriya', category: 'DeFi' },
            { name: 'SuiPlay', category: 'Gaming' }
        ],
        tags: ['zkLogin', 'authentication', 'identity', 'web3-onboarding']
    },
    {
        id: '3',
        name: 'DeepBook',
        description: 'Central limit order book (CLOB) protocol for decentralized trading',
        category: 'DeFi',
        logo: '📊',
        website: 'https://deepbook.tech',
        github: 'https://github.com/DeepBookTech',
        stats: {
            projectsUsing: 32,
            totalTransactions: 3500000,
            stars: 560
        },
        ranking: 3,
        trendingScore: 88,
        projects: [
            { name: 'Cetus', category: 'DeFi' },
            { name: 'Turbos', category: 'DeFi' },
            { name: 'Aftermath', category: 'DeFi' },
            { name: 'Kriya', category: 'DeFi' }
        ],
        tags: ['order-book', 'trading', 'liquidity', 'dex']
    },
    {
        id: '4',
        name: 'Seal',
        description: 'Smart contract verification and security auditing tool for Move language',
        category: 'Security',
        logo: '🔒',
        website: 'https://seal.security',
        github: 'https://github.com/seal-security',
        docs: 'https://docs.seal.security',
        stats: {
            projectsUsing: 28,
            stars: 420,
            weeklyDownloads: 3200
        },
        ranking: 4,
        trendingScore: 85,
        projects: [
            { name: 'Navi Protocol', category: 'DeFi' },
            { name: 'Scallop', category: 'DeFi' },
            { name: 'Cetus', category: 'DeFi' }
        ],
        tags: ['security', 'auditing', 'verification', 'move']
    },
    {
        id: '5',
        name: 'Sui SDK',
        description: 'Official JavaScript/TypeScript SDK for building on Sui blockchain',
        category: 'Developer Tools',
        logo: '⚙️',
        website: 'https://sdk.mystenlabs.com',
        github: 'https://github.com/MystenLabs/sui',
        docs: 'https://docs.sui.io/references/ts-sdk',
        stats: {
            projectsUsing: 156,
            weeklyDownloads: 45000,
            stars: 8500
        },
        ranking: 5,
        trendingScore: 98,
        projects: [
            { name: 'All Projects', category: 'Various' }
        ],
        tags: ['sdk', 'javascript', 'typescript', 'development']
    },
    {
        id: '6',
        name: 'Pyth Oracle',
        description: 'High-fidelity, low-latency price feeds for DeFi applications',
        category: 'Oracle',
        logo: '🔮',
        website: 'https://pyth.network',
        github: 'https://github.com/pyth-network',
        docs: 'https://docs.pyth.network',
        stats: {
            projectsUsing: 42,
            totalTransactions: 2100000,
            stars: 750
        },
        ranking: 6,
        trendingScore: 87,
        projects: [
            { name: 'Navi Protocol', category: 'DeFi' },
            { name: 'Scallop', category: 'DeFi' },
            { name: 'Cetus', category: 'DeFi' },
            { name: 'Aftermath', category: 'DeFi' }
        ],
        tags: ['oracle', 'price-feeds', 'defi', 'data']
    },
    {
        id: '7',
        name: 'Sui CLI',
        description: 'Command-line interface for interacting with Sui blockchain and Move development',
        category: 'Developer Tools',
        logo: '💻',
        website: 'https://sui.io',
        github: 'https://github.com/MystenLabs/sui',
        docs: 'https://docs.sui.io/references/cli',
        stats: {
            projectsUsing: 200,
            weeklyDownloads: 25000,
            stars: 8500
        },
        ranking: 7,
        trendingScore: 94,
        projects: [
            { name: 'All Projects', category: 'Various' }
        ],
        tags: ['cli', 'development', 'move', 'tooling']
    },
    {
        id: '8',
        name: 'Move Analyzer',
        description: 'Static analysis and linting tool for Move smart contracts',
        category: 'Developer Tools',
        logo: '🔍',
        website: 'https://move-analyzer.dev',
        github: 'https://github.com/move-language/move-analyzer',
        docs: 'https://docs.move-analyzer.dev',
        stats: {
            projectsUsing: 67,
            weeklyDownloads: 8900,
            stars: 340
        },
        ranking: 8,
        trendingScore: 78,
        projects: [
            { name: 'DeepBook', category: 'DeFi' },
            { name: 'Navi Protocol', category: 'DeFi' },
            { name: 'Cetus', category: 'DeFi' }
        ],
        tags: ['static-analysis', 'linting', 'move', 'quality']
    },
    {
        id: '9',
        name: 'Switchboard',
        description: 'Decentralized oracle network for custom data feeds and automation',
        category: 'Oracle',
        logo: '🔌',
        website: 'https://switchboard.xyz',
        github: 'https://github.com/switchboard-xyz',
        docs: 'https://docs.switchboard.xyz',
        stats: {
            projectsUsing: 24,
            totalTransactions: 890000,
            stars: 290
        },
        ranking: 9,
        trendingScore: 72,
        projects: [
            { name: 'Turbos', category: 'DeFi' },
            { name: 'Kriya', category: 'DeFi' },
            { name: 'Aftermath', category: 'DeFi' }
        ],
        tags: ['oracle', 'automation', 'data-feeds', 'decentralized']
    },
    {
        id: '10',
        name: 'Sui Explorer API',
        description: 'Blockchain explorer and analytics API for Sui network data',
        category: 'Infrastructure',
        logo: '🔭',
        website: 'https://suiexplorer.com',
        github: 'https://github.com/MystenLabs/sui-explorer',
        docs: 'https://docs.suiexplorer.com/api',
        stats: {
            projectsUsing: 89,
            totalTransactions: 15000000,
            stars: 450
        },
        ranking: 10,
        trendingScore: 83,
        projects: [
            { name: 'SuiNS', category: 'Identity' },
            { name: 'BlueMove', category: 'NFT' },
            { name: 'Cetus', category: 'DeFi' },
            { name: 'Navi Protocol', category: 'DeFi' }
        ],
        tags: ['explorer', 'analytics', 'api', 'data']
    }
];

// Campaign Analytics Data
export interface CampaignAnalytics {
    topContributors: {
        rank: number;
        name: string;
        avatar: string;
        submissions: number;
    }[];
    techStack: {
        name: string;
        percentage: number;
        color: string;
    }[];
    activityHeatmap: {
        date: string;
        count: number;
    }[];
    keyMetrics: {
        totalSubmissions: number;
        pullRequests: number;
        issues: number;
        activeProjects: number;
    };
    projectHealth: {
        name: string;
        lastActivity: string;
        status: 'Active' | 'Moderate' | 'Inactive';
        commits: number;
        prs: number;
        issues: number;
        quality: number;
    }[];
    campaignHealth: {
        overallScore: number;
        qualityScore: number;
    };
}

// Generate last 90 days of activity data
const generateActivityHeatmap = () => {
    const data = [];
    const today = new Date();
    for (let i = 89; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const count = Math.floor(Math.random() * 15);
        data.push({
            date: date.toISOString().split('T')[0],
            count
        });
    }
    return data;
};

export const campaignAnalytics: CampaignAnalytics = {
    topContributors: [
        {
            rank: 1,
            name: 'devMaster99',
            avatar: 'https://i.pravatar.cc/150?img=12',
            submissions: 128
        },
        {
            rank: 2,
            name: 'JS_Ninja',
            avatar: 'https://i.pravatar.cc/150?img=13',
            submissions: 115
        },
        {
            rank: 3,
            name: 'CodeWizard',
            avatar: 'https://i.pravatar.cc/150?img=14',
            submissions: 98
        },
        {
            rank: 4,
            name: 'PythonPro',
            avatar: 'https://i.pravatar.cc/150?img=15',
            submissions: 85
        },
        {
            rank: 5,
            name: 'LunaDev',
            avatar: 'https://i.pravatar.cc/150?img=16',
            submissions: 73
        }
    ],
    techStack: [
        {
            name: 'Move',
            percentage: 35,
            color: 'oklch(55% 0.22 300)' // Purple
        },
        {
            name: 'TypeScript',
            percentage: 25,
            color: 'oklch(60% 0.15 240)' // Blue
        },
        {
            name: 'Rust',
            percentage: 15,
            color: 'oklch(55% 0.18 30)' // Orange
        },
        {
            name: 'Python',
            percentage: 15,
            color: 'oklch(60% 0.15 140)' // Green
        },
        {
            name: 'Other',
            percentage: 10,
            color: 'oklch(50% 0.05 0)' // Gray
        }
    ],
    activityHeatmap: generateActivityHeatmap(),
    keyMetrics: {
        totalSubmissions: 1248,
        pullRequests: 312,
        issues: 189,
        activeProjects: 45
    },
    projectHealth: [
        {
            name: 'AlphaCode',
            lastActivity: '1 day ago',
            status: 'Active',
            commits: 123,
            prs: 177,
            issues: 189,
            quality: 95
        },
        {
            name: 'PyTech',
            lastActivity: '10 days ago',
            status: 'Moderate',
            commits: 73,
            prs: 177,
            issues: 189,
            quality: 87
        },
        {
            name: 'DevOpsMasters',
            lastActivity: '21 days ago',
            status: 'Moderate',
            commits: 75,
            prs: 142,
            issues: 189,
            quality: 76
        },
        {
            name: 'RustyTools',
            lastActivity: '42 days ago',
            status: 'Inactive',
            commits: 68,
            prs: 125,
            issues: 189,
            quality: 56
        },
        {
            name: 'GoHub',
            lastActivity: '23 days ago',
            status: 'Inactive',
            commits: 321,
            prs: 139,
            issues: 109,
            quality: 20
        }
    ],
    campaignHealth: {
        overallScore: 100,
        qualityScore: 87
    }
};

