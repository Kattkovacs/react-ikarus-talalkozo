import React from "react";

const Contact = ({ currentLanguage }) => {
  return (
    <section className="event" id="contact">
      {currentLanguage === "hu" ? (
        <div className="container">
          <h1>KAPCSOLAT</h1>
          <p>
            A találkozóval kapcsolatban bármilyen további információval a
            következő elérhetőségeink bármelyikén állunk rendelkezésére:
          </p>
          <p>Facebook esemény</p>
        </div>
      ) : (
        <div className="container">
          <h1>CONTACT</h1>
          <p>
            If you need further information about the event, feel free to
            contact us on any of the following ways:
          </p>
          <p>Facebook event</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
