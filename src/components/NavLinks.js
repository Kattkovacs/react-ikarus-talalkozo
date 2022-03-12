import React from "react";
import huFlag from "../001-hungary.png";
import enFlag from "../001-united-kingdom.png";
import { useDispatch } from "react-redux";
import { language } from "../actions";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const dispatch = useDispatch();
  const { currentLanguage, isMobile, closeMobileMenu } = props;
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 0.9, y: 0 };

  const handleOnclick = (e) => {
    e.preventDefault();
    dispatch(language(e.currentTarget.value));
  };

  return (
    <ul className="nav">
      <motion.li
        onClick={() => isMobile && closeMobileMenu()}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
      >
        <a href="/#program">
          {currentLanguage === "hu" ? "Programok" : "Programmes"}
        </a>
      </motion.li>
      <motion.li
        onClick={() => isMobile && closeMobileMenu()}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
      >
        <a href="/#approach">
          {currentLanguage === "hu" ? "Megközelítés" : "Approach"}
        </a>
      </motion.li>
      <motion.li
        onClick={() => isMobile && closeMobileMenu()}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
      >
        <a href="/#prices">{currentLanguage === "hu" ? "Árak" : "Prices"}</a>
      </motion.li>
      <motion.li
        onClick={() => isMobile && closeMobileMenu()}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
      >
        <a href="/#contact">
          {currentLanguage === "hu" ? "Kapcsolat" : "Contact"}
        </a>
      </motion.li>
      <motion.li
        onClick={() => isMobile && closeMobileMenu()}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
      >
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
      </motion.li>
    </ul>
  );
};

export default NavLinks;
