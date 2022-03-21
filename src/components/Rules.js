import React from "react";
import { ImSmile } from "react-icons/im";

const Rules = ({ currentLanguage }) => {
  return (
    <section className="event">
      {currentLanguage === "hu" ? (
        <div className="box boxHu">
          <h1>SZABÁLYOK</h1>
          <p>A rendezvényen mindenki saját felelősségére vesz részt!</p>
          <p>
            A balesetek elkerülése érdekében kérjük, hogy a mozgó járművek
            között fokozottan ügyeljenek testi épségükre, csak a kijelölt helyen
            szálljanak fel és le az autóbuszokról és tartsák be a szervezők
            kéréseit!
          </p>
          <p>A rendezvény rossz időjárás esetén is megtartásra kerül!</p>
          <p>A programváltoztatás jogát fenntartjuk!</p>
          <p>Mindenkinek kellemes időtöltést kívánunk!</p>
          <ImSmile />
        </div>
      ) : (
        <div className="box boxEn">
          <h1>RULES</h1>
          <p>Participate in the event at your own responsibility!</p>
          <p>
            To avoid any possible accidents or injuries please be extremely
            careful when you are near moving (especially reversing) vehicles!
            Only hop on or off buses at their designated stops or parking
            places! Please cooperate with the organiser staff throughout the
            whole duration of the event!
          </p>
          <br />
          <p>The bus meeting will be held even in bad weather conditions!</p>
          <p>We (the organizers) reserve the right to change the programmes!</p>
          <p>We wish you a pleasant stay on our event!</p>
          <ImSmile />
        </div>
      )}
    </section>
  );
};

export default Rules;
