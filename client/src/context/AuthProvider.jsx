import { useState, useEffect } from "react";
import { AuthContext } from "./authContext";
import { getMe } from "../services/api";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }
        getMe()
            .then((me) => setUser(me))
            .catch(() => {
                localStorage.removeItem("token");
                setUser(null);
            })
            .finally(() => setLoading(false));
    }, []);

    const login = async (token) => {
        localStorage.setItem("token", token);
        setLoading(true);
        try {
            const me = await getMe();
            setUser(me);
        } catch {
            localStorage.removeItem("token");
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}