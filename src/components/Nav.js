import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Nav = ({ currentLanguage }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">Ikarus Találkozó</div>
        <MobileNavigation currentLanguage={currentLanguage} />
        <Navigation currentLanguage={currentLanguage} />
      </div>
    </div>
  );
};

export default Nav;
