import React from "react";

const Header = ({ currentLanguage }) => {
  return (
    <header className="header">
      {currentLanguage === "hu" ? (
        <div className="container">
          <div>
            <h1>Ikarus Találkozó Tapolca</h1>
            <h3>2022. május 7.</h3>
          </div>
          <small>Fotó: Józsa László</small>
        </div>
      ) : (
        <div className="container">
          <div>
            <h1>Ikarus Meeting Tapolca</h1>
            <h3>7. May 2022</h3>
          </div>
          <small>Photo: László Józsa</small>
        </div>
      )}
    </header>
  );
};

export default Header;
