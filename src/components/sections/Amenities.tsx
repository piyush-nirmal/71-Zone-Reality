import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AmenitiesData, NRIService } from "@/types/cms";
import * as Icons from "lucide-react";

const ParallaxFrame = ({ src, title }: { src: string; title: string }) => {
    return (
        <div className="relative w-full h-full bg-surface overflow-hidden group border border-divider/10">
            <div className="absolute inset-0 z-20 pointer-events-none border-background border-[50px] transition-all duration-1000 group-hover:inset-6"></div>

            <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
            >
                <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[3s]"
                />
            </motion.div>

            <div className="absolute bottom-12 right-12 z-30 pointer-events-none">
                <span className="text-[8vw] font-serif text-white opacity-10 italic leading-none block whitespace-nowrap select-none">
                    {title.split(' ')[0]}
                </span>
            </div>
        </div>
    );
};

const AmenityIcon = ({ name, className }: { name: string; className?: string }) => {
    // @ts-ignore
    const Icon = Icons[name] || Icons.Circle;
    return <Icon className={className} strokeWidth={1} />;
};

interface AmenitiesProps {
    data: AmenitiesData;
    nriServices?: NRIService[];
}

const defaultNriServices: NRIService[] = [
    {
        title: "FEMA & Regulatory Structuring",
        description: "Complete advisory on Reserve Bank of India (RBI) regulations, NRE/NRO account capital repatriation, and compliance with foreign exchange management acts.",
        features: ["NRE / NRO Repatriation Protocols", "Tax-Efficient Capital Structuring", "RBI / FEMA Regulatory Clearance"]
    },
    {
        title: "Virtual Private Walkthroughs",
        description: "Bespoke 4K cinematographic walkthroughs, live guided drone spatial surveys, and neighborhood infrastructure intelligence delivered across all time zones.",
        features: ["Ultra-HD Drone Aerofootage", "Interactive Live Site Inspections", "Time-Zone Aligned Briefings"]
    },
    {
        title: "Remote POA & Turnkey Registry",
        description: "End-to-end representation through Power of Attorney drafting, Indian consular attestation, and local sub-registrar office completion without travel.",
        features: ["Consular Attestation Guidance", "Power of Attorney Structuring", "Frictionless Sub-Registrar Filing"]
    },
    {
        title: "Asset Stewardship & Tenancy",
        description: "Post-acquisition concierge asset management, high-yield expatriate tenant vetting, and ongoing property preservation for offshore owners.",
        features: ["Expatriate Lessee Placement", "Quarterly Asset Audits", "Turnkey Interior Fit-Out Oversight"]
    }
];

const Amenities = ({ data, nriServices = defaultNriServices }: AmenitiesProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="amenities" className="section-padding bg-background border-b border-divider/20">
            <div className="editorial-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Header Perspective */}
                    <div className="lg:col-span-12 mb-20 border-b border-divider/30 pb-16">
                        <span className="mono-tag mb-10">SECTION // SERVICES & ADVISORY</span>
                        <h2 className="text-heading">The Advisory <br /><span className="italic font-light text-accent">Practice</span></h2>
                    </div>

                    {/* Interaction Controller - Controlled Typography */}
                    <div className="lg:col-span-5 flex flex-col justify-between pt-2">
                        <div className="space-y-2">
                            {data.items.map((item, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`group cursor-pointer py-8 border-b border-divider/10 flex items-center justify-between transition-all duration-1000 ${activeIndex === index ? 'opacity-100 pl-4' : 'opacity-20 hover:opacity-40'}`}
                                >
                                    <div className="flex items-center gap-10">
                                        <span className="text-[10px] font-mono text-accent/50 italic font-bold">0{index + 1}</span>
                                        <span className={`text-3xl lg:text-4xl font-serif text-heading transition-all duration-700 ${activeIndex === index ? 'italic pl-2' : ''}`}>{item.title}</span>
                                    </div>
                                    <AmenityIcon name={item.icon} className={`w-6 h-6 transition-all duration-1000 ${activeIndex === index ? 'text-accent opacity-100 scale-125' : 'text-muted opacity-20'}`} />
                                </div>
                            ))}
                        </div>

                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mt-16 pt-12 border-t border-divider/20"
                        >
                            <p className="text-body text-xl font-light leading-relaxed max-w-[42ch]">
                                {data.items[activeIndex].description}
                            </p>

                            {/* Sub-features bullets */}
                            {data.items[activeIndex].features && data.items[activeIndex].features!.length > 0 && (
                                <ul className="mt-8 pt-6 border-t border-divider/30 space-y-2.5">
                                    {data.items[activeIndex].features!.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-xs tracking-wider uppercase text-heading/80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="w-20 h-px bg-accent mt-8"></div>
                        </motion.div>
                    </div>

                    {/* Showcase Window */}
                    <div className="lg:col-span-7 mt-12 lg:mt-0 aspect-[14/17] lg:aspect-auto h-full min-h-[650px]">
                        <AnimatePresence mode="wait">
                            <ParallaxFrame
                                key={activeIndex}
                                src={data.items[activeIndex].image || ""}
                                title={data.items[activeIndex].title}
                            />
                        </AnimatePresence>
                    </div>

                    {/* NRI / International Client Services Section (Task 8 #2) */}
                    {nriServices && nriServices.length > 0 && (
                        <div className="lg:col-span-12 mt-32 pt-24 border-t border-divider">
                            <div className="mb-20">
                                <span className="mono-tag mb-8">GLOBAL CLIENT DESK // CROSS-BORDER</span>
                                <h3 className="text-4xl lg:text-5xl font-serif text-heading">
                                    NRI & International <br />
                                    <span className="italic font-light text-accent">Client Services</span>
                                </h3>
                                <p className="text-body text-base font-light leading-relaxed max-w-2xl mt-4 opacity-70">
                                    Dedicated representation for global Indian leaders, diaspora family offices, and cross-border investors acquiring landmark estates across India.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {nriServices.map((nri, idx) => (
                                    <div key={idx} className="p-8 bg-surface/30 border border-divider/40 hover:border-accent/40 transition-all duration-700 flex flex-col justify-between space-y-8 group">
                                        <div className="space-y-4">
                                            <span className="text-[9px] font-mono text-accent tracking-widest font-bold block">NRI // 0{idx + 1}</span>
                                            <h4 className="text-2xl font-serif italic text-heading group-hover:text-accent transition-colors">{nri.title}</h4>
                                            <p className="text-body text-xs font-light leading-relaxed opacity-80">{nri.description}</p>
                                        </div>

                                        {nri.features && nri.features.length > 0 && (
                                            <ul className="pt-6 border-t border-divider/40 space-y-2">
                                                {nri.features.map((feat: string, fIdx: number) => (
                                                    <li key={fIdx} className="flex items-start gap-2.5 text-[10px] tracking-wider uppercase text-heading/70">
                                                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default Amenities;
