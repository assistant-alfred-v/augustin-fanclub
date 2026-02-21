"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Hero() {
  const { japanMode } = useTheme();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden gradient-bg noise-overlay pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <Sparkles className="w-8 h-8 mx-auto text-[var(--accent-secondary)] animate-pulse" />
        </motion.div>

        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight glow-text"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          <span className="animated-gradient bg-clip-text text-transparent">
            {japanMode ? "オーガスティン" : "AUGUSTIN"}
          </span>
          <br />
          <span className="text-4xl md:text-6xl lg:text-7xl">
            {japanMode ? "ファンクラブ" : "FANCLUB"}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-4"
        >
          {japanMode ? (
            <>
              ストarkNetの魔術師、Rustの戦士、ZKの賢者。<br/>
              彼はcharentesのアナコンダ —— 暗殺の⚡
            </>
          ) : (
            <>
              Web3 wizard. Cairo conjurer. ZK master.<br/>
              He is l&apos;anaconda des Charentes — the coiled one awaits ⚡
            </>
          )}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm md:text-base text-[var(--text-secondary)] mb-8"
        >
          {japanMode ? "🇯🇵 日本への愛 | 🎹 ピアノの魔法 | 🔐 ZKへの執着" : "🇯🇵 Japan lover | 🎹 Piano arc | 🔐 ZK obsessed"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("oath")}
            className="px-8 py-4 bg-[var(--accent-primary)] text-white rounded-full font-semibold hover:bg-[var(--accent-secondary)] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[var(--accent-primary)]/30"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {japanMode ? "に参加する" : "Join the Fanclub"}
          </button>
          <button
            onClick={() => scrollTo("lore")}
            className="px-8 py-4 glass-card text-[var(--text-primary)] rounded-full font-semibold hover:bg-[var(--bg-tertiary)] transition-all hover:scale-105"
          >
            {japanMode ? "伝説を読む" : "Read the Lore"}
          </button>
          <button
            onClick={() => scrollTo("hymn")}
            className="px-8 py-4 glass-card text-[var(--text-primary)] rounded-full font-semibold hover:bg-[var(--bg-tertiary)] transition-all hover:scale-105"
          >
            {japanMode ? "賛歌を生成" : "Generate a Hymn"}
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollTo("lore")}
          className="p-2 rounded-full hover:bg-[var(--bg-tertiary)] transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 text-[var(--text-secondary)] animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
