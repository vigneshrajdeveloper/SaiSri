
import React, { useEffect, useState } from "react";
import "./App.css";

function Confetti() {
  return (
    <div className="confetti-container">
      {Array.from({ length: 45 }).map((_, i) => (
        <span
          className="confetti"
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 10) * 0.25}s`,
            animationDuration: `${3 + (i % 5) * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [phase, setPhase] = useState("doors");

  const openDoors = () => {
    setPhase("opening");
  };

  useEffect(() => {
    let timer;

    switch (phase) {
      case "opening":
        timer = setTimeout(() => setPhase("intro"), 2000);
        break;

      case "intro":
        timer = setTimeout(() => setPhase("dance"), 10000);
        break;

      case "dance":
        timer = setTimeout(() => setPhase("danceExit"), 10000);
        break;

      case "danceExit":
        timer = setTimeout(() => setPhase("ranganathar"), 1400);
        break;

      case "ranganathar":
        timer = setTimeout(() => setPhase("godExit"), 10000);
        break;

      case "godExit":
        timer = setTimeout(() => setPhase("final"), 1400);
        break;

      default:
        break;
    }

    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className="app">

      {/* DOOR OPENING */}
      {(phase === "doors" || phase === "opening") && (
        <div
          className={`door-container ${
            phase === "opening" ? "open" : ""
          }`}
        >
          {/* LEFT DOOR */}
          <div className="door left-door">
            <div className="door-content">
              <h1>🎀</h1>
            </div>
          </div>

          {/* RIGHT DOOR */}
          <div className="door right-door"></div>

          {/* CANDLE BUTTON - CENTRED ACROSS BOTH DOORS */}
          <button
            className="open-button"
            onClick={openDoors}
            disabled={phase === "opening"}
          >
            🕯️ Oka Touch Ivvandi...
          </button>
        </div>
      )}

      {/* BIRTHDAY INTRO */}
      {phase === "intro" && (
        <section className="scene birthday-scene">
          <Confetti />

          <h1 className="birthday-title">
            Happy Birthday! 🎂🎉
          </h1>

          <div className="birthday-words">
            <h2>SaiSri 🕉️</h2>
            <h2>laddu 🟡</h2>
            <h2>Telugu Ponnu 💃🏻</h2>
          </div>
        </section>
      )}

      {/* BHARATANATYAM SCENE */}
      {(phase === "dance" || phase === "danceExit") && (
        <section
          className={`scene bharatanatyam-scene ${
            phase === "danceExit" ? "scene-exit" : "scene-enter"
          }`}
        >
          <div className="scene-content">
            <img
              src="{`${process.env.PUBLIC_URL}/bharatanatyam.png"
              alt="Bharatanatyam dancer"
              className="bharatanatyam-image"
            />

            <p className="bharatanatyam-quote">
              Konni pratibhalaku vedika avasaram ledu,
              prekshakulu kuda avasaram ledu.
              Neelaanti andamaina dancer, tana prati
              kadalikatho tana manasuloni bhavalanu
              andanga vyaktaparustundi. ❤️
            </p>
          </div>
        </section>
      )}

      {/* RANGANATHAR SCENE */}
      {(phase === "ranganathar" || phase === "godExit") && (
        <section
          className={`scene ranganathar-scene ${
            phase === "godExit" ? "scene-exit" : "scene-enter"
          }`}
        >
          <div className="scene-content">
            <img
              src="{`${process.env.PUBLIC_URL}/ranganathar.png"
              alt="Lord Ranganathar"
              className="ranganathar-image"
            />

            <p className="ranganathar-message">
              Ranganathar vari asisulu eppudu neetho
              undalani korukuntunnanu.
              Janmadina subhakankshalu,
              Aayana muddula bidda! ❤️🙏
            </p>
          </div>
        </section>
      )}

      {/* FINAL BIRTHDAY CELEBRATION */}
      {phase === "final" && (
        <section className="scene final-scene">
          <Confetti />

          <div className="final-content">
            <h1 className="final-text">
              What! That's it
              <br />
              Go and Celebrate Your
              <br />
              27th BIRTHDAY!

              <span className="birthday-name">
                RAMA DEVI ❤️
              </span>
            </h1>

            <div className="final-ribbon">🎀</div>
          </div>
        </section>
      )}

    </div>
  );
}
