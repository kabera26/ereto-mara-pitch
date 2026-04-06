// src/App.jsx
import React from "react";
import "./App.css";

// Hero / Main Images
import heroImage from "./assets/mara1.jpg";

// Activities Images
import campfire from "./assets/campfire.jpg";
import manyatta from "./assets/manyatta.jpg";
import hotair from "./assets/hotair baloon.jpg";
import land1 from "./assets/landcruiser drive1.jpg";
import land2 from "./assets/landcruiser drive2.jpg";
import lion from "./assets/lion.jpg";
import cheetah from "./assets/cheetah.jpg";
import wildebeest from "./assets/wildebeest.jpg";

// Rooms
import room1 from "./assets/room.jpg";
import room2 from "./assets/room2.jpg";

// Guest Experience
import guest1 from "./assets/guest.jpg";
import guest2 from "./assets/guests2.jpg";

// WhatsApp
const whatsappNumber = "+27601234567";

// Categories
const rooms = [
  { src: room1, caption: "Cozy single room" },
  { src: room2, caption: "Double room with balcony" },
];

const guests = [
  { src: guest1, caption: "Guests enjoying the campfire" },
  { src: guest2, caption: "Guests having dinner" },
];

const activities = [
  { src: campfire, caption: "Bonfire dinner & breakfast" },
  { src: manyatta, caption: "Visit Maasai Manyatta" },
  { src: hotair, caption: "Hot air balloon rides" },
  { src: land1, caption: "Full day Landcruiser game drive" },
  { src: land2, caption: "Safari drive experience" },
  { src: lion, caption: "Lions in Maasai Mara" },
  { src: cheetah, caption: "Cheetahs in the park" },
  { src: wildebeest, caption: "Wildebeest migration" },
];

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <img src={heroImage} alt="Ereto Mara Paradise Camp" className="hero-img" />
        <div className="hero-text">
          <h1>Ereto Mara Paradise Camp</h1>
          <p>Maasai Mara, Enashulai Conservancy</p>
          <p>100m from main road | 10 mins to Sekenani Main Gate</p>
        </div>
        <a
          href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* Rates Section */}
      <section className="rates">
        <h2>Rates (Full Board)</h2>
        <table>
          <thead>
            <tr>
              <th>Room Type</th>
              <th>Low Season</th>
              <th>High Season</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single Room</td>
              <td>$62</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>Double Room</td>
              <td>$93</td>
              <td>$140</td>
            </tr>
            <tr>
              <td>Twin Room</td>
              <td>$93</td>
              <td>$140</td>
            </tr>
            <tr>
              <td>Triple Room</td>
              <td>$140</td>
              <td>$185</td>
            </tr>
            <tr>
              <td>AirBnB 3-bedroom</td>
              <td>$100</td>
              <td>$140</td>
            </tr>
            <tr>
              <td>Pitching Tent (per person)</td>
              <td>$12</td>
              <td>$12</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Activities Section */}
      <section className="activities">
        <h2>Activities</h2>
        <div className="activities-grid">
          {activities.map((act, idx) => (
            <div className="activity-item" key={idx}>
              <img src={act.src} alt={act.caption} />
              <p>{act.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms Section */}
      <section className="gallery-category">
        <h2>Rooms</h2>
        <div className="gallery-grid">
          {rooms.map((img, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={img.src} alt={img.caption} />
              <p>{img.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guest Experience Section */}
      <section className="gallery-category">
        <h2>Guest Experience</h2>
        <div className="gallery-grid">
          {guests.map((img, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={img.src} alt={img.caption} />
              <p>{img.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Ereto Mara Paradise Camp</p>
      </footer>
    </div>
  );
}

export default App;