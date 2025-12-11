import Link from "next/link";
import { AltArrowDownBold } from "solar-icon-set";

const Nav = () => {
  return (
    <nav className="nav flex-row">
      <div className="site-nav flex-row">
        <Link href={"/contact"}>Dein Kontakt zu uns</Link>
        <Link href={"#"}>get a driver's license</Link>

        <div className="dropdown">
          <div className="dropdown-toggle flex-row">
            <strong>further offer</strong>
            <AltArrowDownBold />
          </div>
          <ul className="dropdown-menu">
            <li>
              <Link href="#">Dein Führerschein in nur 7–14 Tagen</Link>
            </li>
            <li>
              <Link href="#">DEGENER 360°-Fahrsimulator</Link>
            </li>
            <li>
              <Link href="#">Führerschein finanzieren</Link>
            </li>
            <li>
              <Link href="#">Digitale Dienste</Link>
            </li>
            <li>
              <Link href="#">Fragen für die Theorieprüfung</Link>
            </li>
          </ul>
        </div>

        <Link href={"/about"}>Über uns</Link>
      </div>

      <div className="cta">
        <Link href={"/contact"} className="btn-pr">
          JETZT ANMELDEN
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
