import React from "react";
import DeveloperAssociations from "@/components/sections/DeveloperAssociations";
import CtaBanner from "@/components/sections/CtaBanner";
import { HomePageData } from "@/types/cms";
import { motion } from "framer-motion";

const Associations = ({ data }: { data: HomePageData }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <DeveloperAssociations
                showFilters={true}
                title="Our Developer Associations"
                subtitle="We are proud channel partners of Mumbai's most reputed developers — giving our clients privileged access to the finest projects, honest pricing, and a seamless buying experience."
            />
            <div className="py-20">
                <CtaBanner data={data.ctaBanner} settings={data.settings} />
            </div>
        </motion.div>
    );
};

export default Associations;
