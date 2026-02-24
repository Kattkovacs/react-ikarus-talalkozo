import React from "react";
import { BiBus } from "react-icons/bi";
import { useState } from "react";
import BusRegistration from "./BusRegistration";
import { useLang } from "../../context/LanguageContext";
import { useTranslation } from "../../i18n";


const Registration = () => {
  const { lang } = useLang();
  const t = useTranslation();
  const [open, setOpen] = useState(false);
  const onClickHandle = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <section className="event" id="registration">
      {lang === "hu" ? (
        <div className="box boxHu" id="reg">
          <h1>{t.registration.title}</h1>
          <p>{t.registration.description}</p>
          <br></br>
          {/* <strong>A regisztráció 2026. február 1-én indul!</strong> */}
          {/* <strong>A regisztráció hamarosan indul!</strong> */}
          <div className="center">
            <button onClick={onClickHandle}>
              <BiBus className="biBus" size="18px" />
              {t.registration.button}
            </button>
          </div>
          <BusRegistration open={open} />
        </div>
      ) : (
        <div className="box boxEn" id="reg">
          <h1>{t.registration.title}</h1>
          <p>{t.registration.description}</p>
          <br></br>
          {/* <strong>Registration will start soon!</strong> */}
          <strong>{t.registration.startsSoon}</strong>
          {/* <div className="center">
          <button onClick={onClickHandle}>
              <BiBus className="biBus" size="18px" />
              {t.registration.button}
            </button>
          </div>
          <BusRegistration open={open} /> */}
        </div>
      )}
    </section>
  )
};

export default Registration;
