import React from "react";
import { motion, Variants } from "framer-motion";
import ParallaxWindow from "@/components/ui/ParallaxWindow";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CaseStudy } from "@/types/cms";

interface ArchivesProps {
    data?: CaseStudy[];
}

const defaultStudies: CaseStudy[] = [
    {
        year: "2024",
        title: "The Worli Sea-Face Duplex",
        location: "Worli, South Mumbai",
        image: "/images/hero.png",
        category: "Private Family Office Acquisition",
        outcome: "Confidential off-market transaction at ₹68.5 Cr ($8.2M USD). Completed legal due diligence and turnkey registry in 21 days."
    },
    {
        year: "2023",
        title: "Bandra Bandstand Clifftop Villa",
        location: "Bandstand, Bandra West",
        image: "/images/pool.png",
        category: "HNI Landmark Disposition",
        outcome: "Brokered sale of a generational sea-facing bungalow for a prominent Indian filmmaker at ₹110 Cr."
    },
    {
        year: "2024",
        title: "The Golf Links Trophy Penthouse",
        location: "Golf Course Road, DLF Phase 5, Gurugram",
        image: "/images/about.png",
        category: "NRI Cross-Border Mandate",
        outcome: "Secured 11,000 sq.ft duplex penthouse for a London-based tech fund founder with custom FEMA structuration."
    },
    {
        year: "2023",
        title: "Anjuna Coastal Portuguese Estate",
        location: "North Goa Coastal Corridor",
        image: "/images/stairs.png",
        category: "Bespoke Holiday Retreat",
        outcome: "Acquired and restored a 150-year-old heritage estate on 1.8 acres for a Mumbai private equity leadership family."
    }
];

const archiveContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.1,
        },
    },
};

const archiveCardVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const Archives = ({ data }: ArchivesProps) => {
    const studies = (data && data.length > 0) ? data : defaultStudies;

    return (
        <section id="archives" className="section-padding bg-background border-b border-divider">
            <div className="editorial-container">
                <div className="mb-40 border-b border-divider pb-20">
                    <span className="mono-tag mb-10">SECTION // CASE STUDIES & TRANSACTIONS</span>
                    <h2 className="text-heading">The Archive <br /><span className="italic font-light text-accent">Of Provenance</span></h2>
                </div>

                <motion.div 
                    variants={archiveContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.08, margin: "-40px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32"
                >
                    {studies.map((study, i) => (
                        <motion.div 
                            key={i} 
                            variants={archiveCardVariants}
                            className="lg:col-span-6 space-y-12 group"
                        >
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

                            <div className="space-y-6 pt-8 border-t-2 border-heading">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-mono text-accent font-bold tracking-widest">/{study.year}</span>
                                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-heading/75 italic">{study.category}</span>
                                </div>
                                <h3 className="text-[2.2rem] lg:text-[3rem] leading-[1.1] font-serif text-heading group-hover:text-accent transition-colors duration-700 tracking-tighter">
                                    {study.title}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-xs uppercase tracking-[0.35em] font-bold text-heading/80">{study.location}</p>
                                </div>

                                {study.outcome && (
                                    <div className="mt-4 p-5 bg-surface/40 border border-divider/40 space-y-2">
                                        <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-accent font-black">
                                            <CheckCircle2 size={13} className="text-accent" />
                                            <span>TRANSACTION OUTCOME</span>
                                        </div>
                                        <p className="text-body text-xs font-light leading-relaxed">
                                            {study.outcome}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-48 pt-24 border-t border-divider flex justify-center">
                    <a href="/dialogue" className="btn-minimal group">
                        <span className="flex items-center gap-6">
                            Request Private Transaction Brief
                            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Archives;
