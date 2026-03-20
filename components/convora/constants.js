// Convora brand constants — FINAL version for store launch

export const CONVORA_THEME = {
  bg: "#0B1622",
  surface: "#132033",
  surfaceLight: "#1A2D45",
  accent: "#E8A838",
  accentLight: "#F5C563",
  text1: "#F0ECE3",
  text2: "#8A9BB5",
  textMuted: "#5C6F89",
  week1: "#E8A838",
  week2: "#38BFA1",
  week3: "#E85D75",
  week4: "#7C6BF0",
};

export const WEEKS = [
  { num: 1, title: "Foundation", desc: "First impressions, listening, body language, voice mastery, rapport, powerful questions", color: "#E8A838", free: true },
  { num: 2, title: "Professional Edge", desc: "Email mastery, meetings, presentations, negotiation, difficult conversations, feedback", color: "#38BFA1", free: false },
  { num: 3, title: "Advanced Mastery", desc: "Storytelling, persuasion, conflict resolution, cultural intelligence, EQ, public speaking", color: "#E85D75", free: false },
  { num: 4, title: "Leadership", desc: "Leadership communication, pitching, digital presence, networking, crisis, personal brand", color: "#7C6BF0", free: false },
];

export const FRAMEWORKS = [
  "HEAR", "RAPPORT", "CLEAR", "PEP", "BRAVE", "WIN",
  "STORY", "PEACE", "SPEAK", "PITCH", "VALUE", "RAPID",
  "BRAND", "SBI", "3-Act", "7-Second", "CARE", "EQ Pillars",
];

export const LANGUAGES = [
  { flag: "🇺🇸", name: "English", native: "English" },
  { flag: "🇪🇸", name: "Spanish", native: "Español" },
  { flag: "🇫🇷", name: "French", native: "Français" },
  { flag: "🇧🇷", name: "Portuguese", native: "Português" },
  { flag: "🇩🇪", name: "German", native: "Deutsch" },
];

export const FEATURES = [
  { icon: "🌍", title: "5-Language Audio", desc: "Listen to every lesson in English, Spanish, French, Portuguese, or German. Preview each voice and switch anytime. All on-device — no internet needed." },
  { icon: "🎧", title: "Audio for Every Lesson", desc: "Built-in narration for all 28 lessons. Learn hands-free during your commute, workout, or downtime." },
  { icon: "🧠", title: "18+ Proven Frameworks", desc: "Not vague advice. Concrete systems like HEAR, BRAVE, PITCH, and SPEAK you can use the same day." },
  { icon: "💪", title: "Daily Practice + Challenges", desc: "Each day includes a structured exercise and a real-world challenge. Knowledge becomes skill through action." },
  { icon: "🔥", title: "Streaks & Milestones", desc: "Track your streak, earn confetti celebrations at every milestone, and share branded progress cards to Instagram and X." },
  { icon: "🔔", title: "Smart Reminders", desc: "Set a daily reminder at your preferred time. Never break the streak. Completely local — no data leaves your device." },
];

export const TESTIMONIALS = [
  { text: "I used to dread meetings. After Week 2, I volunteered to present our quarterly results. My manager noticed.", name: "Darius K.", role: "Product Manager" },
  { text: "The BRAVE framework saved a friendship. That difficult conversation I'd been avoiding for months? Done in 15 minutes.", name: "Amara T.", role: "Designer" },
  { text: "Day 4 on voice mastery alone was worth more than the subscription. I sound like a different person on calls now.", name: "Ryan M.", role: "Sales Lead" },
];

export const PRICING = [
  { name: "Free", price: "$0", period: "forever", features: ["Week 1 — 7 full lessons", "5-language audio", "Exercises & challenges", "Progress tracking"], highlight: false, cta: "Download Free" },
  { name: "Annual", price: "$39.99", period: "/year", badge: "SAVE 52%", features: ["All 28 days unlocked", "18+ frameworks", "Full audio library", "Priority updates"], highlight: true, cta: "Get Convora" },
  { name: "Lifetime", price: "$79.99", period: "once", badge: "FOREVER", features: ["Everything in Annual", "Pay once, own forever", "All future content", "Support indie dev"], highlight: false, cta: "Get Lifetime" },
];

export const FAQS = [
  { q: "Is Week 1 really free?", a: "Yes — 7 complete lessons with audio in 5 languages, exercises, and challenges. No credit card. No sign-up. No account needed." },
  { q: "How does multi-language audio work?", a: "Tap the language flag on any lesson's audio player. Pick from English, Spanish, French, Portuguese, or German. Preview each voice before choosing. Your selection saves automatically. All processing happens on your device — nothing is sent to any server." },
  { q: "Do I need to create an account?", a: "No. Convora has zero sign-up, zero accounts, zero data collection. Your progress is stored locally on your device. Payments are handled entirely by Apple or Google." },
  { q: "How is this different from other apps?", a: "Most communication apps give generic tips or AI chatbot practice. Convora gives you 18+ named, actionable frameworks built from 20+ years of expertise, structured daily practice, audio in 5 languages, and progress sharing — all without collecting a single byte of your data." },
  { q: "Can I cancel anytime?", a: "Absolutely. Cancel through your App Store or Google Play settings. No questions asked. The Lifetime option means you never think about it again." },
  { q: "Does it work offline?", a: "Yes. All lessons, audio, and exercises work completely offline. The only time internet is needed is for the initial download and in-app purchase verification." },
];

// Update these with real URLs after store approval
export const STORE_LINKS = {
  appStore: "#",
  playStore: "#",
};
