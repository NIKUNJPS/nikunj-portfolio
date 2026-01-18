import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission for now
    setStatus('Message sent successfully! (Mock — backend integration pending)');
    setTimeout(() => setStatus(''), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      style={{
        padding: '160px 7.6923%',
        background: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <div
            className="body-medium"
            style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}
          >
            Get In Touch
          </div>

          <h2 className="display-large" style={{ marginBottom: '24px' }}>
            Let’s Build Intelligent Systems{' '}
            <span style={{ color: 'var(--brand-primary)' }}>That Matter</span>
          </h2>

          <p
            className="body-large"
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            Open to full-time roles, consulting opportunities, and collaborations
            focused on AI, machine learning, backend systems, and scalable
            full-stack applications.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            marginTop: '60px'
          }}
        >
          {/* Contact Info */}
          <div>
            <h3 className="heading-1" style={{ marginBottom: '32px' }}>
              Contact Information
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Email */}
              <a
                href="mailto:niks.shah236@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  textDecoration: 'none',
                  transition: 'all 0.4s ease-in-out'
                }}
                className="dark-hover"
              >
                <Mail size={24} style={{ color: 'var(--brand-primary)' }} />
                <div>
                  <div
                    className="body-small"
                    style={{ color: 'var(--text-muted)', marginBottom: '4px' }}
                  >
                    Email
                  </div>
                  <div className="body-medium" style={{ color: 'var(--text-primary)' }}>
                    niks.shah236@gmail.com
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nikunj-shah"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  textDecoration: 'none',
                  transition: 'all 0.4s ease-in-out'
                }}
                className="dark-hover"
              >
                <Linkedin size={24} style={{ color: 'var(--brand-primary)' }} />
                <div>
                  <div
                    className="body-small"
                    style={{ color: 'var(--text-muted)', marginBottom: '4px' }}
                  >
                    LinkedIn
                  </div>
                  <div className="body-medium" style={{ color: 'var(--text-primary)' }}>
                    /in/nikunj-shah
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/NIKUNJPS"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  textDecoration: 'none',
                  transition: 'all 0.4s ease-in-out'
                }}
                className="dark-hover"
              >
                <Github size={24} style={{ color: 'var(--brand-primary)' }} />
                <div>
                  <div
                    className="body-small"
                    style={{ color: 'var(--text-muted)', marginBottom: '4px' }}
                  >
                    GitHub
                  </div>
                  <div className="body-medium" style={{ color: 'var(--text-primary)' }}>
                    /NIKUNJPS
                  </div>
                </div>
              </a>

              {/* Location */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <MapPin size={24} style={{ color: 'var(--brand-primary)' }} />
                <div>
                  <div
                    className="body-small"
                    style={{ color: 'var(--text-muted)', marginBottom: '4px' }}
                  >
                    Location
                  </div>
                  <div className="body-medium" style={{ color: 'var(--text-primary)' }}>
                    Nashik, Maharashtra, India
                  </div>
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                    IST (UTC +5:30)
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div
              style={{
                marginTop: '40px',
                padding: '24px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--brand-primary)' }}>Open to:</strong>{' '}
                Full-time roles, AI/ML engineering positions, backend systems,
                automation projects, and meaningful technical collaborations.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="heading-1" style={{ marginBottom: '32px' }}>
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <label
                    className="body-medium"
                    style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '16px',
                      fontFamily: 'inherit',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = '1px solid var(--brand-primary)')
                    }
                    onBlur={(e) =>
                      (e.target.style.border = '1px solid var(--border-subtle)')
                    }
                  />
                </div>
              ))}

              <div>
                <label
                  className="body-medium"
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'var(--text-secondary)'
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s ease',
                    resize: 'vertical'
                  }}
                  onFocus={(e) =>
                    (e.target.style.border = '1px solid var(--brand-primary)')
                  }
                  onBlur={(e) =>
                    (e.target.style.border = '1px solid var(--border-subtle)')
                  }
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Send Message <Send size={20} />
              </button>

              {status && (
                <div
                  style={{
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--brand-primary)',
                    textAlign: 'center'
                  }}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: '100px',
            paddingTop: '60px',
            borderTop: '1px solid var(--border-subtle)',
            textAlign: 'center'
          }}
        >
          <p
            className="body-large"
            style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}
          >
            "When someone visits, they should feel:{' '}
            <em style={{ color: 'var(--brand-primary)' }}>
              This person understands systems, not just code.
            </em>
            "
          </p>

          <div
            className="body-small"
            style={{
              color: 'var(--text-muted)',
              marginBottom: '12px',
              letterSpacing: '0.05em'
            }}
          >
            END OF SIGNAL · REACH OUT TO CONTINUE
          </div>

          <p className="body-small" style={{ color: 'var(--text-muted)' }}>
            © 2025 Nikunj Shah. Built with intelligence.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #contact > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
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

export default Contact;
