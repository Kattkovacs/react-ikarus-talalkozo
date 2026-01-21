import React from "react";

const Location = ({ currentLanguage }) => {
  return (
    <section className="event">
      {currentLanguage === "hu" ? (
        <div className="container">
          <h1>HELYSZÍN</h1>
          <p>
           Idén a rendezvény helyszíne <a href="https://maps.app.goo.gl/j85AeSrXto4Sy3FNA"> a volt Kinizsi laktanya</a> területén lesz. A rendezvény
            ideje alatt nosztalgia autóbuszjáratok közlekednek a városban,
            délután folyamán pedig egy 30 km hosszú 1 órás felvonulás lesz a
            festői szépségű Káli-medencében.
          </p>
          <p>
            A rendezvény területén egész nap kitelepült étterem üzemel, a
            kiállítók és a látogatók részére, valamint lehetőség lesz pólók
            ajándéktárgyak illetve tombola vásárlására. A rendezvény
            megközelíthetőségének javítása érdekében több városból nosztalgia
            különjáratok indulnak, melyekről részletesen a megközelítés menüpontban
            tájékozódhatnak.
          </p>
          <p>Ha veterán autóval érkezel (az autó kora 30 éves felett van), 
            akkor 2 fő részére ingyenes a belépés és a buszos kiállítótérre be lehet parkolni. 
          </p>
          {/* <p>
            A helyszín befogadóképessége korlátozott, emiatt csak IKARUS márkájú
            járművek kiállítására van lehetőség, egyéb veterán járművet sajnos
            nem tudunk fogadni, emiatt megértésüket köszönjük!
          </p> */}
        </div>
      ) : (
        <div className="container">
          <h1>LOCATION</h1>
          <p>
            800 metres south of the event site (on the south bypass route 77) a
            high capacity car park is at the visitor's service, from which the
            event can be reached with a couple of minutes walk through town.
            Nostalgic city-bus services will run frequently in town during the
            event and in the afternoon an hour long old timer bus parade will be
            held on a 30 km long route in the picturesque Káli- basin.
          </p>
          <p>
            At the gathering you will find a restaurant open for the exhibitors
            and the visitors. You'll also have the oppurtunity to buy T-shirts
            and other souvenirs, aswell as tombola tickets for various valuable
            prizes. To further enhance the accessibility of the event, old timer
            charter buses will carry passengers from the bigger cities of
            Hungary. Find out more about the topic
            in the „Approach” menu.
          </p>
          <p>
            According to the limited amount of space we can only accept
            exhibition of Ikarus branded vehicles, all other old timer applies
            will be rejected. Thank you for your understanding!
          </p>
        </div>
      )}
    </section>
  );
};

export default Location;
