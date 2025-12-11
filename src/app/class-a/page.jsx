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
];

const infoCardData = [
  {
    title: "Großer Motorradführerschein — Klasse A",
    description:
      "Der Motorradführerschein A erlaubt das Fahren aller Krafträder ohne Leistungsbegrenzung – für echte Motorradliebhaber:innen, die maximale Freiheit genießen wollen.",
    cta: "Weitere Infos",
    link: "#",
  },
  {
    title: "Dein erstes Motorrad — Klasse A1",
    description:
      "Mit dem A2-Führerschein kannst du ab 18 Jahren leistungsstarke Motorräder bis 35 kW fahren und noch mehr Freiheit genießen. Besitzt du bereits den A1-Führerschein, reicht eine praktische Prüfung, um aufzusteigen.",
    cta: "Weitere Infos",
    link: "#",
  },
  {
    title: "Mittlerer Motorrad-Führerschein — Klasse A2",
    description:
      "Mit A2 darfst du Motorräder bis 35 kW und einem max. Leistungsgewicht von 0,2 kW/kg fahren – der perfekte Kompromiss zwischen Leistung und Kontrolle.",
    cta: "Weitere Infos",
    link: "#",
  },
  {
    title: "Roller-Führerschein — Klasse AM",
    description:
      "Mit dem Führerschein der Klasse AM bist du mobil auf zwei Rädern. Du darfst Kleinkrafträder bis 50 cm³ und mit einer Höchstgeschwindigkeit von 45 km/h fahren – perfekt für den Einstieg in die motorisierte Mobilität.",
    cta: "Weitere Infos",
    link: "#",
  },
];

const checkListData = [
  { title: "Biometrisches Passfoto" },
  { title: "Ggf. deinen aktuellen Führerschein" },
  { title: "Nachweis für Erste-Hilfe-Kurs" },
  { title: "Sehtest-Bescheinigung (nicht älter als zwei Jahre)" },
  { title: "Schutzbekleidung für deine Fahrstunden" },
  { title: "anerkannter, amtlicher Ausweis (z.B. Personalausweis, Reisepass)" },
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
        title={"Unabhängigkeit kann Abhängig machen."}
        description={
          "Hast du dich schon einmal gefragt, warum jedes Jahr im Frühling unzählige Menschen mit fettem Grinsen ihren Helm aus dem Keller holen? Die Antwort liegt auf der Straße – oder besser gesagt in der Kurve: Fahrtwind spüren, für einen Moment eins mit der Straße werden, die Strecke mit dem ganzen Körper wahrnehmen und obendrauf in jedem Tunnel der fette Sound deiner Maschine – so hast du Freiheit noch nie erlebt, versprochen. Und damit das auch schon vor deiner ersten Fahrstunde gilt, kümmern wir uns bei ACADEMY ums organisatorische Drumherum. Also los, such dir eine Klasse aus - und wir starten gemeinsam ins Abenteuer."
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
