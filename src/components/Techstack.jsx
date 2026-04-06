export default function TechStack() {
  return (
    <section className="tech-section">
      <h2>Technologies I Work With</h2>

      {Object.entries(stack).map(([category, techs]) => (
        <div key={category} className="tech-group">
          <p className="tech-category"><strong>{category}:</strong></p>

          <div className="tech-tags">
            {techs.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}


const stack = {
  "Front-end": ["JavaScript", "TypeScript", "React", "HTML5", "CSS"],
  "Back-end": ["Java", "Spring Boot", "Spring Security", "JPA", "REST APIs"],
  "Databases": ["SQL", "PostgreSQL", "MySQL"],
  "AI / ML": ["Python", "TensorFlow", "PyTorch", "Keras"],
  "Tools": ["Git", "Maven"],
  "DevOps": ["Docker"]
};