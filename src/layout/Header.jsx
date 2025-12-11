"use client";
import Link from "next/link";
import { useState } from "react";
import { AltArrowDownBold, HamburgerMenuLinear } from "solar-icon-set";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header id="header" className={`wrapper flex-row ${mobileOpen ? "mobile-open" : ""}`}>
      <Link href="/" className="logo">
        <img src="/img/logo.png" alt="" />
      </Link>

      <nav className="nav flex-row">
        <div className="site-nav flex-row">
          <Link href={"/contact"}>kontakt</Link>

          <div className="dropdown">
            <div className="dropdown-toggle flex-row">
              <strong>Führerschein machen</strong>
              <AltArrowDownBold />
            </div>
            <ul className="dropdown-menu">
              <li>
                <Link href="/class-b">Auto</Link>
              </li>
              <li>
                <Link href="/class-a">MOTORRAD</Link>
              </li>
              <li>
                <Link href="#">AUTO-ANHÄNGER</Link>
              </li>
              <li>
                <Link href="#">TRAKTOR</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <div className="dropdown-toggle flex-row">
              <strong>Dienstleistungen</strong>
              <AltArrowDownBold />
            </div>
            <ul className="dropdown-menu">
              <li>
                <Link href="7-14-days">Dein Führerschein in nur 7-14 Tagen</Link>
              </li>
              <li>
                <Link href="/vr">DEGENER 360° - Fahrsimulator</Link>
              </li>
              <li>
                <Link href="/financing">Führerschein finanzieren</Link>
              </li>
              <li>
                <Link href="/digital-services">Digitale Dienste</Link>
              </li>
              <li>
                <Link href="/theory-test">Fragen für die Theorieprüfung</Link>
              </li>
            </ul>
          </div>

          <Link href={"/about"}>Über uns</Link>

          <Link href={"/blog"}>Blog</Link>
        </div>

        <div className="cta">
          <Link href={"/contact"} className="btn-pr">
            JETZT ANMELDEN
          </Link>
        </div>
      </nav>

      <button
        className={`burger ${mobileOpen ? "open" : ""}`}
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        onClick={() => setMobileOpen((s) => !s)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        <HamburgerMenuLinear size={32} />
      </button>

      <div id="mobile-menu" className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              kontakt
            </Link>
          </li>
          <li className="mobile-sub">
            <details>
              <summary>Führerschein machen</summary>
              <ul>
                <li>
                  <Link href="/class-b" onClick={() => setMobileOpen(false)}>
                    Auto
                  </Link>
                </li>
                <li>
                  <Link href="/class-a" onClick={() => setMobileOpen(false)}>
                    MOTORRAD
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={() => setMobileOpen(false)}>
                    AUTO-ANHÄNGER
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={() => setMobileOpen(false)}>
                    TRAKTOR
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="mobile-sub">
            <details>
              <summary>Dienstleistungen</summary>
              <ul>
                <li>
                  <Link href="/7-14-days" onClick={() => setMobileOpen(false)}>
                    Dein Führerschein in nur 7-14 Tagen
                  </Link>
                </li>
                <li>
                  <Link href="/vr" onClick={() => setMobileOpen(false)}>
                    DEGENER 360° - Fahrsimulator
                  </Link>
                </li>
                <li>
                  <Link href="/financing" onClick={() => setMobileOpen(false)}>
                    Führerschein finanzieren
                  </Link>
                </li>
                <li>
                  <Link href="/digital-services" onClick={() => setMobileOpen(false)}>
                    Digitale Dienste
                  </Link>
                </li>
                <li>
                  <Link href="/theory-test" onClick={() => setMobileOpen(false)}>
                    Fragen für die Theorieprüfung
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/about" onClick={() => setMobileOpen(false)}>
              Über uns
            </Link>
          </li>

          <li>
            <Link href={"/blog"} onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
          </li>
          <li className="mobile-cta">
            <Link href="#" onClick={() => setMobileOpen(false)}>
              JETZT ANMELDEN
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
