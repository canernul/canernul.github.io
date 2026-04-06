export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>

      <p className="project-desc">{project.desc}</p>

      <div className="project-tech">
        {project.tech.map((t, i) => (
          <span key={i} className="tech-tag">{t}</span>
        ))}
      </div>

      <a href={project.github} className="project-link">
        GitHub Repo
      </a>
    </div>
  );
}