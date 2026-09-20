import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
    const quotes = [
        {
            text: "The architectural integrity displayed in their work is unmatched. They don't just build residences; they curate environments that elevate the human experience.",
            author: "Marcus Aurelius III",
            role: "Real Estate Strategist"
        },
        {
            text: "A masterclass in spatial logic. Every corner of the building feels intentional, every material choice feels like a dialogue with the environment.",
            author: "Elena Sorokin",
            role: "Design Critic, Architectural Digest"
        }
    ];

    return (
        <section id="testimonials" className="section-padding bg-surface border-b border-divider overflow-hidden">
            <div className="editorial-container">
                <div className="mb-40 border-b border-divider pb-16">
                    <span className="mono-tag mb-10">SECTION // DISCLOSURES</span>
                    <h2 className="text-heading">The Private <br /><span className="italic font-light text-accent">Testaments</span></h2>
                </div>

                <div className="space-y-64">
                    {quotes.map((quote, i) => (
                        <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            <div className="lg:col-span-1 hidden lg:block">
                                <span className="text-[12rem] font-serif text-accent opacity-20 leading-[0.5] -translate-y-8 block">“</span>
                            </div>
                            <div className="lg:col-span-8 lg:col-start-2">
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-4xl md:text-6xl font-serif italic text-heading leading-[1.2] tracking-tight mb-16"
                                >
                                    {quote.text}
                                </motion.p>
                                <div className="flex flex-col md:flex-row md:items-center gap-10 pt-16 border-t border-divider">
                                    <div className="w-16 h-[2px] bg-accent"></div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-sm uppercase tracking-[0.4em] font-black text-heading">{quote.author}</span>
                                        <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold italic">{quote.role}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-3 lg:col-start-10 hidden lg:flex justify-end items-center h-full">
                                <span className="text-[20rem] font-serif text-heading opacity-[0.03] italic leading-none select-none">0{i + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
