import { HomePageData } from "@/types/cms";
import { brands } from "@/data/brands";

export function getPageData(brandId: string): HomePageData {
    const brand = brands.find((b) => b.id === brandId) || brands[0];

    return {
        settings: {
            brandName: brand.name,
            logoText: brand.logo.value,
            logoSubtext: brand.logo.subtext,
            contact: {
                ...brand.content.contact,
                socials: Object.entries(brand.content.socials).map(([platform, url]) => ({
                    platform,
                    url,
                })),
            },
        },
        hero: {
            heading: brand.content.heroHeader,
            subheading: brand.content.heroSubtext,
            ctaText: "Discover More",
            bgImage: "/images/hero.png",
        },
        stats: [
            { label: "Years of Heritage", value: "12+" },
            { label: "Luxury Residences", value: "850+" },
            { label: "Design Awards", value: "24" },
            { label: "Happy Families", value: "1.2k+" },
        ],
        about: {
            title: `The ${brand.name} Legacy`,
            subtitle: "Crafting Icons Of Tomorrow",
            story: brand.content.aboutStory,
            legacy: brand.content.aboutLegacy,
            image: "/images/about.png",
            stats: [
                { count: "12+", label: "Masterpieces Delivered" },
                { count: "ISO", label: "Quality Certified" },
            ],
        },
        featuredProjects: {
            title: "Curated Portfolio",
            subtitle: "Featured Residences",
            projects: [
                {
                    id: "grand-regency",
                    title: "The Grand Regency",
                    location: "Worli, Mumbai",
                    image: "/images/hero.png",
                    status: "Ongoing",
                    price: "₹12.5 Cr onwards",
                    slug: "grand-regency"
                },
                {
                    id: "skylight-penthouse",
                    title: "Skylight Penthouse",
                    location: "Banjara Hills, Hyderabad",
                    image: "/images/about.png",
                    status: "Ready to Move",
                    price: "₹8.2 Cr onwards",
                    slug: "skylight-penthouse"
                },
                {
                    id: "azure-marina",
                    title: "Azure Marina Villa",
                    location: "Alibaug, Maharashtra",
                    image: "/images/pool.png",
                    status: "Possession Soon",
                    price: "₹15.0 Cr onwards",
                    slug: "azure-marina"
                },
            ],
        },
        amenities: {
            title: `The ${brand.name} Lifestyle`,
            subtitle: "Luxury Beyond Walls",
            description: "Experience a curated selection of amenities designed to elevate your everyday existence into an extraordinary journey.",
            items: [
                { icon: "Waves", title: "Infinity Pool", description: "Olympic-sized temperature-controlled pool with a breathtaking view of the city skyline.", image: "/images/pool.png" },
                { icon: "Trees", title: "Zen Garden", description: "Meticulously landscaped botanical gardens designed for peace and meditation.", image: "/images/hero.png" },
                { icon: "Dumbbell", title: "Fit-Arena", description: "State-of-the-art gymnasium equipped with premium Technogym equipment.", image: "/images/about.png" },
                { icon: "ShieldCheck", title: "24/7 Concierge", description: "Elite security and white-glove concierge services at your beck and call.", image: "/images/hero.png" },
                { icon: "Car", title: "EV Parking", description: "Designated parking spaces for luxury vehicles with high-speed EV charging stations.", image: "/images/pool.png" },
                { icon: "Wind", title: "Sky Lounge", description: "An exclusive rooftop lounge for residents to unwind and entertain guests.", image: "/images/about.png" },
            ]
        },
        testimonials: {
            items: [
                {
                    id: 1,
                    quote: `${brand.name} didn't just sell us a house; they gave us a masterpiece. The attention to detail in every corner of The Grand Regency is simply unparalleled.`,
                    author: "Vikram Malhotra",
                    initials: "VM",
                    role: "Resident",
                    year: "2022"
                },
                {
                    id: 2,
                    quote: "The concierge service and amenities at Skylight are comparable to a 5-star resort. It's the lifestyle change my family always dreamed of.",
                    author: "Sarah D'Souza",
                    initials: "SD",
                    role: "Resident",
                    year: "2022"
                },
                {
                    id: 3,
                    quote: "From documentation to delivery, the experience was seamless. Their transparency and professionalism are truly refreshing in this industry.",
                    author: "Rajesh K. Singhania",
                    initials: "RS",
                    role: "Resident",
                    year: "2022"
                }
            ]
        },
        ctaBanner: {
            heading: "Your Masterpiece Awaits.",
            subheading: "Ready to step into the world of curated luxury?",
            primaryCta: "Schedule Site Visit",
            secondaryCta: "View Brochure",
        }
    };
}
