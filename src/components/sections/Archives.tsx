import React from "react";
import { motion } from "framer-motion";
import ParallaxWindow from "@/components/ui/ParallaxWindow";
import { ArrowRight } from "lucide-react";

const Archives = () => {
    // Mock data for archives
    const studies = [
        {
            year: "2024",
            title: "The Vertical Glass House",
            location: "Manhattan, NY",
            image: "/images/hero.png",
            category: "Residential Architecture"
        },
        {
            year: "2023",
            title: "Concrete Brutalist Retreat",
            location: "Kyoto, Japan",
            image: "/images/stairs.png",
            category: "Hospitality"
        }
    ];

    return (
        <section id="archives" className="section-padding bg-background border-b border-divider">
            <div className="editorial-container">
                <div className="mb-40 border-b border-divider pb-20">
                    <span className="mono-tag mb-10">SECTION // CASE STUDIES</span>
                    <h2 className="text-heading">The Archive <br /><span className="italic font-light text-accent">Of Form</span></h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
                    {studies.map((study, i) => (
                        <div key={i} className="lg:col-span-6 space-y-16 group">
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <ParallaxWindow
                                    src={study.image}
                                    aspectRatio="aspect-[4/5]"
                                    inset="border-[40px]"
                                />
                            </motion.div>

                            <div className="space-y-8 pt-8 border-t-2 border-heading">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-mono text-accent font-bold tracking-widest">/{study.year}</span>
                                    <span className="text-[10px] uppercase tracking-[0.5em] font-black text-heading/40 italic">{study.category}</span>
                                </div>
                                <h3 className="text-[2.5rem] lg:text-[3.5rem] leading-[1.1] font-serif text-heading group-hover:text-accent transition-colors duration-700 tracking-tighter">
                                    {study.title}
                                </h3>
                                <div className="flex items-center justify-between mt-8">
                                    <p className="text-xs uppercase tracking-[0.4em] font-bold text-heading/60">{study.location}</p>
                                    <button className="btn-minimal group-hover:gap-6">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-700 text-accent" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-48 pt-24 border-t border-divider flex justify-center">
                    <button className="btn-minimal group">
                        <span className="flex items-center gap-6">
                            Access Full Case Files
                            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Archives;
