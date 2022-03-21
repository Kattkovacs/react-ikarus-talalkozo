import React from "react";
import { BiBus } from "react-icons/bi";

const Registration = ({ currentLanguage }) => {
  return (
    <section className="event" id="registration">
      {currentLanguage === "hu" ? (
        <div className="box boxHu" id="reg">
          <h1>BUSZ REGISZTRÁCIÓ</h1>
          <p>
            A kiállítóknak kötelező regisztráció van, ennek hiányában nem tudjuk
            garantálni a helyet.
          </p>
          <p>Kérjük, aki autóbusszal érkezik, itt regisztrálhat:</p>
          <div className="center">
            <button>
              <BiBus className="biBus" size="18px" />
              <a
                href="https://forms.gle/xqf7vPkppVxGwt6c6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Regisztráció
              </a>
            </button>
          </div>
        </div>
      ) : (
        <div className="box boxEn" id="reg">
          <h1>BUS REGISTRATION</h1>
          <p>
            Registration is mandatory for all exhibitors! In absence of
            registration we can not guarantee exhibition place for your vehicle.
          </p>
          <p>
            If you want to demonstrate your vehicle on our event please
            registrate here:
          </p>
          <div className="center">
            <button className="noWrap">
              <BiBus className="biBus" size="18px" />
              <a
                href="https://forms.gle/xqf7vPkppVxGwt6c6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bus registration
              </a>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Registration;
