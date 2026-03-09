import { layers } from "../data/thinkingData";

export default function LayerNav({ selectedLayer, setSelectedLayer }) {
  return (
    <div style={{ background: "#fff", borderBottom: "1px solid #e8e8e8", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 28px", display: "flex", gap: 8, alignItems: "center", height: 56, overflowX: "auto" }}>
        <button onClick={() => setSelectedLayer(null)} className="layer-btn" style={{
          padding: "6px 18px", borderRadius: 20, border: !selectedLayer ? "2px solid #333" : "1px solid #ddd",
          background: !selectedLayer ? "#333" : "#fff", color: !selectedLayer ? "#fff" : "#666",
          fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap",
        }}>全て (13)</button>
        {layers.map(l => (
          <button key={l.id} onClick={() => setSelectedLayer(l.id)} className="layer-btn" style={{
            padding: "6px 18px", borderRadius: 20,
            border: selectedLayer === l.id ? `2px solid ${l.color}` : "1px solid #ddd",
            background: selectedLayer === l.id ? l.color : "#fff",
            color: selectedLayer === l.id ? "#fff" : "#666",
            fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap",
          }}>
            {l.label} ({l.count})
          </button>
        ))}
      </div>
    </div>
  );
}
