import React from "react";

const Footer = ({ currentLanguage }) => {
  return (
    <section className="footer">
      <footer>
        <div className="container">
          {currentLanguage === "hu" ? (
            <div>
              <a href="/#program">Programok</a>
              <a href="/#media">Megjelenések</a>
              <a href="/#prices">Árak</a>
              <a href="/#registration">Busz regisztráció</a>
            </div>
          ) : (
            <div>
              <a href="/#program">Programmes</a>
              <a href="/#media">Media</a>
              <a href="/#prices">Prices</a>
              <a href="/#registration">Bus registration</a>
            </div>
          )}
        </div>
      </footer>
      <p className="rights">
        {currentLanguage === "hu"
          ? "© Minden jog fenntartva! 2026"
          : "© All rights reserved 2026"}
      </p>
    </section>
  );
};

export default Footer;
