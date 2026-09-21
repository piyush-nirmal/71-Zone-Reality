import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    propertySubject?: string;
}

const Modal = ({ isOpen, onClose, propertySubject }: ModalProps) => {
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
                            <span className="text-accent text-[8px] uppercase tracking-[0.6em] font-black mb-4 block">
                                {propertySubject ? `PRIVATE DOSSIER REQUEST // ${propertySubject.toUpperCase()}` : "CONTACT ENQUIRY"}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif text-heading leading-tight tracking-tight mb-4">
                                {propertySubject ? (
                                    <>Enquire About <span className="italic font-light text-accent">{propertySubject}</span></>
                                ) : (
                                    <>Send a <span className="italic font-light">Message</span></>
                                )}
                            </h2>
                            <p className="text-body text-sm font-light leading-relaxed max-w-md">
                                {propertySubject 
                                    ? `Direct private advisory mandate for ${propertySubject}. Complete your details for confidential portfolio disclosures.`
                                    : "Please fill in your details below. Our team will get back to you shortly."
                                }
                            </p>
                        </div>

                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest text-heading/70 font-black">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full bg-transparent border-b border-divider py-3 text-[11px] focus:border-accent outline-none transition-all placeholder:text-heading/40 text-heading"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest text-heading/70 font-black">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter phone number"
                                        className="w-full bg-transparent border-b border-divider py-3 text-[11px] focus:border-accent outline-none transition-all placeholder:text-heading/40 text-heading"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] uppercase tracking-widest text-heading/70 font-black">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent border-b border-divider py-3 text-[11px] focus:border-accent outline-none transition-all placeholder:text-heading/40 text-heading"
                                />
                            </div>

                            <div className="pt-6">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full py-5 text-[10px] tracking-[0.4em] transition-all duration-700 shadow-lg hover:shadow-accent/5 cursor-pointer"
                                >
                                    SEND ENQUIRY
                                </Button>

                                <div className="pt-4 text-center">
                                    <a
                                        href="https://wa.me/919167932667"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 text-xs font-mono text-[#25D366] hover:underline font-bold tracking-wider"
                                    >
                                        <MessageCircle size={15} className="text-[#25D366]" />
                                        <span>Direct WhatsApp: +91 91679 32667</span>
                                    </a>
                                </div>

                                <div className="flex items-center justify-center mt-6 space-x-8 opacity-40">
                                    <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-heading">EST. 3RD APRIL 2013</span>
                                    <div className="w-1 h-1 bg-heading rounded-full opacity-40"></div>
                                    <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-heading">CHEMBUR EAST, MUMBAI</span>
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
