import "./App.css";

// HERO
import mara1 from "./assets/mara1.jpg";

// ACTIVITIES
import drive1 from "./assets/landcruiser-drive1.jpg";
import drive2 from "./assets/landcruiser-drive2.jpg";
import balloon from "./assets/hotair-balloon.jpg";
import manyatta from "./assets/manyatta.jpg";

// WILDLIFE
import lion from "./assets/lion.jpg";
import cheetah from "./assets/cheetah.jpg";
import wildebeest from "./assets/wildebeest.jpg";

// CAMP
import campfire1 from "./assets/campfire1.jpg";
import campfire2 from "./assets/campfire2.jpg";
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

function App() {
  return (
    <div>

      {/* HERO */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${mara1})` }}
      >
        <div className="hero-overlay">
          <h1>Ereto Mara Paradise Camp</h1>

          <div className="hero-text">
            <span>Maasai Mara | Enashulai Conservancy</span>
            <span>100m from main road | 10 mins to Sekenani Gate</span>
          </div>

          <a
            href="https://wa.me/254114835315"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* ACTIVITIES */}
      <section className="section dark">
        <h2>Activities</h2>
        <div className="grid">
          <img src={drive1} alt="Game drive" />
          <img src={drive2} alt="Safari drive" />
          <img src={balloon} alt="Hot air balloon" />
          <img src={manyatta} alt="Maasai visit" />
        </div>
      </section>

      {/* WILDLIFE */}
      <section className="section">
        <h2>Wildlife Experience</h2>
        <div className="grid">
          <img src={lion} alt="Lion" />
          <img src={cheetah} alt="Cheetah" />
          <img src={wildebeest} alt="Wildebeest" />
        </div>
      </section>

      {/* CAMP EXPERIENCE */}
      <section className="section dark">
        <h2>Camp Experience</h2>
        <div className="grid">
          <img src={campfire1} alt="Campfire" />
          <img src={campfire2} alt="Campfire night" />
          <img src={tent1} alt="Tent" />
          <img src={tent2} alt="Tent view" />
        </div>
      </section>

      {/* ROOMS */}
      <section className="section">
        <h2>Rooms</h2>
        <div className="grid">
          <img src={room1} alt="Room 1" />
          <img src={room2} alt="Room 2" />
          <img src={room3} alt="Room 3" />
        </div>
      </section>

      {/* GUEST EXPERIENCE */}
      <section className="section dark">
        <h2>Guest Experience</h2>
        <div className="grid">
          <img src={guest1} alt="Guest 1" />
          <img src={guest2} alt="Guest 2" />
          <img src={guest3} alt="Guest 3" />
          <img src={guest4} alt="Guest 4" />
        </div>
      </section>

      {/* RATES */}
      <section className="section">
        <h2>Rates (Full Board)</h2>

        <div className="rates-container">
          <div className="rate-box">
            <h3>High Season</h3>
            <p>Single – $100</p>
            <p>Double – $140</p>
            <p>Twin – $140</p>
            <p>Triple – $185</p>
            <p>AirBnB – $140</p>
            <p>Tent – $12</p>
          </div>

          <div className="rate-box">
            <h3>Low Season</h3>
            <p>Single – $62</p>
            <p>Double – $93</p>
            <p>Twin – $93</p>
            <p>Triple – $140</p>
            <p>AirBnB – $100</p>
            <p>Tent – $12</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Ereto Mara Paradise Camp</p>
      </footer>

    </div>
  );
}

export default App;