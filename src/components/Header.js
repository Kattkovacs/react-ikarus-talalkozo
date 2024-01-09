import React from "react";

const Header = ({ currentLanguage }) => {
  return (
    <header className="header">
      {currentLanguage === "hu" ? (
        <div className="container">
          <div>
            <h1>4. Nemzetközi Ikarus Találkozó Tapolca</h1>
            <h3>2024. május 11.</h3>
          </div>
          <small className="lighter">Józsa László</small>
        </div>
      ) : (
        <div className="container">
          <div>
            <h1>4<small><sup>th</sup></small> International Ikarus Meeting Tapolca</h1>
            <h3>11. May 2024</h3>
          </div>
          <small className="lighter">László Józsa</small>
        </div>
      )}
    </header>
  );
};

export default Header;
