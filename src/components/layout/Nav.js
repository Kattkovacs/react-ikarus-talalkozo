import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import logoHu from "../ikarus_tal_white_kor.svg";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logoHu} alt="logo" />
          </a>
        </div>
        <MobileNavigation />
        <Navigation />
      </div>
    </div>
  );
};

export default Nav;
