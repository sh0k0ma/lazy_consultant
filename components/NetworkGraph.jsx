import { useState } from "react";
import { data, nodePositions, networkEdges } from "../data/thinkingData";

const layerColors = {
  foundation: "#c0392b",
  execution: "#2563eb",
  expansion: "#059669",
};

export default function NetworkGraph({ activeNode, setActiveNode, onOpenModal }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  const activeItem = data.find(d => d.id === activeNode);
  const focusNode = activeNode || hoveredNode;

  const isConnected = (nodeId) => {
    if (!focusNode) return true;
    if (nodeId === focusNode) return true;
    const item = data.find(d => d.id === focusNode);
    return item?.relations.includes(nodeId);
  };

  const isActiveEdge = (edge) => {
    if (!focusNode) return false;
    const item = data.find(d => d.id === focusNode);
    return (edge.from === focusNode && item?.relations.includes(edge.to))
        || (edge.to === focusNode && item?.relations.includes(edge.from));
  };

  const getNodeColor = (item) => layerColors[item.layer];

  return (
    <div style={{ padding: "80px 28px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", marginBottom: 10 }}>
          Interactive Map
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#111827", marginBottom: 8, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
          思考法の相互関係
        </h2>
        <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.7 }}>
          ノードをクリックして接続関係を探索。思考の移行パターンを辿れます。
        </p>
      </div>

      <div style={{
        background: "#fff", borderRadius: 20,
        border: "1px solid #e5e7eb", overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}>
        <svg viewBox="0 0 960 540" style={{ width: "100%", height: "auto", display: "block" }}
          onClick={() => setActiveNode(null)}
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Layer region indicators */}
          <text x={480} y={295} textAnchor="middle" fontSize={9} fill="#e5e7eb" fontWeight={600} letterSpacing={4}>FOUNDATION</text>

          {/* Concentric ring hints */}
          <circle cx={485} cy={280} r={80} fill="none" stroke="#f3f4f6" strokeWidth={1} strokeDasharray="4 4" />
          <circle cx={485} cy={280} r={180} fill="none" stroke="#f3f4f6" strokeWidth={1} strokeDasharray="4 4" />
          <circle cx={485} cy={280} r={310} fill="none" stroke="#f3f4f6" strokeWidth={0.5} strokeDasharray="4 4" />

          {/* Edges */}
          {networkEdges.map((edge, i) => {
            const from = nodePositions[edge.from];
            const to = nodePositions[edge.to];
            if (!from || !to) return null;
            const active = isActiveEdge(edge);
            const focusItem = data.find(d => d.id === focusNode);
            return (
              <line key={i}
                x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                stroke={active ? getNodeColor(focusItem) : "#e5e7eb"}
                strokeWidth={active ? 2.5 : 1}
                opacity={focusNode ? (active ? 0.7 : 0.06) : 0.25}
                style={{ transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
              />
            );
          })}

          {/* Nodes */}
          {data.map(item => {
            const pos = nodePositions[item.id];
            if (!pos) return null;
            const connected = isConnected(item.id);
            const isActive = item.id === activeNode;
            const isHovered = item.id === hoveredNode;
            const color = getNodeColor(item);

            return (
              <g key={item.id}
                onClick={(e) => { e.stopPropagation(); setActiveNode(isActive ? null : item.id); }}
                onMouseEnter={() => !activeNode && setHoveredNode(item.id)}
                onMouseLeave={() => setHoveredNode(null)}
                opacity={focusNode ? (connected ? 1 : 0.1) : 1}
                style={{ cursor: "pointer", transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                {/* Glow ring */}
                {isActive && (
                  <circle cx={pos.x} cy={pos.y} r={38} fill="none"
                    stroke={color} strokeWidth={1.5} opacity={0.2}
                    style={{ transition: "all 0.3s ease" }}
                  />
                )}

                {/* Node circle */}
                <circle cx={pos.x} cy={pos.y}
                  r={isActive ? 28 : (isHovered ? 26 : 23)}
                  fill={isActive ? color : "#fff"}
                  stroke={color}
                  strokeWidth={isActive ? 2 : 1.5}
                  filter={isActive ? "url(#glow)" : undefined}
                  style={{ transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
                />

                {/* Icon */}
                <text x={pos.x} y={pos.y + 6} textAnchor="middle" fontSize={17}
                  fill={isActive ? "#fff" : "#374151"}
                  style={{ pointerEvents: "none", transition: "fill 0.3s ease" }}
                >
                  {item.icon}
                </text>

                {/* Label */}
                <text x={pos.x} y={pos.y - 34} textAnchor="middle"
                  fontSize={11} fontWeight={isActive ? 700 : 500}
                  fill={focusNode ? (connected ? "#374151" : "#d1d5db") : "#374151"}
                  style={{ pointerEvents: "none", fontFamily: "'Noto Sans JP', sans-serif", transition: "fill 0.5s ease" }}
                >
                  {item.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Detail Panel */}
      {activeItem && (
        <div key={activeItem.id} style={{
          background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb",
          padding: "28px 32px", marginTop: 16,
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          animation: "panelIn 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20, marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center",
                background: activeItem.colorLight, fontSize: 24,
              }}>
                {activeItem.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: 0 }}>{activeItem.name}</h3>
                <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>{activeItem.en}</div>
              </div>
              <span style={{
                fontSize: 11, padding: "4px 14px", borderRadius: 20, fontWeight: 600,
                background: activeItem.colorLight, color: activeItem.color,
              }}>
                {activeItem.layerLabel}
              </span>
            </div>
            <button onClick={() => onOpenModal(activeItem)} style={{
              padding: "10px 24px", borderRadius: 10, border: `1.5px solid ${activeItem.color}`,
              background: "#fff", color: activeItem.color, fontSize: 13, fontWeight: 600,
              cursor: "pointer", transition: "all 0.2s ease",
            }}
              onMouseEnter={e => { e.target.style.background = activeItem.color; e.target.style.color = "#fff"; }}
              onMouseLeave={e => { e.target.style.background = "#fff"; e.target.style.color = activeItem.color; }}
            >
              詳細を見る →
            </button>
          </div>

          <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.85, marginBottom: 24 }}>
            {activeItem.summary}
          </p>

          {/* Transitions */}
          <div style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", letterSpacing: 3, marginBottom: 14, textTransform: "uppercase" }}>
            Transitions
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
            {activeItem.transitions.map((tr, i) => {
              const target = data.find(d => d.id === tr.to);
              if (!target) return null;
              const targetColor = getNodeColor(target);
              return (
                <div key={i}
                  onClick={() => setActiveNode(tr.to)}
                  style={{
                    padding: "14px 16px", borderRadius: 12, cursor: "pointer",
                    background: "#f9fafb", border: "1px solid #f3f4f6",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = targetColor; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#f3f4f6"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 16 }}>{target.icon}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: targetColor }}>{target.name}</span>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#d97706", marginBottom: 4 }}>
                    {tr.timing}
                  </div>
                  <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.7 }}>{tr.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
