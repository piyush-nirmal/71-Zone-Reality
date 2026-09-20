export interface HeroData {
    heading: string;
    subheading: string;
    ctaText: string;
    bgImage: string;
    videoUrl?: string;
}

export interface AboutData {
    title: string;
    subtitle: string;
    story: string;
    legacy: string;
    stats: {
        count: string;
        label: string;
    }[];
    image: string;
}

export interface Amenity {
    icon: string;
    title: string;
    description: string;
    image?: string;
}

export interface AmenitiesData {
    title: string;
    subtitle: string;
    description: string;
    items: Amenity[];
}

export interface Project {
    id: string;
    title: string;
    location: string;
    image: string;
    status: string;
    price?: string;
    slug: string;
}

export interface ProjectsData {
    title: string;
    subtitle: string;
    projects: Project[];
}

export interface Stat {
    label: string;
    value: string;
}

export interface Testimonial {
    id: number;
    quote: string;
    author: string;
    initials: string;
    role: string;
    year: string;
}

export interface TestimonialsData {
    items: Testimonial[];
}

export interface ContactInfo {
    address: string;
    phone: string;
    email: string;
    socials: {
        platform: string;
        url: string;
    }[];
}

export interface SiteSettings {
    brandName: string;
    logoText: string;
    logoSubtext?: string;
    contact: ContactInfo;
}

export interface CtaBannerData {
    heading: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
}

export interface HomePageData {
    settings: SiteSettings;
    hero: HeroData;
    stats: Stat[];
    about: AboutData;
    featuredProjects: ProjectsData;
    amenities: AmenitiesData;
    testimonials: TestimonialsData;
    ctaBanner: CtaBannerData;
}
