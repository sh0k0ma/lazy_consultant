export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { background: #f8f9fa; }
      ::selection { background: #2563eb; color: #fff; }

      .card-main { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
      .card-main:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.08) !important; }
      .layer-btn { transition: all 0.2s ease; }
      .layer-btn:hover { transform: translateY(-1px); }

      .modal-overlay { animation: fadeIn 0.25s ease; }
      .modal-box { animation: slideUp 0.3s cubic-bezier(0.16,1,0.3,1); }
      .modal-box.out { animation: slideDown 0.2s ease forwards; }

      @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
      @keyframes slideDown { from { opacity: 1; transform: translateY(0) scale(1) } to { opacity: 0; transform: translateY(20px) scale(0.98) } }
      @keyframes panelIn { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }

      .trans-arrow { transition: all 0.2s ease; cursor: pointer; }
      .trans-arrow:hover { transform: translateX(4px); background: #f3f4f6 !important; }

      .hero-section {
        background: linear-gradient(160deg, #0f172a 0%, #1e293b 40%, #0f172a 100%);
        position: relative;
        overflow: hidden;
      }
      .hero-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 25% 40%, rgba(192,57,43,0.07) 0%, transparent 50%),
          radial-gradient(ellipse at 75% 60%, rgba(37,99,235,0.07) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 80%, rgba(5,150,105,0.05) 0%, transparent 50%);
      }
      .hero-section::after {
        content: '';
        position: absolute;
        inset: 0;
        background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
        background-size: 32px 32px;
      }
    `}</style>
  );
}
