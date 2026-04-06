export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>

      <div className="contact-links">
        <a href="mailto:canerulug@gmail.com" className="contact-link email">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg"
            alt="Email"
          />
        </a>

        <a
          href="https://github.com/canernul"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link github"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
            alt="GitHub"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/caner-naim-ulug-b61b25113/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link linkedin"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
            alt="LinkedIn"
          />
        </a>
      </div>
    </section>
  );
}