import CheckList from "@/components/CheckList";
import Coaches from "@/components/Coaches";
import ExpandableInfoCard from "@/components/ExpandableInfoCard";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import PageIntro from "@/components/PageIntro";
import QA from "@/components/QA";

export const metadata = {
  title: "Motorradführerschein Klasse A - Unbegrenzte Leistung",
  description:
    "Motorradführerschein Klasse A bei M1 Academy: Alle Motorräder fahren, Anforderungen, Kosten und Dauer. Mit erfahrenen Trainern und realistischem Fahrsimulator.",
};

const iconCardData = [
  {
    icon: "/img/ALTERSKLASSE.png",
    title: "ALTERSKLASSE: 24 JAHRE+ (oder ab 20 mit Vorbesitz A2 seit 2 Jahren)",
  },
  {
    icon: "/img/GETRIEBE.png",
    title: "GETRIEBE: MANUELL / AUTOMATIK",
  },
  {
    icon: "/img/FAHRSTIL.png",
    title: "FAHRSTIL/COACH: INDIVIDUELL",
  },
];

const checkListData = [
  { title: "Biometrisches Passfoto" },
  { title: "Ggf. deinen aktuellen Führerschein" },
  { title: "Nachweis über den Erste-Hilfe-Kurs" },
  { title: "Sehtestbescheinigung (nicht älter als zwei Jahre)" },
  { title: "Schutzbekleidung für deine Fahrstunden" },
  { title: "Anerkannter, amtlicher Ausweis (z.B. Personalausweis, Reisepass)" },
];

const expandableInfoCardData = [
  {
    title: "Großer Motorradführerschein — Klasse A",
    description:
      "Der Führerschein Klasse A erlaubt das Fahren aller Krafträder ohne Leistungsbegrenzung – für echte Motorradliebhaber:innen, die maximale Freiheit genießen wollen.",
    requirements: [
      "In der Regel Klasse A2, aber je nach Alter ist auch ein Direkteinstieg möglich",
      "Mindestalter: 24 Jahre (direkt) oder 20 Jahre mit 2 Jahren A2-Erfahrung",
    ],
    training: [
      "Theorie: 12 Doppelstunden Grundstoff + 4 Doppelstunden Zusatzstoff",
      "Sonderfahrten: 5 Überland, 4 Autobahn, 3 Nachtfahrten",
    ],
    highlights: [
      "Aufstieg ohne erneute Theorieprüfung möglich",
      "Ideal für erfahrene Fahrer:innen",
    ],
  },
  {
    title: "Dein erstes Motorrad — Klasse A1",
    description:
      "Mit dem Führerschein Klasse A1 darfst du Leichtkrafträder bis 125 cm³ und max. 11 kW fahren – ideal für den Einstieg ins Motorradfahren.",
    requirements: ["Mindestalter: 16 Jahre"],
    training: [
      "Theorie: 12 Doppelstunden Grundstoff + 4 Doppelstunden Zusatzstoff",
      "Sonderfahrten: 5 Überland, 4 Autobahn, 3 Nachtfahrten",
    ],
    highlights: [
      "Aufstieg ohne erneute Theorieprüfung möglich",
      "Ideal für erfahrene Fahrer:innen",
    ],
  },
  {
    title: "Mittlerer Motorradführerschein — Klasse A2",
    description:
      "Mit Klasse A2 darfst du Motorräder bis 35 kW und einem max. Leistungsgewicht von 0,2 kW/kg fahren – der perfekte Kompromiss zwischen Leistung und Kontrolle.",
    requirements: [
      "Keine - diese Klasse kann direkt erworben werden",
      "Mindestalter: 18 Jahre",
    ],
    training: [
      "Theorie: 12 Doppelstunden Grundstoff + 4 Doppelstunden Zusatzstoff",
      "Sonderfahrten: 5 Überland, 4 Autobahn, 3 Nachtfahrten",
    ],
    highlights: ["Bereits ab 16 Jahren", "Perfekt für den Einstieg"],
  },
  {
    title: "Roller-Führerschein — Klasse AM",
    description:
      "Mit dem Führerschein Klasse AM bist du mobil auf zwei Rädern. Du darfst Kleinkrafträder bis 50 cm³ und max. 45 km/h fahren – perfekt für den Einstieg in die motorisierte Mobilität.",
    requirements: [
      "Mindestalter: 15 Jahre",
      "Sicherer Umgang mit Zweirädern",
      "Einverständnis der Erziehungsberechtigten (bei Minderjährigen)",
    ],
    training: [
      "Theorie:12 Doppelstunden Grundstoff + 2 Doppelstunden Zusatzstoff (für Zweirad)",
      "Praxis: Übungsstunden je nach Lernfortschritt",
      "Prüfung: Theoretische Prüfung, Praktische Prüfung auf einem Roller oder Moped",
    ],
    highlights: ["Keine Sonderfahrten erforderlich", "Perfekt für den urbanen Alltag"],
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
        img={"/img/classa-hero.jpg"}
        title={"Klasse A - Alle Motorräder"}
        subtitle={"Du lebst nicht für den Beifahrersitz."}
      />

      <PageIntro
        title={"Unabhängigkeit kann süchtig machen:"}
        description={
          "Hast du dich schon mal gefragt, warum jedes Frühjahr unzählige Menschen mit breitem Grinsen ihren Helm aus dem Keller holen? Die Antwort liegt auf der Straße – oder besser gesagt in der Kurve: Fahrtwind spüren, eins mit der Maschine werden, jede Strecke mit dem ganzen Körper erleben und in jedem Tunnel der satte Sound deiner Maschine. So fühlt sich Freiheit an – versprochen. Und damit du das schon vor deiner ersten Fahrstunde erleben kannst, übernehmen wir bei ACADEMY das organisatorische Drumherum. Also los – such dir deine Klasse aus, und wir starten gemeinsam ins Abenteuer."
        }
        cta={"JETZT ANMELDEN"}
        link={"/contact"}
      />

      <IconCard title={"Schnelle Fakten zur Klasse A"} data={iconCardData} />

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
