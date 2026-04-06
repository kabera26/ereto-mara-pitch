// src/App.jsx
import React from 'react';
import heroImage from './assets/mara1.jpg';
import campfireImage from './assets/campfire.jpg';
import tentImage from './assets/tent.jpg';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", margin: 0, lineHeight: 1.6 }}>

      {/* HERO SECTION WITH PARALLAX */}
      <section
        style={{
          padding: '60px 20px',
          textAlign: 'center',
          background: `url(${heroImage}) no-repeat center/cover`,
          color: 'white',
          minHeight: '350px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          transition: 'background-position 0.1s ease'
        }}
        onMouseMove={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
          e.currentTarget.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundPosition = '50% 50%';
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: '700', margin: '0 0 15px' }}>Ereto Mara Paradise Camp</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Experience the Wild in Comfort and Style 🌿</p>

        <button
          style={{
            padding: '12px 20px',
            fontSize: '0.95rem',
            fontWeight: '600',
            backgroundColor: '#fbbf24',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            color: '#0f172a',
            transition: 'transform 0.1s ease, background-color 0.3s ease',
            alignSelf: 'center'
          }}
          onMouseMove={e => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2; 
            const y = e.clientY - rect.top - rect.height / 2;
            e.target.style.transform = `rotateX(${y * 0.05}deg) rotateY(${x * 0.05}deg) scale(1.05)`;
          }}
          onMouseLeave={e => {
            e.target.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
          }}
          onClick={() => window.location.href = "https://wa.me/27821234567"}
        >
          Chat on WhatsApp
        </button>
      </section>

      {/* HIGHLIGHTS / GALLERY */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '30px' }}>Experience the Camp</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {[tentImage, campfireImage].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={i === 0 ? "Luxury Tent" : "Campfire"}
              style={{
                width: '300px',
                borderRadius: '10px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '30px 20px', textAlign: 'center', backgroundColor: '#1e293b', color: 'white' }}>
        <div style={{ marginBottom: '15px', fontSize: '1.5rem', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaTwitter /></a>
        </div>
        <div>© 2026 Ereto Mara Paradise Camp</div>
      </footer>

      {/* RESPONSIVE MOBILE STYLES */}
      <style>
        {`
          @media (max-width: 768px) {
            h1 { font-size: 2rem !important; }
            h2 { font-size: 1.5rem !important; }
            section { padding: 40px 15px !important; }
            img { width: 90% !important; margin: 10px auto !important; }
            button { padding: 10px 18px !important; font-size: 0.9rem !important; }
          }
        `}
      </style>

    </div>
  );
}

export default App;