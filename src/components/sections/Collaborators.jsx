import React from "react";
import { RerouselComp } from "../ui/RerouselComp";
import MobileCollabolators from "../ui/MobileCollabolators";
import { useTranslation } from "../../i18n";

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
