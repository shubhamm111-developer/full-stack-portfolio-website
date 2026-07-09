export default function About() {
  return (
    <section id="about" className="module">
      <div className="container">
        <div className="module-header">
          <span className="module-tag">MOD.01</span>
          <h2 className="module-title">About</h2>
        </div>
        <div className="about-grid">
          <p className="about-bio">
            Final-year Computer Science student specializing in IoT,  Technical Head of
            Electrazz — my college's tech society. 
            I build across the stack: from EEG-driven brain-computer interfaces to full-stack web applications. 
            Selected for Smart India Hackathon 2025, and I lead teams that ship — including the
            campus robo war competition and The Great Escape tech fest.
          </p>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-label">ROLE</div>
              <div className="stat-value">Technical Head, Electrazz</div>
            </div>
            <div className="stat">
              <div className="stat-label">HACKATHON</div>
              <div className="stat-value">SIH 2025 — College Selected</div>
            </div>
            <div className="stat">
              <div className="stat-label">ACHIEVEMENT</div>
              <div className="stat-value">1st Prize — Robo War</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}