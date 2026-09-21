import React from "react";
import Archives from "@/components/sections/Archives";
import CtaBanner from "@/components/sections/CtaBanner";
import { motion } from "framer-motion";
import { HomePageData } from "@/types/cms";

const ArchivesPage = ({ data }: { data: HomePageData }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <Archives data={data.caseStudies} />
            <div className="mt-20">
                <CtaBanner data={data.ctaBanner} settings={data.settings} />
            </div>
        </motion.div>
    );
};

export default ArchivesPage;
