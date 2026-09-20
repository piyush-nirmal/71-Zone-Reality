import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxWindowProps {
    src?: string;
    videoUrl?: string;
    alt?: string;
    className?: string;
    aspectRatio?: string;
    inset?: string;
}

const ParallaxWindow = ({
    src,
    videoUrl,
    alt = "Architectural Detail",
    className = "",
    aspectRatio = "aspect-video",
    inset = "border-[20px]"
}: ParallaxWindowProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
    const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

    return (
        <div
            ref={ref}
            className={`relative overflow-hidden bg-surface/50 ${aspectRatio} ${className} border border-divider/5`}
        >
            {/* Direct Image Rendering for Maximum Reliability */}
            <motion.div
                style={{ y: smoothY, scale: 1.1 }}
                className="absolute inset-0 w-full h-full z-0"
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover transition-all duration-700 ease-out"
                    loading="eager"
                    onError={(e) => {
                        console.error("Image failed to load:", src);
                        // If it's a local path and fails, try prepending base path if needed (though usually not for public)
                    }}
                />

                {videoUrl && (
                    <video
                        autoPlay loop muted playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    >
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                )}
            </motion.div>

            {/* The Architectural Frame - Simplifed to ensure it doesn't block content */}
            <div className={`absolute inset-0 z-20 pointer-events-none border-solid border-background ${inset} transition-all duration-1000`}></div>

            {/* Subtle light play/overlay */}
            <div className="absolute inset-0 bg-heading/5 z-10 pointer-events-none duration-1000"></div>
        </div>
    );
};

export default ParallaxWindow;
