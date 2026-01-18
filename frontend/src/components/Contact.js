import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs
      .send(
        'service_9fa0j1u',      
        'template_l2sl01t',  
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'fKyqSIy6l9wnYWeK-'       
      )
      .then(
        () => {
          setStatus('Message sent successfully! 🚀');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setLoading(false);
        },
        () => {
          setStatus('Something went wrong. Please try again.');
          setLoading(false);
        }
      );
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
                style={contactCard}
              >
                <Mail size={24} style={{ color: 'var(--brand-primary)' }} />
                <span>niks.shah236@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nikunj-shah-9b4130282/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark-hover"
                style={contactCard}
              >
                <Linkedin size={24} style={{ color: 'var(--brand-primary)' }} />
                <span>/in/nikunj-shah</span>
              </a>

              <a
                href="https://github.com/NIKUNJPS"
                target="_blank"
                rel="noopener noreferrer"
                className="dark-hover"
                style={contactCard}
              >
                <Github size={24} style={{ color: 'var(--brand-primary)' }} />
                <span>/NIKUNJPS</span>
              </a>

              <div style={contactCard}>
                <MapPin size={24} style={{ color: 'var(--brand-primary)' }} />
                <span>Nashik, Maharashtra, India (IST)</span>
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
                <input
                  key={field}
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  style={inputStyle}
                />
              ))}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                placeholder="Message"
                style={inputStyle}
              />

              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Sending...' : <>Send Message <Send size={18} /></>}
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

const contactCard = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '20px',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--border-subtle)',
  textDecoration: 'none',
  color: 'var(--text-primary)',
  transition: 'all 0.4s ease'
};

const inputStyle = {
  width: '100%',
  padding: '16px',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--text-primary)',
  fontSize: '16px'
};

export default Contact;
