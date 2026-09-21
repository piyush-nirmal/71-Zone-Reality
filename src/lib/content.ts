import { HomePageData } from "@/types/cms";
import { brands } from "@/data/brands";

export function getPageData(brandId: string): HomePageData {
    const brand = brands.find((b) => b.id === brandId) || brands[0];
    const is71Zone = brand.id === "elysian";

    return {
        settings: {
            brandName: "71 Zone Reality",
            companyName: "71 Zone Reality",
            logoText: "71 Zone",
            logoSubtext: "Reality",
            established: "3rd April 2013",
            contact: {
                ...brand.content.contact,
                address: "Crystal Armus, Shop No. 06, Vaibhav Nagar, Chembur East, Mumbai - 400071",
                phone: "+91 91679 32667",
                whatsapp: "9167932667",
                email: "zonereality71@gmail.com",
                established: "3rd April 2013",
                hours: "Monday – Saturday: 09:30 AM – 07:30 PM IST (Private Viewings by Appointment)",
                offices: [
                    {
                        name: "Headquarters // 71 Zone Reality",
                        region: "MUMBAI // CHEMBUR EAST",
                        address: "Crystal Armus, Shop No. 06, Vaibhav Nagar, Chembur East, Mumbai - 400071",
                        phone: "+91 91679 32667"
                    },
                    {
                        name: "National Capital Region Desk",
                        region: "Delhi NCR",
                        address: "Level 14, Horizon Center, Golf Course Road, DLF Phase 5, Gurugram, HR 122002",
                        phone: "+91 124 497 7100"
                    },
                    {
                        name: "Coastal Estates Gallery",
                        region: "Goa & Coastal Belt",
                        address: "Villa 7, Chogm Road, Porvorim, North Goa 403521",
                        phone: "+91 832 241 7100"
                    }
                ],
                socials: [
                    { platform: "whatsapp", url: "https://wa.me/919167932667" },
                    { platform: "instagram", url: "https://instagram.com/71zonerealty" },
                    { platform: "linkedin", url: "https://linkedin.com/company/71zonerealty" },
                    { platform: "facebook", url: "https://facebook.com/71zonerealty" }
                ],
            },
        },
        hero: {
            heading: brand.content.heroHeader,
            subheading: brand.content.heroSubtext,
            ctaText: "Explore Private Collection",
            bgImage: "/images/hero.png",
        },
        stats: [
            { label: "Established Year", value: "3rd Apr 2013" },
            { label: "Estates Handled", value: "120+" },
            { label: "Premier Partners", value: "18" },
            { label: "Private Clients", value: "1.4k+" },
        ],
        about: {
            title: `The 71 Zone Reality Legacy`,
            subtitle: "Private Advisory for Rare Estates",
            story: brand.content.aboutStory,
            legacy: brand.content.aboutLegacy,
            image: "/images/about.png",
            paragraphs: [
                "Established on 3rd April 2013, 71 Zone Reality was conceived to challenge the conventional brokerage model. Recognizing that high-net-worth families, global NRIs, and institutional investors required discretion and diligence akin to a private family office, we established a firm dedicated exclusively to prime real estate curation.",
                "Our acquisition mandate is governed by three non-negotiable pillars: architectural provenance, forensic legal clarity, and long-term capital preservation. Every sky villa, heritage estate, or commercial space we represent is subjected to an exhaustive title audit, Vastu harmony review, and structural inspection.",
                "Today, 71 Zone Reality stands as the trusted advisor to India's foremost business leaders, creative visionaries, and sovereign wealth representatives, curating landmark portfolios across Chembur, Mumbai, and global prime corridors."
            ],
            mission: "To protect and elevate private client wealth through the acquisition of enduring architectural masterpieces, conducted with absolute confidentiality, analytical precision, and aesthetic mastery.",
            values: "Discretion • Forensic Diligence • Curatorial Rigor • Uncompromising Client Advocacy",
            leadership: [
                {
                    name: "Piyush Nirmal",
                    title: "Founder & Managing Principal",
                    photo: "/images/about.png",
                    bio: "Piyush Nirmal established 71 Zone Reality on 3rd April 2013 with an obsession for spatial elegance and bespoke asset advisory. With over 12 years steering marquee transactions across Chembur, South Mumbai, Bandra, and international NRI corridors, he advises prominent industrialists, founders, and private wealth funds on trophy asset acquisition.",
                    linkedin: "https://linkedin.com"
                },
                {
                    name: "Ananya Singhania",
                    title: "Director of Private Client Advisory",
                    photo: "/images/stairs.png",
                    bio: "Specializing in off-market penthouses and coastal estates, Ananya leads the firm's sovereign and NRI client desk, orchestrating cross-border legal compliance, bespoke architectural advisory, and confidential deal structuring.",
                    linkedin: "https://linkedin.com"
                }
            ],
            stats: [
                { count: "₹2,400 Cr+", label: "Assets Transacted" },
                { count: "100%", label: "Title Due Diligence" },
                { count: "12+ Yrs", label: "Est. 3rd April 2013" },
                { count: "ISO 9001", label: "Certified Advisory" },
            ],
        },
        featuredProjects: {
            title: "Curated Portfolio",
            subtitle: "Distinguished Residences",
            projects: [
                {
                    id: "grand-regency",
                    title: "The Grand Regency Penthouse",
                    location: "Worli Sea Face, Mumbai",
                    image: "/images/hero.png",
                    status: "Ready to Move",
                    price: "₹45.0 Cr onwards",
                    slug: "grand-regency",
                    config: "5 BHK Duplex Sky Mansion (7,800 sq.ft)",
                    builder: "Lodha Luxury Collection",
                    description: "A peerless triple-height sky residence perched high above the Arabian Sea, featuring a private cantilevered plunge pool, wrap-around sunset deck, and dedicated private elevator lobby."
                },
                {
                    id: "skylight-penthouse",
                    title: "Skylight Celestial Suite",
                    location: "Banjara Hills, Hyderabad",
                    image: "/images/about.png",
                    status: "Possession Soon",
                    price: "₹18.5 Cr onwards",
                    slug: "skylight-penthouse",
                    config: "4 BHK Presidential Penthouse (5,400 sq.ft)",
                    builder: "Phoenix Luxury Living",
                    description: "Architectural sanctuary nestled in the elevated canopy of Banjara Hills. Designed with Italian Calacatta marble, smart home automation, and floor-to-ceiling double-glazed thermal acoustic glass."
                },
                {
                    id: "azure-marina",
                    title: "Azure Marina Estate Villa",
                    location: "Awas, Alibaug",
                    image: "/images/pool.png",
                    status: "Ongoing",
                    price: "₹28.0 Cr onwards",
                    slug: "azure-marina",
                    config: "6 BHK Tropical Modernist Villa (1.2 Acres)",
                    builder: "Sunteck Signature Estates",
                    description: "Ultra-private coastal sanctuary with direct speedboat jetty access. Features a 25-meter black basalt lap pool, landscaped zen pavilions, and sustainable solar-hybrid climate control."
                },
                {
                    id: "imperial-solitaire",
                    title: "The Imperial Solitaire",
                    location: "Pali Hill, Bandra West, Mumbai",
                    image: "/images/stairs.png",
                    status: "Ready to Move",
                    price: "₹36.0 Cr onwards",
                    slug: "imperial-solitaire",
                    config: "4 BHK Bare-shell Masterpiece (4,950 sq.ft)",
                    builder: "K Raheja Corp Artesia",
                    description: "Located in Mumbai's most coveted residential enclave. Boasting panoramic sea and city vistas, 13-foot slab-to-slab clear heights, and private bespoke concierge services."
                },
                {
                    id: "golf-course-sanctuary",
                    title: "Golf Course Sanctuary Penthouse",
                    location: "Golf Course Road, Gurugram",
                    image: "/images/hero.png",
                    status: "Possession Soon",
                    price: "₹24.5 Cr onwards",
                    slug: "golf-course-sanctuary",
                    config: "5 BHK Super Luxury Residence (6,800 sq.ft)",
                    builder: "DLF Privana / Magnolias Collection",
                    description: "Unobstructed views over lush PGA-standard fairways with temperature-controlled private winter gardens, double-height grand reception room, and 4 dedicated EV-enabled bays."
                },
                {
                    id: "vantara-coastal",
                    title: "The Vantara Coastal Haven",
                    location: "Assagao, North Goa",
                    image: "/images/pool.png",
                    status: "Ongoing",
                    price: "₹16.8 Cr onwards",
                    slug: "vantara-coastal",
                    config: "5 BHK Portuguese Heritage Modern Villa (6,200 sq.ft)",
                    builder: "Vantara Living Concepts",
                    description: "A rare confluence of preserved Goan-Portuguese stonework and minimalist Scandinavian interior architecture, complete with an expansive courtyard and private forest verge."
                }
            ],
        },
        amenities: {
            title: `The ${brand.name} Services`,
            subtitle: "Bespoke Realty Advisory",
            description: "Option B: Comprehensive private client brokerage and wealth advisory services, ensuring institutional rigor and complete confidentiality across every real estate mandate.",
            items: [
                {
                    icon: "ShieldCheck",
                    title: "Private Client Advisory",
                    description: "Confidential buy-side and sell-side representation for ultra-high-net-worth individuals, legacy family offices, and institutional investors seeking prime trophy real estate.",
                    image: "/images/hero.png",
                    features: ["Direct Founder Representation", "Off-Market Trophy Access", "Private Family Office Alignment"]
                },
                {
                    icon: "FileCheck",
                    title: "Title & Legal Diligence",
                    description: "Comprehensive 30-year title verification, RERA compliance scrutiny, municipal clearance audits, and conflict-free transactional closing managed by top-tier legal counsels.",
                    image: "/images/about.png",
                    features: ["30-Year Chain of Title Search", "RERA & Encumbrance Audits", "Litigation-Free Certification"]
                },
                {
                    icon: "Lock",
                    title: "Off-Market Acquisitions",
                    description: "Discreet access to non-public pocket listings, distressed trophy assets, and premier developer penthouses before official market release.",
                    image: "/images/stairs.png",
                    features: ["Private Pocket Listings", "Strict NDA Confidentiality", "Direct Developer Access"]
                },
                {
                    icon: "Globe",
                    title: "NRI & Global Client Desk",
                    description: "End-to-end facilitation for international residents: FEMA/RBI regulatory guidance, repatriation advice, NRE/NRO banking structures, and power-of-attorney execution.",
                    image: "/images/pool.png",
                    features: ["Cross-Border Banking (NRE/NRO)", "PoA & Remote Execution", "FEMA & RBI Statutory Compliance"]
                },
                {
                    icon: "Compass",
                    title: "Spatial & Vastu Curation",
                    description: "Rigorous spatial evaluations, interior design feasibility studies, structural inspections, and certified Vastu compliance analysis before contract finalization.",
                    image: "/images/hero.png",
                    features: ["Certified Vastu Alignment", "Architectural Auditing", "Interior Bespoke Fitout"]
                },
                {
                    icon: "TrendingUp",
                    title: "Asset Portfolio Strategy",
                    description: "Post-acquisition capital yield optimization, bespoke leasing to multinational diplomats/CXOs, and strategic exit timing for maximum capital appreciation.",
                    image: "/images/about.png",
                    features: ["Diplomatic & CXO Tenancy", "Capital Yield Modeling", "Multi-City Portfolio Review"]
                }
            ]
        },
        testimonials: {
            items: [
                {
                    id: 1,
                    quote: "71 Zone Reality represented our family office in securing an off-market duplex in Worli. Their discretion, forensic title diligence, and ability to negotiate institutional pricing set a standard I haven't witnessed elsewhere in Indian real estate.",
                    author: "Siddharth Goenka",
                    initials: "SG",
                    role: "Managing Director, Singhania-Goenka Capital",
                    year: "2024"
                },
                {
                    id: 2,
                    quote: "As an NRI residing in London, purchasing property in Mumbai was historically daunting. The team at 71 Zone handled everything—from FEMA documentation and video walkthroughs to registration through special power of attorney. Flawless execution.",
                    author: "Dr. Kavita Merchant",
                    initials: "KM",
                    role: "Cardiothoracic Surgeon & Investor, London",
                    year: "2023"
                },
                {
                    id: 3,
                    quote: "Their curatorial eye is unmatched. Rather than inundating us with twenty mediocre brochures, they presented exactly two properties—both architectural gems. We closed on our Alibaug coastal villa within two weeks.",
                    author: "Aditya V. Singhal",
                    initials: "AS",
                    role: "Founder & CEO, TechVentures",
                    year: "2023"
                },
                {
                    id: 4,
                    quote: "The level of analytical depth 71 Zone brings to valuation, rental yield modeling, and exit timing is what distinguishes them from typical brokers. They are true asset advisors.",
                    author: "Meera Nambiar",
                    initials: "MN",
                    role: "Partner, Apex Private Equity",
                    year: "2022"
                }
            ]
        },
        caseStudies: [
            {
                year: "2024",
                title: "The Sea Face Triplex Acquisition",
                location: "Worli Sea Face, Mumbai",
                category: "Private Deal Structuring",
                image: "/images/hero.png",
                brief: "Structured the discreet acquisition of a 9,200 sq.ft triplex penthouse on behalf of a prominent tech founder. Handled complex multi-party inheritance clearances and closed in under 21 business days.",
                outcome: "Record capital value achieved at ₹58.5 Cr with complete public confidentiality."
            },
            {
                year: "2023",
                title: "The Heritage Estate Restoration",
                location: "Assagao, North Goa",
                category: "Hospitality & Heritage",
                image: "/images/stairs.png",
                brief: "Advised a boutique European hospitality syndicate on acquiring a 120-year-old Portuguese estate parcel. Secured heritage council approvals and eco-sensitive development permissions.",
                outcome: "Transformed into an exclusive 8-key private retreat valued at ₹32.0 Cr."
            },
            {
                year: "2022",
                title: "The Golf Course Sky Mansion",
                location: "Gurugram, Delhi NCR",
                category: "NRI Sovereign Mandate",
                image: "/images/about.png",
                brief: "Represented a Singapore-based family office in an off-market dual-penthouse merger within DLF Magnolias. Managed cross-border remittance compliance and power-of-attorney closing.",
                outcome: "Seamless handover of an 11,000 sq.ft combined sky residence with full Vastu certification."
            }
        ],
        partners: [
            { name: "Lodha Luxury", type: "Marquee Developer" },
            { name: "Oberoi Realty", type: "Ultra-Luxury High-Rise" },
            { name: "DLF Privana", type: "Super Luxury NCR" },
            { name: "K Raheja Corp", type: "Bespoke Artesia" },
            { name: "Sunteck Signature", type: "Coastal & Sea-Facing" },
            { name: "Phoenix Luxury", type: "Presidential Towers" },
            { name: "Godrej Living", type: "Curated Landmark Estates" },
            { name: "Total Environment", type: "Earth-Integrated Villas" }
        ],
        nriServices: [
            {
                title: "Remote Purchase & Virtual Walkthroughs",
                description: "Immersive 4K walkthroughs, architectural drone surveys, and real-time private video inspections for international clients without traveling to India.",
                points: ["High-Definition 360° Virtual Tours", "Independent Structural Audits", "Drone Neighborhood Analysis"]
            },
            {
                title: "FEMA, RBI & Regulatory Compliance",
                description: "Specialized legal counsel navigating Foreign Exchange Management Act (FEMA) regulations, repatriation protocols, and RBI compliance for overseas investors.",
                points: ["FEMA Regulatory Filings", "Form 15CA / 15CB Guidance", "Tax Residency Assessment"]
            },
            {
                title: "Power of Attorney (PoA) & Embassy Attestation",
                description: "Complete drafting and consular notarization coordination so property registrations and developer agreements can be executed seamlessly in absentia.",
                points: ["Consulate / Embassy Legalization", "Sub-Registrar Adjudication", "Secure Vault Escrow"]
            },
            {
                title: "NRE / NRO Banking & Repatriation",
                description: "Direct liaison with leading private wealth banks to facilitate smooth capital inflow and repatriable rental/sale proceeds under the $1M LRS/remittance scheme.",
                points: ["Repatriable Capital Structures", "Seamless Bank Coordination", "CA-Certified Documentation"]
            }
        ],
        ctaBanner: {
            heading: "Your Private Portfolio Awaits.",
            subheading: "Ready to consult with our private client principals on exclusive off-market residences?",
            primaryCta: "Schedule Private Briefing",
            secondaryCta: "Request Curated Dossier",
        }
    };
}
