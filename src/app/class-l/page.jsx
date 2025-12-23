import CheckList from "@/components/CheckList";
import Coaches from "@/components/Coaches";
import ExpandableInfoCard from "@/components/ExpandableInfoCard";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import PageIntro from "@/components/PageIntro";
import QA from "@/components/QA";

export const metadata = {
  title: "Führerschein Klasse L - Omnibus Fahrer Ausbildung bei M1 Academy",
  description:
    "Führerschein Klasse L bei M1 Academy: Omnibus und Busführerschein, Personenbeförderung, Berufskraftfahrer. Professionelle Ausbildung mit erfahrenen Coaches und modernem Training.",
};

const iconCardData = [
  {
    icon: "/img/Mindestalter.png",
    title: "Mindestalter: 16 Jahre",
  },
  {
    icon: "/img/Getriebe2.png",
    title: "Getriebe: Schaltung / Automatik",
  },
  {
    icon: "/img/Fahrstil2.png",
    title: "Fahrstil/Coach: Individuell & praxisorientiert",
  },
  {
    icon: "/img/Fahrzeugauswahl.png",
    title: "Fahrzeugauswahl: Zugmaschinen bis 40 km/h + Anhänger  ",
  },
  {
    icon: "/img/Prüfungstypen2.png",
    title: "Prüfungstypen: Nur Praxis",
  },
];

const expandableInfoCardData = [
  {
    title: "Klasse L – Traktorführerschein",
    description:
      "Die Klasse L erlaubt das Führen von land- und forstwirtschaftlichen Zugmaschinen bis 40 km/h sowie Anhängern im Rahmen landwirtschaftlicher Nutzung. Ideal für alle, die mobil auf Hof, Feld und Forst sein müssen – ob beruflich oder privat.",
    requirements: [
      "Mindestalter: 21 Jahre (18 Jahre mit Berufsausbildung)",
      "Besonderheiten: Fokus auf Ladungssicherung, Fahrphysik, Lenkzeiten",
    ],
    training: [
      "Theorie: 6 Doppelstunden Grundstoff + 10 Doppelstunden Zusatzstoff",
      "Sonderfahrten: 5 Überland, 2 Autobahn, 3 Nachtfahrten",
      "Praxis: Übungsstunden je nach Lernfortschritt",
    ],
    highlights: [],
  },
  {
    title: "Klasse L mit landwirtschaftlichem Schwerpunkt",
    description:
      "Geeignet für Personen, die regelmäßig mit Traktoren, Anhängern oder Arbeitsmaschinen im landwirtschaftlichen Bereich unterwegs sind. Keine Theorieprüfung erforderlich – der Fokus liegt auf praktischer Einweisung und Fahrsicherheit.",
    requirements: [
      "Mindestalter: 18 Jahre",
      "Fahrzeuge: 3.5 bis 7.5 Tonnen",
      "Automatischer Übergang in Klasse C",
    ],
    training: [],
    highlights: [],
  },
];

const checkListData = [
  { title: "Anerkannter Ausweis (Personalausweis oder Reisepass)" },
  { title: "Biometrisches Passfoto" },
  { title: "Sehtestbescheinigung" },
  { title: "Nachweis über den Erste-Hilfe-Kurs" },
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
        img={"/img/classl-hero.jpg"}
        title={"Führerschein Klasse L"}
        subtitle={"Du fährst nicht nur Traktor. Du bewegst Landwirtschaft."}
      />

      <PageIntro
        title={"Das L steht für Leistung."}
        description={
          "Der Führerschein der Klasse L ist dein Einstieg in die Welt der landwirtschaftlichen Mobilität. Er berechtigt zum Führen von Zugmaschinen bis 40 km/h sowie Anhängern im land- und forstwirtschaftlichen Einsatz – ideal für Hof, Feld und Forst."
        }
        cta={"JETZT ANMELDEN"}
        link={"/contact"}
      />

      <IconCard title={"Schnelle Fakten zur Klasse C"} data={iconCardData} />

      <ExpandableInfoCard data={expandableInfoCardData} />

      <CheckList
        title={"Das Zeug dazu hast du schon. Folgendes holen wir uns gemeinsam:"}
        data={checkListData}
        cta={"JETZT ANMELDEN"}
        link="/contact"
      />

      <QA data={qaData} title={"Häufig gestellte Fragen"} />

      <Coaches data={coachesData} />
    </main>
  );
};

export default page;
