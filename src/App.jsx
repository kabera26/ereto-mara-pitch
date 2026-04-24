import "./App.css";
import { useState } from "react";

// IMAGES
import hero from "./assets/mara1.jpg";

import room1 from "./assets/rooms/room1.jpg";
import room2 from "./assets/rooms/room2.jpg";
import room3 from "./assets/rooms/room3.jpg";

import guest1 from "./assets/guests/guest1.jpg";
import guest2 from "./assets/guests/guest2.jpg";
import guest3 from "./assets/guests/guest3.jpg";

import lion from "./assets/lion.jpg";
import cheetah from "./assets/cheetah.jpg";
import drive from "./assets/landcruiser-drive1.jpg";
import campfire from "./assets/campfire1.jpg";

import tent1 from "./assets/tent1.jpg";
import tent2 from "./assets/tent2.jpg";
import manyatta from "./assets/manyatta.jpg";

import balloon from "./assets/hotair-balloon.jpg";

function App() {
  const [showRates, setShowRates] = useState(false);

  const phone = "254104600866";
  const wa = (msg) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="app">

      {/* HERO */}
      <section className="hero">
        <img src={hero} alt="hero" />

        <div className="overlay">
          <h1>Ereto Mara Camp</h1>
          <p>Luxury Safari in Maasai Mara</p>

          <a href={wa("Full Board booking (Kabera ref)")} className="btn">
            Book Stay
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section dark">
        <h2>About The Camp</h2>
        <p className="description">
          Located in Maasai Mara, Enashulai Conservancy, 100 metres from the main
          gate and 10 minutes drive to Sekenani main gate.
        </p>
      </section>

      {/* ROOMS */}
      <section className="section">
        <h2>Our Rooms</h2>

        <div className="grid">
          <img src={room1} alt="" />
          <img src={room2} alt="" />
          <img src={room3} alt="" />
        </div>

        <button className="btn" onClick={() => setShowRates(true)}>
          View Room Rates
        </button>
      </section>

      {/* BALLOON */}
      <section className="section highlight">
        <h2>Hot Air Balloon Experience</h2>

        <div className="feature">
          <img src={balloon} alt="" />

          <div>
            <p>Sunrise flight over Maasai Mara — unforgettable.</p>

            <a href={wa("Balloon booking (Kabera ref)")} className="btn">
              Book Balloon
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="section">
        <h2>Experiences</h2>

        <div className="grid">
          <img src={lion} alt="" />
          <img src={cheetah} alt="" />
          <img src={drive} alt="" />
          <img src={campfire} alt="" />
          <img src={tent1} alt="" />
          <img src={tent2} alt="" />
          <img src={manyatta} alt="" />
        </div>
      </section>

      {/* GUESTS */}
      <section className="section dark">
        <h2>Our Guests</h2>

        <div className="grid">
          <img src={guest1} alt="" />
          <img src={guest2} alt="" />
          <img src={guest3} alt="" />
        </div>
      </section>

      {/* CHECK-IN */}
      <section className="section dark">
        <h2>Guest Check-in</h2>
        <p>
          Mention <strong>“Kabera Website Booking”</strong> on arrival.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Ereto Mara Camp
      </footer>

      {/* WHATSAPP */}
      <a
        href={wa("Hello, I’m interested in Ereto Mara")}
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="whatsapp"
        />
      </a>

      {/* MODAL */}
      {showRates && (
        <div className="modal" onClick={() => setShowRates(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Room Rates (Full Board)</h2>

            <h3>High Season</h3>
            <ul>
              <li>Single - $100</li>
              <li>Double - $140</li>
              <li>Twin - $140</li>
              <li>Triple - $185</li>
              <li>AirBnB 3BR - $140</li>
              <li>Tent - $12</li>
            </ul>

            <h3>Low Season</h3>
            <ul>
              <li>Single - $62</li>
              <li>Double - $93</li>
              <li>Twin - $93</li>
              <li>Triple - $140</li>
              <li>AirBnB 3BR - $100</li>
              <li>Tent - $8</li>
            </ul>

            <button className="btn" onClick={() => setShowRates(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;