import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { developerAssociations, DeveloperAssociation } from "@/data/developerAssociations";
import DeveloperLogo from "@/components/ui/DeveloperLogo";
import { Search, ShieldCheck, CheckCircle2, ArrowUpRight, Sparkles, Building2, MapPin, X } from "lucide-react";

interface DeveloperAssociationsProps {
    showFilters?: boolean;
    compact?: boolean;
    title?: string;
    subtitle?: string;
}

export const DeveloperAssociations: React.FC<DeveloperAssociationsProps> = ({
    showFilters = true,
    compact = false,
    title = "Our Developer Associations",
    subtitle = "We are proud channel partners of Mumbai's most reputed developers — giving our clients privileged access to the finest projects, honest pricing, and a seamless buying experience."
}) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [activeDeveloper, setActiveDeveloper] = useState<DeveloperAssociation | null>(null);

    const categories = [
        "All",
        "Luxury & Super-Prime",
        "Mumbai Heritage",
        "Conglomerates",
        "Pan-India Giants",
        "Commercial & Mixed-Use"
    ];

    const filteredDevelopers = useMemo(() => {
        return developerAssociations.filter((dev) => {
            const matchesCategory = selectedCategory === "All" || dev.category === selectedCategory;
            const matchesSearch =
                dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                dev.locations.toLowerCase().includes(searchQuery.toLowerCase()) ||
                dev.flagshipProjects.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const handleInquire = (developer: DeveloperAssociation) => {
        window.dispatchEvent(
            new CustomEvent("open-enquiry-modal", {
                detail: { property: `${developer.name} Projects & Inventory` }
            })
        );
        setActiveDeveloper(null);
    };

    return (
        <section id="developer-associations" className="relative py-20 lg:py-32 bg-[#FAF7F2] text-[#14110E] overflow-hidden">
            {/* Architectural Grid Line Accents */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#14110E]/5" />
                <div className="absolute left-2/4 top-0 bottom-0 w-px bg-[#14110E]/5" />
                <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#14110E]/5" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                {/* Header Perspective matching user's requested layout */}
                <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#8B6508] text-[10px] font-mono uppercase tracking-[0.25em] font-extrabold mb-5">
                            <ShieldCheck size={14} className="text-[#8B6508]" />
                            <span>MahaRERA Registered Channel Partner Network</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#14110E] tracking-tight font-normal mb-6">
                            {title}
                        </h2>

                        <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-3xl mx-auto">
                            {subtitle}
                        </p>
                    </motion.div>

                    {/* Filter & Search Bar */}
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mt-12 space-y-6"
                        >
                            {/* Search Input */}
                            <div className="max-w-md mx-auto relative">
                                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                                <input
                                    type="text"
                                    placeholder="Search by developer, location (e.g., Chembur, Worli) or project..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 bg-white/90 border border-neutral-300 rounded-md text-xs font-sans tracking-wide text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] shadow-xs"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-neutral-400 hover:text-neutral-700"
                                    >
                                        CLEAR
                                    </button>
                                )}
                            </div>

                            {/* Category Filter Chips */}
                            <div className="flex flex-wrap items-center justify-center gap-2">
                                {categories.map((cat) => {
                                    const count = cat === "All"
                                        ? developerAssociations.length
                                        : developerAssociations.filter(d => d.category === cat).length;
                                    const isSelected = selectedCategory === cat;

                                    return (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans transition-all duration-300 cursor-pointer ${
                                                isSelected
                                                    ? "bg-[#14110E] text-[#FAF7F2] font-semibold shadow-sm"
                                                    : "bg-white/80 hover:bg-white text-neutral-600 border border-neutral-200"
                                            }`}
                                        >
                                            <span>{cat}</span>
                                            <span className={`ml-1.5 text-[9px] font-mono ${isSelected ? "text-[#C5A059]" : "text-neutral-400"}`}>
                                                ({count})
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* 5-Column Grid as in user's image */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                    {filteredDevelopers.map((developer, idx) => (
                        <motion.div
                            key={developer.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: (idx % 10) * 0.04 }}
                            onClick={() => setActiveDeveloper(developer)}
                            className="group relative bg-white border border-neutral-200/90 rounded-md p-6 h-36 sm:h-40 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:border-[#C5A059] hover:shadow-lg hover:-translate-y-1"
                        >
                            {/* Corner quick expand icon */}
                            <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]">
                                <ArrowUpRight size={14} />
                            </div>

                            {/* Logo Display */}
                            <div className="w-full flex items-center justify-center h-20 transition-transform duration-300 group-hover:scale-105">
                                <DeveloperLogo id={developer.id} name={developer.name} />
                            </div>

                            {/* Hover info badge */}
                            <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[9px] font-mono tracking-wider font-semibold text-[#8B6508] uppercase">
                                    View Projects &rarr;
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredDevelopers.length === 0 && (
                    <div className="py-16 text-center">
                        <Building2 size={36} className="mx-auto text-neutral-400 mb-3" />
                        <p className="text-base font-serif text-neutral-800">No developer associations matched your search.</p>
                        <button
                            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                            className="mt-4 text-xs font-mono font-bold text-[#8B6508] underline cursor-pointer"
                        >
                            Reset all filters
                        </button>
                    </div>
                )}

                {/* Key Benefits of 71 Zone Reality's Associations */}
                <div className="mt-20 pt-16 border-t border-neutral-200/80">
                    <div className="text-center mb-12">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#8B6508] block mb-2">
                            THE 71 ZONE REALITY ADVANTAGE
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif text-neutral-900">
                            Why Transact With Our Associated Developers
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="p-6 bg-white border border-neutral-200 rounded-md space-y-3">
                            <div className="w-10 h-10 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#8B6508]">
                                <Sparkles size={18} />
                            </div>
                            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider font-sans">
                                Priority Pre-Launch Allotments
                            </h4>
                            <p className="text-xs text-neutral-600 font-light leading-relaxed">
                                Access private pre-launch price sheets, marquee top-floor penthouses, and rare garden duplexes before market release.
                            </p>
                        </div>

                        <div className="p-6 bg-white border border-neutral-200 rounded-md space-y-3">
                            <div className="w-10 h-10 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#8B6508]">
                                <CheckCircle2 size={18} />
                            </div>
                            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider font-sans">
                                Zero Brokerage Advantage
                            </h4>
                            <p className="text-xs text-neutral-600 font-light leading-relaxed">
                                No advisory fee or brokerage levied on direct primary builder acquisitions. Complete institutional transparency.
                            </p>
                        </div>

                        <div className="p-6 bg-white border border-neutral-200 rounded-md space-y-3">
                            <div className="w-10 h-10 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#8B6508]">
                                <ShieldCheck size={18} />
                            </div>
                            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider font-sans">
                                100% RERA & Legal Diligence
                            </h4>
                            <p className="text-xs text-neutral-600 font-light leading-relaxed">
                                Every developer project is audited for title deed authenticity, MahaRERA milestone compliance, and structural approvals.
                            </p>
                        </div>

                        <div className="p-6 bg-white border border-neutral-200 rounded-md space-y-3">
                            <div className="w-10 h-10 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#8B6508]">
                                <Building2 size={18} />
                            </div>
                            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider font-sans">
                                Chembur & Mumbai Focused
                            </h4>
                            <p className="text-xs text-neutral-600 font-light leading-relaxed">
                                Deep local mastery across Chembur, Eastern Waterfront, South Mumbai, and Bandra-BKC luxury corridors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Developer Detail Drawer / Modal */}
            <AnimatePresence>
                {activeDeveloper && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveDeveloper(null)}
                            className="absolute inset-0 bg-neutral-950/70 backdrop-blur-xs"
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-lg bg-[#FAF7F2] border border-[#C5A059]/40 rounded-lg shadow-2xl p-6 sm:p-8 z-10 text-[#14110E]"
                        >
                            <button
                                onClick={() => setActiveDeveloper(null)}
                                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="mb-6 flex items-center justify-center p-6 bg-white border border-neutral-200 rounded-md">
                                <DeveloperLogo id={activeDeveloper.id} name={activeDeveloper.name} />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-serif font-bold text-neutral-900">
                                            {activeDeveloper.name}
                                        </h3>
                                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-[#C5A059]/20 text-[#8B6508] rounded-full uppercase">
                                            {activeDeveloper.category}
                                        </span>
                                    </div>
                                    {activeDeveloper.tagline && (
                                        <p className="text-xs italic text-neutral-600 mt-1 font-serif">
                                            "{activeDeveloper.tagline}"
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2 py-3 border-y border-neutral-200">
                                    <div className="flex items-start gap-2 text-xs">
                                        <MapPin size={14} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-neutral-800">Prime Locations: </span>
                                            <span className="text-neutral-600">{activeDeveloper.locations}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 text-xs">
                                        <Building2 size={14} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-neutral-800">Flagship Developments: </span>
                                            <span className="text-neutral-600">{activeDeveloper.flagshipProjects.join(", ")}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 text-xs">
                                        <ShieldCheck size={14} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-neutral-800">Partnership Status: </span>
                                            <span className="text-neutral-600">{activeDeveloper.reraPartnerStatus}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={() => handleInquire(activeDeveloper)}
                                        className="flex-1 py-3 px-4 bg-[#14110E] hover:bg-[#2A241F] text-[#FAF7F2] text-xs uppercase tracking-widest font-bold rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <span>Inquire on Inventory</span>
                                        <ArrowUpRight size={14} />
                                    </button>
                                    <a
                                        href={`https://wa.me/919167932667?text=Hello%2071%20Zone%20Reality,%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(activeDeveloper.name)}%20projects.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase tracking-wider font-bold rounded-sm transition-colors text-center cursor-pointer"
                                    >
                                        WhatsApp Desk
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default DeveloperAssociations;
