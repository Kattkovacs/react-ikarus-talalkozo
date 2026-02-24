import React from "react";
import Registration from "../registration/Registration";
import Rules from "../registration/Rules";

const RegAndRules = () => {
  return (
    <section className="event regAndRules">
      <div className="container">
        <div className="boxes">
          <Registration />
          <Rules />
        </div>
      </div>
    </section>
  );
};

export default RegAndRules;
