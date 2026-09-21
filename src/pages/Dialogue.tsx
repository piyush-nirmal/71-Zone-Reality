import React from "react";
import Contact from "@/components/sections/Contact";
import CtaBanner from "@/components/sections/CtaBanner";
import { motion } from "framer-motion";
import { HomePageData } from "@/types/cms";

const Dialogue = ({ data }: { data: HomePageData }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <Contact contactData={data.settings.contact} />
            <div className="mt-20">
                <CtaBanner data={data.ctaBanner} settings={data.settings} />
            </div>
        </motion.div>
    );
};

export default Dialogue;
