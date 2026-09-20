import React from "react";
import { motion } from "framer-motion";
import { ProjectsData, Project } from "@/types/cms";
import ParallaxWindow from "@/components/ui/ParallaxWindow";
import { ArrowRight } from "lucide-react";

const ProjectBlock = ({ project, index }: { project: Project; index: number }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Signature Window */}
            <div className="lg:col-span-12">
                <ParallaxWindow
                    src={project.image}
                    aspectRatio="aspect-[16/11]"
                    inset="border-[45px]"
                />
            </div>

            {/* Narrative Identity */}
            <div className="lg:col-span-6 lg:col-start-1 space-y-8 pt-8">
                <div className="flex items-center gap-8">
                    <div className="w-12 h-px bg-accent/40"></div>
                    <span className="text-[9px] uppercase tracking-[0.5em] text-accent font-black italic">COLLECTION // 0{index + 1}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-serif text-heading leading-[1.1]">
                    {project.title.split(' ').map((word, i) => (
                        <span key={i} className={i === project.title.split(' ').length - 1 ? "italic text-accent inline-block" : "inline-block mr-[0.3em]"}>
                            {word}
                        </span>
                    ))}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-heading/30">{project.location}</p>
            </div>

            {/* Technical Brief - High Visibility */}
            <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
                <div className="lg:col-span-7 pt-12 border-t border-divider/40">
                    <p className="text-body text-xl font-light leading-relaxed max-w-[45ch]">
                        A cinematic intervention in the {project.location} landscape. This structure emphasizes geometric purity and a definitive {project.status.toLowerCase()} presence.
                    </p>
                </div>

                <div className="lg:col-span-5 pt-12 border-t border-divider/40 flex items-end justify-between">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black italic">PRIVATE BRIEFING</span>
                        <span className="text-4xl font-serif text-heading">{project.price}</span>
                    </div>
                    <button className="btn-minimal group cursor-pointer pb-2">
                        <span className="flex items-center gap-4">
                            View Brief
                            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

const FeaturedProjects = ({ data }: { data: ProjectsData }) => {
    return (
        <section id="projects" className="section-padding bg-background border-b border-divider/20">
            <div className="editorial-container">
                {/* Section Proposition */}
                <div className="mb-40 border-b border-divider/20 pb-20">
                    <span className="mono-tag mb-10">PORTFOLIO // SELECTION</span>
                    <h2 className="text-heading">The Archive <br /><span className="italic font-light text-accent">Anthology</span></h2>
                </div>

                {/* Vertical Anthology Flow */}
                <div className="space-y-64 lg:space-y-80">
                    {data.projects.map((project, index) => (
                        <ProjectBlock
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Final Index Interaction */}
                <div className="mt-64 flex justify-center">
                    <button className="btn-minimal px-12 group cursor-pointer">
                        <span className="flex items-center gap-6">
                            Access Complete Archive Index
                            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
