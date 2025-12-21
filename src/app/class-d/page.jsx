import CheckList from "@/components/CheckList";
import Coaches from "@/components/Coaches";
import ExpandableInfoCard from "@/components/ExpandableInfoCard";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import PageIntro from "@/components/PageIntro";
import QA from "@/components/QA";

export const metadata = {
  title: "Führerschein Klasse D - Omnibus Fahrer Ausbildung bei M1 Academy",
  description:
    "Führerschein Klasse D bei M1 Academy: Omnibus und Busführerschein, Personenbeförderung, Berufskraftfahrer. Professionelle Ausbildung mit erfahrenen Coaches und modernem Training.",
};

const iconCardData = [
  {
    icon: "/img/Mindestalter24.png",
    title: "Mindestalter: 24 Jahre",
  },
  {
    icon: "/img/VoraussetzungD.png",
    title: "Voraussetzung: Führerschein Klasse B",
  },
  {
    icon: "/img/Getriebe3.png",
    title: "Getriebe: In der Regel Automatik",
  },
  {
    icon: "/img/Fahrzeugtyp.png",
    title: "Fahrzeugtyp: Omnibus / Bus",
  },
  {
    icon: "/img/Einsatzbereich.png",
    title: "Einsatzbereich: Linien-, Reise- und Gelegenheitsverkehr",
  },
  {
    icon: "/img/Prüfungstypen2.png",
    title: "Prüfung: Theorie und Praxis",
  },
];

const expandableInfoCardData = [
  {
    title: "Klasse D – Omnibusführerschein",
    description:
      "Die Klasse D erlaubt das Führen von Kraftfahrzeugen zur Personenbeförderung mit mehr als 8 Sitzplätzen (außer dem Fahrersitz).",
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
      "Erforderlich für alle Personen, die eine gewerbliche Tätigkeit im Personenverkehr aufnehmen oder ausüben möchten.",
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
  { title: "Sehtest" },
  { title: "Biometrisches Passfoto" },
  { title: "Führerschein Klasse B" },
  { title: "Nachweis Erste-Hilfe-Kurs" },
  { title: "Mindestalter bei Anmeldung erreicht" },
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
        subtitle={"Klasse D steht für Verantwortung, Professionalität und Sicherheit."}
      />

      <PageIntro
        title={"Das D steht für Freiheit."}
        description={
          "Der Führerschein der Klasse D berechtigt zum Führen von Kraftomnibussen zur Personenbeförderung mit mehr als 8 Fahrgastplätzen (ohne Fahrer). Ideal für alle, die beruflich im Personenverkehr tätig sein möchten."
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
