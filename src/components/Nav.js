import React, { useState } from "react";
import hunFlag from "../001-hungary.png";
import enFlag from "../001-united-kingdom.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [language, setLanguage] = useState("hu");

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Ikarus Találkozó</div>
        <ul className="nav">
          <li>
            <p>Programok</p>
          </li>
          <li>
            <p>Megközelítés</p>
          </li>
          <li>
            <p>Árak</p>
          </li>
          <li>
            <p>Kapcsolat</p>
          </li>
          <li>
            <button
              value={language === "en" ? "hu" : "en"}
              onClick={() => {
                handleOnclick();
              }}
            >
              <img src={enFlag} alt="language"/>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
