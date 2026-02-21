"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Share2, Music } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const hymnTemplates = {
  rap: [
    ["Yo, Augustin's in the building, code's compiling", "Stackin' blocks like he's lifting, never been declining", "Cairo burning bright, zero-knowledge glowing", "From the Charentes he came, blockchain he's owning"],
    ["Rust up in this hizzy, memory safe and tight", "ZK proofs so crazy, verifying through the night", "Anaconda coiled up, waiting for the strike", "Paradigm shift incoming, watch him light the mic"],
    ["Frontend game too clean, animations on point", "Japan dreams, piano streams, he's appoint", "Smart contract guard, security on lock", "Augustin's the goat, that's the bottom line, clock"]
  ],
  epic: [
    ["From the marshes of Charentes rose a warrior supreme", "His Cairo incantations summoned protocols from the dream", "Zero-knowledge master, truth without revealing", "In the blockchain kingdom, his name sends followers kneeling"],
    ["The Anaconda awakens, scales of code so bright", "StarkNet wolves companion, burning through the night", "Rust and Cairo flowing, like a digital tide", "Augustin stands victorious, legend multiplied"],
    ["Piano keys as weapons, melodies as spells", "In Japan he found his spirit, in code his heaven dwells", "The Paradigm has spoken, the Quintessential one", "Augustin's saga echoes till the final block is done"]
  ],
  haiku: [
    ["Cairo speaks in proofs / Zero-knowledge reveals truth / Augustin's whisper"],
    ["Anaconda coils / Waiting in the marshes / STARK wolves howl low"],
    ["Piano plays on / Code compiles in rhythm / Zen in every line"],
    ["Japan calls him home / Cherry blossoms witness / The master evolves"],
    ["Paradigm shifts / Quintessential emerges / Legend never dies"]
  ]
};

type HymnStyle = "rap" | "epic" | "haiku";

export function HymnGenerator() {
  const [hymn, setHymn] = useState<string[]>([]);
  const [style, setStyle] = useState<HymnStyle>("rap");
  const [copied, setCopied] = useState(false);
  const { japanMode } = useTheme();

  const generateHymn = () => {
    const templates = hymnTemplates[style];
    const randomIndex = Math.floor(Math.random() * templates.length);
    setHymn(templates[randomIndex]);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hymn.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Augustin's Fanclub Hymn",
          text: hymn.join("\n"),
        });
      } catch {
        console.log("Share cancelled");
      }
    } else {
      handleCopy();
    }
  };

  return (
    <section id="hymn" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {japanMode ? "賛歌 generator" : "Hymn Generator"}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-[var(--text-secondary)] mb-12"
        >
          {japanMode ? "英雄への颂歌を生成する" : "Generate an original hymn in honor of the legend"}
        </motion.p>

        <div className="glass-card p-8">
          <div className="flex flex-wrap gap-3 mb-6 justify-center">
            <button
              onClick={() => { setStyle("rap"); setHymn([]); }}
              className={`px-4 py-2 rounded-full transition-all ${
                style === "rap" 
                  ? "bg-[var(--accent-primary)] text-white" 
                  : "bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)] hover:text-white"
              }`}
            >
              {japanMode ? "ラップ" : "Rap"}
            </button>
            <button
              onClick={() => { setStyle("epic"); setHymn([]); }}
              className={`px-4 py-2 rounded-full transition-all ${
                style === "epic" 
                  ? "bg-[var(--accent-primary)] text-white" 
                  : "bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)] hover:text-white"
              }`}
            >
              {japanMode ? "叙事詩" : "Epic"}
            </button>
            <button
              onClick={() => { setStyle("haiku"); setHymn([]); }}
              className={`px-4 py-2 rounded-full transition-all ${
                style === "haiku" 
                  ? "bg-[var(--accent-primary)] text-white" 
                  : "bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)] hover:text-white"
              }`}
            >
              {japanMode ? "俳句" : "Haiku"}
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={generateHymn}
            className="w-full py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white rounded-lg font-semibold flex items-center justify-center gap-2 mb-6 hover:shadow-lg transition-shadow"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <Music className="w-5 h-5" />
            {japanMode ? "賛歌を生成" : "Generate Hymn"}
          </motion.button>

          {hymn.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              {hymn.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-center ${
                    style === "haiku" 
                      ? "text-lg font-medium" 
                      : "text-base"
                  }`}
                >
                  {line}
                </motion.p>
              ))}

              <div className="flex gap-3 justify-center mt-6 pt-6 border-t border-[var(--card-border)]">
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all flex items-center gap-2"
                >
                  {copied ? "✓ Copied" : <><Copy className="w-4 h-4" /> {japanMode ? "コピー" : "Copy"}</>}
                </button>
                <button
                  onClick={handleShare}
                  className="px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  {japanMode ? "シェア" : "Share"}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
