"use client";
import { Mailbox, PhoneCalling } from "@solar-icons/react";

const ContactCard = () => {
  return (
    <section className="contact-card wrapper flex-col">
      <h2>Kontaktiere uns</h2>
      <div className="content flex-row">
        <img src="/img/couch.jpg" alt="" />
        <div className="contact-details flex-col">
          <div className="header">
            <p>
              <strong>Sitki Dener - Leitung Intensivausbildung</strong>
            </p>
            <small>
              Er kennt das System, versteht deine Situation und begleitet dich sicher zum
              Führerschein.
            </small>
          </div>

          <div className="footer flex-col">
            <div className="box flex-row">
              <PhoneCalling size={24} />
              <p>089 / 70 99 77 98</p>
            </div>

            <div className="box flex-row">
              <Mailbox size={24} />
              <p>s.dener@groupm1.de</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
