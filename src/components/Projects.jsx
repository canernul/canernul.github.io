import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Login System",
    desc: "A secure web application that enables user registration, authentication, and session management using Spring Security. Implements CRUD operations for product management with data persisted in a MySQL database.",
    tech: ["Spring Boot / Security", "JPA", "Thymeleaf"],
    github: "https://github.com/canernul/Login-",
  },
  {
    title: "Diary App",
    desc: "A server-rendered full-stack web application for managing personal diary entries, featuring CRUD functionality and MySQL integration. Showcases backend data handling and entity relationships using Spring Boot and JPA.",
    tech: ["Thymeleaf", "Spring Boot", "JPA", "MySQL", "HTML", "CSS"],
    github: "https://github.com/canernul/Diary-",
  },
  {
    title: "Cookbook",
    desc: "A full-stack web application for managing personal recipes. The backend is built with Spring Boot, exposing REST endpoints and handling database operations. The frontend uses JavaScript to consume the API and interact with users, including fetching meals from an external API and saving favorites locally.",
    tech: ["JavaScript", "Spring Boot", "MySQL", "REST API","HTML", "CSS"],
    github: "https://github.com/canernul/cookbook-backend-",
  },
  {
    title: "E-Commerce Backend (Webshop)",
    desc: "A scalable RESTful e-commerce backend built with Spring Boot, featuring secure authentication, role-based access control, and full order lifecycle management. Includes Stripe integration for payments with webhook-based confirmation and automatic stock handling.",
    tech: ["Spring Boot", "Spring Security", "JPA / Hibernate", "MySQL", "Stripe API"],
    github: "https://github.com/canernul/E-Commerce-",
  },
  {
    title: "Spa Booking System",
    desc: "A modern React (TypeScript) Single Page Application for managing spa reservations. Supports multiple wellness packages (Cold/Warm) across three daily sessions with real-time availability checks, Swedish public holiday integration, dynamic pricing, and JSON Server backend for persistent bookings.",
    tech: ["React", "TypeScript", "JSON Server", "React Calendar", "CSS"],
    github: "https://github.com/canernul/SPA-Single-Page-App-",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>My projects from the YH program</h2>

      <div className="projects-container">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
