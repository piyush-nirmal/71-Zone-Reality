import React from "react";
import About from "@/components/sections/About";
import CtaBanner from "@/components/sections/CtaBanner";
import { HomePageData } from "@/types/cms";
import { motion } from "framer-motion";

const Philosophy = ({ data }: { data: HomePageData }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <About data={data.about} />
            <div className="mt-20">
                <CtaBanner data={data.ctaBanner} settings={data.settings} />
            </div>
        </motion.div>
    );
};

export default Philosophy;
