import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-heading/60 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 40 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-xl bg-background p-10 md:p-14 shadow-2xl border border-divider overflow-hidden"
                    >
                        {/* Architectural Signature */}
                        <div className="absolute top-0 left-0 w-full h-[1.5px] bg-accent/30" />

                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 text-muted hover:text-heading transition-all duration-700 hover:rotate-90"
                        >
                            <X size={20} strokeWidth={1.5} />
                        </button>

                        <div className="mb-10">
                            <span className="text-accent text-[8px] uppercase tracking-[0.6em] font-bold mb-4 block opacity-60">
                                CONTACT ENQUIRY
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif text-heading leading-tight tracking-tight mb-4">
                                Send a <span className="italic font-light">Message</span>
                            </h2>
                            <p className="text-body text-sm font-light leading-relaxed opacity-60 max-w-md">
                                Please fill in your details below. Our team will get back to you shortly.
                            </p>
                        </div>

                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest text-muted/60 font-black">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full bg-transparent border-b border-divider py-3 text-[11px] focus:border-accent outline-none transition-all placeholder:text-muted/30 text-heading border-opacity-40"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest text-muted/60 font-black">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter phone number"
                                        className="w-full bg-transparent border-b border-divider py-3 text-[11px] focus:border-accent outline-none transition-all placeholder:text-muted/30 text-heading border-opacity-40"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] uppercase tracking-widest text-muted/60 font-black">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent border-b border-divider py-3 text-[11px] focus:border-accent outline-none transition-all placeholder:text-muted/30 text-heading border-opacity-40"
                                />
                            </div>

                            <div className="pt-6">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full py-5 text-[10px] tracking-[0.4em] transition-all duration-700 shadow-lg hover:shadow-accent/5"
                                >
                                    SEND ENQUIRY
                                </Button>
                                <div className="flex items-center justify-center mt-8 space-x-8 opacity-20 grayscale pointer-events-none">
                                    <span className="text-[7px] font-black tracking-[0.4em]">SECURE CONNECTION</span>
                                    <div className="w-1 h-1 bg-heading rounded-full opacity-20"></div>
                                    <span className="text-[7px] font-black tracking-[0.4em]">PRIVACY COMPLIANT</span>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
