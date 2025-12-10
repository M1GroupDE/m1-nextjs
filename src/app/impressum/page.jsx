import Hero from "@/components/Hero";

const page = () => {
  return (
    <main id="policy">
      <Hero img={"/img/about-hero.jpg"} title={"Impressum"} />
      <div className="wrapper flex-col content">
        <h2>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</h2>
        <section>
          <strong>Fahrschule M1plus GmbH:</strong>
          <p>
            Ammerlandstraße 1 <br />
            81476 München <br />
            Deutschland
          </p>
        </section>

        <section>
          <strong>Vertreten durch den Geschäftsführer:</strong>
          <p>Julian Bouraoui</p>
        </section>

        <section>
          <strong>Verantwortlicher Leiter nach dem Fahrlehrergesetz:</strong>
          <p>Franz Müller</p>
        </section>

        <section>
          <p>
            <strong>Kontakt: </strong>
            Julian Bouraoui
          </p>
          <p>
            <strong>Telefon: </strong>
            089 / 45451433
          </p>
          <p>
            <strong>E-Mail: </strong>
            info@plusm1.de
          </p>
          <p>
            <strong>Web: </strong>
            www.plusm1.de
          </p>
        </section>

        <section>
          <strong>Registereintrag:</strong>
          <p>Eintragung im Handelsregister</p>
          <p>
            <strong>Registergericht: </strong>
            Amtsgericht München
          </p>
          <p>
            <strong>Handelsregisternummer: </strong>
            HRB 220297
          </p>
          <p>
            <strong>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: </strong>
            DE302380830
          </p>

          <p>
            <strong>Steuernummer: </strong>
            143/135/91159 - Finanzamt München
          </p>
        </section>

        <section>
          <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong>
          <p>
            Julian Bouraoui <br />
            Kreillerstraße 103 <br />
            81825 München
          </p>
        </section>

        <section>
          <strong>Plattform der EU-Kommission zur Online-Streitbeilegung:</strong>
          <a href="https://ec.europa.eu/consumers/odr">
            https://ec.europa.eu/consumers/odr
          </a>
          <p>
            Wir sind nicht verpflichtet und nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>
      </div>
    </main>
  );
};

export default page;
