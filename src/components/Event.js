import React from "react";

const Event = ({ currentLanguage }) => {
  return (
    <section className="event">
      {currentLanguage === "hu" ? (
        <div className="container">
          <h1>RENDEZVÉNY</h1>
          <p>
            2022. május 7-én harmadik alkalommal kerül megrendezésre a
            Nemzetközi Ikarus találkozó Tapolcán. A rendezvény 2016-ban indult
            útjára, azzal a céllal, hogy egyrészt a nyugati országrészben is
            legyen egy, a magyar buszgyártás termékeit bemutató rendezvény,
            másrészről a páratlan években Németországban megrendezett Ikarus
            találkozók páros években itthon megtartott testvér rendezvényévé
            váljon.
          </p>
          <h1>HELYSZÍN</h1>
          <p>
            A tértől 800 méterre (77-es déli elkerülő úton) nagy méretű
            személyautó parkoló áll rendelkezésre, ahonnan néhány perces sétával
            a városon keresztül elérhető a rendezvény helyszíne. A rendezvény
            ideje alatt nosztalgia autóbuszjáratok közlekednek a városban,
            délután folyamán pedig egy 30 km hosszú 1 órás felvonulás lesz a
            festői szépségű Káli- medencében.
          </p>
          <p>
            A rendezvény területén egész nap kitelepült étterem üzemel, a
            kiállítók és a látogatók részére, valamint lehetőség lesz pólók
            ajándéktárgyak illetve tombola vásárlására. A rendezvény
            megközelíthetőségének javítása érdekében több városból nosztalgia
            különjáratok indulnak, valamint Budapestről nosztalgia különvonat
            közlekedik, ezekről részletesen a megközelítés menüpontban
            tájékozódhatnak.
          </p>
          <p>
            A helyszín befogadóképessége korlátozott, emiatt csak IKARUS márkájú
            járművek kiállítására van lehetőség, egyéb veterán járművet sajnos
            nem tudunk fogadni, emiatt megértésüket köszönjük!
          </p>
        </div>
      ) : (
        <div className="container">
          <h1>THE EVENT</h1>
          <p>
            On the 7th of may 2022. the International Ikarus Meeting will be
            held at Tapolca for the third time. The first meeting in 2016. was
            organized for two purposes. One was to have a gathering of hungarian
            made buses in the western part of Hungary, and the other was to have
            a sibling event in the even years for the german Ikarus meeting held
            in every odd year.
          </p>
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
            Hungary. From Budapest an exclusive nostalgic charter train service
            will run to Tapolca station and back. Find out more about the topic
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

export default Event;
