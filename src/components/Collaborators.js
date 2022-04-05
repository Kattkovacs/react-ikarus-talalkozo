import React from "react";
import { RerouselComp } from "./RerouselComp";

const Collaborators = ({ currentLanguage }) => {
  return (
    <section className="event" id="approach">
      <div className="container">
        {currentLanguage === "hu" ? (
          <h1>EGYÜTTMŰKÖDŐK</h1>
        ) : (
          <h1>COLLABORATORS</h1>
        )}
        <RerouselComp />
      </div>
    </section>
  );
};

export default Collaborators;
