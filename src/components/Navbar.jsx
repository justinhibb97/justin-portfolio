import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="#" className="nav-logo" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          Justin <span>Hibbard</span>
        </a>
        <div className="nav-links">
          <a href="#projects" className="nav-item" onClick={(e) => scrollToSection(e, 'projects')}>
            Projects
          </a>
          <a href="#contact" className="nav-item" onClick={(e) => scrollToSection(e, 'contact')}>
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 