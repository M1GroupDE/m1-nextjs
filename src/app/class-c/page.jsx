import CheckList from "@/components/CheckList";
import Coaches from "@/components/Coaches";
import ExpandableInfoCard from "@/components/ExpandableInfoCard";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import PageIntro from "@/components/PageIntro";
import QA from "@/components/QA";

export const metadata = {
  title: "Führerschein Klasse L - LKW Fahrer Ausbildung bei M1 Academy",
  description:
    "Führerschein Klasse L bei M1 Academy: Schwere Nutzfahrzeuge, LKW-Ausbildung, Ladungssicherung und professionelle Fahrer. Deine Ausbildung mit erfahrenen Coaches und Fahrsimulator.",
};

const iconCardData = [
  {
    icon: "/img/Mindestalter24.png",
    title: "Mindestalter: 21 (oder 18 mit Grundqualifikation)",
  },
  {
    icon: "/img/VoraussetzungD.png",
    title: "Voraussetzung: Führerschein Klasse B",
  },
  {
    icon: "/img/Getriebe3.png",
    title: "Manuell oder Automatik",
  },
  {
    icon: "/img/Fahrzeugtyp.png",
    title: "Fahrzeugtyp: Lastkraftwagen über 3.500 kg",
  },
  {
    icon: "/img/Einsatzbereich.png",
    title: "Einsatzbereich: Güterverkehr, Logistik, Spedition",
  },
  {
    icon: "/img/Prüfungstypen2.png",
    title: "Prüfung: Theorie und Praxis",
  },
];

const expandableInfoCardData = [
  {
    title: "Klasse C – Lkw-Führerschein",
    description:
      "Die Klasse C erlaubt das Führen von Kraftfahrzeugen über 3.500 kg zulässigem Gesamtgewicht – ideal für alle, die beruflich im Güterverkehr tätig sind und Verantwortung auf der Straße übernehmen.",
    requirements: [
      "Mindestalter: 24 Jahre",
      "Gültiger Führerschein Klasse B",
      "Körperliche und geistige Eignung",
      "Keine schwerwiegenden Verkehrsverstöße",
    ],
    training: [
      "Theorie: Verkehrsregeln, Fahrerpflichten und Notfallsicherheit im Personenverkehr",
      "Praxis: Fahrbetrieb, Rangieren und Fahrgastmanagement",
      "Übungsstunden: Je nach Lernfortschritt",
    ],
    highlights: [],
  },
  {
    title: "Klasse C mit Schlüsselzahl 95 (Berufskraftfahrer)",
    description:
      "Erforderlich für alle Personen, die eine gewerbliche Tätigkeit im Gütertransport aufnehmen oder ausüben möchten.",
    requirements: [
      "Mindestalter: 24 Jahre (21 Jahre bei beschleunigter Grundqualifikation)",
      "Führerschein: Gültiger Führerschein der Klasse D",
      "Zuverlässigkeit: Keine schwerwiegenden Verkehrs- oder Straftaten",
      "Sprachkenntnisse: Ausreichende Deutschkenntnisse für Theorie, Prüfung und Berufsalltag",
      "Gesundheitliche Eignung: Ärztliches und augenärztliches Gutachten",
      "Grundqualifikation / Weiterbildung nach BKrFQG",
    ],
    training: [
      "Erweiterte theoretische Schulung",
      "Pflicht für den gewerblichen Einsatz",
      "EU-weit anerkannt",
    ],
    highlights: [],
  },
];

const checkListData = [
  { title: "Anerkannter amtlicher Ausweis (Personalausweis oder Reisepass)" },
  { title: "Nachweis über den Erste-Hilfe-Kurs" },
  { title: "Biometrisches Passfoto" },
  { title: "Führerschein Klasse B" },
  { title: "Sehtestbescheinigung" },
  {
    title:
      "Mindestalter bei Anmeldung erreicht (mind. 21 Jahre oder 18 mit Berufsausbildung)",
  },
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
        title={"Das C steht für Kontrolle."}
        description={
          "Der Führerschein der Klasse C berechtigt zum Führen von Lastkraftwagen über 3.500 kg zulässigem Gesamtgewicht – ideal für alle, die beruflich im Güterverkehr unterwegs sind und Verantwortung auf der Straße übernehmen wollen."
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
