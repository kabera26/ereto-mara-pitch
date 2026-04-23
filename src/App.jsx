import "./App.css";

// HERO
import hero from "./assets/mara1.jpg";

// ROOMS (FIXED PATHS)
import room1 from "./assets/rooms/room1.jpg";
import room2 from "./assets/rooms/room2.jpg";

// BALLOON
import balloon from "./assets/hotair-balloon.jpg";

function App() {
  return (
    <div className="app">

      {/* HERO */}
      <section className="hero">
        <img src={hero} alt="Ereto Mara" />
      </section>

      {/* HERO TEXT */}
      <section className="hero-text">
        <h1>Ereto Mara Camp</h1>
        <p>Experience the wild in comfort and style.</p>

        <div className="hero-buttons">

          {/* FULL BOARD */}
          <a
            href="https://wa.me/254104600866?text=Hello%20I%20want%20to%20book%20Full%20Board%20via%20Ereto%20website%20(Kabera%20ref)"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Book Full Board
          </a>

          {/* BALLOON */}
          <a
            href="https://wa.me/254104600866?text=Hello%20I%20want%20to%20book%20Hot%20Air%20Balloon%20via%20Ereto%20website%20(Kabera%20ref)"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            Book Balloon
          </a>

        </div>
      </section>

      {/* ROOMS */}
      <section className="section">
        <h2>Our Rooms</h2>

        <div className="grid">
          <div className="card">
            <img src={room1} alt="Room 1" />
          </div>

          <div className="card">
            <img src={room2} alt="Room 2" />
          </div>
        </div>
      </section>

      {/* BALLOON */}
      <section className="section dark">
        <h2>🎈 Hot Air Balloon Experience</h2>

        <img src={balloon} alt="Balloon" className="balloon-img" />

        <p>
          Float above the Maasai Mara at sunrise. Limited slots available daily.
        </p>

        <a
          href="https://wa.me/254104600866?text=Hello%20I%20want%20to%20reserve%20Hot%20Air%20Balloon%20via%20Ereto%20website%20(Kabera%20ref)"
          target="_blank"
          rel="noreferrer"
          className="btn primary"
        >
          Reserve Your Seat
        </a>
      </section>

      {/* TRACKING NOTICE */}
      <section className="tracking">
        <p>
          Guests booking via this website should mention
          <strong> "Ereto Website / Kabera Ref"</strong> when checking in.
        </p>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/254104600866?text=Hello%20I%20am%20interested%20in%20Ereto%20Mara%20via%20your%20website"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>

    </div>
  );
}

export default App;