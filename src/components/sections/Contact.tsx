import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-background border-b border-divider">
            <div className="editorial-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Header Perspective */}
                    <div className="lg:col-span-12 mb-32 border-b border-divider pb-16">
                        <span className="mono-tag mb-10">SECTION // CORRESPONDENCE</span>
                        <h2 className="text-heading">The Direct <br /><span className="italic font-light text-accent">Dialogue</span></h2>
                    </div>

                    {/* Contact Channels */}
                    <div className="lg:col-span-6 space-y-32">
                        <div className="group cursor-pointer">
                            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-accent mb-6 block">ELECTRONIC //</span>
                            <div className="flex items-center justify-between border-b border-divider/60 pb-10 group-hover:border-accent transition-all duration-700">
                                <span className="text-3xl lg:text-[4rem] font-serif text-heading leading-none tracking-tighter transition-colors group-hover:text-accent">
                                    concierge@vanguard.com
                                </span>
                                <ArrowUpRight size={32} className="opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-4 group-hover:translate-y-0 text-accent" />
                            </div>
                        </div>

                        <div className="group cursor-pointer">
                            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-accent mb-6 block">DIRECT LINE //</span>
                            <div className="flex items-center justify-between border-b border-divider/60 pb-10 group-hover:border-accent transition-all duration-700">
                                <span className="text-3xl lg:text-[4rem] font-serif text-heading leading-none tracking-tighter transition-colors group-hover:text-accent">
                                    +1 800 ARCHIVE
                                </span>
                                <ArrowUpRight size={32} className="opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-4 group-hover:translate-y-0 text-accent" />
                            </div>
                        </div>
                    </div>

                    {/* Global Presence */}
                    <div className="lg:col-span-12 mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
                            <div className="space-y-6">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-heading/40">THE METROPOLIS</span>
                                <p className="text-2xl font-serif italic text-heading leading-relaxed">Mayfair, London</p>
                            </div>
                            <div className="space-y-6">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-heading/40">THE ATLANTIC</span>
                                <p className="text-2xl font-serif italic text-heading leading-relaxed">Upper East Side, New York</p>
                            </div>
                            <div className="space-y-6">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-heading/40">THE DESERT</span>
                                <p className="text-2xl font-serif italic text-heading leading-relaxed">The Hills, Dubai</p>
                            </div>
                        </div>

                        <div className="mt-24 pt-16 border-t border-divider max-w-2xl">
                            <p className="text-body text-lg font-light leading-relaxed max-w-[50ch]">
                                Our offices operate as private galleries. Walkthroughs are available exclusively by appointment for registered partners and legacy clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
