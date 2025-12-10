import Hero from "@/components/Hero";

const page = () => {
  return (
    <main id="policy">
      <Hero img={"/img/about-hero.jpg"} title={"Datenschutz"} />
      <div className="wrapper flex-col content">
        <h2>DATENSCHUTZERKLÄRUNG</h2>

        <section id="einleitung">
          <p>
            Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer
            personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend
            informieren wir Sie über die Verarbeitung personenbezogener Daten bei Nutzung
            unserer Website gemäß Art. 13 DSGVO.
          </p>
        </section>

        <section id="verantwortlicher">
          <h3>1. Verantwortlicher</h3>
          <p>
            <strong>Fahrschule M1plus GmbH</strong>
            <br />
            Kreillerstraße 103
            <br />
            81825 München
            <br />
            Telefon: 089 / 45451433
            <br />
            E-Mail: info@plusm1.de
          </p>
        </section>

        <section id="hosting">
          <h3>2. Hosting</h3>
          <p>
            Unsere Website wird bei <strong>IONOS SE</strong>, Elgendorfer Straße 57,
            56410 Montabaur, gehostet. Mit IONOS besteht ein Vertrag zur
            Auftragsverarbeitung gemäß Art. 28 DSGVO. Beim Besuch unserer Website werden
            automatisch folgende Daten erfasst:
          </p>
          <ul>
            <li>IP-Adresse (anonymisiert)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>br/owsertyp und -version</li>
            <li>Betriebssystem</li>
            <li>Referrer-URL</li>
            <li>besuchte Seiten</li>
          </ul>
          <p>
            Diese Daten dienen der technischen Bereitstellung und Sicherheit der Website
            (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section id="cookies">
          <h3>3. Cookies &amp; Einwilligung</h3>
          <p>
            Wir verwenden Cookies, um unsere Website nutzerfreundlich zu gestalten.
            Technisch notwendige Cookies werden ohne Einwilligung gesetzt. Für alle
            anderen (z. B. Analyse- oder Marketing-Cookies) holen wir Ihre Einwilligung
            über ein Cookie-Banner ein (Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 TDDDG).
          </p>
          <p>
            Sie können Ihre Einwilligung jederzeit über das Banner widerrufen oder
            anpassen.
          </p>
        </section>

        <section id="google-analytics">
          <h3>4. Google Analytics 4</h3>
          <p>
            Diese Website nutzt <strong>Google Analytics 4</strong> (Google Ireland Ltd.).
            Die IP-Anonymisierung ist aktiviert. Die Datenverarbeitung erfolgt auf
            Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
          </p>
          <p>
            Die Daten können in die USA übertragen werden. Google ist unter dem EU-U.S.
            Data Privacy Framework zertifiziert.
          </p>
        </section>

        <section id="google-maps">
          <h3>5. Google Maps</h3>
          <p>
            Zur Darstellung von Standorten nutzen wir <strong>Google Maps</strong>. Beim
            Aufruf der Karte werden personenbezogene Daten (z. B. IP-Adresse) an Google
            übermittelt. Die Karte wird erst nach Ihrer ausdrücklichen Einwilligung
            geladen (Art. 6 Abs. 1 lit. a DSGVO). Weitere Infos finden Sie in der
            <a href="https://policies.google.com/privacy">
              Datenschutzerklärung von Google
            </a>
            .
          </p>
        </section>

        <section id="youtube">
          <h3>6. YouTube</h3>
          <p>
            Auf unserer Website sind Videos von{" "}
            <strong>YouTube (Google Ireland Ltd.)</strong> eingebunden. Beim Abspielen
            werden Daten an Google übermittelt. Die Einbindung erfolgt im erweiterten
            Datenschutzmodus. Dennoch kann es zu einer Datenübertragung kommen. Die
            Wiedergabe erfolgt nur nach Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
          </p>
        </section>

        <section id="kontaktformular">
          <h3>7. Kontaktformular</h3>
          <p>
            Wenn Sie uns per Formular kontaktieren, speichern wir Ihre Angaben zur
            Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO).
          </p>
        </section>

        <section id="minderjaehrige">
          <h3>8. Einwilligung bei Minderjährigen</h3>
          <p>
            Personen unter 16 Jahren dürfen personenbezogene Daten nur mit Zustimmung der
            Erziehungsberechtigten übermitteln. Ohne diese Einwilligung erfolgt keine
            Verarbeitung.
          </p>
        </section>

        <section id="rechte">
          <h3>9. Ihre Rechte</h3>
          <p>Sie haben das Recht auf:</p>
          <ul>
            <li>
              <strong>Auskunft</strong> (Art. 15 DSGVO)
            </li>
            <li>
              <strong>Berichtigung</strong> (Art. 16 DSGVO)
            </li>
            <li>
              <strong>Löschung</strong> (Art. 17 DSGVO)
            </li>
            <li>
              <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)
            </li>
            <li>
              <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
            </li>
            <li>
              <strong>Widerspruch</strong> (Art. 21 DSGVO)
            </li>
            <li>
              <strong>Widerruf Ihrer Einwilligung</strong> (Art. 7 Abs. 3 DSGVO)
            </li>
            <li>
              <strong>Beschwerde bei einer Aufsichtsbehörde</strong> (Art. 77 DSGVO)
            </li>
          </ul>
        </section>

        <section id="streitbeilegung">
          <h3>10. Online-Streitbeilegung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            bereit:
            <br />
            <a href="https://ec.europa.eu/consumers/odr">
              https://ec.europa.eu/consumers/odr
            </a>
            <br />
            Wir sind nicht verpflichtet und nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbr/aucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>
      </div>
    </main>
  );
};

export default page;
