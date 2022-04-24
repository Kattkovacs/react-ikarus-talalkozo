import React from "react";

const Prices = ({ currentLanguage }) => {
  return (
    <section className="event" id="prices">
      {currentLanguage === "hu" ? (
        <div className="container">
          <h1>ÁRAK</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Belépés a rendezvényre</strong>
                </td>
                <td>INGYENES</td>
              </tr>
              <tr>
                <td>
                  <strong>Városi nosztalgia körjáratok</strong>
                </td>
                <td>800 Ft/fő (6 éves korig ingyenes)</td>
              </tr>
              <tr>
                <td>
                  <strong>Balaton-parti Káli-medencei busz felvonulás</strong>
                </td>
                <td>INGYENES</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <small>
                    (az autóbuszokon becsületkassza üzemel, amellyel a járművek
                    tulajdonosait támogathatják, hogy megjelentek a
                    rendezvényen)
                  </small>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Tombola sorsjegy</strong>
                </td>
                <td>400 Ft/db</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <small>
                    A Tombola főnyereménye: 2 éjszaka 2 fő részére a Hotel
                    Halászkertben, Badacsonyban
                  </small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="container">
          <h1>PRICES</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Admission</strong>
                </td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>
                  <strong>Nostalgic city-bus services</strong>
                </td>
                <td>800 HUF/person/round (free up to the age of 6)</td>
              </tr>
              <tr>
                <td>
                  <strong>Old timer bus parade in the Káli-basin</strong>
                </td>
                <td>FREE</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <small>
                    (On the attending buses there will be an „honesty jar”.
                    Money gathered in this „jar” supports the owner of the
                    vehicle as thanks for displaying it on the event.)
                  </small>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Raffle 'Tombola' ticket</strong>
                </td>
                <td>400 HUF/piece</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <small>
                    The main prize of the Raffle: 2 nights for 2 people at the
                    Hotel Halászkert in Badacsony
                  </small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Prices;
