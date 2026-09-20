import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AmenitiesData } from "@/types/cms";
import * as Icons from "lucide-react";

const ParallaxFrame = ({ src, title }: { src: string; title: string }) => {
    return (
        <div className="relative w-full h-full bg-surface overflow-hidden group border border-divider/10">
            <div className="absolute inset-0 z-20 pointer-events-none border-background border-[50px] transition-all duration-1000 group-hover:inset-6"></div>

            <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
            >
                <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[3s]"
                />
            </motion.div>

            <div className="absolute bottom-12 right-12 z-30 pointer-events-none">
                <span className="text-[8vw] font-serif text-white opacity-10 italic leading-none block whitespace-nowrap select-none">
                    {title.split(' ')[0]}
                </span>
            </div>
        </div>
    );
};

const AmenityIcon = ({ name, className }: { name: string; className?: string }) => {
    // @ts-ignore
    const Icon = Icons[name] || Icons.Circle;
    return <Icon className={className} strokeWidth={1} />;
};

const Amenities = ({ data }: { data: AmenitiesData }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="amenities" className="section-padding bg-background border-b border-divider/20">
            <div className="editorial-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Header Perspective */}
                    <div className="lg:col-span-12 mb-32 border-b border-divider/30 pb-16">
                        <span className="mono-tag mb-10">SECTION // UTILITIES</span>
                        <h2 className="text-heading">The Spatial <br /><span className="italic font-light text-accent">Experience</span></h2>
                    </div>

                    {/* Interaction Controller - Controlled Typography */}
                    <div className="lg:col-span-5 flex flex-col justify-between pt-2">
                        <div className="space-y-2">
                            {data.items.map((item, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`group cursor-pointer py-8 border-b border-divider/10 flex items-center justify-between transition-all duration-1000 ${activeIndex === index ? 'opacity-100 pl-4' : 'opacity-20 hover:opacity-40'}`}
                                >
                                    <div className="flex items-center gap-10">
                                        <span className="text-[10px] font-mono text-accent/50 italic font-bold">0{index + 1}</span>
                                        <span className={`text-4xl font-serif text-heading transition-all duration-700 ${activeIndex === index ? 'italic pl-2' : ''}`}>{item.title}</span>
                                    </div>
                                    <AmenityIcon name={item.icon} className={`w-6 h-6 transition-all duration-1000 ${activeIndex === index ? 'text-accent opacity-100 scale-125' : 'text-muted opacity-20'}`} />
                                </div>
                            ))}
                        </div>

                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mt-24 pt-16 border-t border-divider/20 lg:mt-32"
                        >
                            <p className="text-body text-xl font-light leading-relaxed max-w-[42ch]">
                                {data.items[activeIndex].description}
                            </p>
                            <div className="w-20 h-px bg-accent mt-12"></div>
                        </motion.div>
                    </div>

                    {/* Showcase Window */}
                    <div className="lg:col-span-7 mt-12 lg:mt-0 aspect-[14/17] lg:aspect-auto h-full min-h-[700px]">
                        <AnimatePresence mode="wait">
                            <ParallaxFrame
                                key={activeIndex}
                                src={data.items[activeIndex].image || ""}
                                title={data.items[activeIndex].title}
                            />
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Amenities;
