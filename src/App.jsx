import React from "react";
import "./App.css";

// HERO
import heroImage from "./assets/mara1.jpg";

// ACTIVITIES / EXPERIENCE
import campfire1 from "./assets/campfire1.jpg";
import campfire2 from "./assets/campfire2.jpg";
import manyatta from "./assets/manyatta.jpg";
import balloon from "./assets/hotair-balloon.jpg";
import drive1 from "./assets/landcruiser-drive1.jpg";
import drive2 from "./assets/landcruiser-drive2.jpg";

// WILDLIFE
import lion from "./assets/lion.jpg";
import cheetah from "./assets/cheetah.jpg";
import wildebeest from "./assets/wildebeest.jpg";

// TENTS
import tent1 from "./assets/tent1.jpg";
import tent2 from "./assets/tent2.jpg";

// ROOMS
import room1 from "./assets/rooms/room1.jpg";
import room2 from "./assets/rooms/room2.jpg";
import room3 from "./assets/rooms/room3.jpg";

// GUESTS
import guest1 from "./assets/guests/guest1.jpg";
import guest2 from "./assets/guests/guest2.jpg";
import guest3 from "./assets/guests/guest3.jpg";
import guest4 from "./assets/guests/guest4.jpg";

// WHATSAPP
const whatsappNumber = "27821234567";

// DATA STRUCTURE (NO MIXING ❌)
const rooms = [
  { src: room1, caption: "Single Room" },
  { src: room2, caption: "Double Room" },
  { src: room3, caption: "Triple Room" },
];

const guests = [
  { src: guest1, caption: "Guests enjoying the campfire" },
  { src: guest2, caption: "Guests having dinner" },
  { src: guest3, caption: "Guests relaxing at the camp" },
  { src: guest4, caption: "Evening guest experience" },
];

const activities = [
  { src: manyatta, caption: "Visit Maasai Manyatta" },
  { src: campfire1, caption: "Bonfire dinner experience" },
  { src: campfire2, caption: "Campfire breakfast moments" },
  { src: balloon, caption: "Hot air balloon safari" },
  { src: drive1, caption: "Game drive in Maasai Mara" },
  { src: drive2, caption: "Full day Landcruiser safari" },
];

const wildlife = [
  { src: lion, caption: "Lions in Maasai Mara" },
  { src: cheetah, caption: "Cheetahs in the wild" },
  { src: wildebeest, caption: "Wildebeest migration" },
];

const tents = [
  { src: tent1, caption: "Luxury tent accommodation" },
  { src: tent2, caption: "Spacious safari tents" },
];

function App() {
  return (
    <div className="App">

      {/* HERO */}
      <section className="hero">
        <img src={heroImage} className="hero-img" />
        <div className="hero-text">
          <h1>Ereto Mara Paradise Camp</h1>
          <p>Maasai Mara | Enashulai Conservancy</p>
          <p>100m from main road | 10 mins to Sekenani Gate</p>
        </div>

        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* ACTIVITIES */}
      <section className="dark">
        <h2>Activities</h2>
        <div className="grid">
          {activities.map((item, i) => (
            <div key={i}>
              <img src={item.src} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROOMS */}
      <section>
        <h2>Rooms</h2>
        <div className="grid">
          {rooms.map((item, i) => (
            <div key={i}>
              <img src={item.src} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TENTS */}
      <section>
        <h2>Tented Accommodation</h2>
        <div className="grid">
          {tents.map((item, i) => (
            <div key={i}>
              <img src={item.src} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GUEST EXPERIENCE */}
      <section>
        <h2>Guest Experience</h2>
        <div className="grid">
          {guests.map((item, i) => (
            <div key={i}>
              <img src={item.src} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WILDLIFE */}
      <section>
        <h2>Wildlife</h2>
        <div className="grid">
          {wildlife.map((item, i) => (
            <div key={i}>
              <img src={item.src} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 Ereto Mara Paradise Camp</p>
      </footer>

    </div>
  );
}

export default App;