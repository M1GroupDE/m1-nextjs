import Link from "next/link";

const Vertrau = () => {
  return (
    <section className="vertrau flex-row wrapper">
      <div className="content flex-col">
        <h2>Vertrau den Fahrprofis</h2>
        <p>
          Sie begleiten dich persönlich und kompetent vom Theorieunterricht bis zur
          praktischen Prüfung.
        </p>
        <strong>Was dich bei uns erwartet:</strong>
        <ul className="flex-col">
          <li>
            Bei M1 geht es nicht nur um den Führerschein – sondern um ein sicheres,
            digitales und persönliches Fahrerlebnis. Mit erfahrenen Fahrlehrer:innen,
            modernen Fahrzeugen und eigenem Übungsplatz machen wir dich fit für die
            Straße.
          </li>
          <li>
            Die M1 Fahrschulen stehen für innovative Ausbildung, persönliche Betreuung und
            höchste Erfolgsquoten. Egal ob Auto, Motorrad oder Lkw – deine Fahrschule,
            deine M1!
          </li>
        </ul>

        <strong>
          Vertrau auf Menschen, die ihren Job lieben – und dich wirklich weiterbringen.
        </strong>

        <div className="cta flex-row">
          <Link href={"#"} className="btn-pr">
            JEZT ANMELDEN
          </Link>
        </div>
      </div>

      <div className="imgs flex-row">
        <img className="img-1" src="/img/vertrau.png" alt="" />
      </div>
    </section>
  );
};

export default Vertrau;
