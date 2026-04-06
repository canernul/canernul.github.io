import canerImg from "../assets/caner.png";
import CV from "../assets/CanerUlugCV.pdf"; 
import Transcipt from "../assets/intyg.pdf"; 

export default function Hero() {
  return (
    <section className="hero-section">
      <h2>Hi, I'm Caner</h2>
      <img src={canerImg} alt="Caner" className="hero-image" />
      <p className="hero-description">
        Java Backend Developer with Machine Learning Background
      </p>
      <p className="hero-note">
        Currently seeking a Summer Internship and/or LIA for Autumn 2026 (Nov 2026 – Jan 2027)
      </p>
      <a href={CV} download="Caner_Ulug_CV.pdf" className="download-btn">CV</a>
      <a href={Transcipt} download="intyg.pdf" className="download-btn">Completed Courses</a>
      
    </section>
  );
}

