import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { SiteSettings } from "@/types/cms";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

interface HeaderProps {
    data: SiteSettings;
}

const Header = ({ data }: HeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    const { scrollY } = useScroll();
    const smoothScroll = useSpring(scrollY, { stiffness: 100, damping: 30 });

    const headerWidth = useTransform(smoothScroll, [0, 80], ["96%", "92%"]);
    const headerTop = useTransform(smoothScroll, [0, 80], ["1rem", "0.6rem"]);
    const headerShadow = useTransform(smoothScroll, [0, 80], [
        "0px 10px 40px rgba(26,18,11,0.08)",
        "0px 25px 60px rgba(26,18,11,0.12)"
    ]);
    const headerPadding = useTransform(smoothScroll, [0, 80], ["1rem", "0.7rem"]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Associations", path: "/associations" },
        { name: "Experience", path: "/experience" },
        { name: "Philosophy", path: "/philosophy" },
        { name: "Archives", path: "/archives" },
        { name: "Testaments", path: "/testaments" },
        { name: "Dialogue", path: "/dialogue" },
    ];

    return (
        <>
            <div className="fixed top-0 left-0 right-0 h-48 bg-gradient-to-b from-heading/40 via-heading/10 to-transparent pointer-events-none z-[65] opacity-80" />

            <motion.header
                style={{
                    width: headerWidth,
                    top: headerTop,
                    boxShadow: headerShadow,
                    paddingTop: headerPadding,
                    paddingBottom: headerPadding,
                    left: "50%",
                    translateX: "-50%"
                }}
                className={`fixed z-[70] transition-all duration-700 ease-[0.16,1,0.3,1] border rounded-[0.5rem] ${isScrolled
                    ? "bg-background shadow-2xl border-divider/60"
                    : "bg-background/90 backdrop-blur-md border-divider/40"
                    }`}
            >
                <div className="editorial-container flex items-center justify-between">

                    <div className="flex items-center gap-12">
                        <Link
                            to="/"
                            className="flex items-baseline gap-2 group"
                        >
                            <span className="text-xl md:text-2xl font-serif tracking-tight text-heading leading-tight italic font-semibold">
                                {data.logoText}
                            </span>
                            <span className="text-xs uppercase font-sans tracking-[0.25em] font-extrabold text-accent">
                                {data.logoSubtext || "Reality"}
                            </span>
                        </Link>
                    </div>

                    <nav className="hidden xl:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link group relative ${location.pathname === link.path ? 'text-accent' : ''}`}
                            >
                                <span>{link.name}</span>
                                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-accent transform transition-transform duration-500 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4 sm:gap-6">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme mode"
                            title={theme === "dark" ? "Switch to Ivory Daylight" : "Switch to Obsidian Noir"}
                            className="p-2.5 text-heading/70 hover:text-heading hover:bg-heading/5 rounded-md transition-colors cursor-pointer flex items-center justify-center border border-divider/40"
                        >
                            {theme === "dark" ? (
                                <Sun size={16} className="text-accent" />
                            ) : (
                                <Moon size={16} className="text-heading" />
                            )}
                        </button>

                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent("open-enquiry-modal"))}
                            className="hidden sm:flex items-center gap-3 py-2 px-6 bg-heading text-background border border-heading rounded-[0.25rem] transition-all duration-700 group shadow-lg shadow-heading/10 hover:shadow-heading/20 hover:scale-[1.02] cursor-pointer"
                        >
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Enquire</span>
                        </button>

                        <button
                            className="xl:hidden text-heading/60 hover:text-heading p-2 bg-heading/5 rounded-md transition-colors cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu size={20} strokeWidth={1.5} />
                        </button>
                    </div>

                </div>
            </motion.header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        className="fixed inset-0 z-[80] bg-background/98 backdrop-blur-xl flex flex-col p-8 md:p-12 overflow-hidden"
                    >
                        <div className="flex justify-between items-center mb-16 border-b border-divider pb-8">
                            <span className="text-[9px] uppercase tracking-[0.8em] font-black text-accent italic">DIRECTORY</span>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={toggleTheme}
                                    aria-label="Toggle visual theme"
                                    className="p-3 border border-divider/20 rounded-full text-heading/70 hover:bg-heading/5 transition-colors cursor-pointer"
                                >
                                    {theme === "dark" ? <Sun size={18} className="text-accent" /> : <Moon size={18} />}
                                </button>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 border border-divider/20 rounded-full text-heading/60 hover:bg-heading/5 transition-colors cursor-pointer">
                                    <X size={24} strokeWidth={1} />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 + 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="group flex items-center justify-between py-5 border-b border-divider/10 transition-all hover:bg-accent/5 px-4 rounded-lg"
                                    >
                                        <span className="text-3xl font-serif text-heading/80 group-hover:text-accent transition-colors italic">
                                            {link.name}
                                        </span>
                                        <span className="text-[10px] font-mono text-accent/40 opacity-0 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto pt-10 border-t border-divider">
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
                                }}
                                className="w-full flex items-center justify-center py-4 bg-heading text-background rounded-lg cursor-pointer hover:bg-heading/90 transition-colors"
                            >
                                <span className="text-[10px] uppercase tracking-[0.4em] font-black">Connect With Advisory</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
