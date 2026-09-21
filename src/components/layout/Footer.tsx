import React from "react";
import { HomePageData } from "@/types/cms";
import { Link } from "react-router-dom";
import { ShieldCheck, MessageCircle, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = ({ data }: { data: HomePageData }) => {
    const settings = data.settings;
    const rera = settings.contact.rera || "MahaRERA Registration No. A51900038921";
    const address = settings.contact.address || "Crystal Armus, Shop No. 06, Vaibhav Nagar, Chembur East, Mumbai - 400071";
    const hours = settings.contact.hours || "Monday – Saturday: 09:30 AM – 07:30 PM IST (By Exclusive Appointment)";
    const whatsappNo = settings.contact.whatsapp || "9167932667";
    const establishedDate = settings.contact.established || "3rd April 2013";

    return (
        <footer className="bg-[#0E0C0A] text-[#FAF7F2] py-24 border-t border-[#C5A059]/20 relative z-10">
            <div className="editorial-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Brand Identity & Legal Entity */}
                    <div className="lg:col-span-5 space-y-6">
                        <Link to="/" className="text-4xl font-serif tracking-tighter block italic text-[#C5A059] hover:text-[#E5C07B] transition-colors">
                            {settings.logoText}
                        </Link>
                        <div className="space-y-1">
                            <p className="text-sm uppercase tracking-[0.2em] font-extrabold text-[#FAF7F2]">
                                71 Zone Reality
                            </p>
                            <p className="text-[11px] font-mono tracking-wider text-[#C5A059] font-bold">
                                ESTABLISHED: {establishedDate.toUpperCase()}
                            </p>
                        </div>
                        <p className="text-xs font-light leading-relaxed max-w-[34ch] text-[#D1C7BC]">
                            Mumbai's distinguished private real estate advisory. Curating rare architectural residences, coastal estates, and prime residential & commercial spaces with institutional discretion since 3rd April 2013.
                        </p>
                        <div className="pt-3 flex items-center gap-3 text-[#C5A059] border-t border-white/15 max-w-sm">
                            <ShieldCheck size={16} className="text-[#C5A059] flex-shrink-0" />
                            <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#EFE8DC]">
                                {rera}
                            </span>
                        </div>
                    </div>

                    {/* Middle Column: Links */}
                    <div className="lg:col-span-3 lg:col-start-7 space-y-6">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#C5A059]">DIRECTORY</span>
                        <div className="flex flex-col gap-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#EAE3D6]">
                            <Link to="/portfolio" className="hover:text-[#C5A059] transition-colors">Portfolio Anthology</Link>
                            <Link to="/associations" className="hover:text-[#C5A059] transition-colors">Developer Associations</Link>
                            <Link to="/philosophy" className="hover:text-[#C5A059] transition-colors">Philosophy & Team</Link>
                            <Link to="/experience" className="hover:text-[#C5A059] transition-colors">Advisory & NRI Desk</Link>
                            <Link to="/archives" className="hover:text-[#C5A059] transition-colors">Transaction Archives</Link>
                            <Link to="/testaments" className="hover:text-[#C5A059] transition-colors">Private Testaments</Link>
                            <Link to="/dialogue" className="hover:text-[#C5A059] transition-colors">Direct Dialogue</Link>
                        </div>
                    </div>

                    {/* Right Column: Inquiries & Headquarters */}
                    <div className="lg:col-span-3 lg:col-start-10 space-y-6">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#C5A059]">HEADQUARTERS</span>
                        <div className="space-y-4">
                            <p className="text-xs font-light text-[#D1C7BC] leading-relaxed max-w-[28ch]">
                                {address}
                            </p>
                            <div className="flex flex-col gap-2 pt-2 border-t border-white/15">
                                <a href={`tel:${settings.contact.phone.replace(/\s+/g, '')}`} className="text-xl font-serif italic text-[#FAF7F2] hover:text-[#C5A059] transition-colors">
                                    {settings.contact.phone}
                                </a>
                                <a 
                                    href={`https://wa.me/91${whatsappNo}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-mono text-[#25D366] hover:text-[#5af396] transition-colors font-bold tracking-wider"
                                >
                                    <MessageCircle size={14} className="text-[#25D366]" />
                                    <span>WhatsApp: +91 {whatsappNo}</span>
                                </a>
                                <a href={`mailto:${settings.contact.email}`} className="text-[11px] font-mono tracking-wider font-semibold text-[#E5C07B] hover:text-[#FAF7F2] transition-colors break-all">
                                    {settings.contact.email}
                                </a>
                            </div>
                            <div className="pt-2 text-[10px] text-[#A89F93] font-light leading-relaxed">
                                {hours}
                            </div>
                        </div>

                        {/* Social Channels */}
                        <div className="pt-4 flex items-center gap-5 text-[#C5A059] border-t border-white/15">
                            <a
                                href={`https://wa.me/91${whatsappNo}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WhatsApp Concierge"
                                className="text-[#D8CEBF] hover:text-[#25D366] transition-colors p-1"
                            >
                                <MessageCircle size={18} />
                            </a>
                            <a
                                href="https://instagram.com/71zonerealty"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Instagram"
                                className="text-[#D8CEBF] hover:text-[#C5A059] transition-colors p-1"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://linkedin.com/company/71zonerealty"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                                className="text-[#D8CEBF] hover:text-[#C5A059] transition-colors p-1"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://youtube.com/@71zonerealty"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="YouTube"
                                className="text-[#D8CEBF] hover:text-[#C5A059] transition-colors p-1"
                            >
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Bottom Rail: Legal & Copyright */}
                    <div className="lg:col-span-12 mt-16 pt-10 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-8">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A89F93] font-medium text-center md:text-left">
                            © 2013 – 2026 71 Zone Reality. All rights reserved. Registered Real Estate Advisory.
                        </span>
                        <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D1C7BC]">
                            <a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-[#C5A059] transition-colors">MahaRERA Disclosure</a>
                            <a href="#" className="hover:text-[#C5A059] transition-colors">FEMA Compliance</a>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-black italic">
                            ARCHITECTURAL PROVENANCE
                        </span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
