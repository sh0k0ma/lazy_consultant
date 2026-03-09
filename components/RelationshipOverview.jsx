import { layers } from "../data/thinkingData";

export default function RelationshipOverview() {
  return (
    <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #eaeaea", padding: "28px 24px", marginTop: 8 }}>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#333", marginBottom: 16 }}>構造的関係の全体像</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {layers.map(l => (
          <div key={l.id} style={{ padding: "16px 18px", borderRadius: 10, background: l.id === "foundation" ? "#fef5f5" : l.id === "execution" ? "#f0f7fc" : "#f0faf4", borderLeft: `4px solid ${l.color}` }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: l.color, marginBottom: 6 }}>{l.label}</div>
            <div style={{ fontSize: 12, color: "#666", lineHeight: 1.8 }}>
              {l.id === "foundation" && "論理的思考と批判的思考は他の11思考法すべてを支える「OS」。論理的思考が推論の正しさを保証し、批判的思考がその品質を監査する。"}
              {l.id === "execution" && "仮説思考・イシュー思考は「何を解くか×どう解くか」の表裏一体ペア。戦略的思考・フレームワーク思考・逆算思考・システム思考が分析と実行を駆動する。"}
              {l.id === "expansion" && "水平思考・デザイン思考・アナロジー思考・抽象化思考・ゼロベース思考が「正解の見えない問題」に対する創造的突破力を提供する。"}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, padding: "14px 18px", background: "#f8f8f8", borderRadius: 8, fontSize: 13, color: "#555", lineHeight: 1.8 }}>
        <strong>核心：</strong>13の思考法は独立ではなく、基盤層→実行層→拡張層の「階層構造」と、各層内・層間の「ネットワーク構造」の二重構造を持つ。優れたコンサルタントは、問題の性質に応じてこれらを自在に組み合わせ、ある思考から別の思考へスムーズに移行する。
      </div>
    </div>
  );
}
