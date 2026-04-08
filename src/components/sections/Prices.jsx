import React from "react";
import { useLang } from "../../context/LanguageContext";

const Prices = () => {
  const { lang: currentLanguage } = useLang();
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
                <td>2000 Ft/fő<br />
                  <small>Ha veterán autóval érkezel (az autó kora 30 éves felett van),<br />
                    akkor 2 fő részére ingyenes a belépés <br />és a buszos kiállítótérre be lehet parkolni.</small>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Városi nosztalgia körjáratok</strong>
                </td>
                <td>
                  2000 Ft/fő [előre váltott jeggyel]<br />
                  <small>6 év alatt (ölben ülve) ingyenes</small><br />
                  <small>A járatokra nem érvényes semmilyen tömegközlekedési kedvezmény, vagy bérlet!</small>
                </td>
              </tr>
              {/* <tr>
                <td>
                  <strong>Ikarus 481-es busszal a Dobó laktanyához, tankbérlés.hu gyűjteményének megtekintése</strong>
                </td>
                <td>3500 Ft/fő</td>
              </tr> */}
              <tr>
                <td>
                  <strong>Káli-medencei busz felvonulás</strong>
                </td>
                <td>
                  3000 Ft/fő [előre váltott jeggyel]<br />
                  <small>A járatokra nem érvényes semmilyen tömegközlekedési kedvezmény, vagy bérlet!</small>
                </td>
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
                  <strong>Ingajáratok vasút- és autóbusz-állomás között</strong><br />
                  <small>Menetrend alább</small>
                </td>
                <td>500 Ft/fő [az autóbusz-vezetőnél váltható!]<br />
                  <small>A járatokra nem érvényes semmilyen tömegközlekedési kedvezmény, vagy bérlet!</small>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Tombola sorsjegy</strong>        
                </td>
                <td>Egyeztetés alatt<br />
                  <small>A Tombola főnyereménye: Egyeztetés alatt</small>
                </td>
              </tr>              
            </tbody>
          </table>
          <h3 className="menetrend-title">Ingajáratok vasút- és autóbusz-állomás között – Menetrend</h3>
          <div className="menetrend-wrapper">
            <table className="menetrend-table">
              <tbody>
                <tr>
                  <th colSpan="8">Vasútállomás – Autóbusz-állomás – Kinizsi laktanya</th>
                </tr>
                <tr>
                  <td><strong>IK280</strong></td>
                  <td>8:00</td><td>9:00</td><td>10:00</td><td>11:00</td><td>12:20</td><td>13:20</td><td></td>
                </tr>
                <tr>
                  <td><strong>IK260</strong></td>
                  <td>8:20</td><td>9:20</td><td>10:20</td><td>11:20</td><td>12:40</td><td>13:40</td><td></td>
                </tr>
                <tr>
                  <td><strong>IK266</strong></td>
                  <td>8:40</td><td>9:40</td><td>10:40</td><td>11:40</td><td>13:00</td><td>14:00</td><td></td>
                </tr>
                <tr>
                  <td><strong>IK256</strong></td>
                  <td>12:00</td><td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                  <th colSpan="8">Kinizsi laktanya – Autóbusz-állomás – Vasútállomás</th>
                </tr>
                <tr>
                  <td><strong>IK280</strong></td>
                  <td>8:30</td><td>9:30</td><td>10:30</td><td>11:50</td><td>12:50</td><td>16:40</td><td>17:10</td>
                </tr>
                <tr>
                  <td><strong>IK260</strong></td>
                  <td>8:50</td><td>9:50</td><td>10:50</td><td>12:10</td><td>13:10</td><td>16:50</td><td></td>
                </tr>
                <tr>
                  <td><strong>IK266</strong></td>
                  <td>9:10</td><td>10:10</td><td>11:10</td><td>12:30</td><td>13:30</td><td>17:00</td><td></td>
                </tr>
                <tr>
                  <td><strong>IK256</strong></td>
                  <td>11:30</td><td>16:30</td><td></td><td></td><td></td><td></td><td></td>
                </tr>
              </tbody>
            </table>
          </div>
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
