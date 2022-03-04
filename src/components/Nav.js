import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
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
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
