import Link from "next/link";

const Header = () => {
  return (
    <header id="header" className="wrapper flex-row">
      <div className="logo">
        <img src="img/logo.png" alt="" />
      </div>

      <nav className="nav flex-row">
        <div className="site-nav flex-row">
          <Link href={"#"}>Weblog</Link>
          <Link href={"#"}>Kontaktieren Sie uns</Link>
          <Link href={"#"}>Führerschein beantragen</Link>
          <Link href={"#"}>Weiteres Angebot</Link>
          <Link href={"#"}>ÜBER UNS</Link>
        </div>

        <div className="cta">
          <Link href={"#"} className="btn-pr">
            JEZT ANMELDEN
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
