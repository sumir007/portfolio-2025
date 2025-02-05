import React from 'react';
import Project from './Project'; // Import the Project component

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <Project
          title="Project Name 1"
        // imageUrl="https://via.placeholder.com/300x200"
          description="A brief description of your project."
          link="https://your-project-link.com"
        />
        {/* Add more project cards here */}
      </div>
    </section>
  );
}

export default Projects;