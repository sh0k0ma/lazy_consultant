import { data } from "../data/thinkingData";

export default function Modal({ modal, modalTab, setModalTab, animIn, closeModal, setModal }) {
  if (!modal) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div className={`modal-box ${animIn ? "" : "out"}`} onClick={e => e.stopPropagation()}
        style={{ background: "#fff", borderRadius: 16, width: "100%", maxWidth: 720, maxHeight: "88vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>

        {/* Modal Header */}
        <div style={{ padding: "24px 28px 0", borderBottom: "1px solid #eee", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 28 }}>{modal.icon}</span>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: modal.color, margin: 0 }}>{modal.name}</h2>
                <div style={{ fontSize: 12, color: "#999" }}>{modal.en}</div>
              </div>
              <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 12, fontWeight: 600, background: modal.colorLight, color: modal.color, marginLeft: 8 }}>
                {modal.layerLabel}
              </span>
            </div>
            <button onClick={closeModal} style={{ background: "none", border: "none", fontSize: 22, color: "#999", cursor: "pointer", padding: 4 }}>✕</button>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 0 }}>
            {[
              { key: "what", label: "What ─ 定義" },
              { key: "usecase", label: "Use Cases" },
              { key: "transition", label: "思考の移行" },
            ].map(tab => (
              <button key={tab.key} onClick={() => setModalTab(tab.key)} style={{
                padding: "10px 20px", fontSize: 13, fontWeight: modalTab === tab.key ? 600 : 400,
                color: modalTab === tab.key ? modal.color : "#888",
                borderBottom: modalTab === tab.key ? `2.5px solid ${modal.color}` : "2.5px solid transparent",
                background: "none", border: "none", cursor: "pointer", transition: "all 0.15s",
              }}>{tab.label}</button>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "24px 28px 28px", overflowY: "auto", flex: 1 }}>

          {/* WHAT TAB */}
          {modalTab === "what" && (
            <WhatTab modal={modal} />
          )}

          {/* USE CASES TAB */}
          {modalTab === "usecase" && (
            <UseCaseTab modal={modal} />
          )}

          {/* TRANSITION TAB */}
          {modalTab === "transition" && (
            <TransitionTab modal={modal} setModal={setModal} setModalTab={setModalTab} />
          )}
        </div>
      </div>
    </div>
  );
}

function WhatTab({ modal }) {
  return (
    <div>
      <p style={{ fontSize: 14, color: "#444", lineHeight: 1.85, marginBottom: 20 }}>{modal.what.overview}</p>

      <div style={{ fontSize: 12, fontWeight: 600, color: "#999", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>構造的要素</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {modal.what.structure.map((s, i) => (
          <div key={i} style={{
            display: "flex", gap: 14, padding: "14px 16px",
            background: i % 2 === 0 ? "#f9f9f9" : "#fff",
            borderRadius: 10, border: "1px solid #f0f0f0",
          }}>
            <div style={{
              minWidth: 28, height: 28, borderRadius: 8,
              background: modal.color, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 700, flexShrink: 0,
            }}>{i + 1}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 12.5, color: "#666", lineHeight: 1.75 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, padding: "12px 16px", background: modal.colorLight, borderRadius: 8, borderLeft: `4px solid ${modal.color}` }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: modal.color, marginBottom: 4 }}>WHEN ─ 使用場面</div>
        <div style={{ fontSize: 13, color: "#555", lineHeight: 1.75 }}>{modal.when}</div>
      </div>
    </div>
  );
}

function UseCaseTab({ modal }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {modal.useCases.map((uc, i) => (
        <div key={i} style={{
          padding: "18px 20px", borderRadius: 12,
          background: "#fff", border: "1px solid #eaeaea",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{
              fontSize: 11, fontWeight: 700, color: "#fff", background: modal.color,
              padding: "2px 8px", borderRadius: 6,
            }}>CASE {i + 1}</span>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#333" }}>{uc.title}</div>
          </div>
          <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8, paddingLeft: 2 }}>{uc.desc}</div>
        </div>
      ))}
    </div>
  );
}

function TransitionTab({ modal, setModal, setModalTab }) {
  return (
    <div>
      <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, marginBottom: 18 }}>
        {modal.name}から他の思考法へ移行する典型的なタイミングとその理由。
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {modal.transitions.map((tr, i) => {
          const target = data.find(d => d.id === tr.to);
          return (
            <div key={i} className="trans-arrow"
              onClick={() => { setModal(target); setModalTab("what"); }}
              style={{
                padding: "16px 18px", borderRadius: 12,
                background: "#fff", border: "1px solid #eaeaea",
                boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{
                  fontSize: 13, fontWeight: 700, color: modal.color,
                  padding: "2px 10px", background: modal.colorLight, borderRadius: 8,
                }}>{modal.name}</span>
                <span style={{ fontSize: 16, color: "#ccc" }}>→</span>
                <span style={{
                  fontSize: 13, fontWeight: 700, color: target?.color || "#333",
                  padding: "2px 10px", background: target?.colorLight || "#f5f5f5", borderRadius: 8,
                }}>{target?.icon} {target?.name}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#e67e22", marginBottom: 4 }}>
                🕐 タイミング：{tr.timing}
              </div>
              <div style={{ fontSize: 12.5, color: "#666", lineHeight: 1.75 }}>{tr.desc}</div>
              <div style={{ fontSize: 11, color: "#bbb", marginTop: 6, textAlign: "right" }}>クリックで移動 →</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
