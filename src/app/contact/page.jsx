"use client";
import Branches from "@/components/Branches";
import Hero from "@/components/Hero";
import Link from "next/link";
import { CameraSquareLinear } from "solar-icon-set";

const page = () => {
  return (
    <main id="contact-page">
      <Hero img={"/img/contact-hero.jpg"} title={"Kontakt M1"} />

      <div className="contact-info flex-row wrapper">
        <div className="info flex-col">
          <small>M1 Group</small>
          <h2>Nehmen Sie Kontakt mit der M1 Fahrschule auf</h2>
          <p>
            Egal, ob Sie gerade erst anfangen oder schon Ihre nächste Unterrichtsstunde
            buchen möchten – wir sind hier, um Ihre Fragen zu beantworten und Sie auf dem
            Weg zum Erfolg zu begleiten.
          </p>

          <div className="call">
            <p>Callcenter:</p>
            <p>
              <strong>+49 123 456789</strong>
            </p>
            <p>
              <strong>+49 123 456781</strong>
            </p>
          </div>

          <div className="socials flex-row">
            <Link href={"#"}>
              <CameraSquareLinear size={16} />
            </Link>
            <Link href={"#"}>
              <CameraSquareLinear size={16} />
            </Link>
            <Link href={"#"}>
              <CameraSquareLinear size={16} />
            </Link>
            <Link href={"#"}>
              <CameraSquareLinear size={16} />
            </Link>
          </div>
        </div>
        <div className="form flex-col">
          <div className="head">
            <h3>Nehmen Sie Kontakt auf</h3>
            <p>
              Haben Sie Fragen, bevor Sie sich anmelden? Schreiben Sie uns eine Nachricht,
              rufen Sie uns an oder kommen Sie persönlich in einer unserer Filialen
              vorbei.
            </p>
          </div>

          <form className="flex-col">
            <label htmlFor="firstName">Vorname</label>
            <input
              type="text"
              id="firstName"
              placeholder="Geben Sie Ihren Vornamen ein"
            />

            <label htmlFor="lastName">Nachname</label>
            <input
              type="text"
              id="lastName"
              placeholder="Geben Sie Ihren Nachnamen ein"
            />

            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              placeholder="Geben Sie Ihre E-Mail-Adresse ein"
            />

            <button className="btn-pr">Absenden</button>
          </form>
        </div>
      </div>

      <Branches />
    </main>
  );
};

export default page;
