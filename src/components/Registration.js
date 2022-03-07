import React from "react";

const Registration = ({ currentLanguage }) => {
  return (
    <section className="event">
      {currentLanguage === "hu" ? (
        <div className="container">
          <h1>REGISZTRÁCIÓ</h1>
          <p>
            A kiállítóknak kötelező regisztráció van, ennek hiányában nem tudjuk
            garantálni a helyet. Kérjük, aki autóbusszal érkezik, itt
            regisztrálhat:
          </p>
          <p>A rendezvényen mindenki saját felelősségére vesz részt!</p>
          <p>
            A balesetek elkerülése érdekében kérjük a mozgó járművek között
            fokozottan ügyeljenek testi épségükre csak a kijelölt helyen
            szálljanak fel és le az autóbuszokról és tartsák be a szervezők
            kéréseit!
          </p>
          <p>A rendezvény rossz időjárás esetén is megtartásra kerül!</p>
          <p>A programváltoztatás jogát fenntartjuk!</p>
          <p>Mindenkinek kellemes időtöltést kívánunk! ☺</p>
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
          <p>Participate the event at your own responsibility!</p>
          <p>
            To avoid any possible accidents or injuries please be extremely
            careful when you are near moving (especially reversing) vehicles!
            Only hop on or off buses at their designated stops or parking
            places! Please cooperate with the organiser staff throughout the
            whole duration of the event!
          </p>
          <p>The bus meeting will be held even in bad weather conditions!</p>
          <p>We (the organizers) reserve the right to change the programmes!</p>
          <p>We wish you a pleasant stay on our event! ☺</p>
        </div>
      )}
    </section>
  );
};

export default Registration;
