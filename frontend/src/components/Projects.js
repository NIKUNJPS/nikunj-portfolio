import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'AI-Powered Bioscience Intelligence Dashboard',
      tagline: 'NASA Space Apps Challenge 2025',
      problem: 'NASA bioscience datasets were scattered, unstructured, and difficult to search and analyze for researchers and scientists.',
      solution: 'Built an intelligent analytics dashboard with NLP-based semantic search, real-time data scraping pipelines, and automated data processing workflows.',
      impact: 'Enabled researchers to query and visualize complex bioscience data in real-time, reducing data analysis time by 60%+.',
      tech: ['FastAPI', 'Python', 'NLP', 'PowerBI', 'Data Pipelines', 'Semantic Search'],
      featured: true
    },
    {
      name: 'Machine Learning Model Deployment Platform',
      tagline: 'Production-Grade ML Infrastructure',
      problem: 'ML models often remain in notebooks and never reach production due to deployment complexity and infrastructure challenges.',
      solution: 'Designed and built a scalable platform for deploying ML models with RESTful inference APIs, automated containerization using Docker, and production monitoring.',
      impact: 'Reduced model deployment time from weeks to hours, enabling rapid iteration and production-grade ML systems.',
      tech: ['Python', 'FastAPI', 'Docker', 'Scikit-Learn', 'REST APIs', 'CI/CD'],
      featured: true
    },
    {
      name: 'Inventory & Stock Analytics System',
      tagline: 'ABB Internship Project',
      problem: 'Manual inventory tracking led to data inconsistencies, stock mismanagement, and inefficient resource allocation.',
      solution: 'Analyzed inventory and stock movement data, built automated reporting workflows with SQL queries, and created dashboards for real-time tracking.',
      impact: 'Improved inventory accuracy by 40% and enabled data-driven decision making for stock availability and utilization.',
      tech: ['Python', 'SQL', 'Data Analytics', 'Automated Reporting', 'Excel'],
      featured: false
    },
    {
      name: 'AI & Automation Workflows',
      tagline: 'CapOasis Backend Systems',
      problem: 'Repetitive data processing tasks consumed significant engineering time and were prone to human error.',
      solution: 'Developed AI-driven automation workflows with intelligent data processing pipelines, model integration, and backend optimization.',
      impact: 'Automated 70% of manual data processing tasks, freeing up engineering resources for high-value problem solving.',
      tech: ['Python', 'AI/ML', 'Backend Automation', 'Data Processing', 'FastAPI'],
      featured: false
    }
  ];

  return (
    <section id="projects" style={{
      padding: '160px 7.6923%',
      background: 'var(--bg-primary)',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px' }}>
          <div className="body-medium" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>
            Case Studies
          </div>
          <h2 className="display-large">
            Systems That Solve Problems,{' '}
            <span style={{ color: 'var(--brand-primary)' }}>Not Just Look Good</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', marginTop: '60px' }}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              style={{
                padding: '60px',
                background: project.featured ? 'rgba(0, 255, 209, 0.03)' : 'rgba(255, 255, 255, 0.02)',
                border: project.featured ? '1px solid rgba(0, 255, 209, 0.3)' : '1px solid var(--border-subtle)',
                transition: 'all 0.4s ease-in-out',
                position: 'relative'
              }}
              className="dark-hover"
            >
              {project.featured && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  padding: '6px 16px',
                  background: 'var(--brand-primary)',
                  color: '#000000',
                  fontSize: '14px',
                  fontWeight: '600',
                  borderRadius: '0'
                }}>
                  FEATURED
                </div>
              )}

              <div style={{ marginBottom: '32px' }}>
                <h3 className="heading-1" style={{ marginBottom: '12px' }}>
                  {project.name}
                </h3>
                <p className="body-medium" style={{ color: 'var(--brand-primary)' }}>
                  {project.tagline}
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
                marginBottom: '32px'
              }}>
                <div>
                  <div className="heading-3" style={{ marginBottom: '12px', color: 'var(--text-muted)' }}>
                    Problem
                  </div>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    {project.problem}
                  </p>
                </div>
                <div>
                  <div className="heading-3" style={{ marginBottom: '12px', color: 'var(--text-muted)' }}>
                    Solution
                  </div>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    {project.solution}
                  </p>
                </div>
                <div>
                  <div className="heading-3" style={{ marginBottom: '12px', color: 'var(--text-muted)' }}>
                    Impact
                  </div>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    {project.impact}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '32px' }}>
                <div className="body-small" style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>
                  Tech Stack
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {project.tech.map((tech, techIdx) => (
                    <div
                      key={techIdx}
                      style={{
                        padding: '8px 16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        borderRadius: '0'
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          marginTop: '100px',
          padding: '60px',
          background: 'rgba(0, 255, 209, 0.05)',
          border: '1px solid rgba(0, 255, 209, 0.2)',
          textAlign: 'center'
        }}>
          <h3 className="display-medium" style={{ marginBottom: '24px' }}>
            Let’s Build Something Intelligent
          </h3>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px' }}>
            These projects represent my approach: understand the problem, architect the system, deliver measurable impact.
          </p>
          <button className="btn-primary" onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              const offset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }}>
            Start a Conversation <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;