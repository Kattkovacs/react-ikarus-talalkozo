import React, { useState } from "react";
import huFlag from "../001-hungary.png";
import enFlag from "../001-united-kingdom.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { language } from "../actions";

const Nav = ({ currentLanguage }) => {
  const dispatch = useDispatch();

  const handleOnclick = (e) => {
    e.preventDefault();
    dispatch(language(e.currentTarget.value));
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Ikarus Találkozó</div>
        <ul className="nav">
          <li>
            <p>{currentLanguage === "hu" ? "Programok" : "Programmes"}</p>
          </li>
          <li>
            <p>{currentLanguage === "hu" ? "Megközelítés" : "Approach"}</p>
          </li>
          <li>
            <p>{currentLanguage === "hu" ? "Árak" : "Prices"}</p>
          </li>
          <li>
            <p>{currentLanguage === "hu" ? "Kapcsolat" : "Contact"}</p>
          </li>
          <li>
            <button
              value={currentLanguage === "hu" ? "en" : "hu"}
              onClick={(e) => {
                handleOnclick(e);
              }}
            >
              <img
                src={currentLanguage === "hu" ? enFlag : huFlag}
                alt="language"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
