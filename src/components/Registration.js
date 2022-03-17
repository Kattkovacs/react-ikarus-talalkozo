import React from "react";
import { BiBus } from "react-icons/bi";

const Registration = ({ currentLanguage }) => {
  return (
    <section className="event" id="registration">
      {currentLanguage === "hu" ? (
        <div className="box" id="reg">
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
        <div className="container">
          <h1>BUS REGISTRATION</h1>
          <p>
            Registration is mandatory for all exhibitors! In absence of
            registration we can not guarantee exhibition place for your vehicle.
            If you want to demonstrate your vehicle on our event please
            registrate here:
          </p>
          <div className="center">
            <button>
              <a
                href="https://forms.gle/xqf7vPkppVxGwt6c6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bus registration
              </a>
            </button>
          </div>
          <p>Participate the event at your own responsibility!</p>
          <p>
            To avoid any possible accidents or injuries please be extremely
            careful when you are near moving (especially reversing) vehicles!
            Only hop on or off buses at their designated stops or parking
            places! Please cooperate with the organiser staff throughout the
            whole duration of the event!
          </p>
        </div>
      )}
    </section>
  );
};

export default Registration;
