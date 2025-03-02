import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import './App.css';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const welcomeText = "Welcome";
  const totalWelcomeDelay = welcomeText.length * 0.2; // Calculate total animation time for welcome

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="home">
          <div className="welcome-section">
            <ParticleBackground />
            <div className="welcome-content">
              <h1 className="welcome-text">
                {welcomeText.split('').map((letter, index) => (
                  <span 
                    key={index} 
                    className="welcome-letter"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
              <p 
                className="welcome-subtitle"
                style={{ animationDelay: `${totalWelcomeDelay}s` }}
              >
                I'm <span className="highlight-text">Justin</span>, a <span className="highlight-text">Software Engineer</span>. Check out my <a href="#projects" className="highlight-link" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}>projects</a> below!
              </p>
              <a 
                href="#contact" 
                className="contact-button"
                style={{ animationDelay: `${totalWelcomeDelay + 0.2}s` }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact" className="contact-section">
            <h2 className="section-title fade-in">Contact Me</h2>
            <div className="contact-links">
              <a href="mailto:justinhibb97@gmail.com" className="contact-item fade-in" style={{ animationDelay: '0.2s' }}>
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="contact-label">Email</span>
              </a>
              <a href="https://www.linkedin.com/in/justin-hibbard/" target="_blank" rel="noopener noreferrer" className="contact-item fade-in" style={{ animationDelay: '0.4s' }}>
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" strokeWidth="2" />
                </svg>
                <span className="contact-label">LinkedIn</span>
              </a>
              <a href="https://github.com/justinhibb97" target="_blank" rel="noopener noreferrer" className="contact-item fade-in" style={{ animationDelay: '0.6s' }}>
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
                <span className="contact-label">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
