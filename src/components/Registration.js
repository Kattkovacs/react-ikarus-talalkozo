import React from "react";

const Registration = ({ currentLanguage }) => {
  return (
    <section className="event" id="registration">
      {currentLanguage === "hu" ? (
        <div className="container">
          <h1>BUSZ REGISZTRÁCIÓ</h1>
          <p>
            A kiállítóknak kötelező regisztráció van, ennek hiányában nem tudjuk
            garantálni a helyet. Kérjük, aki autóbusszal érkezik, itt
            regisztrálhat:
          </p>
          <div className="center">
            <button>
              <a
                href="https://forms.gle/xqf7vPkppVxGwt6c6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Busz regisztráció
              </a>
            </button>
          </div>
          <p>A rendezvényen mindenki saját felelősségére vesz részt!</p>
          <p>
            A balesetek elkerülése érdekében kérjük a mozgó járművek között
            fokozottan ügyeljenek testi épségükre csak a kijelölt helyen
            szálljanak fel és le az autóbuszokról és tartsák be a szervezők
            kéréseit!
          </p>
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
