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
    paragraphs?: string[];
    mission?: string;
    values?: string;
    leadership?: {
        name: string;
        title: string;
        photo: string;
        bio: string;
        linkedin?: string;
    }[];
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
    features?: string[];
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
    config?: string;
    builder?: string;
    description?: string;
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

export interface OfficeLocation {
    name: string;
    region: string;
    address: string;
    phone?: string;
}

export interface ContactInfo {
    address: string;
    phone: string;
    email: string;
    whatsapp?: string;
    established?: string;
    hours?: string;
    rera?: string;
    offices?: OfficeLocation[];
    socials: {
        platform: string;
        url: string;
    }[];
}

export interface SiteSettings {
    brandName: string;
    companyName?: string;
    logoText: string;
    logoSubtext?: string;
    established?: string;
    contact: ContactInfo;
}

export interface CaseStudy {
    year: string;
    title: string;
    location: string;
    category: string;
    image: string;
    brief?: string;
    outcome?: string;
}

export interface Partner {
    name: string;
    type: string;
}

export interface NRIService {
    title: string;
    description: string;
    features?: string[];
    points?: string[];
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
    caseStudies?: CaseStudy[];
    partners?: Partner[];
    nriServices?: NRIService[];
}
