import React from "react";
import volan from "../volanbusz_logo.jpg";
import tapolca from "../tapolca.png";
import maxloads from "../Maxloads.png";
import kaloztanya from "../kaloz.jpg";

const Collaborators = ({ currentLanguage }) => {
  return (
    <section className="event" id="approach">
      <div className="container">
        {currentLanguage === "hu" ? (
          <h1>EGYÜTTMŰKÖDŐK</h1>
        ) : (
          <h1>COLLABORATORS</h1>
        )}
        <div className="boxes">
          <div className="logoBox">
            <a
              href="https://www.volanbusz.hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={volan} alt="volan" className="logoImg" />
            </a>
          </div>
          <div className="logoBox">
            <a
              href="https://www.tapolca.hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tapolca} alt="tapolca" className="logoImg" />
            </a>
          </div>
          <div className="logoBox">
            <a
              href="https://www.maxloads.ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={maxloads} alt="maxloads" className="logoImg" />
            </a>
          </div>
          <div className="logoBox">
            <a
              href="https://www.facebook.com/kaloztanya.balatonederics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={kaloztanya}
                alt="kaloztanya pizzeria"
                className="logoImg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
