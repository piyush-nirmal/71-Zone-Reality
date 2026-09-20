import React from "react";
import Archives from "@/components/sections/Archives";
import CtaBanner from "@/components/sections/CtaBanner";
import LoginPage from "@/components/auth/LoginPage";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { HomePageData } from "@/types/cms";

const ArchivesPage = ({ data }: { data: HomePageData }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return (
            <div className="pt-40 pb-20">
                <div className="editorial-container">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-serif text-heading mb-12 text-center italic">Historical Records // Access Denied</h2>
                        <LoginPage embedded={true} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <Archives />
            <div className="mt-20">
                <CtaBanner data={data.ctaBanner} settings={data.settings} />
            </div>
        </motion.div>
    );
};

export default ArchivesPage;
