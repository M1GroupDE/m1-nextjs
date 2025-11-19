import Link from "next/link";

const Header = () => {
  return (
    <header id="header" className="wrapper flex-row">
      <Link href="/" className="logo">
        <img src="img/logo.png" alt="" />
      </Link>

      <nav className="nav flex-row">
        <div className="site-nav flex-row">
          <Link href={"#"}>Führerschein machen</Link>
          <Link href={"#"}>Unsere Dienstleistungen</Link>
          <Link href={"/about"}>Über uns</Link>
          <Link href={"/contact"}>Kontaktieren Sie uns</Link>
        </div>

        <div className="cta">
          <Link href={"#"} className="btn-pr">
            JETZT ANMELDEN
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
