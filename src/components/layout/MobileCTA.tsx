import React from "react";
import { Phone, Mail } from "lucide-react";
import { ContactInfo } from "@/types/cms";

const MobileCTA = ({ data }: { data: ContactInfo }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden">
            {/* The Signature Arch Bar */}
            <div className="flex w-full h-16 bg-heading shadow-[0_-10px_40px_rgba(26,18,11,0.2)]">
                <a
                    href={`tel:${data.phone}`}
                    className="flex-1 flex items-center justify-center gap-4 text-background border-r border-background/5"
                >
                    <Phone size={14} className="text-accent" />
                    <span className="text-[9px] uppercase tracking-[0.4em] font-black">Direct Line</span>
                </a>
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-enquiry-modal"))}
                    className="flex-1 flex items-center justify-center gap-4 bg-accent text-background"
                >
                    <Mail size={14} />
                    <span className="text-[9px] uppercase tracking-[0.4em] font-black">Enquire</span>
                </button>
            </div>
            {/* Decorative Offset */}
            <div className="h-2 bg-heading/50 w-full"></div>
        </div>
    );
};

export default MobileCTA;
