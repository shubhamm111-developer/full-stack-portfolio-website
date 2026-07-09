import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section id="projects" className="module">
      <div className="container">
        <div className="module-header">
          <span className="module-tag">MOD.02</span>
          <h2 className="module-title">Projects</h2>
        </div>

        {status === "loading" && <p className="status-text">// fetching projects...</p>}
        {status === "error" && (
          <p className="status-text">// could not reach API. Is the backend running?</p>
        )}

        {status === "success" && (
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p._id}>
                <div className="project-top">
                  <h3 className="project-title">{p.title}</h3>
                  <span className="project-index">{String(i + 1).padStart(2, "0")}</span>
                </div>
                {p.subtitle && <div className="project-subtitle">{p.subtitle}</div>}
                <p className="project-desc">{p.description}</p>
                <div className="tech-tags">
                  {p.techStack.map((t) => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
                {p.githubLink && (
                  <a className="project-link" href={p.githubLink} target="_blank" rel="noreferrer">
                    Code →
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}