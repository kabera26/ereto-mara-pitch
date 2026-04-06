import React from 'react';
import heroImage from './assets/mara1.jpg';

// Accommodation (tents)
import tent1 from './assets/tent.jpg';
import tent2 from './assets/tent2.jpg';

// Rooms
import room1 from './assets/room.jpg';
import room2 from './assets/room2.jpg';

// Guests
import guest1 from './assets/guest.jpg';
import guest2 from './assets/guests2.jpg';

// Experience
import campfire from './assets/campfire.jpg';
import manyatta from './assets/manyatta.jpg';

// Wildlife
import lion from './assets/lion.jpg';
import cheetah from './assets/cheetah.jpg';
import wildebeest from './assets/wildebeest.jpg';

// Safari
import drive1 from './assets/landcruiser-drive1.jpg';
import drive2 from './assets/landcruiser-drive2.jpg';

// Balloon
import balloon from './assets/hotair-balloon.jpg';

import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/27821234567"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#25D366',
          color: 'white',
          padding: '14px',
          borderRadius: '50%',
          zIndex: 9999
        }}
      >
        <FaWhatsapp />
      </a>

      {/* HERO */}
      <section style={{
        height: '100vh',
        background: `url(${heroImage}) center/cover`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div>
          <h1>Ereto Mara Paradise Camp</h1>
          <p>Experience the Wild in Comfort and Style 🌿</p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section style={{ padding: '60px 20px', background: '#0f172a', color: 'white', textAlign: 'center' }}>
        <h2>Experiences & Activities</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {[
            { img: manyatta, text: "Maasai Cultural Experience" },
            { img: campfire, text: "Bonfire Dining Experience 🔥" },
            { img: drive1, text: "Game Drives 🐘" },
            { img: balloon, text: "Hot Air Balloon Safari 🎈" }
          ].map((item, i) => (
            <div key={i} style={{ width: '260px' }}>
              <img src={item.img} style={{ width: '100%', borderRadius: '10px' }} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2>Gallery</h2>

        {/* ROOMS */}
        <h3>🛏️ Rooms</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
          {[room1, room2].map((img, i) => (
            <img key={i} src={img} style={{ width: '250px', borderRadius: '10px' }} />
          ))}
        </div>

        {/* TENTS */}
        <h3 style={{ marginTop: '40px' }}>🏕️ Tented Accommodation</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
          {[tent1, tent2].map((img, i) => (
            <img key={i} src={img} style={{ width: '250px', borderRadius: '10px' }} />
          ))}
        </div>

        {/* GUEST EXPERIENCE */}
        <h3 style={{ marginTop: '40px' }}>👥 Guest Experience</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
          {[guest1, guest2, campfire].map((img, i) => (
            <img key={i} src={img} style={{ width: '250px', borderRadius: '10px' }} />
          ))}
        </div>

        {/* WILDLIFE */}
        <h3 style={{ marginTop: '40px' }}>🐾 Wildlife</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
          {[lion, cheetah, wildebeest].map((img, i) => (
            <img key={i} src={img} style={{ width: '250px', borderRadius: '10px' }} />
          ))}
        </div>

        {/* SAFARI */}
        <h3 style={{ marginTop: '40px' }}>🚙 Safari Experience</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
          {[drive1, drive2].map((img, i) => (
            <img key={i} src={img} style={{ width: '250px', borderRadius: '10px' }} />
          ))}
        </div>

      </section>

    </div>
  );
}

export default App;