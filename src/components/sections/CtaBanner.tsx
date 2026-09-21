import React from "react";
import { motion } from "framer-motion";
import { CtaBannerData, SiteSettings } from "@/types/cms";

interface CtaBannerProps {
    data: CtaBannerData;
    settings: SiteSettings;
}

const CtaBanner = ({ data, settings }: CtaBannerProps) => {
    return (
        <section className="relative py-36 bg-[#14110E] text-[#FAF7F2] overflow-hidden border-y border-[#C5A059]/25">
            {/* Architectural Grid Texture */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

            <div className="editorial-container relative z-10">
                <div className="max-w-4xl border-l-[6px] border-[#C5A059] pl-8 md:pl-16 py-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="space-y-12"
                    >
                        <h2 className="text-[#FAF7F2] !text-5xl lg:!text-[6.5rem] leading-[0.9] tracking-tighter">
                            Begin Your <br />
                            <span className="italic font-light text-[#C5A059]">Iconic Narrative</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 md:gap-16">
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent("open-enquiry-modal"))}
                                className="bg-[#C5A059] text-[#14110E] px-10 md:px-14 py-5 md:py-6 rounded-[0.25rem] text-[11px] uppercase tracking-[0.4em] font-extrabold hover:bg-[#E5C07B] hover:scale-[1.02] transition-all duration-500 shadow-2xl shadow-black/40 cursor-pointer"
                            >
                                Request Private Briefing
                            </button>

                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#C5A059]">DIRECT LINE //</span>
                                <a 
                                    href={`tel:${settings.contact.phone.replace(/\s+/g, '')}`} 
                                    className="text-2xl font-serif italic text-[#FAF7F2] hover:text-[#C5A059] transition-colors"
                                >
                                    {settings.contact.phone}
                                </a>
                            </div>

                            {settings.contact.whatsapp && (
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#25D366]">WHATSAPP CHAT //</span>
                                    <a 
                                        href={`https://wa.me/91${settings.contact.whatsapp}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl md:text-2xl font-mono text-[#25D366] hover:text-[#5af396] transition-colors font-bold"
                                    >
                                        +91 {settings.contact.whatsapp}
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle decorative elements for balance */}
            <div className="absolute top-0 right-0 w-[400px] h-full opacity-15 pointer-events-none border-l border-white/15"></div>
        </section>
    );
};

export default CtaBanner;
