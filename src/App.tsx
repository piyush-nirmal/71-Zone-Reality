import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import Modal from "@/components/ui/Modal";
import { getPageData } from "@/lib/content";
import { useBrand } from "@/context/BrandContext";
import { motion, AnimatePresence } from "framer-motion";

// Pages
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Experience from "@/pages/Experience";
import Philosophy from "@/pages/Philosophy";
import ArchivesPage from "@/pages/Archives";
import Testaments from "@/pages/Testaments";
import Dialogue from "@/pages/Dialogue";
import Associations from "@/pages/Associations";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const MainSite = () => {
    const { activeBrand } = useBrand();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [propertySubject, setPropertySubject] = useState<string>("");
    const pageData = getPageData(activeBrand.id);

    useEffect(() => {
        const handleOpenModal = (e: Event) => {
            const customEvent = e as CustomEvent<{ property?: string }>;
            if (customEvent.detail?.property) {
                setPropertySubject(customEvent.detail.property);
            } else {
                setPropertySubject("");
            }
            setIsModalOpen(true);
        };
        window.addEventListener("open-enquiry-modal", handleOpenModal);
        return () => window.removeEventListener("open-enquiry-modal", handleOpenModal);
    }, []);

    return (
        <div className="min-h-screen bg-background selection:bg-accent selection:text-background font-sans">
            <ScrollToTop />
            <Header data={pageData.settings} />

            <main className="relative">
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path="/" element={<Home data={pageData} />} />
                        <Route path="/portfolio" element={<Portfolio data={pageData} />} />
                        <Route path="/experience" element={<Experience data={pageData} />} />
                        <Route path="/philosophy" element={<Philosophy data={pageData} />} />
                        <Route path="/archives" element={<ArchivesPage data={pageData} />} />
                        <Route path="/testaments" element={<Testaments data={pageData} />} />
                        <Route path="/associations" element={<Associations data={pageData} />} />
                        <Route path="/developer-associations" element={<Associations data={pageData} />} />
                        <Route path="/dialogue" element={<Dialogue data={pageData} />} />
                    </Routes>
                </AnimatePresence>
            </main>

            <Footer data={pageData} />
            <MobileCTA data={pageData.settings.contact} />
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => {
                    setIsModalOpen(false);
                    setPropertySubject("");
                }} 
                propertySubject={propertySubject}
            />
        </div>
    );
}

function App() {
    return (
        <Router>
            <MainSite />
        </Router>
    );
}

export default App;
