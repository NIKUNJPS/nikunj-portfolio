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
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 7.6923% 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        maxWidth: '1400px',
        width: '100%',
        alignItems: 'center'
      }}>
        {/* Left Side - Content */}
        <div style={{ zIndex: 2 }}>
          <div style={{ marginBottom: '24px' }}>
            <div className="body-medium" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>
              AI Engineer & Full-Stack Developer
            </div>
            <h1 className="display-huge" style={{ marginBottom: '24px' }}>
              Building Intelligent Systems,{' '}
              <span style={{ color: 'var(--brand-primary)' }}>Not Just Software</span>
            </h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
              Focused on AI-driven automation, scalable backend applications, and intelligent data systems that solve real problems.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
            <button onClick={scrollToProjects} className="btn-primary">
              View Work <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">
              <Download size={20} /> Download Resume
            </button>
            <button onClick={scrollToContact} className="btn-secondary">
              <Mail size={20} /> Contact
            </button>
          </div>

          <div style={{ marginTop: '60px', display: 'flex', gap: '40px' }}>
            <div>
              <div className="heading-2" style={{ color: 'var(--brand-primary)' }}>3+</div>
              <div className="body-small" style={{ color: 'var(--text-muted)' }}>Projects Deployed</div>
            </div>
            <div>
              <div className="heading-2" style={{ color: 'var(--brand-primary)' }}>2+</div>
              <div className="body-small" style={{ color: 'var(--text-muted)' }}>Years Experience</div>
            </div>
            <div>
              <div className="heading-2" style={{ color: 'var(--brand-primary)' }}>NASA</div>
              <div className="body-small" style={{ color: 'var(--text-muted)' }}>Challenge Contributor</div>
            </div>
          </div>
        </div>

        {/* Right Side - Spline Integration */}
        <div style={{
          width: '700px',
          height: '700px',
          overflow: 'visible',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
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
        animation: 'bounce 2s infinite'
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
          section > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          section > div > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;