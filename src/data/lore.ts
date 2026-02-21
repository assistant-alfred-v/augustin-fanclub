export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
  details: string;
  rarity: "common" | "rare" | "legendary" | "mythic";
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "1",
    year: "2019",
    title: "The Awakening",
    description: "Augustin discovers the arcane arts of Rust",
    icon: "⚔️",
    details: "In the depths of the Charentes, a young warrior stumbled upon the Rust programming language. The borrow checker spoke to him in whispers, revealing the secrets of memory safety. He emerged not as a mere developer, but as a Rustacean of unparalleled devotion.",
    rarity: "rare"
  },
  {
    id: "2",
    year: "2020",
    title: "The Cairo Convergence",
    description: "First contact with StarkNet - a paradigm shift",
    icon: "🐺",
    details: "The wolves of StarkNet howled in the digital void, and Augustin answered. He realized that the future of scalability lay in STARKs. He began his journey into Cairo, the ancient tongue of zero-knowledge proofs.",
    rarity: "legendary"
  },
  {
    id: "3",
    year: "2021",
    title: "The Japan Pilgrimage",
    description: "A sacred journey to the homeland",
    icon: "🗾",
    details: "Augustin traveled across the Pacific to the land of the rising sun. He studied under the masters of Tokyo, learning not just code, but the zen of software craftsmanship. He returned with a deeper understanding and an inexplicable love for Japanese culture.",
    rarity: "rare"
  },
  {
    id: "4",
    year: "2022",
    title: "ZK Mastery",
    description: "Ascends to the rank of ZK Sage",
    icon: "🔐",
    details: "Through countless nights of cryptographic study, Augustin mastered the arts of zero-knowledge proofs. His ceremonies became legendary - each proof a meditation, each verification a prayer. He now walks between the worlds of public and private computation.",
    rarity: "legendary"
  },
  {
    id: "5",
    year: "2023",
    title: "The Piano Ascension",
    description: "Music and code become one",
    icon: "🎹",
    details: "In between commits, Augustin discovered the piano. His fingers dance across keys like they dance across code. The melodies he creates are said to compile into the most elegant smart contracts. He now composes symphonies in both MIDI and Cairo.",
    rarity: "mythic"
  },
  {
    id: "6",
    year: "2024",
    title: "The Anaconda Emerges",
    description: "L'anaconda des Charentes awakens",
    icon: "🐍",
    details: "From the marshes of Charentes, the legend grew. They began to call him 'L'anaconda' - the Anaconda of Charentes. Like his namesake, he is patient, powerful, and strikes without warning. His code squeezes efficiency from every block.",
    rarity: "mythic"
  },
  {
    id: "7",
    year: "2025",
    title: "The Paradigm",
    description: "Transcendence to a new paradigm",
    icon: "✨",
    details: "Augustin no longer writes code - he manifests it. The boundaries between developer and creation blur. He has become the Paradigm itself, a living embodiment of the Quintessential Paradigm. The community watches in awe.",
    rarity: "mythic"
  }
];

export const skills = [
  {
    id: "cairo",
    name: "Cairo",
    description: "The ancient tongue of STARKs. Augustin speaks it fluently.",
    powerLevel: 98,
    icon: "🏛️",
    category: "blockchain"
  },
  {
    id: "rust",
    name: "Rust",
    description: "Memory safety through sheer willpower. The borrow checker bows.",
    powerLevel: 95,
    icon: "🦀",
    category: "backend"
  },
  {
    id: "zk",
    name: "ZK Proofs",
    description: "Zero-knowledge master. He knows things without knowing them.",
    powerLevel: 97,
    icon: "🧠",
    category: "blockchain"
  },
  {
    id: "frontend",
    name: "Frontend",
    description: "Writes React like a poet. Animations that whisper.",
    powerLevel: 88,
    icon: "🎨",
    category: "frontend"
  },
  {
    id: "security",
    name: "Security",
    description: "Smart contract auditor. No reentrancy can escape his gaze.",
    powerLevel: 92,
    icon: "🛡️",
    category: "blockchain"
  },
  {
    id: "learning",
    name: "Learning",
    description: "Learns new things at impossible speeds. Always leveling up.",
    powerLevel: 99,
    icon: "📚",
    category: "meta"
  },
  {
    id: "piano",
    name: "Piano",
    description: "88 keys, infinite possibilities. Code is music, music is code.",
    powerLevel: 85,
    icon: "🎵",
    category: "meta"
  },
  {
    id: "blockchain",
    name: "Blockchain",
    description: "Deep understanding of the decentralized landscape.",
    powerLevel: 94,
    icon: "⛓️",
    category: "blockchain"
  }
];
