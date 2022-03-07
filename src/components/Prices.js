import React from "react";

const Prices = ({ currentLanguage }) => {
  return (
    <section className="event">
      {currentLanguage === "hu" ? (
        <div className="container">
          <h1>ÁRAK</h1>
          <p>Belépés a rendezvényre: INGYENES</p>
          <p>Városi nosztalgia körjáratok: 800 Ft/fő (6 éves korig ingyenes)</p>
          <p>
            Balaton-parti Káli-medencei felvonulás: Ingyenes (az autóbuszokon
            becsületkassza üzemel, amellyel a járművek tulajdonosait
            támogathatják, hogy megjelentek a rendezvényen)
          </p>
          <p>Tombola sorsjegy: 400 Ft/db</p>
        </div>
      ) : (
        <div className="container">
          <h1>PRICES</h1>
          <p>Admission: FREE</p>
          <p>
            Nostalgic city-bus services: 800 HUF/person/round (free up to the
            age of 6)
          </p>
          <p>
            Old timer bus parade in the Káli-basin: Free (On the attending buses
            there will be an „honesty jar”. Money gathered in this „jar”
            supports the owner of the vehicle as thanks for displaying it on the
            event.)
          </p>
          <p>Tombola ticket: 400 HUF/piece</p>
        </div>
      )}
    </section>
  );
};

export default Prices;
