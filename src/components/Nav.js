import React, { useState } from "react";
import hunFlag from "../001-hungary.png";
import enFlag from "../001-united-kingdom.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { language } from "../actions";
import { useSelector } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language);

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
              <img src={currentLanguage === "hu" ? hunFlag : enFlag} alt="language" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
