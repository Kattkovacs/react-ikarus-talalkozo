import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import logoHu from "../ikarus_tal_white_kor.svg";

const Nav = ({ currentLanguage }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img
            src={currentLanguage === "hu" ? logoHu : logoHu}
            alt="language"
          />
        </div>
        <MobileNavigation currentLanguage={currentLanguage} />
        <Navigation currentLanguage={currentLanguage} />
      </div>
    </div>
  );
};

export default Nav;
