import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, ShieldCheck, MessageCircle, MapPin, Calendar } from "lucide-react";

interface ContactProps {
    contactData?: {
        phone: string;
        email: string;
        address: string;
        whatsapp?: string;
        established?: string;
        hours?: string;
        offices?: {
            name: string;
            region: string;
            address: string;
            phone?: string;
        }[];
    };
}

const defaultOffices = [
    {
        name: "Headquarters // 71 Zone Reality",
        region: "MUMBAI // CHEMBUR EAST",
        address: "Crystal Armus, Shop No. 06, Vaibhav Nagar, Chembur East, Mumbai - 400071",
        phone: "+91 91679 32667"
    },
    {
        name: "National Capital Region Desk",
        region: "DELHI NCR // GOLF COURSE RD",
        address: "Level 14, Horizon Center, Golf Course Road, DLF Phase 5, Gurugram 122002",
        phone: "+91 124 497 7100"
    },
    {
        name: "Coastal Estates Gallery",
        region: "GOA // COASTAL BELT",
        address: "Villa 7, Chogm Road, Porvorim, North Goa 403521",
        phone: "+91 832 241 7100"
    }
];

const Contact = ({ contactData }: ContactProps) => {
    const offices = contactData?.offices || defaultOffices;
    const email = contactData?.email || "zonereality71@gmail.com";
    const phone = contactData?.phone || "+91 91679 32667";
    const whatsapp = contactData?.whatsapp || "9167932667";
    const address = contactData?.address || "Crystal Armus, Shop No. 06, Vaibhav Nagar, Chembur East, Mumbai - 400071";
    const established = contactData?.established || "3rd April 2013";
    const hours = contactData?.hours || "Monday – Saturday: 09:30 AM – 07:30 PM IST (By Exclusive Appointment)";

    return (
        <section id="contact" className="section-padding bg-background border-b border-divider">
            <div className="editorial-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Header Perspective */}
                    <div className="lg:col-span-12 mb-16 border-b border-divider pb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <span className="mono-tag mb-6 block">SECTION // CORRESPONDENCE</span>
                            <h2 className="text-heading text-5xl lg:text-7xl font-serif">
                                Direct <br /><span className="italic font-light text-accent">Dialogue</span>
                            </h2>
                        </div>
                        <div className="flex flex-col gap-2 p-6 bg-surface/40 border border-divider/40 max-w-sm">
                            <div className="flex items-center gap-2 text-accent text-[9px] uppercase tracking-widest font-black">
                                <Calendar size={14} />
                                <span>HERITAGE & PROVENANCE</span>
                            </div>
                            <p className="text-xs uppercase font-mono tracking-wider font-bold text-heading">
                                Established: {established}
                            </p>
                            <p className="text-[11px] text-body font-light">
                                71 Zone Reality • Registered Luxury Advisory
                            </p>
                        </div>
                    </div>

                    {/* Contact Channels */}
                    <div className="lg:col-span-6 space-y-16">
                        {/* Email Channel */}
                        <a href={`mailto:${email}`} className="group cursor-pointer block">
                            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-accent mb-4 block">ELECTRONIC // INQUIRIES</span>
                            <div className="flex items-center justify-between border-b border-divider/60 pb-6 group-hover:border-accent transition-all duration-700">
                                <span className="text-xl sm:text-2xl lg:text-[2.6rem] font-serif text-heading leading-none tracking-tight transition-colors group-hover:text-accent break-all">
                                    {email}
                                </span>
                                <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-2 group-hover:translate-y-0 text-accent flex-shrink-0 ml-4" />
                            </div>
                        </a>

                        {/* Phone Direct Line */}
                        <a href={`tel:${phone.replace(/\s+/g, '')}`} className="group cursor-pointer block">
                            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-accent mb-4 block">DIRECT LINE // CONCIERGE</span>
                            <div className="flex items-center justify-between border-b border-divider/60 pb-6 group-hover:border-accent transition-all duration-700">
                                <span className="text-2xl sm:text-3xl lg:text-[3rem] font-serif text-heading leading-none tracking-tighter transition-colors group-hover:text-accent">
                                    {phone}
                                </span>
                                <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-2 group-hover:translate-y-0 text-accent flex-shrink-0 ml-4" />
                            </div>
                        </a>

                        {/* WhatsApp Direct Channel */}
                        <a 
                            href={`https://wa.me/91${whatsapp}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group cursor-pointer block p-6 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-500 rounded-sm"
                        >
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <MessageCircle size={18} className="text-[#25D366]" />
                                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#25D366]">WHATSAPP CONCIERGE</span>
                                    </div>
                                    <p className="text-2xl font-mono font-bold text-heading group-hover:text-[#25D366] transition-colors">
                                        +91 {whatsapp}
                                    </p>
                                    <p className="text-[11px] text-body font-light">
                                        Tap for instant property brochures, floor plans, and confidential briefings.
                                    </p>
                                </div>
                                <ArrowUpRight size={24} className="text-[#25D366] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </a>

                        <div className="pt-2 flex items-start gap-4 text-muted/70">
                            <Clock size={18} className="text-accent flex-shrink-0 mt-1" />
                            <div className="space-y-1">
                                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-heading/50 block">OPERATING HOURS</span>
                                <p className="text-xs font-light text-heading/80">{hours}</p>
                            </div>
                        </div>
                    </div>

                    {/* Operational Philosophy & Headquarters Address */}
                    <div className="lg:col-span-6 space-y-8 self-start">
                        {/* Primary Headquarters Highlight */}
                        <div className="bg-surface/40 p-8 lg:p-12 border-l-4 border-accent border-y border-r border-divider/40 space-y-6">
                            <div className="flex items-center gap-3">
                                <MapPin size={20} className="text-accent" />
                                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-accent">REGISTERED HEADQUARTERS</span>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-serif text-heading font-medium">71 Zone Reality</h3>
                                <p className="text-base text-body font-light leading-relaxed">
                                    {address}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-divider/40 flex flex-wrap gap-4 text-xs font-mono text-accent">
                                <span>EST: {established}</span>
                                <span>•</span>
                                <span>MahaRERA Registered</span>
                            </div>
                        </div>

                        {/* Confidentiality Mandate */}
                        <div className="bg-surface/20 p-8 border border-divider/40 space-y-4">
                            <div className="flex items-center gap-3">
                                <ShieldCheck size={18} className="text-accent" />
                                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">CONFIDENTIALITY MANDATE</span>
                            </div>
                            <h4 className="text-xl font-serif text-heading italic">Private Briefings & Off-Market Portfolio Access</h4>
                            <p className="text-body text-xs font-light leading-relaxed">
                                All prospective acquisitions, commercial mandates, and private property transactions are managed under strict Non-Disclosure Agreements (NDA). Walkthroughs are conducted strictly with verified principals.
                            </p>
                        </div>
                    </div>

                    {/* Regional Presence / Offices */}
                    <div className="lg:col-span-12 mt-12">
                        <div className="border-b border-divider pb-6 mb-12">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-heading/40">OFFICES & ADVISORY DESKS</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                            {offices.map((office, idx) => (
                                <div key={idx} className="space-y-4 p-8 bg-surface/20 border border-divider/40 hover:border-accent/40 transition-colors">
                                    <span className="text-[9px] uppercase tracking-[0.4em] font-black text-accent">{office.region}</span>
                                    <h4 className="text-xl font-serif italic text-heading">{office.name}</h4>
                                    <p className="text-xs font-light text-heading/70 leading-relaxed">{office.address}</p>
                                    {office.phone && (
                                        <p className="text-[10px] font-mono tracking-widest text-accent/90 pt-2">{office.phone}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-10 border-t border-divider max-w-2xl">
                            <p className="text-body text-sm font-light leading-relaxed">
                                Consultations, document audits, and property briefings are available exclusively by appointment for verified clients and partners.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
