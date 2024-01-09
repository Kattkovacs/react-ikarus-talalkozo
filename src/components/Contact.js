import React from "react";
// import { VscMail } from "react-icons/vsc";

const Contact = ({ currentLanguage }) => {
  return (
    <section className="event" id="contact">
      {currentLanguage === "hu" ? (
        <div className="container">
          <h1>KAPCSOLAT</h1>
          <div className="boxes">
            {/* <div id="content">
              <strong>TOVÁBBI INFORMÁCIÓ</strong>
              <p>
                A találkozóval kapcsolatban bármilyen további információval a
                következő elérhetőségen állunk rendelkezésére:{" "}
              </p>
              <VscMail className="vscMail" size="15px" />
              <strong className="mailAddress"> ikarustapolca@gmail.com</strong>
            </div> */}
            <iframe
              title="fb"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIkarus-Tal%C3%A1lkoz%C3%B3-Tapolca-111076281528330&tabs=timeline&width=300&height=150&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
              width="300"
              height="150"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1>CONTACT</h1>
          <div className="boxes">
            {/* <div id="content">
              <h4>FURTHER INFORMATION</h4>
              <p>
                If you need further information about the event, feel free to
                contact us on mail:
              </p>
              <VscMail className="vscMail" size="15px" />
              <strong className="mailAddress"> ikarustapolca@gmail.com</strong>
            </div> */}
            <iframe
              title="fb"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIkarus-Tal%C3%A1lkoz%C3%B3-Tapolca-111076281528330&tabs=timeline&width=300&height=150&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
              width="300"
              height="150"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
