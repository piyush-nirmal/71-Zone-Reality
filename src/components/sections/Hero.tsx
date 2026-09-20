import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroData } from "@/types/cms";
import { ArrowRight } from "lucide-react";

interface HeroProps {
    data: HeroData;
    brandName: string;
}

const Hero = ({ data, brandName }: HeroProps) => {
    const sectionRef = useRef<HTMLElement>(null);

    // Subtle parallax: text shifts up on scroll
    const { scrollY } = useScroll();
    const textY = useTransform(scrollY, [0, 500], [0, -80]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen bg-background pt-32 pb-20 overflow-hidden"
        >
            {/* Subtle background grid */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.015]">
                <div className="editorial-container h-full grid grid-cols-12 gap-x-16">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-full border-r border-heading/20"></div>
                    ))}
                </div>
            </div>

            <div className="editorial-container relative z-10">
                {/* Unequal split: 5/7 columns (40/60) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-0 min-h-[85vh] items-center">

                    {/* LEFT: Editorial Typography (40%) */}
                    <motion.div
                        style={{ y: textY }}
                        className="lg:col-span-5 space-y-12 lg:space-y-16 order-2 lg:order-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-10"
                        >
                            {/* Headline - Large, Stacked */}
                            <div className="space-y-6">
                                <h1 className="text-heading text-[11vw] lg:text-[5.5vw] leading-[0.88] tracking-[-0.05em] font-serif max-w-[12ch]">
                                    {data.heading.split(' ')[0]}
                                </h1>
                                <h1 className="text-accent text-[11vw] lg:text-[5.5vw] leading-[0.88] tracking-[-0.05em] font-serif italic font-light max-w-[12ch]">
                                    {data.heading.split(' ')[1]}
                                </h1>

                                {/* Subtle accent line */}
                                <div className="w-20 h-px bg-accent/30"></div>
                            </div>

                            {/* Subtext - Narrow width, editorial */}
                            <p className="text-body text-base lg:text-lg font-light leading-relaxed max-w-[28ch] opacity-70">
                                {data.subheading}
                            </p>

                            {/* CTA - Quiet, underlined */}
                            <div className="pt-4">
                                <a
                                    href="#"
                                    className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black text-heading/60 hover:text-heading transition-colors duration-700 pb-2 border-b border-divider/30 hover:border-accent/60"
                                >
                                    <span>Explore Collection</span>
                                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-700" />
                                </a>
                            </div>

                            {/* Meta information */}
                            <div className="pt-8 flex items-center gap-6 text-[9px] uppercase tracking-[0.4em] font-bold text-heading/15">
                                <span>{brandName}</span>
                                <span className="w-1 h-1 rounded-full bg-divider"></span>
                                <span>Since 2012</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: Immersive Image Block (60%) */}
                    <div className="lg:col-span-7 relative order-1 lg:order-2 lg:pl-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full h-[60vh] lg:h-[90vh]"
                        >
                            {/* Tall, cropped image - overlaps grid slightly */}
                            <div className="relative w-full h-full overflow-hidden bg-surface/10 border border-divider/5">
                                <img
                                    src={data.bgImage}
                                    alt="Architectural masterpiece"
                                    className="w-full h-full object-cover"
                                />

                                {/* Subtle overlay for depth */}
                                <div className="absolute inset-0 bg-heading/[0.03] pointer-events-none"></div>
                            </div>

                            {/* Floating caption - anchored to image */}
                            <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-background/95 backdrop-blur-sm border border-divider/20 p-6 lg:p-8 shadow-xl max-w-[240px]">
                                <span className="text-[9px] uppercase tracking-[0.5em] font-black block mb-2 text-accent/70">
                                    ARCHIVE // 01
                                </span>
                                <h4 className="text-sm lg:text-base font-serif italic text-heading leading-tight">
                                    Coastal Verticality
                                </h4>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Scroll indicator - minimal */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 3, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-12 bg-gradient-to-b from-accent/20 to-transparent"
                ></motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
