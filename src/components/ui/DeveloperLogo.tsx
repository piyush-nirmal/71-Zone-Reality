import React from "react";

interface DeveloperLogoProps {
    id: string;
    name: string;
    className?: string;
}

export const DeveloperLogo: React.FC<DeveloperLogoProps> = ({ id, name, className = "" }) => {
    switch (id) {
        case "godrej-properties":
            return (
                <div className={`flex items-center gap-2.5 ${className}`}>
                    <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="18" fill="#111111" />
                        <path d="M12 20C12 15.58 15.58 12 20 12C24.42 12 28 15.58 28 20" stroke="#FAF7F2" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="20" cy="20" r="4" fill="#C5A059" />
                    </svg>
                    <div className="flex flex-col text-left">
                        <span className="text-[15px] font-sans font-black tracking-tight leading-none text-neutral-900">
                            GODREJ
                        </span>
                        <span className="text-[8px] font-sans font-bold tracking-[0.25em] text-neutral-600 mt-0.5">
                            PROPERTIES
                        </span>
                    </div>
                </div>
            );

        case "lodha":
            return (
                <div className={`flex items-center gap-2.5 ${className}`}>
                    <div className="flex flex-col gap-[3px] w-5">
                        <div className="h-[3px] w-full bg-[#1A1A1A] rounded-xs" />
                        <div className="h-[3px] w-full bg-[#1A1A1A] rounded-xs" />
                        <div className="h-[3px] w-full bg-[#1A1A1A] rounded-xs" />
                        <div className="h-[3px] w-full bg-[#1A1A1A] rounded-xs" />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-[17px] font-serif font-black tracking-[0.18em] leading-none text-neutral-900">
                            LODHA
                        </span>
                        <span className="text-[6.5px] font-sans font-bold tracking-[0.22em] text-neutral-500 mt-1 uppercase">
                            Building a better life
                        </span>
                    </div>
                </div>
            );

        case "lt-realty":
            return (
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-50/50 to-white shadow-xs ${className}`}>
                    <div className="w-7 h-7 rounded-full bg-[#004A99] flex items-center justify-center text-white font-sans font-black text-[10px] shadow-xs">
                        L&amp;T
                    </div>
                    <span className="text-[14px] font-serif font-semibold italic text-[#004A99] tracking-tight">
                        Realty
                    </span>
                </div>
            );

        case "adani-realty":
            return (
                <div className={`flex flex-col items-center text-center ${className}`}>
                    <div className="flex items-baseline">
                        <span className="text-xl font-sans font-bold text-[#0B2545] tracking-tight">adani</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5007D] ml-0.5 mb-1" />
                    </div>
                    <span className="text-[9px] font-sans font-semibold tracking-[0.3em] uppercase text-neutral-600 -mt-1">
                        Realty
                    </span>
                </div>
            );

        case "dlf":
            return (
                <div className={`flex items-center gap-2 ${className}`}>
                    <span className="text-2xl font-sans font-black italic tracking-tighter text-[#1C1C1C]">
                        DLF
                    </span>
                    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#1C1C1C">
                        <polygon points="12,2 2,22 22,22" fillOpacity="0.15" />
                        <polygon points="12,6 6,18 18,18" fill="#1C1C1C" />
                        <polygon points="12,10 9,16 15,16" fill="#C5A059" />
                    </svg>
                </div>
            );

        case "prestige-group":
            return (
                <div className={`flex items-center gap-2 text-left ${className}`}>
                    <svg className="w-7 h-7 flex-shrink-0 text-[#9E7D3B]" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M16 2L19 9L26 10L21 15L22 22L16 18L10 22L11 15L6 10L13 9L16 2Z" />
                        <circle cx="16" cy="27" r="2.5" />
                    </svg>
                    <div className="flex flex-col">
                        <span className="text-[14px] font-serif font-bold text-neutral-900 leading-none">
                            Prestige
                        </span>
                        <span className="text-[7.5px] font-sans font-black tracking-widest text-[#9E7D3B] uppercase">
                            Group
                        </span>
                        <span className="text-[6px] italic text-neutral-500 font-serif">
                            Add Prestige to your life
                        </span>
                    </div>
                </div>
            );

        case "birla-estates":
            return (
                <div className={`flex items-center gap-2 text-left ${className}`}>
                    <div className="w-7 h-7 rounded-md bg-[#800020] border border-[#C5A059] flex items-center justify-center text-white font-serif font-bold text-xs shadow-xs">
                        B
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[14px] font-serif font-bold text-[#800020] leading-none">
                            Birla
                        </span>
                        <span className="text-[8px] font-sans font-bold tracking-[0.2em] text-neutral-800 uppercase">
                            Estates
                        </span>
                    </div>
                </div>
            );

        case "k-raheja-corp":
            return (
                <div className={`flex flex-col items-center text-center ${className}`}>
                    <svg className="w-7 h-7 text-[#0066B2] mb-0.5" viewBox="0 0 32 32" fill="none">
                        <path d="M16 3L3 27H29L16 3Z" stroke="#0066B2" strokeWidth="2.5" fill="#0066B2" fillOpacity="0.1" />
                        <line x1="16" y1="10" x2="16" y2="27" stroke="#0066B2" strokeWidth="2" />
                    </svg>
                    <span className="text-[9px] font-sans font-black tracking-[0.2em] text-[#0066B2] uppercase">
                        K RAHEJA CORP
                    </span>
                </div>
            );

        case "kalpataru":
            return (
                <div className={`flex items-center gap-2 ${className}`}>
                    <div className="w-6 h-6 rounded-xs bg-[#008080] flex items-center justify-center text-white shadow-xs">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L7 10H17L12 2Z" fill="currentColor" />
                            <path d="M12 8L6 18H18L12 8Z" fill="currentColor" />
                            <line x1="12" y1="18" x2="12" y2="23" strokeWidth="3" />
                        </svg>
                    </div>
                    <span className="text-[12px] font-sans font-extrabold tracking-[0.2em] text-neutral-800">
                        KALPA-TARU
                    </span>
                </div>
            );

        case "piramal-realty":
            return (
                <div className={`flex items-center gap-2 ${className}`}>
                    <svg className="w-6 h-6 text-[#E85D04]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C12 2 19 8 19 14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14C5 8 12 2 12 2Z" fillOpacity="0.8" />
                        <path d="M12 8C12 8 15 11 15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 11 12 8 12 8Z" fill="#FAF7F2" />
                    </svg>
                    <div className="flex flex-col text-left">
                        <span className="text-[14px] font-sans font-bold text-neutral-900 leading-none">
                            Piramal
                        </span>
                        <span className="text-[9px] font-sans font-medium text-[#E85D04] tracking-wider">
                            Realty
                        </span>
                    </div>
                </div>
            );

        case "house-of-hiranandani":
            return (
                <div className={`flex items-center gap-2 ${className}`}>
                    <svg className="w-6 h-6 text-[#A67C52]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <line x1="12" y1="3" x2="12" y2="21" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <circle cx="12" cy="12" r="3" fill="#A67C52" />
                    </svg>
                    <div className="flex flex-col text-left">
                        <span className="text-[8px] font-sans font-bold tracking-[0.25em] text-[#A67C52] uppercase">
                            HOUSE OF
                        </span>
                        <span className="text-[11px] font-serif font-black tracking-widest text-neutral-900">
                            HIRANANDANI
                        </span>
                    </div>
                </div>
            );

        case "mahindra-lifespaces":
            return (
                <div className={`flex flex-col items-center text-center ${className}`}>
                    <span className="text-[17px] font-sans font-black text-[#D71920] tracking-tight leading-none">
                        mahindra
                    </span>
                    <span className="text-[7.5px] font-sans font-black tracking-[0.35em] text-neutral-800 uppercase mt-0.5">
                        LIFESPACES
                    </span>
                </div>
            );

        case "rustomjee":
            return (
                <div className={`flex items-center justify-center ${className}`}>
                    <span className="text-[19px] font-serif font-black italic tracking-wide text-neutral-900">
                        Rustomjee
                    </span>
                </div>
            );

        case "shapoorji-pallonji":
            return (
                <div className={`flex items-center gap-2 text-left ${className}`}>
                    <div className="w-6 h-6 bg-[#004B87] rounded-xs flex items-center justify-center text-white text-[10px] font-black">
                        SP
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[12px] font-sans font-bold text-[#004B87] leading-none">
                            Shapoorji Pallonji
                        </span>
                        <span className="text-[7px] font-sans font-semibold tracking-wider text-neutral-500 uppercase mt-0.5">
                            Real Estate
                        </span>
                    </div>
                </div>
            );

        case "sattva":
            return (
                <div className={`flex items-center gap-2 text-left ${className}`}>
                    <div className="flex items-end gap-[2px] h-6">
                        <div className="w-1 h-3 bg-[#E53935] rounded-xs" />
                        <div className="w-1 h-4 bg-[#FB8C00] rounded-xs" />
                        <div className="w-1 h-5 bg-[#FDD835] rounded-xs" />
                        <div className="w-1 h-6 bg-[#43A047] rounded-xs" />
                        <div className="w-1 h-7 bg-[#1E88E5] rounded-xs" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[14px] font-sans font-black text-[#1E3A8A] tracking-[0.1em] leading-none">
                            SATTVA
                        </span>
                        <span className="text-[5.5px] font-sans font-black tracking-widest text-neutral-600 uppercase mt-0.5">
                            TRUST. IT'S WHAT WE BUILD.
                        </span>
                    </div>
                </div>
            );

        case "crest":
            return (
                <div className={`flex items-center gap-2 ${className}`}>
                    <svg className="w-6 h-6 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 12L12 22L22 12L12 2Z" />
                        <path d="M12 6L6 12L12 18L18 12L12 6Z" fill="currentColor" fillOpacity="0.2" />
                    </svg>
                    <span className="text-[15px] font-sans font-black tracking-[0.2em] text-neutral-900">
                        CREST<span className="text-[8px] align-super">®</span>
                    </span>
                </div>
            );

        case "kolte-patil":
            return (
                <div className={`flex items-center gap-2 text-left ${className}`}>
                    <div className="w-7 h-7 rounded-full bg-[#FFD100] border border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A]">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="8" fillOpacity="0.3" />
                            <path d="M12 5V19M5 12H19" stroke="#1A1A1A" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[12px] font-sans font-black text-neutral-900 leading-none">
                            KOLTE PATIL
                        </span>
                        <span className="text-[6.5px] italic text-neutral-600 font-serif">
                            Creation, not Construction
                        </span>
                    </div>
                </div>
            );

        case "ajmera":
            return (
                <div className={`flex items-center gap-2 text-left ${className}`}>
                    <div className="w-7 h-7 rounded-full bg-[#C8102E] flex items-center justify-center text-white border-2 border-white shadow-xs">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[13px] font-sans font-black text-[#C8102E] tracking-wider leading-none">
                            AJMERA
                        </span>
                        <span className="text-[6.5px] font-sans font-bold text-neutral-600 uppercase tracking-widest mt-0.5">
                            Built on Trust
                        </span>
                    </div>
                </div>
            );

        case "hiranandani":
            return (
                <div className={`flex items-center gap-2 text-left ${className}`}>
                    <div className="w-6 h-6 flex flex-col justify-center items-center text-[#0B3954]">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2 8L6 4L10 8L6 12L2 8Z" />
                            <path d="M14 6L18 2L22 6L18 10L14 6Z" />
                            <rect x="7" y="10" width="10" height="12" fillOpacity="0.4" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[13px] font-serif font-black text-[#0B3954] leading-none">
                            Hiranandani
                        </span>
                        <span className="text-[6px] italic text-neutral-500 font-sans">
                            creating better communities
                        </span>
                    </div>
                </div>
            );

        case "sobha":
            return (
                <div className={`flex items-center gap-2 ${className}`}>
                    <div className="w-6 h-6 bg-[#C5A059] flex items-center justify-center text-neutral-900 font-mono font-black text-xs">
                        |||
                    </div>
                    <span className="text-[14px] font-sans font-black tracking-[0.25em] text-neutral-900">
                        SOBHA
                    </span>
                </div>
            );

        case "raymond-realty":
            return (
                <div className={`flex items-center gap-1.5 px-3 py-1 bg-[#D32F2F] text-white rounded-md shadow-xs ${className}`}>
                    <span className="text-[11px] font-serif italic font-bold">raymond</span>
                    <span className="text-white/60">|</span>
                    <span className="text-[9px] font-sans font-black tracking-widest uppercase">REALTY</span>
                </div>
            );

        case "oberoi-realty":
            return (
                <div className={`flex flex-col items-center text-center ${className}`}>
                    <svg className="w-6 h-6 text-[#E65100] mb-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 12C9 7 4 7 4 12C4 17 9 17 12 12ZM12 12C15 7 20 7 20 12C20 17 15 17 12 12Z" />
                    </svg>
                    <span className="text-[12px] font-sans font-black tracking-[0.18em] text-[#1A1A1A]">
                        OBEROI REALTY
                    </span>
                </div>
            );

        case "puravankara":
            return (
                <div className={`flex items-center justify-center ${className}`}>
                    <span className="text-[14px] font-sans font-black tracking-[0.15em] text-[#002D62]">
                        PURAVANKARA<span className="text-[8px] align-super">®</span>
                    </span>
                </div>
            );

        case "the-wadhwa-group":
            return (
                <div className={`flex items-center gap-2 text-left ${className}`}>
                    <svg className="w-6 h-6 text-[#3F51B5]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 5L8 19L12 9L16 19L21 5H17L14 14L12 8L10 14L7 5H3Z" />
                    </svg>
                    <span className="text-[12px] font-serif font-bold text-neutral-900 tracking-tight">
                        The Wadhwa Group
                    </span>
                </div>
            );

        case "safal-group":
            return (
                <div className={`flex items-center gap-2 text-left ${className}`}>
                    <div className="w-7 h-7 relative flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-2 border-[#009688] border-dashed" />
                        <div className="w-4 h-4 rounded-full bg-[#FF7043]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[13px] font-sans font-extrabold text-[#009688] leading-none">
                            Safal
                        </span>
                        <span className="text-[8px] font-sans font-bold text-[#FF7043] uppercase tracking-wider">
                            Group
                        </span>
                    </div>
                </div>
            );

        case "spenta":
            return (
                <div className={`flex items-center gap-2 ${className}`}>
                    <div className="grid grid-cols-3 gap-0.5 w-5 h-5">
                        <div className="bg-[#FFB300] rounded-xs" />
                        <div className="bg-[#FFB300] rounded-xs" />
                        <div className="bg-transparent" />
                        <div className="bg-[#FFB300] rounded-xs" />
                        <div className="bg-[#FFB300] rounded-xs" />
                        <div className="bg-[#FFB300] rounded-xs" />
                    </div>
                    <span className="text-[15px] font-sans font-black tracking-[0.2em] text-neutral-900">
                        SPENTA
                    </span>
                </div>
            );

        case "runwal":
            return (
                <div className={`flex items-center gap-2 text-left ${className}`}>
                    <div className="w-6 h-6 border-2 border-[#B8860B] rounded-xs flex items-center justify-center text-[#B8860B] font-serif font-black text-xs">
                        R
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[12px] font-serif font-black tracking-[0.2em] text-[#1A1A1A] leading-none">
                            RUNWAL
                        </span>
                        <span className="text-[6.5px] italic text-[#B8860B] font-serif">
                            Since 1978 • With you always
                        </span>
                    </div>
                </div>
            );

        case "dosti":
            return (
                <div className={`flex flex-col items-center text-center ${className}`}>
                    <span className="text-[16px] font-serif font-black tracking-widest text-[#B71C1C] leading-none">
                        D<span className="text-[#C5A059]">O</span>STI
                    </span>
                    <span className="text-[6px] font-sans font-bold tracking-[0.3em] text-neutral-600 uppercase mt-0.5">
                        FRIENDS FOR LIFE
                    </span>
                </div>
            );

        case "supreme":
            return (
                <div className={`px-2.5 py-1 bg-neutral-100 border border-neutral-300 rounded-xs ${className}`}>
                    <span className="text-[13px] font-sans font-black tracking-[0.25em] text-neutral-800 uppercase">
                        SUPREME
                    </span>
                </div>
            );

        case "runwal-enterprises":
            return (
                <div className={`flex items-center gap-2 text-left ${className}`}>
                    <div className="w-6 h-6 bg-[#8B6508] text-white flex items-center justify-center font-serif font-black text-xs rounded-xs shadow-xs">
                        R
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-serif font-bold text-neutral-900 tracking-wider leading-none">
                            RUNWAL ENTERPRISES
                        </span>
                        <span className="text-[6px] font-sans font-semibold tracking-wider text-[#8B6508] uppercase mt-0.5">
                            A SUBHASH RUNWAL GROUP
                        </span>
                    </div>
                </div>
            );

        default:
            return (
                <div className={`text-center font-serif font-bold text-neutral-800 ${className}`}>
                    {name}
                </div>
            );
    }
};

export default DeveloperLogo;
