import React from "react";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Archives from "@/components/sections/Archives";
import CtaBanner from "@/components/sections/CtaBanner";
import { HomePageData } from "@/types/cms";
import { motion } from "framer-motion";

const Portfolio = ({ data }: { data: HomePageData }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <FeaturedProjects data={data.featuredProjects} />
            <Archives data={data.caseStudies} />
            <div className="mt-20">
                <CtaBanner data={data.ctaBanner} settings={data.settings} />
            </div>
        </motion.div>
    );
};

export default Portfolio;
