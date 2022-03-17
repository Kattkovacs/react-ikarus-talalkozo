import React from "react";
import Registration from "./Registration";
import Rules from "./Rules";

const RegAndRules = ({ currentLanguage }) => {
  return (
    <section className="event" id="regAndRules">
      <div className="container">
        <div className="boxes">
          <Registration currentLanguage={currentLanguage} />
          <Rules currentLanguage={currentLanguage} />
        </div>
      </div>
    </section>
  );
};

export default RegAndRules;
