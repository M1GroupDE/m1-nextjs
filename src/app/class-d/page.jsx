import CheckList from "@/components/CheckList";
import Coaches from "@/components/Coaches";
import ExpandableInfoCard from "@/components/ExpandableInfoCard";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import PageIntro from "@/components/PageIntro";
import QA from "@/components/QA";

export const metadata = {
  title: "Führerschein Klasse D - Busfahrer Ausbildung bei M1 Academy",
  description:
    "Führerschein Klasse D bei M1 Academy: Busfahrer-Ausbildung, Fahrgastbeförderung, Personenverkehr und professionelle Fahrer. Deine Ausbildung mit erfahrenen Coaches und Fahrsimulator.",
};

const iconCardData = [
  {
    icon: "/img/Mindestalter24.png",
    title: "Mindestalter: 24 (oder 21 mit Grundqualifikation)",
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
    title: "Fahrzeugtyp: Kraftomnibusse mit mehr als 8 Fahrgastplätzen",
  },
  {
    icon: "/img/Einsatzbereich.png",
    title: "Einsatzbereich: Personenverkehr, ÖPNV, Reisebus",
  },
  {
    icon: "/img/Prüfungstypen2.png",
    title: "Prüfung: Theorie und Praxis",
  },
];

const expandableInfoCardData = [
  {
    title: "Klasse D – Busführerschein",
    description:
      "Die Klasse D erlaubt das Führen von Kraftomnibussen mit mehr als 8 Fahrgastplätzen – ideal für alle, die beruflich im Personenverkehr tätig sind und Verantwortung für ihre Fahrgäste übernehmen möchten.",
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
    title: "Klasse D mit Schlüsselzahl 95 (Berufskraftfahrer)",
    description:
      "Erforderlich für alle Personen, die eine gewerbliche Tätigkeit im Personentransport aufnehmen oder ausüben möchten – z. B. als Busfahrer im ÖPNV oder Reiseverkehr.",
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
  { title: "Ärztliches und augenärztliches Gutachten" },
  {
    title:
      "Mindestalter bei Anmeldung erreicht (mind. 24 Jahre oder 21 mit beschleunigter Grundqualifikation)",
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
        img={"/img/classd-hero.jpg"}
        title={"Führerschein Klasse D"}
        subtitle={"Du fährst nicht nur einen Bus. Du trägst Verantwortung für alle."}
      />

      <PageIntro
        title={"Das D steht für Deine Fahrgäste."}
        description={
          "Der Führerschein der Klasse D berechtigt zum Führen von Kraftomnibussen mit mehr als 8 Fahrgastplätzen – ideal für alle, die beruflich im Personenverkehr unterwegs sind und Verantwortung für ihre Fahrgäste übernehmen wollen."
        }
        cta={"JETZT ANMELDEN"}
        link={"/contact"}
      />

      <IconCard title={"Schnelle Fakten zur Klasse D"} data={iconCardData} />

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
