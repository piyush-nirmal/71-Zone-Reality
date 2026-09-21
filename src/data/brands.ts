import { BrandConfig } from "../types/brand";

export const brands: BrandConfig[] = [
    {
        id: "elysian",
        name: "71 Zone Reality",
        logo: {
            type: "text",
            value: "71 Zone",
            subtext: "Reality",
        },
        colors: {
            light: {
                primary: "#14110E",
                accent: "#C5A059",
                secondary: "#EFE8DC",
                gold: "#C5A059",
                background: "#FAF7F2",
                foreground: "#14110E",
            },
            dark: {
                primary: "#FAF7F2",
                accent: "#C5A059",
                secondary: "#1A1714",
                gold: "#C5A059",
                background: "#0E0C0A",
                foreground: "#FAF7F2",
            },
        },
        fonts: {
            serif: "'Playfair Display', serif",
            sans: "'Inter', sans-serif",
        },
        content: {
            name: "71 Zone Reality",
            tagline: "Curators of Prime Real Estate",
            heroHeader: "Luxury Redefined.",
            heroSubtext: "Curating distinguished residential estates, penthouses, and prime commercial properties with unmatched integrity and discretion.",
            aboutStory: "At 71 Zone Reality, we define luxury as the seamless convergence of architectural provenance, absolute transparency, and bespoke advisory. Established on 3rd April 2013, we serve as dedicated client custodians for Mumbai's most prestigious residences, commercial landmarks, and prime properties.",
            aboutLegacy: "Over 12 years of excellence stewarding landmark transactions across Chembur, Mumbai, and premier real estate corridors.",
            contact: {
                address: "Crystal Armus, Shop No. 06, Vaibhav Nagar, Chembur East, Mumbai - 400071",
                phone: "+91 91679 32667",
                whatsapp: "9167932667",
                email: "zonereality71@gmail.com",
                established: "3rd April 2013",
            },
            socials: {
                whatsapp: "https://wa.me/919167932667",
                instagram: "https://instagram.com/71zonerealty",
                facebook: "https://facebook.com/71zonerealty",
                twitter: "https://x.com/71zonerealty",
                linkedin: "https://linkedin.com/company/71zonerealty",
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
