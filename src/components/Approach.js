import React from "react";

const Approach = ({ currentLanguage }) => {
  return (
    <section className="event" id="approach">
      {currentLanguage === "hu" ? (
        <div className="container">
          <h1>MEGKÖZELÍTÉS</h1>
          <p>Helyszín: </p>
          <p>Veszprém megye, Tapolca város, Köztársaság tér</p>
          <p>Tömegközlekedéssel:</p>
          <p>
            http://menetrendek.hu oldalon kereshetőek a járatok. Autóbusszal
            Tapolca, autóbuszállomás megállóig, vonattal Tapolca, vasútállomásig
            kell tervezni. A rendezvény az autóbuszállomástól kb. 5 perc (kék
            szaggatott vonal), a vasútállomástól kb. 15 perc séta (zöld
            szaggatott vonal), a rendezvény helyszíne.
          </p>
          <p>Gépjárművel:</p>
          <p>
            A 77-es számú főúton érhető el a város Veszprém és a 84-es út felől
            is. A Tapolca-patak és a 77-es számú főút találkozásánál van
            lehetőség személygépkocsival parkolni. Innen néhány perc
            sétával(bordó szaggatott vonal) érhető el a találkozó helyszíne:
          </p>
          <p>Térképen:</p>
          <p>
            Tapolca belváros Rendezvény Autóbuszállomás Vasútállomás Szgk.
            parkoló
          </p>
          <p>Nosztalgia különvonattal:</p>
          <p>
            Budapest Kelenföld - Balaton északi part - Tapolca
          </p>
          <p>Egyeztetés alatt!</p>
          <p>Nosztalgia különjáratokkal:</p>
          <p>Egyeztetés alatt!</p>
        </div>
      ) : (
        <div className="container">
          <h1>APPROACH</h1>
          <p>Location: </p>
          <p>Hungary, Veszprém county, Tapolca city, Köztársaság square</p>
          <p>Approaching by public transport:</p>
          <p>
            You can find the timetables on http://menetrendek.hu Traveling by
            public coach you need to get off at Tapolca bus station, while
            traveling by train disembark at Tapolca train station. From the bus
            station the event is an approximately 5 minutes walk away (blue
            dashed line) while, from the train station the walk is approximately
            15 minutes long (green dashed line).
          </p>
          <p>Approaching by car:</p>
          <p>
            Tapolca can be reached from the east (from Veszprém) and from the
            west (from route 84) on route 77. At the intersection of the south
            bypass route 77 and the Tapolca-creek, there is a high capacity car
            park at the visitor's service. From here the event can be reached
            with a couple of minutes walk (claret dashed line).
          </p>
          <p>On the map:</p>
          <p>
            Tapolca inner city Event site Bus station Train station Car park
          </p>
          <p>Nostalgic charter train service:</p>
          <p>
          Budapest Kelenföld Station - Lake Balaton north coast - Tapolca Station
          </p>
          <p>Under negotiation!</p>
          <p>Old timer charter bus services:</p>
          <p>Under negotiation!</p>
        </div>
      )}
    </section>
  );
};

export default Approach;
