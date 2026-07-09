import { social } from "../data/social.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        Shubham Awasthi · <a href={social.github} target="_blank" rel="noreferrer">GitHub</a> ·{" "}
        <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> ·{" "}
        <a href={`mailto:${social.email}`}>{social.email}</a>
        <div style={{ marginTop: 8, opacity: 0.6 }}>
          © {new Date().getFullYear()} — built with React, Node.js & MongoDB
        </div>
      </div>
    </footer>
  );
}