import React from 'react';
import heroImage from './assets/mara1.jpg';
import campfireImage from './assets/campfire.jpg';
import tentImage from './assets/tent.jpg';

// Activities
import manyatta from './assets/manyatta.jpg';
import balloon from './assets/hotair-balloon.jpg';
import drive1 from './assets/landcruiser-drive1.jpg';
import drive2 from './assets/landcruiser-drive2.jpg';
import cheetah from './assets/cheetah.jpg';
import lion from './assets/lion.jpg';

// Gallery (use any of these images)
import tent2 from './assets/tent2.jpg';
import wildebeest from './assets/wildebeest.jpg';

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* HERO */}
      <section style={{
        padding: '60px 20px',
        textAlign: 'center',
        background: `url(${heroImage}) no-repeat center/cover`,
        color: 'white'
      }}>
        <h1>Ereto Mara Paradise Camp</h1>
        <p>Experience the Wild in Comfort and Style 🌿</p>
      </section>

      {/* LOCATION */}
      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Location & Accessibility</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
          Ereto Mara Paradise Camp is located in the heart of the Maasai Mara, within the Enashulai Conservancy.
          <br /><br />
          Just 100m from the main road and only a 10-minute drive to Sekenani Main Gate,
          the camp offers both convenience and an authentic wilderness experience.
        </p>
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
            <p>AirBnB — $140</p>
            <p>Tent — $12 / person</p>
          </div>

          <div>
            <h3>🌿 Low Season</h3>
            <p>Single Room — $62</p>
            <p>Double Room — $93</p>
            <p>Twin Room — $93</p>
            <p>Triple Room — $140</p>
            <p>AirBnB — $100</p>
            <p>Tent — $12 / person</p>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section style={{ padding: '60px 20px', textAlign: 'center', background: '#f1f5f9' }}>
        <h2>Experiences & Activities</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {[
            { img: manyatta, text: "Maasai Manyatta Visit" },
            { img: campfireImage, text: "Bonfire Experience 🔥" },
            { img: cheetah, text: "Nature Walks" },
            { img: lion, text: "Museum Visits" },
            { img: balloon, text: "Hot Air Balloon 🎈" },
            { img: drive1, text: "Game Drive 🐘" },
            { img: drive2, text: "Extended Safari Drives" }
          ].map((item, i) => (
            <div key={i} style={{ width: '250px' }}>
              <img src={item.img} style={{ width: '100%', borderRadius: '10px' }} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2>Gallery</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
          {[tentImage, tent2, wildebeest, campfireImage].map((img, i) => (
            <img
              key={i}
              src={img}
              style={{
                width: '250px',
                borderRadius: '10px',
                transition: '0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '30px', textAlign: 'center', background: '#1e293b', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
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