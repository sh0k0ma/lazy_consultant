import { useState } from "react";
import { data, layers, nodePositions, networkEdges } from "../data/thinkingData";

const layerColors = {
  foundation: "#c0392b",
  execution: "#2563eb",
  expansion: "#059669",
};

export default function NetworkGraph({ onOpenModal }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  const focusNode = hoveredNode;

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
        <svg viewBox="0 0 960 580" style={{ width: "100%", height: "auto", display: "block" }}>
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Layer band labels */}
          <text x={50} y={100} fontSize={10} fill="#d1d5db" fontWeight={600} letterSpacing={3} style={{ fontFamily: "'Inter', sans-serif" }}>EXPANSION</text>
          <text x={50} y={340} fontSize={10} fill="#d1d5db" fontWeight={600} letterSpacing={3} style={{ fontFamily: "'Inter', sans-serif" }}>EXECUTION</text>
          <text x={50} y={495} fontSize={10} fill="#d1d5db" fontWeight={600} letterSpacing={3} style={{ fontFamily: "'Inter', sans-serif" }}>FOUNDATION</text>

          {/* Layer separator lines */}
          <line x1={40} y1={195} x2={920} y2={195} stroke="#f3f4f6" strokeWidth={1} strokeDasharray="6 4" />
          <line x1={40} y1={430} x2={920} y2={430} stroke="#f3f4f6" strokeWidth={1} strokeDasharray="6 4" />

          {/* Layer color indicators */}
          <rect x={40} y={85} width={3} height={120} rx={2} fill="#059669" opacity={0.3} />
          <rect x={40} y={250} width={3} height={170} rx={2} fill="#2563eb" opacity={0.3} />
          <rect x={40} y={455} width={3} height={70} rx={2} fill="#c0392b" opacity={0.3} />

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
            const isHovered = item.id === hoveredNode;
            const color = getNodeColor(item);

            return (
              <g key={item.id}
                onClick={(e) => { e.stopPropagation(); onOpenModal(item); }}
                onMouseEnter={() => setHoveredNode(item.id)}
                onMouseLeave={() => setHoveredNode(null)}
                opacity={focusNode ? (connected ? 1 : 0.1) : 1}
                style={{ cursor: "pointer", transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                {/* Glow ring on hover */}
                {isHovered && (
                  <circle cx={pos.x} cy={pos.y} r={38} fill="none"
                    stroke={color} strokeWidth={1.5} opacity={0.2}
                    style={{ transition: "all 0.3s ease" }}
                  />
                )}

                {/* Node circle */}
                <circle cx={pos.x} cy={pos.y}
                  r={isHovered ? 26 : 23}
                  fill={isHovered ? color : "#fff"}
                  stroke={color}
                  strokeWidth={isHovered ? 2 : 1.5}
                  filter={isHovered ? "url(#glow)" : undefined}
                  style={{ transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
                />

                {/* Icon */}
                <text x={pos.x} y={pos.y + 6} textAnchor="middle" fontSize={17}
                  fill={isHovered ? "#fff" : "#374151"}
                  style={{ pointerEvents: "none", transition: "fill 0.3s ease" }}
                >
                  {item.icon}
                </text>

                {/* Label */}
                <text x={pos.x} y={pos.y - 34} textAnchor="middle"
                  fontSize={11} fontWeight={isHovered ? 700 : 500}
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
    </div>
  );
}
