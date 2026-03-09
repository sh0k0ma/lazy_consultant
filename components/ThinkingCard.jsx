import { nameById } from "../data/thinkingData";

export default function ThinkingCard({ item, onOpen }) {
  return (
    <div className="card-main" onClick={() => onOpen(item)}
      style={{
        background: "#fff", borderRadius: 12, padding: "22px 20px", cursor: "pointer",
        border: "1px solid #eaeaea", transition: "all 0.2s ease",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}>
      {/* Card Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>{item.icon}</span>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>{item.name}</div>
            <div style={{ fontSize: 10, color: "#aaa", letterSpacing: 0.5 }}>{item.en}</div>
          </div>
        </div>
        <span style={{
          fontSize: 10, padding: "3px 10px", borderRadius: 12, fontWeight: 600,
          background: item.colorLight, color: item.color,
        }}>{item.layerLabel}</span>
      </div>

      {/* Summary */}
      <p style={{ fontSize: 13, color: "#555", lineHeight: 1.75, marginBottom: 14 }}>{item.summary}</p>

      {/* Use Cases Preview */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
        {item.useCases.map((uc, i) => (
          <span key={i} style={{
            fontSize: 10, padding: "3px 8px", borderRadius: 6,
            background: "#f5f5f5", color: "#777",
          }}>📋 {uc.title}</span>
        ))}
      </div>

      {/* Relations */}
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
        {item.relations.map(rId => (
          <span key={rId} className="tag-pill" style={{
            fontSize: 10, padding: "2px 8px", borderRadius: 10,
            border: "1px solid #e0e0e0", color: "#888", transition: "opacity 0.15s",
          }}>→ {nameById[rId]}</span>
        ))}
      </div>

      {/* CTA hint */}
      <div style={{ marginTop: 14, fontSize: 11, color: "#bbb", textAlign: "right" }}>
        クリックで詳細 →
      </div>
    </div>
  );
}
