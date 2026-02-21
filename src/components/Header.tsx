"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Landmark } from "lucide-react";

export function Header() {
  const { theme, toggleTheme, japanMode, toggleJapanMode } = useTheme();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0 rounded-none">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#"
          className="text-xl font-bold tracking-wider hover:text-[var(--accent-primary)] transition-colors"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {japanMode ? "オーガスファンクラブ" : "AUGUSTIN FANCLUB"}
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("lore")} className="hover:text-[var(--accent-primary)] transition-colors">
            {japanMode ? "伝説" : "Lore"}
          </button>
          <button onClick={() => scrollTo("skills")} className="hover:text-[var(--accent-primary)] transition-colors">
            {japanMode ? "技" : "Skills"}
          </button>
          <button onClick={() => scrollTo("oath")} className="hover:text-[var(--accent-primary)] transition-colors">
            {japanMode ? "誓い" : "Oath"}
          </button>
          <button onClick={() => scrollTo("hymn")} className="hover:text-[var(--accent-primary)] transition-colors">
            {japanMode ? "賛歌" : "Hymn"}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleJapanMode}
            className="p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
            aria-label="Toggle Japan mode"
            title={japanMode ? "Exit Japan Mode" : "Enter Japan Mode"}
          >
            <Landmark size={20} className={japanMode ? "text-[var(--accent-tertiary)]" : ""} />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
