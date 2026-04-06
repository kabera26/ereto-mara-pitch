import React from 'react';
import heroImage from './assets/mara1.jpg';
import campfireImage from './assets/campfire.jpg';
import tentImage from './assets/tent.jpg';

// Activities images (your actual files)
import manyatta from './assets/manyatta.jpg';
import balloon from './assets/hotair-balloon.jpg';
import drive1 from './assets/landcruiser-drive1.jpg';
import drive2 from './assets/landcruiser-drive2.jpg';
import cheetah from './assets/cheetah.jpg';
import lion from './assets/lion.jpg';

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", margin: 0 }}>

      {/* HERO */}
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
        <h1 style={{ fontSize: '3rem' }}>Ereto Mara Paradise Camp</h1>
        <p>Experience the Wild in Comfort and Style 🌿</p>

        <button
          style={{
            padding: '12px 20px',
            backgroundColor: '#fbbf24',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
          onClick={() => window.location.href = "https://wa.me/27821234567"}
        >
          Chat on WhatsApp
        </button>
      </section>

      {/* RATES */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2>Accommodation Rates (Full Board)</h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>

          <div>
            <h3>🌞 High Season</h3>
            <p>Single Room — $100</p>
            <p>Double Room — $140</p>
            <p>Twin Room — $140</p>
            <p>Triple Room — $185</p>
            <p>AirBnB (3 Bedroom) — $140</p>
            <p>Pitching Tent — $12 / person</p>
          </div>

          <div>
            <h3>🌿 Low Season</h3>
            <p>Single Room — $62</p>
            <p>Double Room — $93</p>
            <p>Twin Room — $93</p>
            <p>Triple Room — $140</p>
            <p>AirBnB (3 Bedroom) — $100</p>
            <p>Pitching Tent — $12 / person</p>
          </div>

        </div>

        <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
          All rates are on a full board basis.
        </p>
      </section>

      {/* ACTIVITIES */}
      <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f1f5f9' }}>
        <h2>Experiences & Activities</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>

          {[
            { img: manyatta, text: "Visit to the Maasai Manyatta" },
            { img: campfireImage, text: "Bonfire Dinner & Breakfast 🔥" },
            { img: cheetah, text: "Guided Nature Walks" },
            { img: lion, text: "Visit to Maasai Mara Museum" },
            { img: balloon, text: "Hot Air Balloon Safari 🎈" },
            { img: drive1, text: "Full Day Game Drive 🐘" },
            { img: drive2, text: "Extended Game Drives Experience" }
          ].map((item, i) => (
            <div key={i} style={{ width: '250px' }}>
              <img
                src={item.img}
                alt=""
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  transition: '0.3s',
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
              <p style={{ marginTop: '10px' }}>{item.text}</p>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '30px', textAlign: 'center', backgroundColor: '#1e293b', color: 'white' }}>
        <div style={{ fontSize: '1.5rem', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
        <p>© 2026 Ereto Mara Paradise Camp</p>
      </footer>

    </div>
  );
}

export default App;