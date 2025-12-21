import CheckList from "@/components/CheckList";
import Coaches from "@/components/Coaches";
import ExpandableInfoCard from "@/components/ExpandableInfoCard";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import PageIntro from "@/components/PageIntro";
import QA from "@/components/QA";

export const metadata = {
  title: "Führerschein Klasse C - LKW Fahrer Ausbildung bei M1 Academy",
  description:
    "Führerschein Klasse C bei M1 Academy: Schwere Nutzfahrzeuge, LKW-Ausbildung, Ladungssicherung und professionelle Fahrer. Deine Ausbildung mit erfahrenen Coaches und Fahrsimulator.",
};

const iconCardData = [
  {
    icon: "/img/Mindestalter.png",
    title: "Mindestalter: 21 (18 für Berufskraftfahrer)",
  },
  {
    icon: "/img/Getriebe2.png",
    title: "Getriebe: Schaltung / Automatik",
  },
  {
    icon: "/img/Fahrstil2.png",
    title: "Fahrstil/Coach: Individuell & beruflich orientiert",
  },
  {
    icon: "/img/Fahrzeugauswahl.png",
    title: "Fahrzeugauswahl: LKW + Anhänger ≤750 kg",
  },
  {
    icon: "/img/360°-Trainingssimulator für Gefahrensituationen.png",
    title: "360°-Trainingssimulator für Gefahrensituationen",
  },
  {
    icon: "/img/Prüfungstypen2.png",
    title: "Prüfungstypen: Theorie & Praxis",
  },
];

const expandableInfoCardData = [
  {
    title: "Wie Klasse C Besonderheiten",
    description:
      "Praxisnahe Ausbildung für schwere Nutzfahrzeuge mit Fokus auf Sicherheit und effizientes Fahren.",
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
    title: "C1 - Leichte LKW",
    description:
      "C1 erlaubt das Fahren von leichten LKW zwischen 3,5 und 7,5 Tonnen, meist für städtische Transporte und kleinere Lieferdienste.",
    requirements: [
      "Mindestalter: 18 Jahre",
      "Fahrzeuge: 3.5 bis 7.5 Tonnen",
      "Automatischer Übergang in Klasse C",
    ],
    training: [],
    highlights: [],
  },
  {
    title: "CE - LKW mit großem Anhänger",
    description:
      "CE berechtigt zum Fahren schwerer LKW mit großen Anhängern über 750 kg, vor allem im Fernverkehr und in der professionellen Logistik.",
    requirements: [
      "Mindestalter: 21 Jahre",
      "Fahrzeuge: LKW + Anhänger über 750 kg",
      "Besonderheiten: Ausbildung im Rangieren mit Anhänger, Druckluftbremsen und schwierigen Kurven",
    ],
    training: [],
    highlights: [],
  },
];

const checkListData = [
  { title: "Anerkannter Ausweis (Personalausweis oder Reisepass)" },
  { title: "Biometrisches Passfoto" },
  { title: "Sehtest-Bescheinigung" },
  { title: "Erste-Hilfe-Kurs Nachweis" },
  { title: "Führungszeugnis (polizeiliches)" },
  { title: "Gültiger Führerschein Klasse B" },
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
        img={"/img/classc-hero.jpg"}
        title={"Führerschein Klasse C"}
        subtitle={"Du fährst nicht nur LKW. Du beherrschst ihn."}
      />

      <PageIntro
        title={"Das C steht für Verantwortung."}
        description={
          "Der Führerschein der Klasse C bedeutet den Einstieg in die professionelle Welt des Fahrens mit schweren Nutzfahrzeugen. Er berechtigt zum Führen von LKWs mit einem Gewicht über 3,5 Tonnen - ideal für Transport, Logistik und industrielle Berufe."
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
