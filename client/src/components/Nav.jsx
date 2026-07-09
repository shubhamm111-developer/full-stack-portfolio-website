export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <div className="nav-brand">
          <span className="status-dot"></span>
          SHUBHAM // STATUS: ONLINE
        </div>
        <ul className="nav-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}