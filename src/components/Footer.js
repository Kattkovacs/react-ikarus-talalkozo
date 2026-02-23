import React from "react";
import { useTranslation } from "../i18n";

const Footer = () => {
  const t = useTranslation();
  return (
    <section className="footer">
      <footer>
        <div className="container">
          <div>
            <a href="/#program">{t.footer.programs}</a>
            <a href="/#media">{t.footer.media}</a>
            <a href="/#prices">{t.footer.prices}</a>
            <a href="/#registration">{t.footer.busReg}</a>
          </div>
        </div>
      </footer>
      <p className="rights">{t.footer.rights}</p>
    </section>
  );
};

export default Footer;
