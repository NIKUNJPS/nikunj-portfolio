import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleNodes, setVisibleNodes] = useState([]);
  const sectionRef = useRef(null);
  const nodeRefs = useRef([]);

  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Upscalers Technology',
      location: 'Remote',
      duration: 'Jan 2026 – Present',
      current: true,
      responsibilities: [
        'Developing and maintaining production-grade full-stack web applications',
        'Building AI & ML automation workflows for intelligent data processing',
        'Backend development with FastAPI, testing, debugging, and performance optimization',
        'Collaborating with senior developers on scalable system architecture'
      ]
    },
    {
      role: 'AI Intern',
      company: 'CapOasis',
      location: 'Remote',
      duration: 'Oct 2025 – Jan 2026',
      current: false,
      responsibilities: [
        'Developed AI-driven backend workflows for data automation',
        'Implemented data processing pipelines and automation logic',
        'Integrated machine learning models into production systems',
        'Optimized AI workflows for performance and scalability'
      ]
    },
    {
      role: 'Internship Student',
      company: 'ABB',
      location: 'Nashik, India',
      duration: 'Jan 2024 – Feb 2024',
      current: false,
      responsibilities: [
        'Analyzed inventory and stock movement data for operational insights',
        'Built automated reporting workflows to track availability and utilization',
        'Ensured data accuracy and generated actionable insights',
        'Collaborated with engineering teams on data-driven decision making'
      ]
    }
  ];

  // Scroll-based progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const sectionTop = rect.top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const visible = Math.max(0, Math.min(windowHeight - sectionTop, sectionHeight));
        const progress = (visible / sectionHeight) * 100;
        setScrollProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Node visibility tracking
  useEffect(() => {
    const observers = nodeRefs.current.map((node, idx) => {
      if (!node) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleNodes(prev => [...new Set([...prev, idx])]);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(node);
      return observer;
    });

    return () => observers.forEach(obs => obs && obs.disconnect());
  }, []);

  return (
    <section ref={sectionRef} id="experience" style={{
      padding: '160px 7.6923%',
      background: 'var(--bg-primary)',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px' }}>
          <div className="body-medium" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>
            Career Progression
          </div>
          <h2 className="display-large">
            Building Intelligence,{' '}
            <span style={{ color: 'var(--brand-primary)' }}>One System at a Time</span>
          </h2>
        </div>

        {/* Timeline with Scroll Progress */}
        <div style={{ position: 'relative', marginTop: '60px' }}>
          {/* Base Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'rgba(255, 255, 255, 0.1)',
            zIndex: 0
          }} />
          
          {/* Progress Line (fills based on scroll) */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '0',
            width: '2px',
            height: `${scrollProgress}%`,
            background: 'linear-gradient(to bottom, var(--brand-primary), var(--brand-active))',
            zIndex: 1,
            transition: 'height 0.1s ease-out',
            boxShadow: '0 0 10px rgba(0, 255, 209, 0.5)'
          }} />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              ref={el => nodeRefs.current[idx] = el}
              style={{
                position: 'relative',
                paddingLeft: '60px',
                paddingBottom: idx === experiences.length - 1 ? '0' : '80px',
                opacity: visibleNodes.includes(idx) ? 1 : 0.3,
                transform: visibleNodes.includes(idx) ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.6s ease-out'
              }}
            >
              {/* Timeline Dot with activation state */}
              <div style={{
                position: 'absolute',
                left: '-8px',
                top: '0',
                width: '20px',
                height: '20px',
                borderRadius: '0',
                background: visibleNodes.includes(idx) 
                  ? (exp.current ? 'var(--brand-primary)' : 'var(--brand-active)') 
                  : 'var(--bg-secondary)',
                border: `2px solid ${visibleNodes.includes(idx) ? 'var(--brand-primary)' : 'rgba(255, 255, 255, 0.2)'}`,
                zIndex: 2,
                boxShadow: visibleNodes.includes(idx) && exp.current 
                  ? '0 0 20px rgba(0, 255, 209, 0.5)' 
                  : 'none',
                transition: 'all 0.4s ease-out'
              }} />

              {/* Content Card */}
              <div style={{
                padding: '40px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.4s ease-in-out'
              }} className="dark-hover">
                {exp.current && (
                  <div style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    background: 'var(--brand-primary)',
                    color: '#000000',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '20px',
                    borderRadius: '0'
                  }}>
                    CURRENT
                  </div>
                )}

                <h3 className="heading-1" style={{ marginBottom: '12px' }}>
                  {exp.role}
                </h3>

                <div style={{
                  display: 'flex',
                  gap: '24px',
                  marginBottom: '24px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Briefcase size={18} style={{ color: 'var(--brand-primary)' }} />
                    <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      {exp.company}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={18} style={{ color: 'var(--brand-primary)' }} />
                    <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      {exp.duration}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} style={{ color: 'var(--brand-primary)' }} />
                    <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {exp.responsibilities.map((resp, respIdx) => (
                    <div key={respIdx} style={{ display: 'flex', gap: '12px' }}>
                      <div style={{
                        minWidth: '6px',
                        height: '6px',
                        background: 'var(--brand-primary)',
                        marginTop: '8px',
                        flexShrink: 0
                      }} />
                      <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
