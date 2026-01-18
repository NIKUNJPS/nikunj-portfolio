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
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        background: scrolled ? 'rgba(0,0,0,0.65)' : 'transparent',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.18)'
          : '1px solid rgba(255,255,255,0.08)',
        transition: 'all 0.35s ease'
      }}
    >
      {/* LOGO */}
      <a
        href="/"
        className="logo-wrapper"
        aria-label="Nikunj Shah"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img
          src="/logo-ns.png"
          alt="Nikunj Shah Logo"
          className={`logo-image ${scrolled ? 'logo-scrolled' : ''}`}
          style={{
            height: scrolled ? '34px' : '38px',
            transition: 'all 0.3s ease'
          }}
        />
      </a>

      {/* NAVIGATION */}
      <nav
        className="dark-nav"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px'
        }}
      >
        {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="dark-nav-link"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,                 // ✅ BOLD
              fontSize: '14px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.88)', // ✅ HIGH CONTRAST
              transition: 'color 0.25s ease, transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--brand-primary)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.88)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
