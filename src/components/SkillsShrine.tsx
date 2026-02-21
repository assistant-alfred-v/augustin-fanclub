"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/lore";
import { useTheme } from "./ThemeProvider";

function PowerMeter({ level }: { level: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-[var(--text-secondary)]">
        <span>Power Level</span>
        <span className="mono">{level}%</span>
      </div>
      <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary))`
          }}
        />
      </div>
    </div>
  );
}

export function SkillsShrine() {
  const { japanMode } = useTheme();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {japanMode ? "技の shrine" : "Skills Shrine"}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-[var(--text-secondary)] mb-12"
        >
          {japanMode ? "彼の能力を観察せよ" : "Witness the powers of the master"}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {skill.name}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                {japanMode ? getJapaneseSkillDescription(skill.id) : skill.description}
              </p>
              <PowerMeter level={skill.powerLevel} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getJapaneseSkillDescription(skillId: string): string {
  const descriptions: Record<string, string> = {
    cairo: "STARKsの古代言語。彼は流暢に話す。",
    rust: "メモリの安全性。ボローチェッカーが敬意を払う。",
    zk: "ゼロ知識の達人。知らずに知る。",
    frontend: "詩のようにReactを書く。囁くアニメーション。",
    security: "スマートコントラクト監査者。再エントラシーは逃れない。",
    learning: "不可能な速度で学ぶ。常にレベルアップ。",
    piano: "88の鍵、無限の可能性。コードは音楽、音楽はコード。",
    blockchain: "分散型ランドスケープの深い理解。"
  };
  return descriptions[skillId] || "";
}
