import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero wrapper">
      <div className="hero-image">
        <img src="/img/hero.png" alt="" />
        <div className="content flex-col">
          <h1>Modern, familiär, digital</h1>
          <p>Deine Wahl, deine Schule – Egal, Auto, Motorrad</p>
          <Link href={"#"} className="btn-pr">
            JEZT ANMELDEN
          </Link>
        </div>
      </div>
      <div className="hero-description flex-row">
        <div className="text">
          <p>
            M1 Fahrschulen stehen für innovative Ausbildung, persönliche Betreuung und
            höchste Erfolgsquoten.
          </p>
        </div>

        <div className="cards">
          <div className="card flex-col">
            <img src="/img/auto-1.png" alt="" />
            <p>Auto</p>
          </div>
          <div className="card flex-col">
            <img src="/img/auto-2.png" alt="" />
            <p>AUTO-ANHÄNGER</p>
          </div>
          <div className="card flex-col">
            <img src="/img/motor.png" alt="" />
            <p>MOTORRAD</p>
          </div>
          <div className="card flex-col">
            <img src="/img/traktor.png" alt="" />
            <p>TRAKTOR</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
