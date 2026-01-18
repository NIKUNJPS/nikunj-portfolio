import React from 'react';
import { Target, Code, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" style={{
      padding: '160px 7.6923%',
      background: 'var(--bg-primary)',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px' }}>
          <div className="body-medium" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>
            Mission Statement
          </div>
          <h2 className="display-large" style={{ marginBottom: '24px' }}>
            Building Systems That Think,{' '}
            <span style={{ color: 'var(--brand-primary)' }}>Not Just Execute</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginTop: '60px'
        }}>
          <div style={{
            padding: '40px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            transition: 'all 0.4s ease-in-out'
          }} className="dark-hover">
            <Brain size={32} style={{ color: 'var(--brand-primary)', marginBottom: '20px' }} />
            <h3 className="heading-2" style={{ marginBottom: '16px' }}>AI-First Engineering</h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              Integrating machine learning and intelligent automation into scalable production systems. From NLP pipelines to predictive analytics, I build AI that delivers measurable impact.
            </p>
          </div>

          <div style={{
            padding: '40px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            transition: 'all 0.4s ease-in-out'
          }} className="dark-hover">
            <Code size={32} style={{ color: 'var(--brand-primary)', marginBottom: '20px' }} />
            <h3 className="heading-2" style={{ marginBottom: '16px' }}>Full-Stack Architecture</h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              Designing end-to-end systems with React frontends, FastAPI backends, and intelligent data layers. Clean architecture, optimized performance, production-grade reliability.
            </p>
          </div>

          <div style={{
            padding: '40px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            transition: 'all 0.4s ease-in-out'
          }} className="dark-hover">
            <Target size={32} style={{ color: 'var(--brand-primary)', marginBottom: '20px' }} />
            <h3 className="heading-2" style={{ marginBottom: '16px' }}>Systems Thinking</h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              I don't build features—I solve problems. Every project starts with understanding the system, identifying bottlenecks, and architecting solutions that scale and adapt.
            </p>
          </div>
        </div>

        <div style={{
          marginTop: '100px',
          padding: '60px',
          background: 'rgba(0, 255, 209, 0.05)',
          border: '1px solid rgba(0, 255, 209, 0.2)'
        }}>
          <p className="body-large" style={{ maxWidth: '900px' }}>
            Currently working as a <strong style={{ color: 'var(--brand-primary)' }}>Full Stack Developer Intern at Upscalers Technology</strong>, 
            developing AI-driven automation workflows and production-grade web applications. Previously contributed to the <strong style={{ color: 'var(--brand-primary)' }}>NASA Space Apps Challenge 2025</strong>, 
            building intelligent analytics systems for bioscience datasets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;