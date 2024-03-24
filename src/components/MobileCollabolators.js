import React from "react";
import volan from "../volanbusz_logo.jpg";
import tapolca from "../tapolca.png";
import tapolcaOnkormanyzat from "../TapolcaOnk.jpg";
import tapolcakft from "../tapolcakft_logo_szines.jpg";
// import maxloads from "../Maxloads.png";
// import kaloztanya from "../kaloz.jpg";
import nosztalgiabusz from "../noszbusz.jpg";
import hotelhalasz from "../hotelhalaszkert.png";
// import mrt from "../mrt.jpg";
// import opti from "../opti.jpg";
import gyoribuszok from "../gyoribuszok.jpg";

const MobileCollabolators = () => {
  const customers = {
    volan: {
      id: 1,
      image: volan,
      src: "https://www.volanbusz.hu",
    },
    tapolca: {
      id: 2,
      image: tapolca,
      src: "https://www.tapolca.hu",
    },
    tapolcakft: {
      id: 3,
      image: tapolcakft,
      src: "https://tapolcakft.hu/",
    },
    tapolcaOnkormanyzat: {
      id: 4,
      image: tapolcaOnkormanyzat,
      src: "https://www.tapolca.hu",
    },
    // maxloads: {
    //   id: 3,
    //   image: maxloads,
    //   src: "https://www.maxloads.ro",
    // },
    // kaloztanya: {
    //   id: 4,
    //   image: kaloztanya,
    //   src: "https://www.facebook.com/kaloztanya.balatonederics",
    // },
    nosztalgiabusz: {
      id: 5,
      image: nosztalgiabusz,
      src: "https://www.facebook.com/nosztalgiabusz",
    },
    hotelhalasz: {
      id: 6,
      image: hotelhalasz,
      src: "https://hotelhalaszkert.hu",
    },
    // mrt: {
    //   id: 7,
    //   image: mrt,
    //   src: "https://www.mavrailtours.hu/hu/",
    // },
    // opti: {
    //   id: 8,
    //   image: opti,
    //   src: "http://optitrailer.com/",
    // },
    gyoribuszok: {
      id: 9,
      image: gyoribuszok,
      src: "http://www.gyoribuszok.hu/",
    }
  };

  return (
    <div className="mobileCollab">
      {Object.keys(customers).map((c, idx) => {
        return (
          <div className="logoBox" key={idx + 20}>
            <a
              href={customers[c].src}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
            >
              <img
                className="logoImg"
                key={customers[c].id}
                src={customers[c].image}
                alt={customers[c].src}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default MobileCollabolators;
