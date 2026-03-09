import { layers } from "../data/thinkingData";

export default function Header() {
  return (
    <div className="hero-section" style={{
      minHeight: "75vh", display: "flex", alignItems: "center", justifyContent: "center",
      color: "#fff", padding: "60px 28px",
    }}>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 680 }}>
        <div style={{
          fontSize: 11, letterSpacing: 6, color: "rgba(255,255,255,0.35)",
          fontWeight: 500, textTransform: "uppercase", marginBottom: 28,
          fontFamily: "'Inter', sans-serif",
        }}>
          Consulting Thinking Framework
        </div>

        <h1 style={{
          fontFamily: "'Inter', 'Noto Sans JP', sans-serif",
          fontSize: "clamp(34px, 6vw, 56px)", fontWeight: 800,
          lineHeight: 1.15, marginBottom: 24, letterSpacing: "-0.02em",
          background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.75) 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          コンサルタントの
          <br />
          13の思考法
        </h1>

        <p style={{
          fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.9,
          maxWidth: 500, margin: "0 auto 48px",
          fontFamily: "'Inter', 'Noto Sans JP', sans-serif",
        }}>
          3つの認知階層に体系化された思考法の構造と、
          それぞれの繋がりをインタラクティブに探索する。
        </p>

        <div style={{ display: "flex", gap: 36, justifyContent: "center", marginBottom: 56 }}>
          {layers.map(l => (
            <div key={l.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%", background: l.color,
                boxShadow: `0 0 12px ${l.color}60`,
              }} />
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 500, letterSpacing: 1 }}>
                {l.label}
              </span>
            </div>
          ))}
        </div>

        <a href="#explore" style={{
          fontSize: 12, color: "rgba(255,255,255,0.2)", letterSpacing: 3,
          textDecoration: "none", textTransform: "uppercase",
        }}>
          ↓ Scroll to explore
        </a>
      </div>
    </div>
  );
}
