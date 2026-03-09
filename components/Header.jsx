export default function Header() {
  return (
    <div style={{ background: "#fff", borderBottom: "1px solid #e8e8e8", padding: "48px 0 40px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ fontSize: 11, letterSpacing: 5, color: "#999", fontWeight: 500, textTransform: "uppercase", marginBottom: 10 }}>
          Consulting Thinking Framework
        </div>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(32px, 5vw, 50px)", fontWeight: 400, color: "#111", lineHeight: 1.2, marginBottom: 12 }}>
          コンサルタントの<span style={{ color: "#2980b9" }}>13</span>の思考法
        </h1>
        <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, maxWidth: 640 }}>
          コンサルティングで活用される主要な思考法を3つの階層に分類。各カードをクリックすると、構造的な定義・ユースケース・他の思考法への移行タイミングを確認できます。
        </p>
      </div>
    </div>
  );
}
