import React from "react";
import { motion } from "framer-motion";
import { AboutData } from "@/types/cms";
import ParallaxWindow from "@/components/ui/ParallaxWindow";
import { ArrowRight } from "lucide-react";

interface StatItem {
    label: string;
    count: string;
}

const About = ({ data }: { data: AboutData }) => {
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

                        {/* Content Grid - Enhanced Readability */}
                        <div className="lg:col-span-4 lg:col-start-1 space-y-8 pt-10 border-t border-divider/20">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black">01 / ARCHITECTURAL INTENT</span>
                            <p className="text-body font-light leading-relaxed">
                                {data.story.split('.').slice(0, 2).join('.')}. We believe in the intersection of geometric purity and material permanence.
                            </p>
                        </div>

                        <div className="lg:col-span-4 lg:col-start-5 space-y-8 pt-10 border-t border-divider/20">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black">02 / CRAFTING ICONS</span>
                            <p className="text-body font-light leading-relaxed">
                                {data.story.split('.').slice(2).join('.')}. Each structure is a calculated statement within its spatial environment.
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
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
