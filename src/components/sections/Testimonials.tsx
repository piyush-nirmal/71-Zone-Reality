import React from "react";
import { motion } from "framer-motion";
import { TestimonialsData } from "@/types/cms";

interface TestimonialsProps {
    data?: TestimonialsData;
}

const defaultQuotes = [
    {
        text: "71 Zone Realty represented our family office in securing an off-market duplex in Worli. Their discretion, forensic title diligence, and ability to negotiate institutional pricing set a standard I haven't witnessed elsewhere in Indian real estate.",
        author: "Siddharth Goenka",
        role: "Managing Director, Singhania-Goenka Capital"
    },
    {
        text: "As an NRI residing in London, purchasing property in Mumbai was historically daunting. The team at 71 Zone handled everything—from FEMA documentation and video walkthroughs to registration through special power of attorney. Flawless execution.",
        author: "Dr. Kavita Merchant",
        role: "Cardiothoracic Surgeon & Investor, London"
    },
    {
        text: "Their curatorial eye is unmatched. Rather than inundating us with twenty mediocre brochures, they presented exactly two properties—both architectural gems. We closed on our Alibaug coastal villa within two weeks.",
        author: "Aditya V. Singhal",
        role: "Founder & CEO, TechVentures"
    },
    {
        text: "The level of analytical depth 71 Zone brings to valuation, rental yield modeling, and exit timing is what distinguishes them from typical brokers. They are true asset advisors.",
        author: "Meera Nambiar",
        role: "Partner, Apex Private Equity"
    }
];

const Testimonials = ({ data }: TestimonialsProps) => {
    const quotes = data && data.items && data.items.length > 0
        ? data.items.map(item => ({
            text: item.quote,
            author: item.author,
            role: item.role + (item.year ? ` • ${item.year}` : "")
        }))
        : defaultQuotes;

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
                                    className="text-3xl md:text-5xl font-serif italic text-heading leading-[1.3] tracking-tight mb-16"
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
