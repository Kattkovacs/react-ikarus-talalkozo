import React from "react";
import Registration from "./Registration";
import Rules from "./Rules";

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
