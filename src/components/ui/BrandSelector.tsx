import React, { useState } from "react";
import { useBrand } from "@/context/BrandContext";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Layers } from "lucide-react";

const BrandSelector = () => {
    const { activeBrand, setBrand, availableBrands } = useBrand();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-0 right-10 z-[70]">
            {/* The Discreet Tab */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-heading text-background px-8 py-4 flex items-center gap-4 group transition-all duration-700 hover:pb-8"
            >
                <Layers size={14} className="group-hover:rotate-180 transition-transform duration-1000" strokeWidth={1} />
                <span className="text-[9px] uppercase tracking-[0.6em] font-black">Identity Switch</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-full right-0 w-80 bg-background border border-divider shadow-[0_-30px_60px_-15px_rgba(26,18,11,0.2)] p-12 overflow-hidden"
                    >
                        {/* Frame Detail */}
                        <div className="absolute top-0 left-0 w-full h-[1.5px] bg-accent/40" />

                        <div className="mb-10">
                            <span className="text-[9px] uppercase tracking-[0.5em] text-muted font-bold block mb-4">CURATED CLIENTS</span>
                            <div className="h-px w-12 bg-accent/30"></div>
                        </div>

                        <div className="space-y-4">
                            {availableBrands.map((brand) => (
                                <button
                                    key={brand.id}
                                    onClick={() => {
                                        setBrand(brand.id);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between py-6 px-4 border-b border-divider group transition-all duration-700 ${activeBrand.id === brand.id
                                        ? "text-accent bg-surface/50"
                                        : "text-body hover:bg-surface/30 opacity-60 hover:opacity-100 hover:pl-8"
                                        }`}
                                >
                                    <span className="text-[10px] uppercase tracking-[0.4em] font-black">{brand.name}</span>
                                    {activeBrand.id === brand.id && <Check size={14} className="text-accent animate-pulse" />}
                                </button>
                            ))}
                        </div>

                        <p className="mt-12 text-[8px] text-muted italic leading-relaxed opacity-60">
                            Atmospheric parameters including typography, materiality, and identity will recalibrate instantaneously.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BrandSelector;
