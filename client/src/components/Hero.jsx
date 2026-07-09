import { social } from "../data/social.js";

export default function Hero() {
  return (
    <header className="hero container">
      <div className="hero-eyebrow">// SYSTEM ONLINE</div>
      <h1 className="hero-name">Shubham Awasthi</h1>
      <p className="hero-role">IoT & Full Stack Developer</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href={social.resumeUrl} target="_blank" rel="noreferrer">
          Download Resume
        </a>
        <a className="btn btn-ghost" href="#projects">
          View Projects
        </a>
        <a className="btn btn-ghost" href={social.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </header>
  );
}