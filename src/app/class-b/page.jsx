import CheckList from "@/components/CheckList";
import Coaches from "@/components/Coaches";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import InfoCard from "@/components/InfoCard";
import PageIntro from "@/components/PageIntro";
import QA from "@/components/QA";

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

const getQAData = async () => {
  var url = new URL(`https://api.drivem1.de/website/faqs/`);

  const res = await fetch(url, {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // cache: "force-cache",
    // next: { tags: ["blog-posts"] },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return notFound();
};

const getCoachesData = async () => {
  var url = new URL(`https://api.drivem1.de/website/employees/`);

  const res = await fetch(url, {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // cache: "force-cache",
    // next: { tags: ["blog-posts"] },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return notFound();
};

const page = async () => {
  const CoachesDataReq = getCoachesData();
  const QADataReq = getQAData();

  const [coachesData, qaData] = await Promise.all([CoachesDataReq, QADataReq]);

  return (
    <main id="class-page">
      <Hero
        img={"/img/classb-hero.jpg"}
        title={"Führerschein Klasse B"}
        subtitle={"Du fährst nicht nur Motorrad. Du lebst es"}
      />

      <PageIntro
        title={"Das B steht für Freiheit"}
        description={
          "Der Motorradführerschein A erlaubt das Fahren aller Krafträder ohne Leistungsbegrenzung – für echte Motorradliebhaber:innen, die maximale Freiheit genießen wollen."
        }
        cta={"JETZT ANMELDEN"}
        link={"/contact"}
      />

      <IconCard title={"Schnelle Fakten zur Klasse B"} data={iconCardData} />

      <InfoCard title={"Klassen im Detail"} data={infoCardData} />

      <CheckList
        title={"Das Zeug dazu hast du schon. Folgendes holen wir uns gemeinsam:"}
        data={checkListData}
        cta={"JETZT ANMELDEN"}
        link="#"
      />

      <QA data={qaData} title={"Häufig gestellte Fragen"} />

      <Coaches data={coachesData} />
    </main>
  );
};

export default page;
