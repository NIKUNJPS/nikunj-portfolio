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
              <a
                href="mailto:niks.shah236@gmail.com"
                className="dark-hover"
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
              >
                <Mail size={24} style={{ color: 'var(--brand-primary)' }} />
                <div>
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                    Email
                  </div>
                  <div className="body-medium" style={{ color: 'var(--text-primary)' }}>
                    niks.shah236@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nikunj-shah-9b4130282/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark-hover"
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
              >
                <Linkedin size={24} style={{ color: 'var(--brand-primary)' }} />
                <div>
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                    LinkedIn
                  </div>
                  <div className="body-medium" style={{ color: 'var(--text-primary)' }}>
                    /in/nikunj-shah
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/NIKUNJPS"
                target="_blank"
                rel="noopener noreferrer"
                className="dark-hover"
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
              >
                <Github size={24} style={{ color: 'var(--brand-primary)' }} />
                <div>
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                    GitHub
                  </div>
                  <div className="body-medium" style={{ color: 'var(--text-primary)' }}>
                    /NIKUNJPS
                  </div>
                </div>
              </a>

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
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
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
                  <label className="body-medium" style={{ color: 'var(--text-secondary)' }}>
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
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
              ))}

              <div>
                <label className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Message <Send size={20} />
              </button>

              {status && (
                <div
                  style={{
                    padding: '16px',
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
          <p className="body-small" style={{ color: 'var(--text-muted)' }}>
            © 2025 Nikunj Shah. Built with intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
