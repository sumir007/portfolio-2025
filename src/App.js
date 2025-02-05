import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import resumePdf from './assets/resume.pdf'; // Import your resume PDF

function App() {
  const [expandedCard, setExpandedCard] = useState(null); // Tracks which card is expanded
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Tracks current card index for navigation
  const [currentSection, setCurrentSection] = useState(null); // Tracks which section is active

  // Sample data for all sections
  const sectionData = {
    experience: [
      {
        title: "Software Engineer at XYZ Corp",
        description: "Developed and maintained web applications using modern technologies.",
        details: "Full details about my role at XYZ Corp. I worked on projects involving React, Node.js, and AWS."
      },
      {
        title: "Frontend Developer at ABC Inc",
        description: "Built responsive and user-friendly interfaces using React and Redux.",
        details: "Full details about my role at ABC Inc. I focused on improving the performance of the frontend."
      }
    ],
    projects: [
      {
        title: "Project Name 1",
        description: "A web application built with React and Node.js.",
        details: "Full details about Project Name 1. It solves real-world problems using modern tech."
      },
      {
        title: "Project Name 2",
        description: "A mobile app built with React Native.",
        details: "Full details about Project Name 2. It focuses on user experience and performance."
      }
    ],
    publications: [
      {
        title: "Publication Title 1",
        description: "Published in Journal XYZ.",
        details: "Full details about Publication Title 1. It discusses innovative approaches to problem-solving."
      }
    ]
  };

  // Handle card expansion
  const handleCardClick = (section, index) => {
    setExpandedCard(index);
    setCurrentCardIndex(index);
    setCurrentSection(section);
  };

  // Close expanded card
  const handleCloseCard = () => {
    setExpandedCard(null);
    setCurrentSection(null);
  };

  // Navigate between cards
  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % sectionData[currentSection].length);
  };

  const handlePrevCard = () => {
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
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Your Name</h1>
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
            <p>I’m a full-stack software engineer with a passion for building scalable and user-friendly applications. I specialize in JavaScript, React, Node.js, and cloud technologies.</p>
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          {sectionData.experience.map((exp, index) => (
            <div
              key={index}
              className={`card ${expandedCard === index && currentSection === 'experience' ? 'expanded' : ''}`}
              onClick={() => handleCardClick('experience', index)}
            >
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              {expandedCard === index && currentSection === 'experience' && (
                <div className="expanded-content">
                  <button className="close-button" onClick={handleCloseCard}>×</button>
                  <p>{exp.details}</p>
                  <div className="nav-buttons">
                    <button onClick={handlePrevCard}>Previous</button>
                    <button onClick={handleNextCard}>Next</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        <section id="projects">
          <h2>Projects</h2>
          {sectionData.projects.map((project, index) => (
            <div
              key={index}
              className={`card ${expandedCard === index && currentSection === 'projects' ? 'expanded' : ''}`}
              onClick={() => handleCardClick('projects', index)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {expandedCard === index && currentSection === 'projects' && (
                <div className="expanded-content">
                  <button className="close-button" onClick={handleCloseCard}>×</button>
                  <p>{project.details}</p>
                  <div className="nav-buttons">
                    <button onClick={handlePrevCard}>Previous</button>
                    <button onClick={handleNextCard}>Next</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        <section id="publications">
          <h2>Publications</h2>
          {sectionData.publications.map((pub, index) => (
            <div
              key={index}
              className={`card ${expandedCard === index && currentSection === 'publications' ? 'expanded' : ''}`}
              onClick={() => handleCardClick('publications', index)}
            >
              <h3>{pub.title}</h3>
              <p>{pub.description}</p>
              {expandedCard === index && currentSection === 'publications' && (
                <div className="expanded-content">
                  <button className="close-button" onClick={handleCloseCard}>×</button>
                  <p>{pub.details}</p>
                  <div className="nav-buttons">
                    <button onClick={handlePrevCard}>Previous</button>
                    <button onClick={handleNextCard}>Next</button>
                  </div>
                </div>
              )}
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
            <a href="mailto:you@example.com" className="button">Email Me</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;