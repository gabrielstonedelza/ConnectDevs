import styles from "../apex-strike.module.css";

const TICKERS = [
  { sym: "ES", name: "S&P 500 Futures" },
  { sym: "NQ", name: "Nasdaq Futures" },
  { sym: "CL", name: "Crude Oil" },
  { sym: "GC", name: "Gold Futures" },
  { sym: "RTY", name: "Russell 2000" },
  { sym: "YM", name: "Dow Futures" },
  { sym: "6E", name: "Euro FX" },
  { sym: "ZB", name: "Treasury Bonds" },
];

export default function TickerStrip() {
  const items = [...TICKERS, ...TICKERS];

  return (
    <div className={styles.tickerStrip}>
      <div className={styles.tickerTrack}>
        {items.map((ticker, i) => (
          <div key={`${ticker.sym}-${i}`} className={styles.tickerItem}>
            <span className={styles.tickerSym}>{ticker.sym}</span>
            {ticker.name}
            <span className={styles.tickerStatus}>✓ Supported</span>
          </div>
        ))}
      </div>
    </div>
  );
}
