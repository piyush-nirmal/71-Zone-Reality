import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const variants = {
            primary: "bg-heading text-background hover:bg-accent border border-heading font-medium transition-colors",
            secondary: "bg-accent text-background hover:bg-heading border border-accent transition-all font-medium",
            outline: "bg-transparent text-heading border border-divider hover:border-accent hover:text-accent font-medium",
            ghost: "bg-transparent text-heading hover:bg-surface font-medium",
        };

        const sizes = {
            sm: "px-6 py-2 text-[10px] tracking-[0.2em] uppercase",
            md: "px-10 py-4 text-xs tracking-[0.3em] uppercase",
            lg: "px-14 py-6 text-sm tracking-[0.4em] uppercase",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center transition-all duration-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export default Button;
