import React from "react";
import huFlag from "../../001-hungary.png";
import enFlag from "../../001-united-kingdom.png";
import { useLang } from "../../context/LanguageContext";
import { useTranslation } from "../../i18n";
import { motion } from "framer-motion";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const { lang, setLang } = useLang();
  const t = useTranslation();
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 0.9, y: 0 };

  const handleLanguageToggle = () => {
    setLang(lang === "hu" ? "en" : "hu");
  };

  return (
    <ul className="nav">
      <motion.li
        onClick={() => isMobile && closeMobileMenu()}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
      >
        <a href="/#program">{t.nav.programs}</a>
      </motion.li>
      <motion.li
        onClick={() => isMobile && closeMobileMenu()}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
      >
        <a href="/#approach">{t.nav.approach}</a>
      </motion.li>
      <motion.li
        onClick={() => isMobile && closeMobileMenu()}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
      >
        <a href="/#prices">{t.nav.prices}</a>
      </motion.li>
      <motion.li
        onClick={() => isMobile && closeMobileMenu()}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
      >
        <a href="/#contact">{t.nav.contact}</a>
      </motion.li>
      <motion.li
        onClick={() => isMobile && closeMobileMenu()}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
      >
        <button hidden={true} onClick={handleLanguageToggle}>
          <img src={lang === "hu" ? enFlag : huFlag} alt="language" />
        </button>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
