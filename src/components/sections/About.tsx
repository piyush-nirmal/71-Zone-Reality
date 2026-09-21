import React from "react";
import { motion } from "framer-motion";
import { AboutData, Partner } from "@/types/cms";
import ParallaxWindow from "@/components/ui/ParallaxWindow";
import { ArrowUpRight, ShieldCheck, Compass, Award } from "lucide-react";

interface StatItem {
    label: string;
    count: string;
}

interface AboutProps {
    data: AboutData;
    partners?: Partner[];
}

const defaultPartners: Partner[] = [
    { name: "Lodha Luxury", type: "Marquee Developer" },
    { name: "Oberoi Realty", type: "Ultra-Luxury High-Rise" },
    { name: "DLF Privana", type: "Super Luxury NCR" },
    { name: "K Raheja Corp", type: "Bespoke Artesia" },
    { name: "Sunteck Signature", type: "Coastal & Sea-Facing" },
    { name: "Phoenix Luxury", type: "Presidential Towers" },
    { name: "Godrej Living", type: "Curated Landmark Estates" },
    { name: "Total Environment", type: "Earth-Integrated Villas" }
];

const About = ({ data, partners = defaultPartners }: AboutProps) => {
    return (
        <section id="about" className="section-padding bg-background border-b border-divider/40">
            <div className="editorial-container">
                <div className="flex flex-col space-y-32">

                    {/* Perspective Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8">
                            <span className="mono-tag mb-10">ENTITY // PHILOSOPHY</span>
                            <h2 className="text-heading">
                                The Spirit <br /><span className="italic font-light text-accent">Of Integrity</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-4 pb-4">
                            <p className="text-body text-xl italic opacity-60 border-l border-accent/30 pl-8 max-w-[30ch] leading-relaxed">
                                {data.story.split('.').slice(0, 1)}.
                            </p>
                        </div>
                    </div>

                    {/* Signature Interaction Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-12">
                            <ParallaxWindow
                                src={data.image}
                                aspectRatio="aspect-[16/10]"
                                inset="border-[40px]"
                            />
                        </div>

                        {/* Heritage Story Paragraphs */}
                        <div className="lg:col-span-4 lg:col-start-1 space-y-8 pt-10 border-t border-divider/20">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black">01 / BRAND GENESIS</span>
                            <p className="text-body font-light leading-relaxed">
                                {data.paragraphs ? data.paragraphs[0] : `${data.story.split('.').slice(0, 2).join('.')}. We believe in the intersection of geometric purity and material permanence.`}
                            </p>
                        </div>

                        <div className="lg:col-span-4 lg:col-start-5 space-y-8 pt-10 border-t border-divider/20">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black">02 / CURATION STANDARD</span>
                            <p className="text-body font-light leading-relaxed">
                                {data.paragraphs && data.paragraphs.length > 1 ? data.paragraphs[1] : `${data.story.split('.').slice(2).join('.')}. Each structure is a calculated statement within its spatial environment.`}
                            </p>
                        </div>

                        {/* Stats Dashboard - Refined & High Contrast */}
                        <div className="lg:col-span-4 lg:col-start-9 space-y-px bg-divider/20 border border-divider/20">
                            {data.stats.map((stat: StatItem, i: number) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ backgroundColor: "rgba(166, 138, 100, 0.05)" }}
                                    className="flex justify-between items-center py-8 px-8 bg-background group cursor-default transition-all duration-700"
                                >
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[8px] uppercase tracking-[0.3em] font-black text-heading/30 group-hover:text-accent transition-colors">METRIC //</span>
                                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-heading/70">{stat.label}</span>
                                    </div>
                                    <span className="text-4xl font-serif text-heading">{stat.count}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Third Paragraph: The Generational Transition */}
                        {data.paragraphs && data.paragraphs.length > 2 && (
                            <div className="lg:col-span-8 space-y-6 pt-6 border-t border-divider/20">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black">03 / GENERATIONAL LEGACY</span>
                                <p className="text-body text-lg font-light leading-relaxed italic">
                                    "{data.paragraphs[2]}"
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Mission & Values Statement */}
                    {data.mission && (
                        <div className="pt-20 border-t border-divider">
                            <div className="bg-surface/30 border border-divider/40 p-12 lg:p-20">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                    <div className="lg:col-span-4 space-y-4">
                                        <div className="flex items-center gap-4">
                                            <Compass size={22} className="text-accent" />
                                            <span className="mono-tag text-[9px] uppercase tracking-[0.4em] text-accent font-black">OUR CHARTER</span>
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-serif text-heading italic">
                                            Mission & Principled Values
                                        </h3>
                                        {data.values && (
                                            <p className="text-xs uppercase tracking-widest text-accent font-bold pt-4">
                                                {data.values}
                                            </p>
                                        )}
                                    </div>
                                    <div className="lg:col-span-8 lg:border-l lg:border-divider/40 lg:pl-16">
                                        <blockquote className="text-xl lg:text-3xl font-serif text-heading/90 italic font-light leading-relaxed">
                                            "{data.mission}"
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Founder & Leadership Profiles */}
                    {data.leadership && data.leadership.length > 0 && (
                        <div className="pt-24 border-t border-divider">
                            <div className="mb-20">
                                <span className="mono-tag mb-8">LEADERSHIP // STEWARDSHIP</span>
                                <h3 className="text-4xl lg:text-5xl font-serif text-heading">
                                    Principals & <span className="italic font-light text-accent">Advisory Directors</span>
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                                {data.leadership.map((leader, i) => (
                                    <div key={i} className="group flex flex-col md:flex-row gap-10 items-start p-8 bg-surface/20 border border-divider/40 hover:border-accent/40 transition-colors duration-700">
                                        <div className="w-full md:w-48 aspect-[3/4] overflow-hidden flex-shrink-0 bg-surface">
                                            <img
                                                src={leader.photo}
                                                alt={leader.name}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                        <div className="space-y-4 flex-1">
                                            <div className="space-y-1">
                                                <span className="text-[9px] uppercase tracking-[0.4em] text-accent font-black block">{leader.title}</span>
                                                <h4 className="text-2xl font-serif text-heading">{leader.name}</h4>
                                            </div>
                                            <p className="text-body text-xs leading-relaxed font-light text-heading/75">
                                                {leader.bio}
                                            </p>
                                            {leader.linkedin && (
                                                <div className="pt-2">
                                                    <a
                                                        href={leader.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-[9px] uppercase tracking-widest text-accent hover:text-heading transition-colors"
                                                    >
                                                        <span>Professional Index</span>
                                                        <ArrowUpRight size={12} />
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Developer & Builder Partner Logos Grid (Task 8 #1) */}
                    <div className="pt-24 border-t border-divider">
                        <div className="mb-16">
                            <span className="mono-tag mb-8">PARTNERSHIPS // INSTITUTIONAL</span>
                            <h3 className="text-3xl lg:text-4xl font-serif text-heading">
                                Marquee Developer <span className="italic font-light text-accent">Alliances</span>
                            </h3>
                            <p className="text-body text-sm font-light leading-relaxed max-w-xl mt-4 opacity-60">
                                We maintain premier institutional access and direct founder relationships across India's most celebrated luxury developers.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {partners.map((partner, idx) => (
                                <div
                                    key={idx}
                                    className="p-8 bg-surface/20 border border-divider/40 hover:border-accent/40 hover:bg-surface/50 transition-all duration-500 flex flex-col justify-between min-h-[140px] group cursor-default"
                                >
                                    <span className="text-[8px] uppercase tracking-[0.3em] font-mono text-accent/60">DEV // 0{idx + 1}</span>
                                    <div className="space-y-1 my-2">
                                        <h4 className="text-xl font-serif italic text-heading group-hover:text-accent transition-colors">
                                            {partner.name}
                                        </h4>
                                        <p className="text-[9px] uppercase tracking-widest text-heading/40 font-medium">
                                            {partner.type}
                                        </p>
                                    </div>
                                    <div className="w-8 h-px bg-divider group-hover:w-full group-hover:bg-accent/40 transition-all duration-500"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
