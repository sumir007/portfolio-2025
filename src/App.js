import React, { useState, useEffect } from 'react';
import './App.css';
import resumePdf from './assets/resume.pdf'; 
import sectionData from './components/section-data'; 
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa'; 


function App() {
  const [expandedCard, setExpandedCard] = useState(null); // Tracks which card is expanded
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Tracks current card index for navigation
  const [currentSection, setCurrentSection] = useState(null); // Tracks which section is active

  // Handle card expansion
  const handleCardClick = (section, index) => {
    setExpandedCard(index);
    setCurrentCardIndex(index);
    setCurrentSection(section);
  };

  // Close expanded card
  const handleCloseCard = (e) => {
    e.stopPropagation(); // Stop event propagation
    setExpandedCard(null);
    setCurrentSection(null);
  };

  // Close expanded card when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      handleCloseCard(e);
    }
  };

  // Navigate between cards
  const handleNextCard = (e) => {
    e.stopPropagation(); // Stop event propagation
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % sectionData[currentSection].length);
  };

  const handlePrevCard = (e) => {
    e.stopPropagation(); // Stop event propagation
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + sectionData[currentSection].length) % sectionData[currentSection].length);
  };

  // Add IntersectionObserver for section animations
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="container">
      {/* Overlay for expanded card */}
      <div
        className={`overlay ${expandedCard !== null ? 'visible' : ''}`}
        onClick={handleOverlayClick}
      />

      {/* Expanded Card Popup */}
      {expandedCard !== null && (
        <div className="expanded-card-popup">
          <button className="close-button" onClick={handleCloseCard}>×</button>
          <h2>{sectionData[currentSection][currentCardIndex].title}</h2>
          <h2>{sectionData[currentSection][currentCardIndex].company}</h2>
          <h3>{sectionData[currentSection][currentCardIndex].description}</h3>
                <ul>{sectionData[currentSection][currentCardIndex].details.map((point, index) => (
          <li key={index}>{point}</li>
            ))}
                </ul>
          <div className="nav-buttons">
            <button onClick={handlePrevCard}>Previous</button>
            <button onClick={handleNextCard}>Next</button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="header">
        <h1>Sumir Srivastava</h1>
        <nav className="navigation">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#publications" className="nav-link">Publications</a>
          <a href="#cv" className="nav-link">CV/Resume</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section id="about">
          <h2>About</h2>
          <div className="card">
            <h3>Who Am I?</h3>
            <p>I’m a full-stack software engineer with a passion for building scalable and user-friendly applications. I specialize in .Net, JavaScript, React, Node.js, and cloud technologies.</p>
            <p>I am a graduate in Bachelor of Technology - Computer Science from Amity University, Noida Uttar Pradesh, India. </p>
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          {sectionData.experience.map((exp, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick('experience', index)}
            >
              <div className="card-header">
              <img src={exp.logo} className="company-logo" />
              <h3>{exp.title}</h3>
              <h3>{exp.company}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        <section id="projects">
          <h2>Projects</h2>
          {sectionData.projects.map((project, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick('projects', index)}
            >
              <div className="card-header">
              <img src={project.logo} className="project-logo" />
              <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </section>

        <section id="publications">
          <h2>Publications</h2>
          {sectionData.publications.map((pub, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick('publications', index)}
            >
               <div className="card-header">
               <img src={pub.logo} className="publication-logo" />
              <h3>{pub.title}</h3>
              </div>
              <p>{pub.description}</p>
            </div>
          ))}
        </section>

        <section id="cv">
          <h2>CV/Resume</h2>
          <div className="cv-container">
            <iframe src={resumePdf} title="Resume" className="resume-iframe" />
            <a href={resumePdf} download="YourName_Resume.pdf" className="button">Download Resume</a>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="card">
            <h3>Get in Touch</h3>
            <p>Feel free to reach out to me for collaborations or just a friendly chat!</p>
            <div className="social-links">
              <a href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`} className="social-link">
                <FaEnvelope className="social-icon" />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/sumir-srivastava" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon" />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/sumir-srivastava" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram className="social-icon" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Sumir Srivastava. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;