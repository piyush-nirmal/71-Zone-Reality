import React from "react";
import Amenities from "@/components/sections/Amenities";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import { HomePageData } from "@/types/cms";
import { motion } from "framer-motion";

const Experience = ({ data }: { data: HomePageData }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <Amenities data={data.amenities} nriServices={data.nriServices} />
            <Testimonials data={data.testimonials} />
            <div className="mt-20">
                <CtaBanner data={data.ctaBanner} settings={data.settings} />
            </div>
        </motion.div>
    );
};

export default Experience;
