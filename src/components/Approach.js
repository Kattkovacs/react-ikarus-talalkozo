import React from "react";
import Map from "./Map";

const Approach = ({ currentLanguage }) => {
  return (
    <section className="event" id="approach">
      {currentLanguage === "hu" ? (
        <div className="container">
          <h1>MEGKÖZELÍTÉS</h1>
          <strong>Helyszín: </strong>
          <p>Veszprém megye, Tapolca város, Köztársaság tér</p>
          <br />
          <Map />
          <br />
          <strong>Tömegközlekedéssel:</strong>
          <p>
            <a href="http://menetrendek.hu" className="link">
              menetrendek.hu
            </a>{" "}
            oldalon kereshetőek a járatok. Autóbusszal Tapolca, autóbuszállomás
            megállóig, vonattal Tapolca, vasútállomásig kell tervezni. A
            rendezvény az autóbuszállomástól kb. 5 perc,
            a vasútállomástól kb. 15 perc séta a
            rendezvény helyszíne.
          </p>
          <strong>Gépjárművel:</strong>
          <p>
            A 77-es számú főúton érhető el a város Veszprém és a 84-es út felől
            is. A Tapolca-patak és a 77-es számú főút találkozásánál van
            lehetőség személygépkocsival parkolni. Innen néhány perc
            sétával érhető el a találkozó helyszíne:
          </p>
          <strong>Nosztalgia különvonattal:</strong>
          <p>Budapest Kelenföld - Balaton északi part - Tapolca</p>
          <p>Egyeztetés alatt!</p>
          <strong>Nosztalgia különjáratokkal:</strong>
          <p>Egyeztetés alatt!</p>
        </div>
      ) : (
        <div className="container">
          <h1>APPROACH</h1>
          <strong>Location: </strong>
          <p>Hungary, Veszprém county, Tapolca city, Köztársaság square</p>
          <br />
          <Map />
          <br />
          <strong>Approaching by public transport:</strong>
          <p>
            You can find the timetables on{" "}
            <a href="http://menetrendek.hu" className="link">
              menetrendek.hu
            </a>{" "}
            Traveling by public coach you need to get off at Tapolca bus
            station, while traveling by train disembark at Tapolca train
            station. From the bus station the event is an approximately 5
            minutes walk away while, from the train station
            the walk is approximately 15 minutes long.
          </p>
          <strong>Approaching by car:</strong>
          <p>
            Tapolca can be reached from the east (from Veszprém) and from the
            west (from route 84) on route 77. At the intersection of the south
            bypass route 77 and the Tapolca-creek, there is a high capacity car
            park at the visitor's service. From here the event can be reached
            with a couple of minutes walk.
          </p>
          <strong>Nostalgic charter train service:</strong>
          <p>
            Budapest Kelenföld Station - Lake Balaton north coast - Tapolca
            Station
          </p>
          <p>Under negotiation!</p>
          <strong>Old timer charter bus services:</strong>
          <p>Under negotiation!</p>
        </div>
      )}
    </section>
  );
};

export default Approach;
