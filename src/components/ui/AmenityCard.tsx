import React from "react";
import * as LucideIcons from "lucide-react";
import { Amenity } from "@/types/cms";
import { motion } from "framer-motion";

const AmenityCard = ({ amenity, index }: { amenity: Amenity; index: number }) => {
    const Icon = (LucideIcons as any)[amenity.icon] || LucideIcons.Compass;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="group p-16 border-r border-b border-divider hover:bg-secondary/50 transition-colors duration-700"
        >
            <div className="flex flex-col h-full">
                <div className="mb-12">
                    <div className="flex items-center justify-between">
                        <Icon size={32} strokeWidth={1} className="text-gold" />
                        <span className="mono-tag text-muted text-[8px]">0{index + 1}</span>
                    </div>
                </div>

                <h3 className="text-3xl font-serif text-heading mb-6 italic transition-all duration-500 group-hover:pl-4">
                    {amenity.title}
                </h3>

                <p className="text-body text-xs font-medium leading-relaxed opacity-60 tracking-wider uppercase">
                    {amenity.description}
                </p>
            </div>
        </motion.div>
    );
};

export default AmenityCard;
