import React from "react";
import { motion } from "framer-motion";
import { Stat } from "@/types/cms";

interface NarrativeSectionProps {
    stats?: Stat[];
    brandName?: string;
}

const NarrativeSection = ({ stats, brandName }: NarrativeSectionProps) => {
    return (
        <section className="py-32 lg:py-64 bg-background relative">
            {/* Visual Anchor: Large background character */}
            <div className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden">
                <span className="text-[40vw] font-serif italic text-heading/[0.02] leading-none translate-x-1/4">71</span>
            </div>

            <div className="editorial-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-24 items-start">

                    {/* Perspective Label: Vertical Stagger */}
                    <div className="hidden lg:block lg:col-span-1 pt-20">
                        <div className="flex flex-col items-center gap-12">
                            <span className="text-[10px] uppercase tracking-[0.8em] font-black text-accent -rotate-90 origin-center whitespace-nowrap">MODULE // 01</span>
                            <div className="w-px h-64 bg-divider/40"></div>
                        </div>
                    </div>

                    {/* Primary Headline: Off-Center Right */}
                    <div className="lg:col-span-8 lg:col-start-4">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 className="text-[10vw] lg:text-[7vw] font-serif text-heading leading-[0.9] tracking-tighter max-w-[15ch]">
                                Rare Estates. <br />
                                <span className="italic text-accent translate-x-8 lg:translate-x-24 inline-block">Private Discretion.</span>
                            </h2>
                        </motion.div>
                    </div>

                    {/* Secondary Detail: Staggered Left (Real Value Proposition Teaser) */}
                    <div className="lg:col-span-5 lg:col-start-2 -mt-12 lg:-mt-48">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.4 }}
                            className="space-y-12 bg-surface/40 p-10 lg:p-16 border-l border-accent/20"
                        >
                            <div className="space-y-6">
                                <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-heading/40 italic">VALUE PROPOSITION //</span>
                                <p className="text-body text-lg lg:text-2xl font-light leading-relaxed">
                                    At 71 Zone Realty, we operate as an exclusive private advisory for prime real estate. We bridge sovereign wealth, NRI capital, and legacy families with bespoke residential landmarks and off-market architectural trophies.
                                </p>
                            </div>
                            <div className="h-px w-24 bg-divider"></div>
                        </motion.div>
                    </div>

                    {/* Footer Detail: Scattered Right */}
                    <div className="lg:col-span-5 lg:col-start-8 lg:mt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.6 }}
                            className="space-y-12 lg:pl-8"
                        >
                            <p className="text-body text-lg font-light leading-relaxed text-heading/60 italic">
                                Our practice is centered on the distillation of architectural curation. Every estate admitted into our private collection undergoes forensic legal diligence, title audit, and Vastu analysis—protecting generational wealth with absolute discretion.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-full border border-divider flex items-center justify-center">
                                    <span className="text-[8px] font-black text-accent">71.01</span>
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-heading/40">Architectural Provenance</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats / Milestones Grid */}
                    {stats && stats.length > 0 && (
                        <div className="lg:col-span-12 mt-12 pt-20 border-t border-divider/30">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: i * 0.15 }}
                                        className="p-8 lg:p-10 bg-surface/30 border border-divider/40 hover:border-accent/30 transition-colors"
                                    >
                                        <div className="text-4xl lg:text-5xl font-serif text-heading italic mb-3">{stat.value}</div>
                                        <div className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default NarrativeSection;
