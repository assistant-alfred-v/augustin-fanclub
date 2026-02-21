"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  japanMode: boolean;
  toggleJapanMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getTheme = () => {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("theme") as Theme) || "dark";
};

const getJapanMode = () => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("japanMode") === "true";
};

function useStore<T>(selector: () => T, subscribe: (callback: () => void) => () => void) {
  return useSyncExternalStore(subscribe, selector, selector);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useStore(
    () => getTheme(),
    (callback) => {
      window.addEventListener("storage", callback);
      return () => window.removeEventListener("storage", callback);
    }
  );
  
  const japanMode = useStore(
    () => getJapanMode(),
    (callback) => {
      window.addEventListener("storage", callback);
      return () => window.removeEventListener("storage", callback);
    }
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-japan", String(japanMode));
  }, [theme, japanMode]);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event("storage"));
  };

  const toggleJapanMode = () => {
    const newMode = !japanMode;
    localStorage.setItem("japanMode", String(newMode));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, japanMode, toggleJapanMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
