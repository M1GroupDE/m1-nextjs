import CheckList from "@/components/CheckList";
import Coaches from "@/components/Coaches";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import InfoCard from "@/components/InfoCard";
import QA from "@/components/QA";
import Link from "next/link";

const iconCardData = [
  { icon: "/img/ALTERSKLASSE.png", title: "ALTERSKLASSE: 17 JAHRE+" },
  {
    icon: "/img/GETRIEBE.png",
    title: "GETRIEBE: MANUELL / AUTOMATIK",
  },
  {
    icon: "/img/FAHRSTIL.png",
    title: "FAHRSTIL/COACH: INDIVIDUELL",
  },
  {
    icon: "/img/FAHRZEUGKLASSEN.png",
    title: "FAHRZEUGKLASSEN: AM (ROLLER), L (TRAKTOR)",
  },
  {
    icon: "/img/Einsatz.png",
    title: "Einsatz des 360°-Fahrsimulators im Praxisunterricht der Klasse B",
  },
  {
    icon: "/img/PRÜFUNGSTYPEN.png",
    title: "PRÜFUNGSTYPEN: THEORIE UND PRAXIS",
  },
];

const infoCardData = [
  {
    title: "Wie Klasse B Besonderheiten",
    description:
      "Sicherer Start durch begleitetes Fahren Automatischer Übergang in Klasse B ab 18 Klasse B – Der klassische Pkw-Führerschein Mit der Klasse B darfst du Pkw bis 3,5 t und Anhänger bis 750 kg fahren – oder größere Anhänger, solange das Gesamtzuggewicht 3,5 t nicht übersteigt.",
    cta: "Weitere Infos",
    link: "#",
  },
  {
    title: "Klasse BF17 – Begleitetes Fahren ab 17",
    description:
      "Freiheit früh erleben – aber sicher! Mit BF17 kannst du schon ab 17 Jahren Auto fahren – in Begleitung einer erfahrenen Person.",
    cta: "Weitere Infos",
    link: "#",
  },
  {
    title: "B78 – Automatikführerschein",
    description:
      "Ausbildung und Prüfung ausschließlich auf Automatikfahrzeugen. Fahren nur mit Automatik erlaubt. Ideal für Personen, die stressfrei lernen oder später Elektroautos fahren möchten.",
    cta: "Weitere Infos",
    link: "#",
  },
  {
    title: "B197 – Kombination Automatik & Schaltwagen",
    description:
      "Die moderne Variante des Pkw-Führerscheins: Die Prüfung erfolgt auf einem Automatikfahrzeug, aber mit mindestens 10 Schaltstunden und einer 15-minütigen Testfahrt erhältst du die volle Fahrberechtigung für Schalt- und Automatikfahrzeuge.",
    cta: "Weitere Infos",
    link: "#",
  },
];

const checkListData = [
  { title: "anerkannter, amtlicher Ausweis (z.B. Personalausweis, Reisepass)" },
  { title: "Biometrisches Passfoto" },
  { title: "Sehtest-Bescheinigung (nicht älter als zwei Jahre)" },
  { title: "Nachweis für Erste-Hilfe-Kurs" },
  { title: "Kopie des Personalausweises & Führerscheins der Begleitperson (Bei BF17)" },
  { title: "bei Anmeldung ein Alter von mind. 16,5 Jahren" },
];

const qaData = [
  {
    q: "Ab welchem Alter kann ich mich anmelden?",
    a: "Inventore dignissimos corporis quisquam ducimus. Tempora quibusdam doloremque facere consectetur modi cupiditate quod, praesentium suscipit delectus quae blanditiis et harum vero porro quidem corporis laboriosam cum voluptas libero magni.",
  },
  {
    q: "Wie starte ich mit dem Theorieunterricht?",
    a: "Aliquid quo? Eveniet earum enim neque rem. Et soluta incidunt, aspernatur excepturi dolorem officia ex laborum neque, nulla pariatur esse reprehenderit est.",
  },
  {
    q: "Welche Unterlagen benötige ich für die Anmeldung?",
    a: "Soluta praesentium. Explicabo, aliquid quo? Eveniet earum enim neque rem. Et soluta incidunt, aspernatur excepturi dolorem officia ex laborum neque.",
  },
  {
    q: "Welche Fahrzeuge werden für die Ausbildung verwendet?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti, officia voluptate rem porro animi rerum.",
  },
];

const page = () => {
  return (
    <main id="class-page">
      <Hero
        img={"/img/classb-hero.png"}
        title={"Führerschein Klasse B"}
        subtitle={"Du fährst nicht nur Motorrad. Du lebst es"}
      />

      <section className="intro flex-col wrapper">
        <h2>Das B steht für Freiheit</h2>
        <p>
          Der Motorradführerschein A erlaubt das Fahren aller Krafträder ohne
          Leistungsbegrenzung – für echte Motorradliebhaber:innen, die maximale Freiheit
          genießen wollen.
        </p>

        <Link href={"/#"} className="btn-pr">
          JETZT ANMELDEN
        </Link>
      </section>

      <IconCard title={"Schnelle Fakten zur Klasse B"} data={iconCardData} />

      <InfoCard title={"Klassen im Detail"} data={infoCardData} />

      <CheckList
        title={"Das Zeug dazu hast du schon. Folgendes holen wir uns gemeinsam:"}
        data={checkListData}
        cta={"JETZT ANMELDEN"}
        link="#"
      />

      <QA data={qaData} title={"Häufig gestellte Fragen"} />

      <Coaches />
    </main>
  );
};

export default page;
