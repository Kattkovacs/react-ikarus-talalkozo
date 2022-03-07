import React from "react";

const Footer = ({currentLanguage}) => {
  return (
    <section className="footer">
      <footer>
        <div className="container">
          {currentLanguage === "hu" ? (
            <div>
              <p>Kapcsolat</p>
              <p>Megjelenések</p>
              <p>Árak</p>
              <p>Busz regisztráció</p>
            </div>
          ) : (
            <div>
              <p>Contact</p>
              <p>Media</p>
              <p>Prices</p>
              <p>Bus registration</p>
            </div>
          )}
        </div>
      </footer>
      <p className="rights">
        {currentLanguage === "hu"
          ? "© Minden jog fenntartva! 2022"
          : "© All rights reserved 2022"}
      </p>
    </section>
  );
};

export default Footer;
