"use client";

import { useTheme } from "./ThemeProvider";
import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  const { japanMode } = useTheme();

  return (
    <footer className="py-12 px-6 border-t border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-[var(--accent-tertiary)]" />
          <Sparkles className="w-5 h-5 text-[var(--accent-secondary)]" />
        </div>
        
        <p className="text-[var(--text-secondary)] mb-4">
          {japanMode 
            ? "オーガスティン・ファンクラブ — 伝説は続く" 
            : "Augustin Fanclub — The legend continues"}
        </p>
        
        <p className="text-xs text-[var(--text-secondary)]">
          {japanMode 
            ? "© 2025 すべての権利留保 — パラダイム・インク" 
            : "© 2025 All rights reserved — Paradigm Industries"}
        </p>
        
        <p className="text-xs text-[var(--text-secondary)] mt-2 mono">
          {japanMode 
            ? " Made with ⚡ & 🐍" 
            : "Made with ⚡, 🐍 & 🎹"}
        </p>
      </div>
    </footer>
  );
}
