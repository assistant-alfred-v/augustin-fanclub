"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Sparkles, Copy, Check } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface FanMember {
  id: string;
  name: string;
  pledge: string;
  joinedAt: string;
}

const getFanMember = (): FanMember | null => {
  if (typeof window === "undefined") return null;
  const saved = localStorage.getItem("augustinFanMember");
  return saved ? JSON.parse(saved) : null;
};

function useStore<T>(selector: () => T, subscribe: (callback: () => void) => () => void) {
  return useSyncExternalStore(subscribe, selector, selector);
}

export function FanclubOath() {
  const [name, setName] = useState("");
  const [pledge, setPledge] = useState("");
  const [copied, setCopied] = useState(false);
  const { japanMode } = useTheme();

  const fanMember = useStore(
    () => getFanMember(),
    (callback) => {
      window.addEventListener("storage", callback);
      return () => window.removeEventListener("storage", callback);
    }
  );

  const generateId = () => {
    return "AF-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !pledge.trim()) return;

    const newMember: FanMember = {
      id: generateId(),
      name: name.trim(),
      pledge: pledge.trim(),
      joinedAt: new Date().toISOString()
    };

    localStorage.setItem("augustinFanMember", JSON.stringify(newMember));
    window.dispatchEvent(new Event("storage"));
    setName("");
    setPledge("");
  };

  const handleCopy = () => {
    if (!fanMember) return;
    const text = `🎭 Augustin's Fanclub ID 🎭\n\nName: ${fanMember.name}\nID: ${fanMember.id}\nPledge: &quot;${fanMember.pledge}&quot;\n\nJoined: ${new Date(fanMember.joinedAt).toLocaleDateString()}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => {
    localStorage.removeItem("augustinFanMember");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <section id="oath" className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {japanMode ? "誓いの式" : "Fanclub Oath"}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-[var(--text-secondary)] mb-12"
        >
          {japanMode ? "忠誠を誓え" : "Swear your allegiance to the legend"}
        </motion.p>

        <AnimatePresence mode="wait">
          {!fanMember ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="glass-card p-8 max-w-xl mx-auto"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {japanMode ? "あなたの名前" : "Your Name"}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={japanMode ? "名前を入力" : "Enter your name"}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--card-border)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="pledge" className="block text-sm font-medium mb-2">
                    {japanMode ? "誓いの言葉" : "Your Pledge"}
                  </label>
                  <textarea
                    id="pledge"
                    value={pledge}
                    onChange={(e) => setPledge(e.target.value)}
                    placeholder={japanMode ? "例：私はオーガスティンの忠実な戦士となる" : "e.g., I pledge to be a faithful follower of the legend..."}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--card-border)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--accent-primary)] text-white rounded-lg font-semibold hover:bg-[var(--accent-secondary)] transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[var(--accent-primary)]/30 flex items-center justify-center gap-2"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  <Sparkles className="w-5 h-5" />
                  {japanMode ? "誓う" : "Take the Oath"}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-lg mx-auto"
            >
              <div className="glass-card p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 animated-gradient opacity-10" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--accent-primary)] flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {japanMode ? "公式メンバー" : "Official Member"}
                  </h3>
                  
                  <p className="text-[var(--accent-secondary)] mb-6" style={{ fontFamily: "var(--font-orbitron)" }}>
                    {fanMember.id}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm text-[var(--text-secondary)]">{japanMode ? "名前" : "Name"}</p>
                    <p className="text-xl font-bold">{fanMember.name}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-[var(--text-secondary)]">{japanMode ? "誓い" : "Pledge"}</p>
                    <p className="italic">&quot;{fanMember.pledge}&quot;</p>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] mb-6">
                    {japanMode ? "参加日" : "Joined"}: {new Date(fanMember.joinedAt).toLocaleDateString()}
                  </p>

                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={handleCopy}
                      className="px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all flex items-center gap-2"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? (japanMode ? "コピーした" : "Copied!") : (japanMode ? "コピー" : "Copy")}
                    </button>
                    <button
                      onClick={reset}
                      className="px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-red-500 hover:text-white transition-all"
                    >
                      {japanMode ? "リセット" : "Reset"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
