import React from "react";
import Hero from "@/components/sections/Hero";
import CtaBanner from "@/components/sections/CtaBanner";
import NarrativeSection from "@/components/sections/NarrativeSection";
import { HomePageData } from "@/types/cms";
import { motion } from "framer-motion";

const Home = ({ data }: { data: HomePageData }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-background overflow-hidden"
        >
            <Hero data={data.hero} brandName={data.settings.brandName} />

            <div className="relative z-20 -mt-20 lg:-mt-40">
                <NarrativeSection />
            </div>

            <div className="py-20 lg:py-40">
                <CtaBanner data={data.ctaBanner} settings={data.settings} />
            </div>
        </motion.div>
    );
};

export default Home;
