import { nameById } from "../data/thinkingData";

export default function ThinkingCard({ item, onOpen }) {
  return (
    <div className="card-main" onClick={() => onOpen(item)}
      style={{
        background: "#fff", borderRadius: 14, padding: "24px 22px", cursor: "pointer",
        border: "1px solid #e5e7eb", borderLeft: `3px solid ${item.color}`,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
          background: item.colorLight, fontSize: 20, flexShrink: 0,
        }}>
          {item.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>{item.name}</div>
          <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: 0.5 }}>{item.en}</div>
        </div>
      </div>

      <p style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.8, marginBottom: 16 }}>{item.summary}</p>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {item.relations.map(rId => (
          <span key={rId} style={{
            fontSize: 10, padding: "3px 10px", borderRadius: 20,
            background: "#f3f4f6", color: "#6b7280",
          }}>→ {nameById[rId]}</span>
        ))}
      </div>
    </div>
  );
}
