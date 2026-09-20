import React from "react";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/cms";
import { motion } from "framer-motion";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <motion.div
            whileHover="hover"
            className="group relative flex flex-col cursor-pointer"
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
                <motion.img
                    variants={{
                        hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1.5s]"
                />

                {/* Fashion Catalog Overlay */}
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-80" />

                {/* Status Label - Minimalist */}
                <div className="absolute top-8 left-8">
                    <span className="mono-tag text-ivory/80 backdrop-blur-md px-4 py-2 border border-ivory/10 text-[8px]">
                        {project.status}
                    </span>
                </div>
            </div>

            <div className="mt-12 group">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="mono-tag text-gold text-[8px] mb-2 block">{project.title}</span>
                        <h3 className="text-4xl md:text-5xl font-serif text-heading italic group-hover:text-gold transition-colors duration-500">
                            {project.location}
                        </h3>
                    </div>
                    <motion.div
                        variants={{
                            hover: { x: 10, opacity: 1 }
                        }}
                        initial={{ opacity: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-heading"
                    >
                        <ArrowRight size={32} strokeWidth={1} />
                    </motion.div>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-heading/10">
                    <span className="mono-tag text-muted text-[8px]">Investment Value</span>
                    <span className="text-heading font-serif text-2xl italic">{project.price}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
