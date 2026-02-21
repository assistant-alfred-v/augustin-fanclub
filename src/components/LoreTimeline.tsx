"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { timelineEntries } from "@/data/lore";
import { useTheme } from "./ThemeProvider";

export function LoreTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { japanMode } = useTheme();

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "border-[var(--text-secondary)]";
      case "rare": return "border-[var(--accent-secondary)]";
      case "legendary": return "border-[var(--gold)]";
      case "mythic": return "border-[var(--accent-tertiary)]";
      default: return "border-[var(--text-secondary)]";
    }
  };

  return (
    <section id="lore" className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {japanMode ? "伝説のSaga" : "Augustin's Saga"}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-[var(--text-secondary)] mb-12"
        >
          {japanMode ? "英雄の物語を時系列で読む" : "Chronicle of a legend in chronological order"}
        </motion.p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)]" />

          {timelineEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1 ml-12 md:ml-0 md:w-5/12" />
              
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--accent-primary)] shadow-lg shadow-[var(--accent-primary)]/50 z-10" />
              
              <div className="flex-1 ml-12 md:ml-0 md:w-5/12">
                <button
                  onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
                  className={`w-full text-left glass-card p-6 hover:scale-[1.02] transition-transform ${getRarityColor(entry.rarity)} border-l-4`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{entry.icon}</span>
                    <span className="text-sm font-mono text-[var(--accent-secondary)]">{entry.year}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--bg-tertiary)] capitalize">
                      {entry.rarity}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                    {japanMode ? getJapaneseTitle(entry.title) : entry.title}
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    {japanMode ? getJapaneseDescription(entry.description) : entry.description}
                  </p>
                  
                  <AnimatePresence>
                    {expandedId === entry.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 pt-4 border-t border-[var(--card-border)] text-[var(--text-secondary)]">
                          {japanMode ? getJapaneseDetails(entry.details) : entry.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <ChevronDown 
                    className={`w-5 h-5 mt-3 text-[var(--text-secondary)] transition-transform ${expandedId === entry.id ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getJapaneseTitle(title: string): string {
  const titles: Record<string, string> = {
    "The Awakening": "覚醒",
    "The Cairo Convergence": "カairo結集",
    "The Japan Pilgrimage": "日本の巡礼",
    "ZK Mastery": "ZKの極意",
    "The Piano Ascension": "ピアノ昇華",
    "The Anaconda Emerges": "アナコンダ出現",
    "The Paradigm": "パラダイム"
  };
  return titles[title] || title;
}

function getJapaneseDescription(desc: string): string {
  const descs: Record<string, string> = {
    "Augustin discovers the arcane arts of Rust": "Augustin、Rustの魔法を学ぶ",
    "First contact with StarkNet - a paradigm shift": "StarkNetとの最初の出会い - パラダイムシフト",
    "A sacred journey to the homeland": "聖地への旅",
    "Ascends to the rank of ZK Sage": "ZKの賢者に昇格",
    "Music and code become one": "音楽とコードが一つになる",
    "L'anaconda des Charentes awakens": "シャラントのアナコンダが目を覚ます",
    "Transcendence to a new paradigm": "新しいパラダイムへの昇華"
  };
  return descs[desc] || desc;
}

function getJapaneseDetails(details: string): string {
  const detailsMap: Record<string, string> = {
    "In the depths of the Charentes, a young warrior stumbled upon the Rust programming language. The borrow checker spoke to him in whispers, revealing the secrets of memory safety. He emerged not as a mere developer, but as a Rustacean of unparalleled devotion.": "シャラントの深みで、若き戦士はRustというプログラミング言語を発見した。ボローチェッカーは彼に囁き、メモリ安全の秘密を明かした。",
    "The wolves of StarkNet howled in the digital void, and Augustin answered. He realized that the future of scalability lay in STARKs. He began his journey into Cairo, the ancient tongue of zero-knowledge proofs.": "StarkNetの狼たちがデジタル空虜で吠え、Augustinは応えた。彼はスケーラビリティの未来はSTARKsにあると気づいた。",
    "Augustin traveled across the Pacific to the land of the rising sun. He studied under the masters of Tokyo, learning not just code, but the zen of software craftsmanship. He returned with a deeper understanding and an inexplicable love for Japanese culture.": "Augustinは太平洋を渡り、日の昇る国へ旅立った。东京の師匠の下で学び、コードだけでなくソフトウェアクラフトマンシップの禅を学んだ。",
    "Through countless nights of cryptographic study, Augustin mastered the arts of zero-knowledge proofs. His ceremonies become legendary - each proof a meditation, each verification a prayer. He now walks between the worlds of public and private computation.": "数えきれない暗号学の研究の夜を通じて、Augustinはゼロ知識証明の技術を習得した。",
    "In between commits, Augustin discovered the piano. His fingers dance across keys like they dance across code. The melodies he creates are said to compile into the most elegant smart contracts. He now composes symphonies in both MIDI and Cairo.": "コミットの合間に、Augustinはピアノを発見した。指は鍵盤の上を踊る。",
    "From the marshes of Charentes, the legend grew. They began to call him 'L'anaconda' - the Anaconda of Charentes. Like his namesake, he is patient, powerful, and strikes without warning. His code squeezes efficiency from every block.": "シャラントの湿原から伝説が生まれた。「アナコンダ」と呼ばれるようになった。",
    "Augustin no longer writes code - he manifests it. The boundaries between developer and creation blur. He has become the Paradigm itself, a living embodiment of the Quintessential Paradigm. The community watches in awe.": "Augustinはコードを書いていない - 彼はそれを実現する。開発者と創造物の境界がぼやける。"
  };
  return detailsMap[details] || details;
}
