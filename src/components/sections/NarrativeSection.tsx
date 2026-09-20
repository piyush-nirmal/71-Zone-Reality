import React from "react";
import { motion } from "framer-motion";

const NarrativeSection = () => {
    return (
        <section className="py-32 lg:py-64 bg-background relative">
            {/* Visual Anchor: Large background character */}
            <div className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden">
                <span className="text-[40vw] font-serif italic text-heading/[0.02] leading-none translate-x-1/4">E</span>
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
                                Excellence <br />
                                <span className="italic text-accent translate-x-12 lg:translate-x-32 inline-block">As A Standard.</span>
                            </h2>
                        </motion.div>
                    </div>

                    {/* Secondary Detail: Staggered Left */}
                    <div className="lg:col-span-4 lg:col-start-2 -mt-12 lg:-mt-48">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.4 }}
                            className="space-y-12 bg-surface/40 p-10 lg:p-16 border-l border-accent/20"
                        >
                            <div className="space-y-6">
                                <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-heading/40 italic">CORE PRINCIPLE //</span>
                                <p className="text-body text-lg lg:text-2xl font-light leading-relaxed">
                                    We believe the environment we inhabit directly shapes our capacity for thought and emotion. Space is never neutral.
                                </p>
                            </div>
                            <div className="h-px w-24 bg-divider"></div>
                        </motion.div>
                    </div>

                    {/* Footer Detail: Scattered Right */}
                    <div className="lg:col-span-4 lg:col-start-8 lg:mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.6 }}
                            className="space-y-12 lg:pl-12"
                        >
                            <p className="text-body text-lg font-light leading-relaxed text-heading/60 italic">
                                Our practice is centered on the distillation of architecture. We strip away the unnecessary until only the essential remains—creating structures that stand as testaments to timeless design.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-full border border-divider flex items-center justify-center">
                                    <span className="text-[8px] font-black text-accent">L.01</span>
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-heading/30">Logical Permanence</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NarrativeSection;
