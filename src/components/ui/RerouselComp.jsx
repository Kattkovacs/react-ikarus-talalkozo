import React from "react";
import volan from "../../volanbusz_logo.jpg";
import smithgift from "../../smithgift.png";
import ferrocar from "../../Ferrocar.jpg";
import nosztalgiabusz from "../../noszbusz.jpg";
import beaver from "../../beaver.jpg";
import mavSzeza from "../../MAV__Szesza logo_kek teli.png";

const customers = [
  { id: 1,  image: volan,         src: "https://www.volanbusz.hu" },
  { id: 5,  image: nosztalgiabusz,src: "https://www.facebook.com/nosztalgiabusz" },
  { id: 11, image: ferrocar,      src: "https://ferrocar.hu/" },
  { id: 12, image: beaver,        src: "https://beavertradition.com/" },
  { id: 13, image: smithgift,     src: "https://www.smithgift.hu/" },
  { id: 14, image: mavSzeza,      src: "#" },
];

export const RerouselComp = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {[...customers, ...customers].map((c, idx) => (
          <div className="carousel-item" key={idx}>
            <a
              href={c.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logoImg"
                src={c.image}
                alt={c.src}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
