import { layers } from "../data/thinkingData";

export default function LayerNav({ selectedLayer, setSelectedLayer }) {
  return (
    <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px", display: "flex", gap: 8, alignItems: "center", height: 56, overflowX: "auto" }}>
        <button onClick={() => setSelectedLayer(null)} className="layer-btn" style={{
          padding: "6px 20px", borderRadius: 20,
          border: !selectedLayer ? "1.5px solid #111827" : "1px solid #e5e7eb",
          background: !selectedLayer ? "#111827" : "#fff",
          color: !selectedLayer ? "#fff" : "#6b7280",
          fontSize: 13, fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap",
        }}>全て (13)</button>
        {layers.map(l => (
          <button key={l.id} onClick={() => setSelectedLayer(l.id)} className="layer-btn" style={{
            padding: "6px 20px", borderRadius: 20,
            border: selectedLayer === l.id ? `1.5px solid ${l.color}` : "1px solid #e5e7eb",
            background: selectedLayer === l.id ? l.color : "#fff",
            color: selectedLayer === l.id ? "#fff" : "#6b7280",
            fontSize: 13, fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap",
          }}>
            {l.label} ({l.count})
          </button>
        ))}
      </div>
    </div>
  );
}
