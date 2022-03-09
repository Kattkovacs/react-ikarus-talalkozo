import React from "react";

const Contact = ({ currentLanguage }) => {
  return (
    <section className="event" id="contact">
      {currentLanguage === "hu" ? (
        <div className="container">
          <h1>KAPCSOLAT</h1>
          <p>
            A találkozóval kapcsolatban bármilyen további információval a
            következő elérhetőségen állunk rendelkezésére:
            ikarustapolca@gmail.com
          </p>
          <p>Facebook esemény</p>
        </div>
      ) : (
        <div className="container">
          <h1>CONTACT</h1>
          <p>
            If you need further information about the event, feel free to
            contact us on mail: ikarustapolca@gmail.com
          </p>
          <p>Facebook event</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
