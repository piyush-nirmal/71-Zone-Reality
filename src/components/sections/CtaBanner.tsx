import React from "react";
import { motion } from "framer-motion";
import { CtaBannerData, SiteSettings } from "@/types/cms";

interface CtaBannerProps {
    data: CtaBannerData;
    settings: SiteSettings;
}

const CtaBanner = ({ data, settings }: CtaBannerProps) => {
    return (
        <section className="relative py-40 bg-[#D2B48C] overflow-hidden border-y border-heading/5">
            {/* Elegant Background Texture */}
            <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

            <div className="editorial-container relative z-10">
                <div className="max-w-4-xl border-l-[8px] border-heading pl-16 py-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="space-y-12"
                    >
                        <h2 className="text-heading !text-6xl lg:!text-[7rem] leading-[0.9] tracking-tighter">
                            Begin Your <br />
                            <span className="italic font-light">Iconic Narrative</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-16">
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent("open-enquiry-modal"))}
                                className="bg-heading text-background px-14 py-6 rounded-[0.25rem] text-[12px] uppercase tracking-[0.4em] font-black hover:bg-heading/90 hover:scale-[1.02] transition-all duration-500 shadow-2xl shadow-heading/30 cursor-pointer"
                            >
                                Request Private Briefing
                            </button>

                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-heading/40">DIRECT LINE //</span>
                                <span className="text-2xl font-serif italic text-heading">{settings.contact.phone}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle decorative elements for balance */}
            <div className="absolute top-0 right-0 w-[400px] h-full opacity-10 pointer-events-none border-l border-heading/20"></div>
        </section>
    );
};

export default CtaBanner;
