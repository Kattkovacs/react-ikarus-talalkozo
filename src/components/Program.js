import React from "react";

const Program = ({ currentLanguage }) => {
  return (
    <section className="event" id="program">
      {currentLanguage === "hu" ? (
        <div className="container">
          <div className="program">
            <h1>PROGRAMOK</h1>

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
                    <p>Városi nosztalgia autóbusz körjáratok útvonala</p>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>14:30</h4>
                  </td>
                  <td>
                    <strong>Felvonulás</strong>
                    <p>
                      Felvonulás az összes jármű részvételével a a festői
                      szépségű Káli-Medencében
                      Tapolca-Gyulakeszi-Kékkút-Kővágóörs-Köveskál-Gyulakeszi-Tapolca
                      útvonalon:
                    </p>
                    <p>Térképen:</p>
                    <p>Felvonulás </p>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>16:20</h4>
                  </td>
                  <td>
                    <strong>Tombola sorsolás, zenés est</strong>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <h4>23:00</h4>
                  </td>
                  <td>
                    <strong>A rendezvény zárása, járművek kiállása</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="program">
            <h1>PROGRAMMES</h1>
            <h4>6:30-8:30</h4>
            <p>Arrival and parking of buses</p>
            <h4>9:00</h4>
            <p>Opening ceremony</p>
            <h4>9:30-14:00</h4>
            <p>
              Nostalgic city-bus services operate in town. This is a non
              stopping service so boarding and disembarking is only allowed at
              the Köztársaság square bus stop (event site) with a redeemed
              ticket. Keep in mind that the capacity of the old timer vehicles
              is limited so to avoid any incidents please cooperate with the
              ticket controllers when boarding a bus! The tickets are valid for
              one round only!
            </p>

            <p>Route of the nostalgic city-bus services:</p>
            <p>On the map:</p>
            <p>Route of the nostalgic city-bus services</p>
            <h4>14:30</h4>
            <p>Old timer bus parade</p>
            <p>
              Old timer bus parade featuring all attending vehicles in the
              picturesque Káli-basin on the
              Tapolca-Gyulakeszi-Kékkút-Kővágóörs-Köveskál-Gyulakeszi-Tapolca
              route:
            </p>
            <p>On the map:</p>
            <p>Route of the parade</p>
            <h4>16:20</h4>
            <p>Tombola draw, musical evening</p>
            <h4>23:00</h4>
            <p>Event closing, vehicles leaving</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Program;
