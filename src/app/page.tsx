"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { LoreTimeline } from "@/components/LoreTimeline";
import { SkillsShrine } from "@/components/SkillsShrine";
import { FanclubOath } from "@/components/FanclubOath";
import { HymnGenerator } from "@/components/HymnGenerator";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [easterEggMessage, setEasterEggMessage] = useState("");

  useEffect(() => {
    const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let keyIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[keyIndex]) {
        keyIndex++;
        if (keyIndex === konamiCode.length) {
          const messages = [
            "🎭 Maître du Monde! You've unlocked the secret...",
            "✨ Paradigme de la Quintessence! The ultimate truth revealed!",
            "🐍 The Anaconda acknowledges your dedication!",
            "⚡ Augustin's blessing upon you!",
            "🗾 Japan mode forever!"
          ];
          const randomMessage = messages[Math.floor(Math.random() * messages.length)];
          setEasterEggMessage(randomMessage);
          setShowEasterEgg(true);
          setTimeout(() => setShowEasterEgg(false), 4000);
          keyIndex = 0;
        }
      } else {
        keyIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen gradient-bg noise-overlay">
      {showEasterEgg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 animate-pulse">
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold text-[var(--gold)] glow-text" style={{ fontFamily: "var(--font-orbitron)" }}>
              {easterEggMessage}
            </p>
          </div>
        </div>
      )}
      
      <Hero />
      <LoreTimeline />
      <SkillsShrine />
      <FanclubOath />
      <HymnGenerator />
      <Footer />
    </main>
  );
}
