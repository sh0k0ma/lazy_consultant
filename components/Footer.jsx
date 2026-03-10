export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(160deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)",
      color: "rgba(255,255,255,0.5)",
      padding: "48px 28px 36px",
      textAlign: "center",
      fontFamily: "'Inter', 'Noto Sans JP', sans-serif",
    }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <a
          href="https://shokoma.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "rgba(255,255,255,0.7)",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: 0.5,
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            paddingBottom: 2,
            transition: "color 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = "rgba(255,255,255,0.95)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = "rgba(255,255,255,0.7)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
          }}
        >
          作者について: shokoma
        </a>
        <p style={{
          marginTop: 20,
          fontSize: 12,
          color: "rgba(255,255,255,0.3)",
          letterSpacing: 1,
        }}>
          © shokoma. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
