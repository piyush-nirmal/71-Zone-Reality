import React from "react";
import { HomePageData } from "@/types/cms";
import { Link } from "react-router-dom";

const Footer = ({ data }: { data: HomePageData }) => {
    const currentYear = new Date().getFullYear();
    const settings = data.settings;

    return (
        <footer className="bg-heading text-background py-24 border-t border-white/5">
            <div className="editorial-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Brand Identity */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link to="/" className="text-4xl font-serif tracking-tighter block italic text-accent">
                            {settings.logoText}
                        </Link>
                        <p className="text-sm font-light leading-relaxed max-w-[32ch] opacity-60">
                            Crafting distilled architectural excellence for the uncompromising resident since 2012. Our structures are statements of permanence.
                        </p>
                    </div>

                    {/* Middle Column: Links */}
                    <div className="lg:col-span-3 lg:col-start-7 space-y-8">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">RESOURCES</span>
                        <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.2em] font-bold text-white/60">
                            <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio Anthology</Link>
                            <Link to="/philosophy" className="hover:text-accent transition-colors">Design Philosophy</Link>
                            <Link to="/archives" className="hover:text-accent transition-colors">Spatial Archives</Link>
                            <Link to="/experience" className="hover:text-accent transition-colors">Lifestyle Utilities</Link>
                        </div>
                    </div>

                    {/* Right Column: Inquiries */}
                    <div className="lg:col-span-3 lg:col-start-10 space-y-8 text-right lg:text-left">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">INQUIRIES</span>
                        <div className="flex flex-col gap-4">
                            <a href={`tel:${settings.contact.phone}`} className="text-2xl font-serif italic text-white/80 hover:text-accent transition-colors">{settings.contact.phone}</a>
                            <a href={`mailto:${settings.contact.email}`} className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-accent transition-colors">{settings.contact.email}</a>
                        </div>
                    </div>

                    {/* Bottom Rail: Legal & Copyright */}
                    <div className="lg:col-span-12 mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-medium">
                            © {currentYear} {settings.brandName}. ALL RIGHTS RESERVED.
                        </span>
                        <div className="flex gap-10 text-[9px] uppercase tracking-[0.2em] font-bold text-white/40">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Legal Disclosure</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Index</a>
                        </div>
                        <span className="text-[9px] uppercase tracking-[0.4em] text-accent/60 font-black italic">
                            ARCHITECTURAL PERMANENCE
                        </span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
