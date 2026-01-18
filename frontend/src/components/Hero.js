import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { Download, ArrowRight, Mail } from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  const [phase, setPhase] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [splineOpacity, setSplineOpacity] = useState(1);
  const heroRef = useRef(null);
  const splineRef = useRef(null);

  // Phase sequencing: 0 → 1 → 2 → 3 (4 phases over 2 seconds)
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),   // 0.5s
      setTimeout(() => setPhase(2), 1200),  // 1.2s
      setTimeout(() => setPhase(3), 2000)   // 2s
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Cursor proximity tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Spline contextual behavior: dims when scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      const scrollPastHero = heroBottom < window.innerHeight * 0.3;
      setSplineOpacity(scrollPastHero ? 0.3 : 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 7.6923% 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Phase 1: Background grid with parallax */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%), repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)',
        backgroundSize: '100% 100%',
        opacity: phase >= 0 ? 0.08 : 0,
        transform: `translateY(${mousePos.y * -0.03}px)`,
        transition: 'opacity 0.8s ease-out, transform 0.1s ease-out',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Quiet Intelligence: System Status */}
      <div style={{
        position: 'absolute',
        top: '100px',
        left: '7.6923%',
        opacity: phase >= 1 ? 0.5 : 0,
        transition: 'opacity 0.6s ease-out 0.3s'
      }}>
        <div className="body-small" style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        maxWidth: '1400px',
        width: '100%',
        alignItems: 'center'
      }}>
        {/* Left Side - Content with phased animations */}
        <div style={{ zIndex: 2 }}>
          <div style={{ marginBottom: '24px' }}>
            {/* Phase 2: Subtitle appears */}
            <div 
              className="body-medium" 
              style={{ 
                color: 'var(--brand-primary)', 
                marginBottom: '16px',
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.6s ease-out'
              }}
            >
              AI Engineer & Full-Stack Developer
            </div>
            
            {/* Phase 2: Headline with line-by-line reveal */}
            <h1 className="display-huge" style={{ marginBottom: '24px' }}>
              <span style={{
                display: 'inline-block',
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s ease-out'
              }}>
                Building Intelligent Systems,{' '}
              </span>
              <span style={{ 
                color: 'var(--brand-primary)',
                display: 'inline-block',
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s ease-out 0.2s',
                textShadow: `0 0 ${Math.min(100 / (Math.hypot(mousePos.x - window.innerWidth/4, mousePos.y - window.innerHeight/2) / 10), 20)}px rgba(0, 255, 209, 0.6)`
              }}>
                Not Just Software
              </span>
            </h1>
            
            <p 
              className="body-large" 
              style={{ 
                color: 'var(--text-secondary)', 
                maxWidth: '600px',
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.6s ease-out 0.4s'
              }}
            >
              Focused on AI-driven automation, scalable backend applications, and intelligent data systems that solve real problems.
            </p>
          </div>

        {/* Phase 3: CTAs with micro-glow */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '40px',
            flexWrap: 'wrap',
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.2s'
          }}
        >
          {/* View Work */}
          <button
            onClick={scrollToProjects}
            className="btn-primary"
            style={{
              boxShadow: `0 0 ${Math.min(
                100 / (Math.hypot(mousePos.x - 300, mousePos.y - 500) / 10),
                30
              )}px rgba(0, 255, 209, 0.4)`
            }}
          >
            View Work <ArrowRight size={20} />
          </button>

          {/* Download Resume (PROPER WAY) */}
          <a
            href="/Nikunj_Resume.pdf"
            download="Nikunj_Shah_Resume.pdf"
            className="btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Download size={20} /> Download Resume
          </a>

          {/* Contact */}
          <button onClick={scrollToContact} className="btn-secondary">
            <Mail size={20} /> Contact
          </button>
        </div>

        {/* Stats */}
        <div
          style={{
            marginTop: '60px',
            display: 'flex',
            gap: '40px',
            opacity: phase >= 3 ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.4s'
          }}
        >
          <div>
            <div className="heading-2" style={{ color: 'var(--brand-primary)' }}>
              3+
            </div>
            <div className="body-small" style={{ color: 'var(--text-muted)' }}>
              Projects Deployed
            </div>
          </div>

          <div>
            <div className="heading-2" style={{ color: 'var(--brand-primary)' }}>
              2+
            </div>
            <div className="body-small" style={{ color: 'var(--text-muted)' }}>
              Years Experience
            </div>
          </div>

          <div>
            <div className="heading-2" style={{ color: 'var(--brand-primary)' }}>
              NASA
            </div>
            <div className="body-small" style={{ color: 'var(--text-muted)' }}>
              Challenge Contributor
            </div>
          </div>
        </div>
        {/* Right Side - Contextual Spline */}
        <div 
          ref={splineRef}
          style={{
            width: '700px',
            height: '700px',
            overflow: 'visible',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: splineOpacity,
            filter: phase >= 1 ? 'blur(0px)' : 'blur(20px)',
            transition: 'opacity 0.8s ease-out, filter 0.8s ease-out'
          }}
        >
          <Suspense fallback={
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle, rgba(0, 255, 209, 0.1) 0%, transparent 70%)',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              <div className="body-medium" style={{ color: 'var(--brand-primary)' }}>Loading...</div>
            </div>
          }>
            <Spline
              scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </Suspense>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite',
        opacity: phase >= 3 ? 0.7 : 0,
        transition: 'opacity 0.6s ease-out'
      }}>
        <div style={{
          width: '2px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--brand-primary), transparent)',
          margin: '0 auto'
        }}></div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @media (max-width: 1200px) {
          section > div:nth-child(3) {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          section > div:nth-child(3) > div:last-child {
            display: none !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;