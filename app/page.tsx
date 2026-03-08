"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./home.module.css";

/* ── Slide data ── */
interface Slide {
  id: number;
  tab: string;
  tabName: string;
  badge: "LIVE" | "COMING SOON";
  title: string;
  titleAccent: string;
  description: string;
  ctaText: string;
  ctaHref: string | null;
  accentColor: string;
  glowColor: string;
  icon: "chart" | "shield" | "brain" | "code";
}

const SLIDES: Slide[] = [
  {
    id: 1,
    tab: "01",
    tabName: "Apex Strike",
    badge: "LIVE",
    title: "APEX STRIKE",
    titleAccent: "PRO",
    description:
      "Precision 4-phase futures trading indicator for TradingView. Volume-confirmed entries with ATR-based risk management. No repaint. Just precision.",
    ctaText: "Explore Now",
    ctaHref: "/apex-strike",
    accentColor: "linear-gradient(135deg, #3B8EF5, #42C6FF)",
    glowColor: "rgba(59,142,245,0.25)",
    icon: "chart",
  },
  {
    id: 2,
    tab: "02",
    tabName: "Security",
    badge: "COMING SOON",
    title: "SECURITY",
    titleAccent: "TOOLS",
    description:
      "Enterprise-grade security solutions for developers. Vulnerability scanning, threat detection, and automated compliance checks for your codebase.",
    ctaText: "Get Notified",
    ctaHref: null,
    accentColor: "linear-gradient(135deg, #00E676, #69F0AE)",
    glowColor: "rgba(0,230,118,0.25)",
    icon: "shield",
  },
  {
    id: 3,
    tab: "03",
    tabName: "AI Tools",
    badge: "COMING SOON",
    title: "AI",
    titleAccent: "TOOLS",
    description:
      "Intelligent automation and AI-powered workflows for modern development teams. Code generation, smart debugging, and predictive analytics.",
    ctaText: "Get Notified",
    ctaHref: null,
    accentColor: "linear-gradient(135deg, #42C6FF, #7C4DFF)",
    glowColor: "rgba(66,198,255,0.25)",
    icon: "brain",
  },
  {
    id: 4,
    tab: "04",
    tabName: "Dev Tools",
    badge: "COMING SOON",
    title: "DEVELOPER",
    titleAccent: "TOOLS",
    description:
      "A complete toolkit for modern developers. CLI utilities, project scaffolding, performance profiling, and deployment pipelines built for speed.",
    ctaText: "Get Notified",
    ctaHref: null,
    accentColor: "linear-gradient(135deg, #F5841F, #FF6B2C)",
    glowColor: "rgba(245,132,31,0.25)",
    icon: "code",
  },
];

/* ── SVG Illustrations ── */

function ChartIllustration() {
  return (
    <svg viewBox="0 0 360 220" className={styles.illustrationSvg}>
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B8EF5" />
          <stop offset="100%" stopColor="#42C6FF" />
        </linearGradient>
        <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(59,142,245,0.25)" />
          <stop offset="100%" stopColor="rgba(59,142,245,0)" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[60, 100, 140, 180].map((y) => (
        <line key={y} x1="30" y1={y} x2="340" y2={y} stroke="rgba(59,142,245,0.06)" strokeWidth="1" />
      ))}
      {/* Candlesticks */}
      {[
        { x: 50, o: 160, c: 145, h: 138, l: 165, up: true },
        { x: 80, o: 145, c: 150, h: 140, l: 155, up: false },
        { x: 110, o: 150, c: 130, h: 125, l: 155, up: true },
        { x: 140, o: 130, c: 120, h: 115, l: 135, up: true },
        { x: 170, o: 120, c: 128, h: 118, l: 132, up: false },
        { x: 200, o: 128, c: 105, h: 100, l: 130, up: true },
        { x: 230, o: 105, c: 95, h: 88, l: 110, up: true },
        { x: 260, o: 95, c: 100, h: 90, l: 105, up: false },
        { x: 290, o: 100, c: 80, h: 75, l: 105, up: true },
        { x: 320, o: 80, c: 70, h: 65, l: 85, up: true },
      ].map((c, i) => (
        <g key={i} opacity={0.5 + i * 0.05}>
          <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.up ? "#00E676" : "#FF1744"} strokeWidth="1" />
          <rect
            x={c.x - 6}
            y={Math.min(c.o, c.c)}
            width="12"
            height={Math.abs(c.o - c.c) || 2}
            fill={c.up ? "#00E676" : "#FF1744"}
            rx="1"
          />
        </g>
      ))}
      {/* Trend line */}
      <path
        className={styles.chartStroke}
        d="M40,162 C70,155 100,140 130,128 C160,116 190,110 220,100 C250,90 280,85 310,72 C330,66 340,62 350,58"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        className={styles.chartFill}
        d="M40,162 C70,155 100,140 130,128 C160,116 190,110 220,100 C250,90 280,85 310,72 C330,66 340,62 350,58 L350,200 L40,200 Z"
        fill="url(#fillGrad)"
      />
    </svg>
  );
}

