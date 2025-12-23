import Link from "next/link";

const Modern = () => {
  return (
    <section className="modern flex-row wrapper">
      <div className="imgs flex-row">
        <img className="img-1" src="/img/modern-2.jpg" alt="" />
        <img className="img-2" src="/img/modern-1.jpg" alt="" />
      </div>
      <div className="content flex-col">
        <h2>Modern. Persönlich. Erfolgreich.</h2>
        <ul className="flex-col">
          <li>
            Bei M1 geht es nicht nur um den Führerschein - sondern um ein sicheres,
            digitales und persönliches Fahrerlebnis. Mit erfahrenen Fahrlehrer/-innen,
            modernen Fahrzeugen und eigenem Übungsplatz machen wir dich fit für die
            Straße.
          </li>
          <li>
            Die M1 Fahrschulen stehen für innovative Ausbildung, persönliche Betreuung und
            höchste Erfolgsquoten. Egal ob Auto, Motorrad oder Lkw - deine Fahrschule,
            deine M1!
          </li>
        </ul>

        <div className="cta flex-row">
          <Link href={"/contact"} className="btn-pr">
            JETZT ANMELDEN
          </Link>
          <Link href={"about"} className="btn-sc">
            ÜBER UNS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Modern;
