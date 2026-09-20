import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { Lock, ArrowRight } from "lucide-react";

interface LoginPageProps {
    embedded?: boolean;
}

const LoginPage = ({ embedded = false }: LoginPageProps) => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Simulate network delay for premium feel
        setTimeout(() => {
            const success = login(email, password);
            if (!success) {
                setError("Access Denied. Invalid Credentials.");
                setIsLoading(false);
            }
        }, 800);
    };

    const containerClasses = embedded
        ? "w-full flex flex-col items-center relative"
        : "min-h-screen bg-background flex flex-col justify-center items-center px-6 relative overflow-hidden";

    return (
        <div className={containerClasses}>
            {!embedded && (
                <>
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
                    </div>

                    {/* Architectural Grid Deco */}
                    <div className="absolute top-0 left-0 w-full h-px bg-divider"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-divider"></div>
                    <div className="absolute left-[10vw] top-0 bottom-0 w-px bg-divider/30"></div>
                    <div className="absolute right-[10vw] top-0 bottom-0 w-px bg-divider/30"></div>
                </>
            )}

            <motion.div
                initial={embedded ? {} : { opacity: 0, y: 20 }}
                animate={embedded ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-md z-10"
            >
                {!embedded && (
                    <div className="text-center mb-16">
                        <span className="mono-tag mb-8 tracking-[1em] opacity-40">PRIVATE ACCESS</span>
                        <h1 className="text-5xl font-serif text-heading mb-4 select-none">Studio Archive</h1>
                        <p className="text-sm font-light text-muted uppercase tracking-[0.4em]">Personal Correspondence Only</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className={`space-y-8 bg-surface/30 p-12 border border-divider backdrop-blur-sm ${embedded ? 'shadow-2xl shadow-accent/5' : ''}`}>
                    <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.5em] font-black text-muted block ml-1">Identity</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@demo.com"
                            required
                            className="w-full bg-background border border-divider px-6 py-4 text-sm font-light focus:outline-none focus:border-accent transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.5em] font-black text-muted block ml-1">Keycode</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="w-full bg-background border border-divider px-6 py-4 text-sm font-light focus:outline-none focus:border-accent transition-colors"
                        />
                        <div className="flex flex-col gap-1 pt-2 ml-1">
                            <span className="text-[8px] uppercase tracking-widest text-accent font-bold">Access Credentials:</span>
                            <span className="text-[10px] text-muted-foreground font-mono opacity-60">ID: admin@demo.com</span>
                            <span className="text-[10px] text-muted-foreground font-mono opacity-60">Pass: admin123</span>
                        </div>
                    </div>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-red-500 font-medium tracking-widest text-center"
                        >
                            {error}
                        </motion.p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-heading text-background py-5 flex items-center justify-center gap-4 group hover:bg-accent transition-all duration-700 disabled:opacity-50"
                    >
                        <span className="text-[10px] uppercase tracking-[0.5em] font-black">
                            {isLoading ? "AUTHORIZING..." : "ENTER ARCHIVE"}
                        </span>
                        {!isLoading && <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />}
                    </button>

                    <div className="pt-6 border-t border-divider text-center">
                        <div className="flex items-center justify-center gap-2 opacity-30">
                            <Lock size={10} />
                            <span className="text-[8px] uppercase tracking-[0.2em] font-black italic">Encrypted Connection Validated</span>
                        </div>
                    </div>
                </form>

                {!embedded && (
                    <div className="mt-12 text-center opacity-20">
                        <p className="text-[9px] uppercase tracking-[0.6em] font-bold">
                            ESTABLISHED FOR THE UNCOMPROMISING
                        </p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default LoginPage;
