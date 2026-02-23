import React from "react";
import { useLang } from "../context/LanguageContext";

const Event = () => {
  const { lang: currentLanguage } = useLang();
  return (
    <section className="event">
      {currentLanguage === "hu" ? (
        <div className="container">
          <br></br>
          {/* <h2>Honlapunkat 2024. február közepén frissítjük a buszok regisztrációjával és a további programokkal.</h2> */}
          <h1>RENDEZVÉNY</h1>
          <p>
            2026. május 9-én ötödik alkalommal kerül megrendezésre a
            Nemzetközi Ikarus találkozó Tapolcán. A rendezvény 2016-ban indult
            útjára, azzal a céllal, hogy egyrészt a nyugati országrészben is
            legyen egy, a magyar buszgyártás termékeit bemutató rendezvény,
            másrészről a páratlan években Németországban megrendezett Ikarus
            találkozók páros években itthon megtartott testvér rendezvényévé
            váljon.
          </p>
        </div>
      ) : (
        <div className="container">
          <br></br>
          {/* <h2>We will update our website in mid-February 2024 with bus registration and additional programs.</h2> */}
          <h1>THE EVENT</h1>
          <p>
            On the 9<sup>th</sup> of may 2026 the 5<sup>th</sup> International Ikarus Meeting will be
            held at Tapolca for the fifth time. The first meeting in 2016. was
            organized for two purposes. One was to have a gathering of hungarian
            made buses in the western part of Hungary, and the other was to have
            a sibling event in the even years for the german Ikarus meeting held
            in every odd year.
          </p>
        </div>
      )}
    </section>
  );
};

export default Event;
