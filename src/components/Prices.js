import React from "react";

const Prices = ({ currentLanguage }) => {
  return (
    <section className="event" id="prices">
      {currentLanguage === "hu" ? (
        <div className="container">
          <h1>ÁRAK</h1>
          <table>
            <tbody>
              <td>
                <strong>Belépés a rendezvényre</strong>
              </td>
              <td>INGYENES</td>
            </tbody>
            <tbody>
              <td>
                <strong>Városi nosztalgia körjáratok</strong>
              </td>
              <td>800 Ft/fő (6 éves korig ingyenes)</td>
            </tbody>
            <tbody>
              <td>
                <strong>Balaton-parti Káli-medencei busz felvonulás</strong>
              </td>
              <td>INGYENES</td>
            </tbody>
            <tbody>
              <td colspan="2">
                <small>
                  (az autóbuszokon becsületkassza üzemel, amellyel a járművek
                  tulajdonosait támogathatják, hogy megjelentek a rendezvényen)
                </small>
              </td>
            </tbody>

            <tbody>
              <td>
                <strong>Tombola sorsjegy</strong>
              </td>
              <td>400 Ft/db</td>
            </tbody>
          </table>
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
