import { data, layers } from "../data/thinkingData";
import ThinkingCard from "./ThinkingCard";

export default function LayerSection({ selectedLayer, onOpenModal }) {
  return (
    <>
      {layers.filter(l => !selectedLayer || l.id === selectedLayer).map(layer => {
        const items = data.filter(d => d.layer === layer.id);
        return (
          <div key={layer.id} style={{ marginBottom: 48 }}>
            {/* Layer Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ width: 4, height: 28, borderRadius: 2, background: layer.color }} />
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: layer.color }}>{layer.label}
                  <span style={{ fontSize: 12, fontWeight: 400, color: "#999", marginLeft: 8 }}>{layer.en}</span>
                </div>
                <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{layer.desc}</div>
              </div>
            </div>

            {/* Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {items.map(item => (
                <ThinkingCard key={item.id} item={item} onOpen={onOpenModal} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
