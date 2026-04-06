const educationList = [
  {
    degree: "Java Developer (YH)",
    school: "Jönköping University",
    period: "Aug 2025 – Jun 2027"
  },
  {
    degree: "MSc Machine Learning",
    school: "KTH Royal Institute of Technology",
    period: "2020 – (Coursework completed, thesis pending)"
  },
  {
    degree: "BSc Computer Science and Engineering",
    school: "KTH Royal Institute of Technology",
    period: "2017 – 2020"
  },
  {
    degree: "MA Middle Eastern Studies",
    school: "Lund University",
    period: "2014"
  },
  {
    degree: "BA Economics / International Relations",
    school: "Istanbul Bilgi University",
    period: "2009"
  }
];

export default function Education() {
  return (
    <section className="education-section">
      <h2>Education</h2>

      <div className="education-container">
        {educationList.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-school">{edu.school}</p>
            <span className="education-period">{edu.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
}