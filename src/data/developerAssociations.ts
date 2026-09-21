export interface DeveloperAssociation {
    id: string;
    name: string;
    subtext?: string;
    tagline?: string;
    category: "Luxury & Super-Prime" | "Mumbai Heritage" | "Conglomerates" | "Pan-India Giants" | "Commercial & Mixed-Use";
    locations: string;
    flagshipProjects: string[];
    reraPartnerStatus: string;
}

export const developerAssociations: DeveloperAssociation[] = [
    {
        id: "godrej-properties",
        name: "Godrej Properties",
        subtext: "Properties",
        tagline: "Brighter Living, Sustainable Provenance",
        category: "Conglomerates",
        locations: "BKC, Chembur, Vikhroli, Mahalaxmi",
        flagshipProjects: ["Godrej Sky Terraces (Chembur)", "Godrej Horizon (Wadala)", "Godrej Bayview (Worli)"],
        reraPartnerStatus: "Tier-1 Strategic Alliance"
    },
    {
        id: "lodha",
        name: "Lodha",
        subtext: "BUILDING A BETTER LIFE",
        tagline: "India's No. 1 Real Estate Developer",
        category: "Luxury & Super-Prime",
        locations: "Worli, Lower Parel, Altamount Road, Mahalaxmi",
        flagshipProjects: ["Lodha World Towers", "Lodha Altamount", "The Park Worli"],
        reraPartnerStatus: "Preferred Private Client Desk"
    },
    {
        id: "lt-realty",
        name: "L&T Realty",
        subtext: "Realty",
        tagline: "Engineering Enduring Architectural Landmarks",
        category: "Conglomerates",
        locations: "Powai, Seawoods, Sewri, Mulund",
        flagshipProjects: ["Crescent Bay (Parel)", "Emerald Isle (Powai)", "L&T Island Cove (Mahim)"],
        reraPartnerStatus: "Tier-1 Strategic Alliance"
    },
    {
        id: "adani-realty",
        name: "Adani Realty",
        subtext: "Realty",
        tagline: "Nation Building Through Prime Infrastructure",
        category: "Conglomerates",
        locations: "Bandra West, Byculla, Ghatkopar, Andheri",
        flagshipProjects: ["Ten BKC", "Monte South (Byculla)", "Western Heights"],
        reraPartnerStatus: "Authorized Channel Partner"
    },
    {
        id: "dlf",
        name: "DLF",
        subtext: "Building India",
        tagline: "Seven Decades of Luxury Real Estate Leadership",
        category: "Pan-India Giants",
        locations: "Mumbai Corridors, National Capital Region, Goa",
        flagshipProjects: ["DLF The Camellias", "DLF Crest", "Super-Luxury Penthouses"],
        reraPartnerStatus: "National Wealth Desk Partner"
    },
    {
        id: "prestige-group",
        name: "Prestige Group",
        subtext: "Add Prestige to your life",
        tagline: "Shaping City Skylines Across India",
        category: "Pan-India Giants",
        locations: "Marine Lines, Byculla, Mulund, BKC",
        flagshipProjects: ["Prestige Jasdan Classic (Mahalaxmi)", "The Prestige City (Mulund)", "Prestige Ocean Towers"],
        reraPartnerStatus: "Key Partner Desk"
    },
    {
        id: "birla-estates",
        name: "Birla Estates",
        subtext: "Estates",
        tagline: "The Century-Old Birla Legacy in Luxury Living",
        category: "Conglomerates",
        locations: "Worli, Century Mills, Walkeshwar, Kalyan",
        flagshipProjects: ["Birla Niyaara (Worli)", "Birla Anayu (Walkeshwar)", "Birla Vanya"],
        reraPartnerStatus: "Tier-1 Strategic Alliance"
    },
    {
        id: "k-raheja-corp",
        name: "K Raheja Corp",
        subtext: "Corp",
        tagline: "Pioneers of Marquee Mixed-Use & Ultra-Luxury",
        category: "Commercial & Mixed-Use",
        locations: "Worli, Mahalaxmi, Bandra West, BKC",
        flagshipProjects: ["Vivarea (Mahalaxmi)", "Artesia (Worli)", "Mindspace Commercial"],
        reraPartnerStatus: "Preferred Institutional Desk"
    },
    {
        id: "kalpataru",
        name: "Kalpataru",
        subtext: "Kalpataru",
        tagline: "Over 50 Years of Iconic Urban Architecture",
        category: "Mumbai Heritage",
        locations: "Prabhadevi, Matunga, Santacruz, Thane",
        flagshipProjects: ["Kalpataru Avana (Parel)", "Kalpataru Magnus (Bandra)", "Kalpataru Bliss"],
        reraPartnerStatus: "Direct Builder Partner"
    },
    {
        id: "piramal-realty",
        name: "Piramal Realty",
        subtext: "Realty",
        tagline: "Biophilic Design Meets Global Masterplanning",
        category: "Luxury & Super-Prime",
        locations: "Mahalaxmi, Byculla, Mulund, Kurla",
        flagshipProjects: ["Piramal Mahalaxmi", "Piramal Aranya (Byculla)", "Piramal Revanta"],
        reraPartnerStatus: "Elite Advisory Partner"
    },
    {
        id: "house-of-hiranandani",
        name: "House of Hiranandani",
        subtext: "House of Hiranandani",
        tagline: "Timeless Neoclassical Architectural Provenance",
        category: "Luxury & Super-Prime",
        locations: "Chembur, Kandivali, Powai, Thane",
        flagshipProjects: ["Maitri Park (Chembur)", "Castalia (Kandivali)", "Rodas Enclave"],
        reraPartnerStatus: "Key Chembur Partner"
    },
    {
        id: "mahindra-lifespaces",
        name: "Mahindra Lifespaces",
        subtext: "LIFESPACES",
        tagline: "Sustainable Urbanization & Green Homes",
        category: "Conglomerates",
        locations: "Malad, Dahisar, Kandivali, Fort",
        flagshipProjects: ["Mahindra Roots", "Mahindra Alcove", "Mahindra Vicino"],
        reraPartnerStatus: "Authorized Channel Partner"
    },
    {
        id: "rustomjee",
        name: "Rustomjee",
        subtext: "Rustomjee",
        tagline: "Designing Spaces Where Life and Art Intersect",
        category: "Mumbai Heritage",
        locations: "Bandra, Juhu, Khar, Prabhadevi, Thane",
        flagshipProjects: ["Rustomjee Elements (Juhu)", "Rustomjee Seasons (BKC)", "Crown (Prabhadevi)"],
        reraPartnerStatus: "Direct Builder Partner"
    },
    {
        id: "shapoorji-pallonji",
        name: "Shapoorji Pallonji",
        subtext: "Shapoorji Pallonji",
        tagline: "Over 150 Years of Engineering Integrity",
        category: "Mumbai Heritage",
        locations: "Tardeo, BKC, Sewri, Kandivali",
        flagshipProjects: ["The Imperial (Tardeo)", "BKC 28", "Vicinia (Powai)"],
        reraPartnerStatus: "Heritage Advisory Alliance"
    },
    {
        id: "sattva",
        name: "Sattva",
        subtext: "TRUST. IT'S WHAT WE BUILD.",
        tagline: "Modern High-Rise Engineering & Commercial Parks",
        category: "Pan-India Giants",
        locations: "Mumbai Prime Corridors, Bengaluru, Hyderabad",
        flagshipProjects: ["Sattva Signature Towers", "Trophy Grade-A Commercial"],
        reraPartnerStatus: "Institutional Partner"
    },
    {
        id: "crest",
        name: "CREST",
        subtext: "Crest Ventures",
        tagline: "Bespoke Boutique Developments & Real Estate Assets",
        category: "Commercial & Mixed-Use",
        locations: "Chembur, Bandra, Lower Parel, Worli",
        flagshipProjects: ["Crest Commercial Chembur", "Prime High-Street Portfolios"],
        reraPartnerStatus: "Direct Partner Desk"
    },
    {
        id: "kolte-patil",
        name: "Kolte Patil",
        subtext: "Creation, not Construction",
        tagline: "Three Decades of Innovation & Trust",
        category: "Pan-India Giants",
        locations: "Khar, Santacruz, Goregaon, Pune",
        flagshipProjects: ["Altezza (Khar)", "24K Luxury Residences", "Verdao"],
        reraPartnerStatus: "Authorized Partner"
    },
    {
        id: "ajmera",
        name: "Ajmera",
        subtext: "Built on Trust",
        tagline: "Over 55 Years Transforming Mumbai's Horizon",
        category: "Mumbai Heritage",
        locations: "Wadala, Chembur, Ghatkopar, Juhu",
        flagshipProjects: ["Ajmera i-Land (Wadala)", "Ajmera Sikova (Ghatkopar)", "Ajmera Prive"],
        reraPartnerStatus: "Strategic Heritage Desk"
    },
    {
        id: "hiranandani",
        name: "Hiranandani",
        subtext: "creating better communities",
        tagline: "Pioneers of Integrated Township Architecture",
        category: "Mumbai Heritage",
        locations: "Powai, Thane, Panvel",
        flagshipProjects: ["Hiranandani Gardens (Powai)", "Hiranandani Estate (Thane)", "Regent Hill"],
        reraPartnerStatus: "Authorized Township Partner"
    },
    {
        id: "sobha",
        name: "Sobha",
        subtext: "Passion at Work",
        tagline: "Self-Reliant Engineering & German Precision Finish",
        category: "Pan-India Giants",
        locations: "Mumbai Luxury Corridors, Dubai, Bengaluru",
        flagshipProjects: ["Sobha Super-Luxury Residences", "Sobha Hartland Portfolios"],
        reraPartnerStatus: "National Channel Alliance"
    },
    {
        id: "raymond-realty",
        name: "Raymond Realty",
        subtext: "Go Beyond",
        tagline: "The Complete Man's Complete Home",
        category: "Conglomerates",
        locations: "Thane, Bandra, Mahim, Wadala",
        flagshipProjects: ["The Address by GS (Thane)", "Ten X Habitat", "Invictus GS"],
        reraPartnerStatus: "Tier-1 Strategic Partner"
    },
    {
        id: "oberoi-realty",
        name: "Oberoi Realty",
        subtext: "Oberoi Realty",
        tagline: "Curators of Contemporary Masterpieces",
        category: "Luxury & Super-Prime",
        locations: "Worli, Goregaon, Borivali, Mulund, Thane",
        flagshipProjects: ["Three Sixty West (Worli)", "Sky City (Borivali)", "Forestville (Thane)"],
        reraPartnerStatus: "Direct Builder Channel Desk"
    },
    {
        id: "puravankara",
        name: "Puravankara",
        subtext: "Puravankara",
        tagline: "Five Decades of International Standard Homes",
        category: "Pan-India Giants",
        locations: "Chembur, Bhandup, Marine Drive Corridors",
        flagshipProjects: ["Purva Clermont (Chembur)", "Purva GrandPalace", "Purva Sparkle"],
        reraPartnerStatus: "Key Partner Desk"
    },
    {
        id: "the-wadhwa-group",
        name: "The Wadhwa Group",
        subtext: "Landmarks Planned With Passion",
        tagline: "Ventilit Philosophy: Height, Light & Air",
        category: "Mumbai Heritage",
        locations: "BKC, Ghatkopar, Kanjurmarg, Chembur",
        flagshipProjects: ["The Capital (BKC)", "W54 (Matunga)", "Atmosphere O2 (Mulund)"],
        reraPartnerStatus: "Preferred Advisory Alliance"
    },
    {
        id: "safal-group",
        name: "Safal Group",
        subtext: "Building Dreams",
        tagline: "Prominent Pioneers Across Eastern Mumbai & Chembur",
        category: "Mumbai Heritage",
        locations: "Chembur, Deonar, Ghatkopar, Navi Mumbai",
        flagshipProjects: ["Safal Heights (Chembur)", "Safal Ganga", "Safal Pride"],
        reraPartnerStatus: "Preferred Chembur Channel Partner"
    },
    {
        id: "spenta",
        name: "Spenta",
        subtext: "Spenta",
        tagline: "Smart Contemporary Urban Spaces",
        category: "Mumbai Heritage",
        locations: "Chembur, Altamount Road, Matunga, Juhu",
        flagshipProjects: ["Alta Monte", "Medius (Chembur)", "Stardust (Chembur)"],
        reraPartnerStatus: "Preferred Chembur Alliance"
    },
    {
        id: "runwal",
        name: "Runwal",
        subtext: "With you always... Since 1978",
        tagline: "Over 4 Decades of Creating Landmark Addresses",
        category: "Mumbai Heritage",
        locations: "Chembur, Kanjurmarg, Mulund, Worli",
        flagshipProjects: ["Runwal Sanctuary (Mulund)", "Runwal Bliss (Kanjurmarg)", "Runwal 25 Hour Life"],
        reraPartnerStatus: "Tier-1 Strategic Alliance"
    },
    {
        id: "dosti",
        name: "Dosti",
        subtext: "FRIENDS FOR LIFE",
        tagline: "40+ Years of Building Cherished Communities",
        category: "Mumbai Heritage",
        locations: "Wadala, Chembur, Balkum, Thane",
        flagshipProjects: ["Dosti Eastern Bay (Wadala)", "Dosti West County", "Dosti Planet North"],
        reraPartnerStatus: "Direct Builder Partner"
    },
    {
        id: "supreme",
        name: "Supreme",
        subtext: "Supreme Universal",
        tagline: "Artisans of Boutique Luxury Residences",
        category: "Luxury & Super-Prime",
        locations: "Bandra, Chembur, Pali Hill, Khar",
        flagshipProjects: ["Supreme Signature (Bandra)", "Supreme Melange", "Supreme Signet"],
        reraPartnerStatus: "Elite Advisory Partner"
    },
    {
        id: "runwal-enterprises",
        name: "Runwal Enterprises",
        subtext: "A SUBHASH RUNWAL GROUP",
        tagline: "Commercial Hubs, Retail Malls & Premium Residences",
        category: "Mumbai Heritage",
        locations: "Chembur, Ghatkopar, Bhandup",
        flagshipProjects: ["Runwal Commercial Chembur", "R-City Anchor Spaces", "Subhash Runwal Enclaves"],
        reraPartnerStatus: "Key Strategic Desk"
    }
];
