import React from 'react';
import './Projects.css';
import mernEstateImg from '../assets/mern-estate-project.png';
import travelJournalImg from '../assets/travel-journal-project.png';
import airbnbCloneImg from '../assets/airbnb-online-project.png';
import socialMediaImg from '../assets/socialMedia.App.png';

const ProjectCard = ({ image, title, githubLink, index }) => {
  const style = {
    animationDelay: `${index * 0.2}s`
  };

  return (
    <div className="project-card" style={style}>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <h3 className="project-title">{title}</h3>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
        View
      </a>
    </div>
  );
};

const Projects = () => {
  const projects = [
    { id: 1, title: "Real Estate Site", image: mernEstateImg, githubLink: "https://github.com/justinhibb97/mern-estate" },
    { id: 2, title: "Social Media App", image: socialMediaImg, githubLink: "https://github.com/justinhibb97/social-media-app" },
    { id: 3, title: "Travel Journal", image: travelJournalImg, githubLink: "https://github.com/justinhibb97/my-travel-journal" },
    { id: 4, title: "Airbnb Clone", image: airbnbCloneImg, githubLink: "https://github.com/justinhibb97/react-airbnb-online-experiences" },
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title fade-in">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            githubLink={project.githubLink}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects; 