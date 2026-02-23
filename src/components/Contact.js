import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n";
// import { VscMail } from "react-icons/vsc";

const FB_SRC =
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIkarus-Tal%C3%A1lkoz%C3%B3-Tapolca-111076281528330&tabs=timeline&width=300&height=150&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId";

const LazyFbIframe = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width: 300, height: 150 }}>
      {visible && (
        <iframe
          title="fb"
          src={FB_SRC}
          width="300"
          height="150"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

const Contact = () => {
  const t = useTranslation();
  return (
    <section className="event" id="contact">
      <div className="container">
        <h1>{t.contact.title}</h1>
        <div className="boxes">
          <LazyFbIframe />
        </div>
      </div>
    </section>
  );
};

export default Contact;
