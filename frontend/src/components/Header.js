import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header
      className="dark-header"
      style={{
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.25)'
          : '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* LOGO */}
      <a href="/" className="logo-wrapper" aria-label="Nikunj Shah">
        <img
          src="/logo-ns.png"
          alt="Nikunj Shah Logo"
          className={`logo-image ${scrolled ? 'logo-scrolled' : ''}`}
        />
      </a>

      {/* NAVIGATION */}
      <nav className="dark-nav">
        <button onClick={() => scrollToSection('about')} className="dark-nav-link">
          About
        </button>
        <button onClick={() => scrollToSection('skills')} className="dark-nav-link">
          Skills
        </button>
        <button onClick={() => scrollToSection('experience')} className="dark-nav-link">
          Experience
        </button>
        <button onClick={() => scrollToSection('projects')} className="dark-nav-link">
          Projects
        </button>
        <button onClick={() => scrollToSection('contact')} className="dark-nav-link">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
