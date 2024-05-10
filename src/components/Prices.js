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
                <td>1500 Ft/fő (6 éves korig ingyenes)</td>
              </tr>
              <tr>
                <td>
                  <strong>Ikarus 481-es busszal a Dobó laktanyához, tankbérlés.hu gyűjteményének megtekintése</strong>
                </td>
                <td>3500 Ft/fő</td>
              </tr>
              <tr>
                <td>
                  <strong>Káli-medencei busz felvonulás</strong>
                </td>
              </tr>
              <tr>
                <td>- Ikarus 30, 311, 55, 66 típusú buszokkal</td>
                <td>3000 Ft/fő</td>
              </tr>
              <tr>
                <td>- Egyéb Ikarus típusú buszokkal</td>
                <td>2000 Ft/fő</td>
              </tr>
              {/* <tr>
                <td colSpan="2">
                  <small>
                    (az autóbuszokon becsületkassza üzemel, amellyel a járművek
                    tulajdonosait támogathatják, hogy megjelentek a
                    rendezvényen)
                  </small>
                </td>
              </tr> */}
              <tr>
                <td>
                  <strong>Tombola sorsjegy</strong>        
                </td>
                <td>500 Ft/db</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <small>
                    A Tombola főnyereménye: 2 éjszaka 2 fő részére reggelivel a Hotel
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
                <td>1500 HUF/person/round (free up to the age of 6)</td>
              </tr>
              <tr>
                <td>
                  <strong>Take the Ikarus 481 bus to the Dobó barracks, view the tankbérlés.hu collection</strong>
                </td>
                <td>3500 HUF/person</td>
              </tr>
              <tr>
                <td>
                  <strong>Old timer bus parade in the Káli-basin</strong>
                </td>
                {/* <td>FREE</td> */}
              </tr>
              <tr>
                <td>- with Ikarus 30, 311, 55, 66 bus types</td>
                <td>3000 HUF/person</td>
              </tr>
              <tr>
                <td>- with other Ikarus bus types</td>
                <td>2000 HUF/person</td>
              </tr>
              <tr>
                <td colSpan="2">
                  {/* <small>
                    (On the attending buses there will be an „honesty jar”.
                    Money gathered in this „jar” supports the owner of the
                    vehicle as thanks for displaying it on the event.)
                  </small> */}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Raffle 'Tombola' ticket</strong>
                </td>
                <td>500 HUF/piece</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <small>
                    The main prize of the Raffle: 2 nights for 2 people with breakfast at the
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
