import { BrandConfig } from "../types/brand";

export const brands: BrandConfig[] = [
    {
        id: "elysian",
        name: "Elysian Estates",
        logo: {
            type: "text",
            value: "Elysian",
            subtext: "Estates",
        },
        colors: {
            light: {
                primary: "#121212",
                accent: "#D4AF37",
                secondary: "#E5E0D8",
                gold: "#D4AF37",
                background: "#F9F7F2",
                foreground: "#121212",
            },
            dark: {
                primary: "#F9F7F2",
                accent: "#D4AF37",
                secondary: "#1A1A1A",
                gold: "#D4AF37",
                background: "#0D0D0D",
                foreground: "#F9F7F2",
            },
        },
        fonts: {
            serif: "'Playfair Display', serif",
            sans: "'Inter', sans-serif",
        },
        content: {
            name: "Elysian Estates",
            tagline: "Redefining Luxury Living",
            heroHeader: "Luxury Redefined.",
            heroSubtext: "Architectural masterpieces crafted for those who demand nothing less than perfection.",
            aboutStory: "At Elysian Estates, we define luxury as the seamless fusion of avant-garde design and timeless craftsmanship.",
            aboutLegacy: "A legacy of redefining skylines across the nation's most prestigious zip codes.",
            contact: {
                address: "Level 42, Sky Tower, Mumbai, MH 400001",
                phone: "+91 98765 43210",
                email: "concierge@elysian.com",
            },
            socials: {
                instagram: "#",
                facebook: "#",
                twitter: "#",
                linkedin: "#",
            },
        },
    },
    {
        id: "vanguard",
        name: "Vanguard Residences",
        logo: {
            type: "text",
            value: "Vanguard",
            subtext: "Residences",
        },
        colors: {
            light: {
                primary: "#0A192F",
                accent: "#64FFDA",
                secondary: "#CCD6F6",
                gold: "#64FFDA",
                background: "#F4F7FB",
                foreground: "#0A192F",
            },
            dark: {
                primary: "#CCD6F6",
                accent: "#64FFDA",
                secondary: "#112240",
                gold: "#64FFDA",
                background: "#020C1B",
                foreground: "#CCD6F6",
            },
        },
        fonts: {
            serif: "'Outfit', sans-serif",
            sans: "'Inter', sans-serif",
        },
        content: {
            name: "Vanguard Residences",
            tagline: "Modernity Perfected",
            heroHeader: "Future Forward.",
            heroSubtext: "Technologically advanced living spaces designed for the modern visionary.",
            aboutStory: "Vanguard Residences leads the industry in sustainable luxury and smart architectural integration.",
            aboutLegacy: "Pioneering the next generation of urban living environments since 2015.",
            contact: {
                address: "The Nexus, Tech Park, Bangalore, KA 560001",
                phone: "+91 80 555 1234",
                email: "vision@vanguard.com",
            },
            socials: {
                instagram: "#",
                facebook: "#",
                twitter: "#",
                linkedin: "#",
            },
        },
    },
];
