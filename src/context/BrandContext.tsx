"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { BrandConfig } from "../types/brand";
import { brands } from "../data/brands";
import { useTheme } from "./ThemeContext";

interface BrandContextType {
    activeBrand: BrandConfig;
    setBrand: (id: string) => void;
    availableBrands: BrandConfig[];
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ children }: { children: React.ReactNode }) {
    const [activeBrand, setActiveBrand] = useState<BrandConfig>(brands[0]);
    const { theme } = useTheme();

    useEffect(() => {
        const savedBrandId = localStorage.getItem("activeBrandId");
        if (savedBrandId) {
            const brand = brands.find((b) => b.id === savedBrandId);
            if (brand) setActiveBrand(brand);
        }
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        const colors = theme === "dark" ? activeBrand.colors.dark : activeBrand.colors.light;

        root.style.setProperty("--primary", colors.primary);
        root.style.setProperty("--accent", colors.accent);
        root.style.setProperty("--secondary", colors.secondary);
        root.style.setProperty("--gold", colors.gold);
        root.style.setProperty("--background", colors.background);
        root.style.setProperty("--foreground", colors.foreground);

        // Explicitly update font variables
        root.style.setProperty("--font-serif", activeBrand.fonts.serif);
        root.style.setProperty("--font-sans", activeBrand.fonts.sans);

        localStorage.setItem("activeBrandId", activeBrand.id);
    }, [activeBrand, theme]);

    const setBrand = (id: string) => {
        const brand = brands.find((b) => b.id === id);
        if (brand) setActiveBrand(brand);
    };

    return (
        <BrandContext.Provider value={{ activeBrand, setBrand, availableBrands: brands }}>
            {children}
        </BrandContext.Provider>
    );
}

export function useBrand() {
    const context = useContext(BrandContext);
    if (context === undefined) {
        throw new Error("useBrand must be used within a BrandProvider");
    }
    return context;
}
