import React from "react";
import { useLang } from "../../context/LanguageContext";

const Program = () => {
  const { lang: currentLanguage } = useLang();
  return (
    <section className="event" id="program">
      {currentLanguage === "hu" ? (
        <div className="container">
          <div className="program">
            <h1>PROGRAMOK</h1>
            <strong>2026. május 9.</strong>
            <table>
              <tbody>
                <tr>
                  <th className="tableWidth"></th>
                  <th></th>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>6:30-8:30</h4>
                  </td>
                  <td>
                    <strong>Autóbuszok érkezése, beállítása</strong>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>9:00</h4>
                  </td>
                  <td>
                    <strong>Megnyitó</strong>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>9:30-14:00</h4>
                  </td>
                  <td>
                    <p>
                      Városi nosztalgia járatok közlekednek, melyekre                   
                      felszállni előre megváltott menetjeggyel lehet. 10 km-es kört tesznek meg a buszok a városban, útközben nincs megállóhely, le-, illetve felszállás csak a végállomáson lehetséges. Az autóbuszok férőhelye korlátozott, kérjük ezt vegyék figyelembe felszálláskor és a problémamentes utazásért a kalauzok kéréseit tartsák be.
                    </p>
                    {/* <p>
                      Városi nosztalgia járatok közlekednek, melyekre a
                      Köztársaság téri kijelölt autóbusz megállóhelyen lehet
                      felszállni előre megváltott menetjeggyel. A járatoknak
                      útközben nincs megállóhelye, le-, illetve felszállás csak
                      a végállomáson lehetséges. Az autóbuszok férőhelye
                      korlátozott, kérjük ezt vegyék figyelembe felszálláskor és
                      a problémamentes utazásért a kalauzok kéréseit tartsák be.
                    </p>
                    <p>A járatok az alábbi útvonalon közlekednek:</p>
                    <p>Térképen:</p>
                    <p>Városi nosztalgia autóbusz körjáratok útvonala</p> */}
                  </td>
                </tr>
                {/* <tr>
                  <td valign="top">
                    <h4>Minden Fél Órában</h4>
                  </td>
                  <td>
                    <p>
                      Minden fél órában Ikarus 481-es buszt indítunk a Dobó laktanyához.
                      Megtekinthető a tankbérlés.hu széleskörű gyűjteménye!
                    </p>
                  </td>
                </tr> */}
                <tr>
                  <td valign="top">
                    <h4>14:30</h4>
                  </td>
                  <td>
                    <strong>Felvonulás </strong>
                    <p>
                      Felvonulás az összes jármű részvételével a a festői
                      szépségű Káli-Medencében
                      Kinizsi Laktanya-Gyulakeszi-Kékkút-Kővágóörs-Köveskál-Gyulakeszi-Kinizsi laktanya
                      útvonalon.
                    </p>
                    <p>Térképen: <a href="https://www.google.com/maps/d/u/0/edit?mid=1zBUVfyo1XqIAvjbyHaznWH4ieQ0HBjI&usp=sharing" target="_blank" rel="noopener noreferrer" title="Térkép" style={{color: "#005c99", fontWeight: "bold"}}>[link]</a></p>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>16:20</h4>
                  </td>
                  <td>
                    <strong>Tombola sorsolás </strong>
                    <small>
                    A Tombola főnyereménye: egyeztetés alatt.
                  </small>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>17:00</h4>
                  </td>
                  <td>
                    <strong>Rendezvény zárás</strong>
                  </td>
                </tr>
                {/* <tr>
                  <td valign="top">
                    <h4>17:00-23:00</h4>
                  </td>
                  <td>
                    <strong>Zenés est, kiállítók és látogatók részére</strong>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="program">
            <h1>PROGRAMMES</h1>
            <table>
              <tbody>
                <tr>
                  <th className="tableWidth"></th>
                  <th></th>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>6:30-8:30</h4>
                  </td>
                  <td>
                    <strong>Arrival and parking of buses</strong>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>9:00</h4>
                  </td>
                  <td>
                    <strong>Opening ceremony</strong>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>9:30-14:00</h4>
                  </td>
                  <td>
                    <p>
                      Nostalgic city-bus services operate in town. This is a non
                      stopping service so boarding and disembarking is only
                      allowed at the Köztársaság square bus stop (event site)
                      with a redeemed ticket. Keep in mind that the capacity of
                      the old timer vehicles is limited so to avoid any
                      incidents please cooperate with the ticket controllers
                      when boarding a bus! The tickets are valid for one round
                      only!
                    </p>
                    <p>Route of the nostalgic city-bus services:</p>
                    <p>On the map:</p>
                    <p>Route of the nostalgic city-bus services</p>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>Every Half Hour</h4>
                  </td>
                  <td>
                    <p>Every half hour we run bus Ikarus 481 to the Dobó barracks.
                       You can view the extensive collection of tankbérlés.hu!
                    </p>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>14:30</h4>
                  </td>
                  <td>
                    <strong>Old timer bus parade </strong>
                    <a href="https://www.google.com/maps/d/u/0/edit?mid=1zBUVfyo1XqIAvjbyHaznWH4ieQ0HBjI&usp=sharing" target="_blank" rel="noopener noreferrer" title="Map" style={{color: "#005c99", fontWeight: "bold"}}>[link]</a>
                    <p>
                      Old timer bus parade featuring all attending vehicles in
                      the picturesque Káli-basin on the
                      Tapolca-Gyulakeszi-Mindszentkálla-Szentbékkálla-Gyulakeszi-Tapolca
                      route:
                    </p>
                    <p>On the map:</p>
                    <p>Route of the parade</p>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>16:20</h4>
                  </td>
                  <td>
                    <strong>Tombola draw</strong>
                    <small>
                    The main prize of the Raffle 'Tombola': 2 nights for 2 people with breakfast at the
                    Hotel Halászkert in Badacsony
                  </small>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>17:00</h4>
                  </td>
                  <td>
                    <strong>Event closing</strong>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>17:00-23:00</h4>
                  </td>
                  <td>
                    <strong>Musical evening for exhibitors and visitors</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default Program;
