"use client";
import { CameraSquare } from "@solar-icons/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="content wrapper flex-col">
        <section className="f1 flex-row">
          <Link href={"/"} className="logo">
            <img src="/img/logo.png" alt="" />
          </Link>
          <div className="cta">
            <Link href={"#"} className="btn-pr">
              JETZT ANMELDEN
            </Link>
          </div>
        </section>

        <hr />

        <section className="f2 flex-row">
          <div className="col-1 flex-col">
            <p>
              M1 Fahrschulen stehen für innovative Ausbildung, persönliche Betreuung und
              höchste Erfolgsquoten.
            </p>

            <div className="socials flex-row">
              <Link href={"#"}>
                <CameraSquare size={16} />
              </Link>
              <Link href={"#"}>
                <CameraSquare size={16} />
              </Link>
              <Link href={"#"}>
                <CameraSquare size={16} />
              </Link>
              <Link href={"#"}>
                <CameraSquare size={16} />
              </Link>
            </div>
          </div>

          <div className="col-2 flex-col">
            <p className="title">ÜBER UNS</p>
            <nav className="flex-col">
              <Link href={"#"}>
                <strong>Lerne unsere Fahrzeuge kennen</strong>
              </Link>
              <Link href={"#"}>
                <strong>Dein Kontakt zu uns</strong>
              </Link>
              <Link href={"#"}>
                <strong>Unsere Standorte</strong>
              </Link>
            </nav>
          </div>

          <div className="col-3 flex-col">
            <p className="title">WEITERE ANGEBOTE</p>
            <nav className="flex-col">
              <Link href={"#"}>
                <strong>Fragen zur Theorieprüfung</strong>
              </Link>
              <Link href={"#"}>
                <strong>Fahrsimulator DEGENER 360°</strong>
              </Link>
              <Link href={"#"}>
                <strong>Ratenzahlung</strong>
              </Link>
            </nav>
          </div>
        </section>

        <hr />

        <section className="f3">
          <p>All Rights Reserved</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
