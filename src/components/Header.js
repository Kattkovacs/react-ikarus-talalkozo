import React from "react";

const Header = ({ currentLanguage }) => {
  return (
    <header className="header">
      {currentLanguage === "hu" ? (
        <div className="container">
          <div>
            <h1>5. Nemzetközi Ikarus Találkozó Tapolca</h1>
            <h3>2026. május 9.</h3>
          </div>
          <small className="lighter">Győri Buszok</small>
        </div>
      ) : (
        <div className="container">
          <div>
            <h1>5<small><sup>th</sup></small> International Ikarus Meeting Tapolca</h1>
            <h3>9 May 2026</h3>
          </div>
          <small className="lighter">Győri Buszok</small>
        </div>
      )}
    </header>
  );
};

export default Header;
