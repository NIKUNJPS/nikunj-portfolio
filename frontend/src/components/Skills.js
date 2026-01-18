import React, { useState, useEffect, useRef } from 'react';
import { Brain, Server, Code, Database, Cloud, Terminal } from 'lucide-react';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Animate category headers only once on first reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

const Skills = () => {
  const skillsData = [
    {
      category: 'AI & Machine Learning',
      icon: <Brain size={28} />,
      skills: [
        { name: 'Machine Learning', desc: 'Scikit-Learn, model training & deployment' },
        { name: 'Natural Language Processing', desc: 'Text analysis, semantic search, NLP pipelines' },
        { name: 'Deep Learning', desc: 'TensorFlow, neural networks, model optimization' },
        { name: 'AI Automation', desc: 'Intelligent workflows, predictive systems' }
      ]
    },
    {
      category: 'Backend Engineering',
      icon: <Server size={28} />,
      skills: [
        { name: 'FastAPI', desc: 'High-performance REST APIs, async workflows' },
        { name: 'Python', desc: 'Production-grade backend systems' },
        { name: 'Django', desc: 'Full-stack web frameworks' },
        { name: 'API Design', desc: 'RESTful architecture, scalable endpoints' }
      ]
    },
    {
      category: 'Frontend Development',
      icon: <Code size={28} />,
      skills: [
        { name: 'React', desc: 'Component architecture, state management' },
        { name: 'Next.js', desc: 'Server-side rendering, modern web apps' },
        { name: 'Tailwind CSS', desc: 'Utility-first styling, responsive design' },
        { name: 'Modern JavaScript', desc: 'ES6+, async patterns, performance' }
      ]
    },
    {
      category: 'Data & Analytics',
      icon: <Database size={28} />,
      skills: [
        { name: 'Data Processing', desc: 'Pandas, NumPy, ETL pipelines' },
        { name: 'Data Visualization', desc: 'PowerBI, Matplotlib, insights generation' },
        { name: 'SQL', desc: 'Database design, optimization, queries' },
        { name: 'Analytics', desc: 'Statistical analysis, reporting systems' }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: <Cloud size={28} />,
      skills: [
        { name: 'Docker', desc: 'Containerization, deployment automation' },
        { name: 'Git & GitHub', desc: 'Version control, collaboration, CI/CD' },
        { name: 'Linux', desc: 'System administration, shell scripting' },
        { name: 'VS Code', desc: 'Development environment, extensions' }
      ]
    },
    {
      category: 'Computer Science',
      icon: <Terminal size={28} />,
      skills: [
        { name: 'Data Structures & Algorithms', desc: 'Problem solving, optimization' },
        { name: 'Database Management', desc: 'DBMS, schema design, normalization' },
        { name: 'Operating Systems', desc: 'Process management, concurrency' },
        { name: 'Computer Networks', desc: 'Protocols, distributed systems' }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" style={{
      padding: '160px 7.6923%',
      background: 'var(--bg-primary)',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Header with Intelligence Moment */}
        <div style={{ marginBottom: '60px' }}>
          <div 
            className="body-medium" 
            style={{ 
              color: 'var(--brand-primary)', 
              marginBottom: '16px',
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.6s ease-out'
            }}
          >
            CONTEXT LOADED · Technical Expertise
          </div>
          <h2 
            className="display-large"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease-out 0.2s'
            }}
          >
            Full-Stack Intelligence
          </h2>
        </div>

        {/* Capability Matrix with Focus Logic */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '40px',
          marginTop: '60px'
        }}>
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                padding: '40px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.4s ease-in-out',
                opacity: hoveredCard !== null && hoveredCard !== idx ? 0.4 : 1,
                transform: hoveredCard === idx ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredCard === idx ? '0 8px 32px rgba(0, 255, 209, 0.2)' : 'none'
              }}
            >
              <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  color: 'var(--brand-primary)',
                  transition: 'transform 0.3s ease',
                  transform: hoveredCard === idx ? 'scale(1.1)' : 'scale(1)'
                }}>
                  {category.icon}
                </div>
                <h3 className="heading-2">{category.category}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="body-medium" style={{ marginBottom: '4px', color: 'var(--text-primary)' }}>
                      {skill.name}
                    </div>
                    <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                      {skill.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: '100px' }}>
          <h3 className="heading-1" style={{ marginBottom: '40px', color: 'var(--brand-primary)' }}>
            Certifications & Achievements
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              padding: '32px',
              background: 'rgba(0, 255, 209, 0.05)',
              border: '1px solid rgba(0, 255, 209, 0.2)'
            }}>
              <div className="heading-3" style={{ marginBottom: '8px' }}>Professional AI & Data Science</div>
              <div className="body-small" style={{ color: 'var(--text-muted)' }}>IIT Indore (DRISHTI CPS) × Microsoft</div>
            </div>
            <div style={{
              padding: '32px',
              background: 'rgba(0, 255, 209, 0.05)',
              border: '1px solid rgba(0, 255, 209, 0.2)'
            }}>
              <div className="heading-3" style={{ marginBottom: '8px' }}>Microsoft SQL Certification</div>
              <div className="body-small" style={{ color: 'var(--text-muted)' }}>Database Management & Optimization</div>
            </div>
            <div style={{
              padding: '32px',
              background: 'rgba(0, 255, 209, 0.05)',
              border: '1px solid rgba(0, 255, 209, 0.2)'
            }}>
              <div className="heading-3" style={{ marginBottom: '8px' }}>NASA Space Apps Challenge</div>
              <div className="body-small" style={{ color: 'var(--text-muted)' }}>Project Contributor 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;