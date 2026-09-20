import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Menu, X, ArrowRight, LogOut, User } from "lucide-react";
import { SiteSettings } from "@/types/cms";
import { useAuth } from "@/context/AuthContext";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
    data: SiteSettings;
}

const Header = ({ data }: HeaderProps) => {
    const { logout, isAuthenticated } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    const allNavLinks = [
        { name: "Home", path: "/", gated: false },
        { name: "Portfolio", path: "/portfolio", gated: true },
        { name: "Experience", path: "/experience", gated: true },
        { name: "Philosophy", path: "/philosophy", gated: false },
        { name: "Archives", path: "/archives", gated: true },
        { name: "Testaments", path: "/testaments", gated: true },
        { name: "Dialogue", path: "/dialogue", gated: true },
    ];

    const navLinks = isAuthenticated
        ? allNavLinks
        : allNavLinks.filter(link => !link.gated);

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
                            className="flex flex-col group"
                        >
                            <span className="text-lg md:text-xl font-serif tracking-tight text-heading leading-tight italic font-medium">
                                {data.logoText}
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

                    <div className="flex items-center gap-6">
                        {!isAuthenticated ? (
                            <Link
                                to="/portfolio"
                                className="hidden sm:flex items-center gap-3 py-2 px-6 bg-heading text-background border border-heading rounded-[0.25rem] transition-all duration-700 group shadow-lg shadow-heading/10 hover:shadow-heading/20 hover:scale-[1.02] cursor-pointer"
                            >
                                <User size={14} strokeWidth={2} />
                                <span className="text-[10px] uppercase tracking-[0.4em] font-black">Login</span>
                            </Link>
                        ) : (
                            <div className="flex items-center gap-4">
                                <span className="hidden sm:block text-[9px] uppercase tracking-[0.4em] font-black text-accent italic">Member //</span>
                                <button
                                    onClick={logout}
                                    className="p-2.5 text-heading/40 hover:text-accent hover:bg-accent/5 rounded-full transition-all cursor-pointer"
                                    title="Terminate Session"
                                >
                                    <LogOut size={16} strokeWidth={1} />
                                </button>
                            </div>
                        )}

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
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 border border-divider/20 rounded-full text-heading/60 hover:bg-heading/5 transition-colors cursor-pointer">
                                <X size={24} strokeWidth={1} />
                            </button>
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

                        <div className="mt-auto pt-12 border-t border-divider">
                            <div className="flex justify-between items-end bg-surface/50 p-8 rounded-xl">
                                <div className="space-y-3">
                                    <span className="text-[8px] uppercase tracking-[0.4em] text-muted font-bold block opacity-40">ACCESS LEVEL</span>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent italic font-bold">
                                        {isAuthenticated ? 'AUTHORIZED PARTNER' : 'VISITOR STATUS'}
                                    </p>
                                </div>
                                {isAuthenticated && (
                                    <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-black text-red-800/60 hover:text-red-800 transition-colors py-2 px-4 border border-red-800/10 rounded-lg cursor-pointer">
                                        <LogOut size={12} />
                                        TERMINATE
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
