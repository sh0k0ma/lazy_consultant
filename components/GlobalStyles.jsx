export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=DM+Serif+Display&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      ::selection { background: #2980b9; color: #fff; }
      .card-main:hover { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(0,0,0,0.1) !important; }
      .layer-btn:hover { transform: translateY(-1px); }
      .tag-pill:hover { opacity: 0.8; }
      .modal-overlay { animation: fadeOverlay 0.2s ease; }
      .modal-box { animation: slideUp 0.25s cubic-bezier(0.16,1,0.3,1); }
      .modal-box.out { animation: slideDown 0.2s ease forwards; }
      @keyframes fadeOverlay { from { opacity: 0 } to { opacity: 1 } }
      @keyframes slideUp { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
      @keyframes slideDown { from { opacity: 1; transform: translateY(0) } to { opacity: 0; transform: translateY(20px) } }
      .trans-arrow { transition: background 0.15s; cursor: pointer; }
      .trans-arrow:hover { filter: brightness(0.95); }
    `}</style>
  );
}
