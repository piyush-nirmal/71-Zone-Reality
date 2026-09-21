export interface BrandColors {
    primary: string;
    accent: string;
    secondary: string;
    gold: string;
    background: string;
    foreground: string;
}

export interface BrandFonts {
    serif: string;
    sans: string;
}

export interface BrandContent {
    name: string;
    tagline: string;
    heroHeader: string;
    heroSubtext: string;
    aboutStory: string;
    aboutLegacy: string;
    contact: {
        address: string;
        phone: string;
        email: string;
        whatsapp?: string;
        established?: string;
    };
    socials: {
        whatsapp?: string;
        instagram: string;
        facebook: string;
        twitter: string;
        linkedin: string;
    };
}

export interface BrandConfig {
    id: string;
    name: string;
    logo: {
        type: "text" | "image";
        value: string;
        subtext?: string;
    };
    colors: {
        light: BrandColors;
        dark: BrandColors;
    };
    fonts: BrandFonts;
    content: BrandContent;
}
