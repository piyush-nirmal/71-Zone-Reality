import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { ContactInfo } from "@/types/cms";

const MobileCTA = ({ data }: { data: ContactInfo }) => {
    const whatsappNo = data.whatsapp || "9167932667";
    const phoneNo = (data.phone || "+91 91679 32667").replace(/\s+/g, '');

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden">
            {/* The Signature Arch Bar */}
            <div className="flex w-full h-16 bg-[#14110E] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-[#C5A059]/40 divide-x divide-white/10">
                <a
                    href={`tel:${phoneNo}`}
                    className="flex-1 flex flex-col items-center justify-center text-[#FAF7F2] hover:text-[#C5A059] transition-colors py-1"
                >
                    <Phone size={15} className="text-[#C5A059] mb-1" />
                    <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold">Call</span>
                </a>
                <a
                    href={`https://wa.me/91${whatsappNo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center justify-center text-[#25D366] hover:text-[#5af396] transition-colors py-1"
                >
                    <MessageCircle size={15} className="text-[#25D366] mb-1" />
                    <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold text-[#FAF7F2]">WhatsApp</span>
                </a>
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-enquiry-modal"))}
                    className="flex-1 flex flex-col items-center justify-center bg-[#C5A059] text-[#14110E] cursor-pointer hover:bg-[#D4AF37] transition-colors py-1"
                >
                    <Mail size={15} className="text-[#14110E] mb-1" />
                    <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold">Enquire</span>
                </button>
            </div>
            {/* Decorative Offset */}
            <div className="h-1.5 bg-[#0E0C0A] w-full"></div>
        </div>
    );
};

export default MobileCTA;
