const skillGroups = [
  { label: "LANGUAGES", skills: ["Python", "JavaScript", "C/C++", "Embedded C"] },
  { label: "FRONTEND", skills: ["React.js", "HTML/CSS", "Flutter"] },
  { label: "BACKEND", skills: ["Node.js", "Express.js"] },
  { label: "DATABASE", skills: ["MongoDB", "MySQL"] },
  { label: "IOT & HARDWARE", skills: ["ESP8266", "Sensor Integration", "EEG Signal Processing"] },
  { label: "AI / APIS", skills: ["OpenAI API", "Gemini API"] },
];

export default function Skills() {
  return (
    <section id="skills" className="module">
      <div className="container">
        <div className="module-header">
          <span className="module-tag">MOD.03</span>
          <h2 className="module-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="skill-label">{group.label}</div>
              <div className="skill-pills">
                {group.skills.map((s) => (
                  <span className="skill-pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}