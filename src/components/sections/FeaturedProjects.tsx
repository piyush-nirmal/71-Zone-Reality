import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ProjectsData, Project } from "@/types/cms";
import ParallaxWindow from "@/components/ui/ParallaxWindow";
import { ArrowRight, MapPin, Building2, Sparkles, ChevronDown, LayoutGrid, Rows } from "lucide-react";

interface FeaturedProjectsProps {
    data: ProjectsData;
}

// Staggered scroll-reveal animation variants for Framer Motion
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.08,
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 45,
        scale: 0.98,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const cinematicVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const PropertyCard = ({ project, index }: { project: Project; index: number }) => {
    const [showSpecs, setShowSpecs] = useState(false);

    const handleEnquire = () => {
        window.dispatchEvent(new CustomEvent("open-enquiry-modal", { 
            detail: { property: project.title } 
        }));
    };

    return (
        <motion.div
            variants={cardVariants}
            className="group flex flex-col justify-between bg-surface/30 border border-divider/50 hover:border-accent/60 transition-all duration-700 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-heading/5"
        >
            <div>
                {/* Architectural Imagery with Hover Interaction */}
                <div className="relative aspect-[16/10] overflow-hidden bg-heading/5">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heading/80 via-heading/20 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E0C0A]/90 backdrop-blur-md text-[#FAF7F2] text-[8px] uppercase tracking-[0.3em] font-black border border-white/10 rounded-sm shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            {project.status || "Exclusive Mandate"}
                        </span>
                        <span className="px-3 py-1.5 bg-accent text-[#14110E] text-[10px] tracking-wider font-extrabold rounded-sm shadow-md">
                            {project.price}
                        </span>
                    </div>

                    {/* Bottom Image Overlay Tag */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-mono text-white drop-shadow-md">
                            <Building2 size={12} className="text-accent" />
                            <span className="font-medium">{project.builder || "71 Zone Masterpiece"}</span>
                        </div>
                        <span className="text-[9px] font-mono text-accent font-bold tracking-widest drop-shadow-md">
                            // 0{index + 1}
                        </span>
                    </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-8 md:p-10 space-y-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
                            <MapPin size={12} className="text-accent flex-shrink-0" />
                            <span>{project.location}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif text-heading group-hover:text-accent transition-colors duration-500 leading-snug">
                            {project.title}
                        </h3>
                    </div>

                    {project.config && (
                        <div className="py-2.5 px-3.5 bg-surface/80 border border-divider/40 text-[10px] uppercase tracking-widest font-mono text-heading/80 flex items-center gap-2">
                            <Sparkles size={12} className="text-accent" />
                            <span>{project.config}</span>
                        </div>
                    )}

                    <p className="text-body text-xs font-light leading-relaxed line-clamp-3 opacity-80">
                        {project.description || `A landmark residential commission in ${project.location}. Featuring bespoke architectural detailing and private elevator access.`}
                    </p>

                    {/* Expandable Specifications */}
                    <AnimatePresence>
                        {showSpecs && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden pt-4 border-t border-divider/40 space-y-3 text-[11px]"
                            >
                                <div className="grid grid-cols-2 gap-3 text-heading/70 font-mono text-[10px]">
                                    <div>
                                        <span className="text-muted block text-[8px] uppercase tracking-widest">BUILDER</span>
                                        <span className="font-semibold text-heading">{project.builder || "Prime Private"}</span>
                                    </div>
                                    <div>
                                        <span className="text-muted block text-[8px] uppercase tracking-widest">STATUS</span>
                                        <span className="font-semibold text-heading">{project.status}</span>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="text-muted block text-[8px] uppercase tracking-widest">REGULATORY STATUS</span>
                                        <span className="text-accent font-semibold">100% Forensic Due Diligence Verified</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Actions Footer */}
            <div className="p-8 md:p-10 pt-0 flex items-center justify-between gap-4 border-t border-divider/20 mt-4">
                <button
                    onClick={() => setShowSpecs(!showSpecs)}
                    className="text-[9px] uppercase tracking-[0.3em] font-mono text-heading/60 hover:text-accent transition-colors flex items-center gap-1.5 cursor-pointer py-2"
                >
                    <span>{showSpecs ? "Hide Specs" : "Quick Specs"}</span>
                    <ChevronDown size={12} className={`transition-transform duration-300 ${showSpecs ? "rotate-180" : ""}`} />
                </button>

                <button
                    onClick={handleEnquire}
                    className="inline-flex items-center gap-3 px-5 py-2.5 bg-heading text-background hover:bg-accent hover:text-[#14110E] transition-all duration-500 text-[9px] uppercase tracking-[0.3em] font-black rounded-sm cursor-pointer shadow-sm group/btn"
                >
                    <span>Request Dossier</span>
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
};

const ProjectBlock = ({ project, index }: { project: Project; index: number }) => {
    const handleEnquire = () => {
        window.dispatchEvent(new CustomEvent("open-enquiry-modal", { 
            detail: { property: project.title } 
        }));
    };

    return (
        <motion.div
            variants={cinematicVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
            {/* Signature Window */}
            <div className="lg:col-span-12">
                <ParallaxWindow
                    src={project.image}
                    aspectRatio="aspect-[16/11]"
                    inset="border-[45px]"
                />
            </div>

            {/* Narrative Identity */}
            <div className="lg:col-span-6 lg:col-start-1 space-y-8 pt-8">
                <div className="flex items-center gap-8">
                    <div className="w-12 h-px bg-accent/60"></div>
                    <span className="text-[9px] uppercase tracking-[0.5em] text-accent font-black italic">ESTATE // 0{index + 1}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-serif text-heading leading-[1.1]">
                    {project.title.split(' ').map((word, i) => (
                        <span key={i} className={i === project.title.split(' ').length - 1 ? "italic text-accent inline-block" : "inline-block mr-[0.3em]"}>
                            {word}
                        </span>
                    ))}
                </h3>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-heading/50">
                    <span>{project.location}</span>
                    {project.builder && (
                        <>
                            <span>•</span>
                            <span className="text-accent">{project.builder}</span>
                        </>
                    )}
                </div>
            </div>

            {/* Technical Brief - High Visibility */}
            <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
                <div className="lg:col-span-7 pt-12 border-t border-divider/40">
                    <p className="text-body text-xl font-light leading-relaxed max-w-[45ch]">
                        {project.description || `A cinematic intervention in the ${project.location} landscape. This structure emphasizes geometric purity and a definitive ${project.status.toLowerCase()} presence.`}
                    </p>
                    {project.config && (
                        <p className="text-accent font-mono text-xs uppercase tracking-widest mt-4">
                            Configuration // {project.config}
                        </p>
                    )}
                </div>

                <div className="lg:col-span-5 pt-12 border-t border-divider/40 flex items-end justify-between">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black italic">ACQUISITION VALUE</span>
                        <span className="text-4xl font-serif text-heading">{project.price}</span>
                    </div>
                    <button 
                        onClick={handleEnquire}
                        className="btn-minimal group cursor-pointer pb-2"
                    >
                        <span className="flex items-center gap-4">
                            Request Private Brief
                            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const FeaturedProjects = ({ data }: FeaturedProjectsProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [viewMode, setViewMode] = useState<"grid" | "cinematic">("grid");

    const categories = [
        { id: "all", label: "All Estates" },
        { id: "penthouses", label: "Penthouses & Sky Duplexes" },
        { id: "villas", label: "Coastal Sanctuaries" },
        { id: "suites", label: "Presidential Suites" },
    ];

    const filteredProjects = data.projects.filter(p => {
        if (selectedCategory === "all") return true;
        const text = `${p.title} ${p.location} ${p.config || ""} ${p.description || ""}`.toLowerCase();
        if (selectedCategory === "penthouses") return text.includes("penthouse") || text.includes("duplex") || text.includes("sky");
        if (selectedCategory === "villas") return text.includes("villa") || text.includes("estate") || text.includes("goa");
        if (selectedCategory === "suites") return text.includes("suite") || text.includes("residence") || text.includes("camellias");
        return true;
    });

    return (
        <section id="projects" className="section-padding bg-background border-b border-divider/20">
            <div className="editorial-container">
                {/* Section Header */}
                <div className="mb-24 border-b border-divider/20 pb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                        <div>
                            <span className="mono-tag mb-6">71 ZONE REALTY // CURATED ASSET COLLECTION</span>
                            <h2 className="text-heading">
                                Private Portfolio <br />
                                <span className="italic font-light text-accent">Index</span>
                            </h2>
                            <p className="text-body text-sm font-light mt-6 max-w-xl opacity-75 leading-relaxed">
                                Architectural trophies and off-market residences curated across South Mumbai, Delhi NCR, and coastal corridors for private client mandates.
                            </p>
                        </div>

                        {/* Layout Toggle */}
                        <div className="flex items-center gap-3 bg-surface/50 p-1.5 border border-divider/40 rounded-sm self-start md:self-end">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`flex items-center gap-2 px-3.5 py-2 text-[9px] uppercase tracking-widest font-black transition-all cursor-pointer rounded-sm ${viewMode === "grid" ? "bg-heading text-background shadow-sm" : "text-heading/60 hover:text-heading"}`}
                            >
                                <LayoutGrid size={13} />
                                <span>Gallery</span>
                            </button>
                            <button
                                onClick={() => setViewMode("cinematic")}
                                className={`flex items-center gap-2 px-3.5 py-2 text-[9px] uppercase tracking-widest font-black transition-all cursor-pointer rounded-sm ${viewMode === "cinematic" ? "bg-heading text-background shadow-sm" : "text-heading/60 hover:text-heading"}`}
                            >
                                <Rows size={13} />
                                <span>Cinematic</span>
                            </button>
                        </div>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center gap-3 mt-12 pt-8 border-t border-divider/30">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-2 text-[9px] uppercase tracking-[0.25em] font-black transition-all duration-500 rounded-sm cursor-pointer border ${selectedCategory === cat.id
                                    ? "bg-heading text-background border-heading shadow-sm"
                                    : "bg-surface/20 text-heading/60 border-divider/40 hover:border-accent hover:text-heading"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Staggered Scroll-Reveal Property Cards View */}
                {viewMode === "grid" ? (
                    <motion.div
                        key={selectedCategory}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.08, margin: "-40px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14"
                    >
                        {filteredProjects.map((project, index) => (
                            <PropertyCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </motion.div>
                ) : (
                    /* Vertical Anthology Cinematic Flow with Viewport Stagger */
                    <div className="space-y-48 lg:space-y-64">
                        {filteredProjects.map((project, index) => (
                            <ProjectBlock
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                )}

                {/* Direct Mandate Action Footer */}
                <div className="mt-40 pt-20 border-t border-divider/30 flex flex-col sm:flex-row items-center justify-between gap-8">
                    <div className="space-y-2 text-center sm:text-left">
                        <span className="text-[9px] uppercase tracking-[0.4em] text-accent font-black">OFF-MARKET DISCLOSURES</span>
                        <p className="text-body text-xs font-light">Inquire regarding undisclosed private estates under NDA.</p>
                    </div>

                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent("open-enquiry-modal"))}
                        className="btn-minimal px-8 group cursor-pointer"
                    >
                        <span className="flex items-center gap-6">
                            Request Complete Advisory Index
                            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
