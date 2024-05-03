import React from "react";
// import { BiBus } from "react-icons/bi";
// import { useState } from "react";
// import BusRegistration from "./BusRegistration";


const Registration = ({ currentLanguage }) => {
  // const [open, setOpen] = useState(false);
  // const onClickHandle = (e) => {
  //   e.preventDefault();
  //   setOpen(!open);
  // };
  return (
    <section className="event" id="registration">
      {currentLanguage === "hu" ? (
        <div className="box boxHu" id="reg">
          <h1>BUSZ REGISZTRÁCIÓ</h1>
          <p>
            A kiállítóknak kötelező regisztráció van, ennek hiányában nem tudjuk
            garantálni a helyet.
          </p>
          <br></br>
          <strong>A regisztráció lezárult!</strong>
          {/* <strong>A regisztráció hamarosan indul!</strong> */}
          {/* <div className="center">
            <button onClick={onClickHandle}>
              <BiBus className="biBus" size="18px" />
              Regisztráció
            </button>
          </div>
          <BusRegistration currentLanguage={currentLanguage} open={open}/> */}
        </div>
      ) : (
        <div className="box boxEn" id="reg">
          <h1>BUS REGISTRATION</h1>
          <p>
            Registration is mandatory for all exhibitors! In absence of
            registration we can not guarantee exhibition place for your vehicle.
          </p>
          <br></br>
          {/* <strong>Registration will start soon!</strong> */}
          <strong>Registration is closed!</strong>
          {/* <div className="center">
          <button onClick={onClickHandle}>
              <BiBus className="biBus" size="18px" />
              Bus registration
            </button>
          </div>
          <BusRegistration currentLanguage={currentLanguage} open={open}/> */}
        </div>
      )}
    </section>
  )
};

export default Registration;
