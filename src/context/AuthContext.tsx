import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (email: string, pass: string) => boolean;
    logout: () => void;
    user: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<string | null>(null);

    // Initial check (dummy persistence)
    useEffect(() => {
        const storedAuth = localStorage.getItem("is_auth_private");
        const storedUser = localStorage.getItem("auth_user");
        if (storedAuth === "true") {
            setIsAuthenticated(true);
            setUser(storedUser);
        }
    }, []);

    const login = (email: string, pass: string): boolean => {
        // Dummy credentials
        const validAdmin = email === "admin@demo.com" && pass === "admin123";
        const validUser = email === "user@demo.com" && pass === "user123";

        if (validAdmin || validUser) {
            setIsAuthenticated(true);
            setUser(email);
            localStorage.setItem("is_auth_private", "true");
            localStorage.setItem("auth_user", email);
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem("is_auth_private");
        localStorage.removeItem("auth_user");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
