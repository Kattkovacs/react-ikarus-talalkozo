import React from "react";
import { RerouselComp } from "./RerouselComp";
import MobileCollabolators from "./MobileCollabolators";
import { useTranslation } from "../i18n";

const Collaborators = () => {
  const t = useTranslation();
  return (
    <section className="event" id="approach">
      <div className="container">
        <h1>{t.collaborators.title}</h1>
        <RerouselComp />
        <MobileCollabolators />
      </div>
    </section>
  );
};

export default Collaborators;