function ShieldIllustration() {
  return (
    <svg viewBox="0 0 200 240" className={styles.illustrationSvg}>
      <defs>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#69F0AE" />
        </linearGradient>
      </defs>
      {/* Shield body */}
      <path
        className={styles.shieldDraw}
        d="M100,20 L170,50 L170,120 C170,170 140,200 100,220 C60,200 30,170 30,120 L30,50 Z"
        fill="none"
        stroke="url(#shieldGrad)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Inner shield */}
      <path
        d="M100,45 L150,65 L150,120 C150,158 128,180 100,195 C72,180 50,158 50,120 L50,65 Z"
        fill="rgba(0,230,118,0.04)"
        stroke="rgba(0,230,118,0.15)"
        strokeWidth="1"
      />
      {/* Lock body */}
      <rect x="80" y="110" width="40" height="32" rx="4" fill="none" stroke="url(#shieldGrad)" strokeWidth="2" />
      {/* Lock shackle */}
      <path
        d="M88,110 L88,96 C88,82 112,82 112,96 L112,110"
        fill="none"
        stroke="url(#shieldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Keyhole */}
      <circle cx="100" cy="123" r="4" fill="#00E676" />
      <line x1="100" y1="127" x2="100" y2="134" stroke="#00E676" strokeWidth="2" strokeLinecap="round" />
      {/* Decorative check */}
      <path d="M90,75 L98,83 L114,67" fill="none" stroke="#00E676" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}

function BrainIllustration() {
  const nodes = [
    /* Input layer */ { cx: 40, cy: 60 }, { cx: 40, cy: 120 }, { cx: 40, cy: 180 },
    /* Hidden 1 */   { cx: 100, cy: 45 }, { cx: 100, cy: 100 }, { cx: 100, cy: 155 }, { cx: 100, cy: 210 },
    /* Hidden 2 */   { cx: 160, cy: 60 }, { cx: 160, cy: 120 }, { cx: 160, cy: 180 },
    /* Output */     { cx: 220, cy: 90 }, { cx: 220, cy: 150 },
  ];
  const connections = [
    [0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[1,6],[2,4],[2,5],[2,6],
    [3,7],[3,8],[4,7],[4,8],[4,9],[5,8],[5,9],[6,8],[6,9],
    [7,10],[7,11],[8,10],[8,11],[9,10],[9,11],
  ];
  return (
    <svg viewBox="0 0 260 240" className={styles.illustrationSvg}>
      <defs>
        <linearGradient id="brainGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#42C6FF" />
          <stop offset="100%" stopColor="#7C4DFF" />
        </linearGradient>
      </defs>
      {connections.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="rgba(66,198,255,0.12)"
          strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r="6"
          fill="rgba(66,198,255,0.15)"
          stroke="url(#brainGrad)"
          strokeWidth="1.5"
          className={styles.nodeCircle}
        />
      ))}
      {/* Center pulse ring */}
      <circle cx="130" cy="120" r="40" fill="none" stroke="rgba(66,198,255,0.06)" strokeWidth="1">
        <animate attributeName="r" values="40;60;40" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.15;0;0.15" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function CodeIllustration() {
  return (
    <svg viewBox="0 0 280 200" className={styles.illustrationSvg}>
      <defs>
        <linearGradient id="codeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F5841F" />
          <stop offset="100%" stopColor="#FF6B2C" />
        </linearGradient>
      </defs>
      {/* Left bracket < */}
      <path
        d="M85,40 L35,100 L85,160"
        fill="none"
        stroke="url(#codeGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Right bracket > */}
      <path
        d="M195,40 L245,100 L195,160"
        fill="none"
        stroke="url(#codeGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Slash / */}
      <line x1="155" y1="35" x2="125" y2="165" stroke="url(#codeGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* Code lines */}
      <g className={styles.codeLine}>
        <rect x="60" y="178" width="80" height="3" rx="1.5" fill="rgba(245,132,31,0.25)" />
      </g>
      <g className={styles.codeLine}>
        <rect x="75" y="188" width="55" height="3" rx="1.5" fill="rgba(245,132,31,0.15)" />
      </g>
      <g className={styles.codeLine}>
        <rect x="90" y="178" width="0" height="3" rx="1.5" fill="rgba(245,132,31,0.15)" />
      </g>
      {/* Cursor */}
      <rect className={styles.cursor} x="142" y="177" width="2" height="14" rx="1" fill="#F5841F" />
      {/* Terminal dots */}
      <circle cx="115" cy="12" r="3" fill="#FF1744" opacity="0.6" />
      <circle cx="128" cy="12" r="3" fill="#F5841F" opacity="0.6" />
      <circle cx="141" cy="12" r="3" fill="#00E676" opacity="0.6" />
    </svg>
  );
}

function SlideIllustration({ type }: { type: Slide["icon"] }) {
  switch (type) {
    case "chart":  return <ChartIllustration />;
    case "shield": return <ShieldIllustration />;
    case "brain":  return <BrainIllustration />;
    case "code":   return <CodeIllustration />;
  }
}

/* ══════════════════════════════════════
   HOME PAGE COMPONENT
   ══════════════════════════════════════ */

export default function Home() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoPlay = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Reset auto-advance */
  const resetAutoPlay = useCallback(() => {
    if (autoPlay.current) clearInterval(autoPlay.current);
    autoPlay.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
  }, []);

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlay.current) clearInterval(autoPlay.current);
    };
  }, [resetAutoPlay]);

  /* Switch slide */
  const handleSlideChange = useCallback(
    (index: number) => {
      if (index === activeSlide) return;
      setActiveSlide(index);
      resetAutoPlay();
    },
    [activeSlide, resetAutoPlay],
  );

  /* CTA click */
  const handleCtaClick = useCallback(
    (slide: Slide) => {
      resetAutoPlay();
      if (slide.ctaHref) {
        router.push(slide.ctaHref);
      } else {
        if (toastTimer.current) clearTimeout(toastTimer.current);
        setToast(slide.tabName);
        toastTimer.current = setTimeout(() => setToast(null), 4000);
      }
    },
    [router, resetAutoPlay],
  );

  const current = SLIDES[activeSlide];

  return (
    <div className={styles.slider}>
      <div className="grid-bg" />

      {/* ── Header ── */}
      <header className={styles.header}>
        <Image
          src="/connectdevs-logo.jpg"
          alt="ConnectDevs"
          width={48}
          height={32}
          priority
          className={styles.logo}
        />
        <span className={styles.brandName}>CONNECTDEVS</span>
      </header>

      {/* ── Split Panels ── */}
      <div className={styles.slideContainer}>
        {/* LEFT: Text content */}
        <div className={styles.leftPanel}>
          {SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              className={`${styles.slideContent} ${i === activeSlide ? styles.slideContentActive : ""}`}
            >
              <span className={styles.slideNumber}>{slide.tab}</span>

              <span className={slide.badge === "LIVE" ? styles.badgeLive : styles.badgeSoon}>
                {slide.badge === "LIVE" && <span className={styles.badgeDot} />}
                {slide.badge}
              </span>

              <h1 className={styles.slideTitle}>
                {slide.title}{" "}
                <span
                  className={styles.titleAccent}
                  style={{ backgroundImage: slide.accentColor }}
                >
                  {slide.titleAccent}
                </span>
              </h1>

              <p className={styles.slideDesc}>{slide.description}</p>

              <button
                className={styles.cta}
                style={{ background: slide.accentColor }}
                onClick={() => handleCtaClick(slide)}
              >
                {slide.ctaText}
                <svg
                  className={styles.ctaArrow}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT: Visual illustration */}
        <div className={styles.rightPanel}>
          <div
            className={styles.visualGlow}
            style={{ background: current.glowColor }}
          />
          {SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              className={`${styles.slideVisual} ${i === activeSlide ? styles.slideVisualActive : ""}`}
            >
              <div className={styles.illustrationWrap}>
                <SlideIllustration type={slide.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tab Navigation ── */}
      <nav className={styles.tabNav}>
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            className={`${styles.tab} ${i === activeSlide ? styles.tabActive : ""}`}
            onClick={() => handleSlideChange(i)}
          >
            <span className={styles.tabNumber}>{slide.tab}</span>
            <span className={styles.tabName}>{slide.tabName}</span>
          </button>
        ))}
      </nav>

      {/* ── Toast ── */}
      {toast && (
        <div key={toast} className={styles.toast}>
          <div className={styles.toastIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
          <div className={styles.toastText}>
            <span className={styles.toastTitle}>{toast}</span>
            <span className={styles.toastSub}>Coming soon! Stay tuned.</span>
          </div>
          <div className={styles.toastProgress} />
        </div>
      )}
    </div>
  );
}
