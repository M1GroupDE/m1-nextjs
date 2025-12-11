import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import InfoCard from "@/components/InfoCard";
import PageIntro from "@/components/PageIntro";
import Steps from "@/components/Steps";

const iconCardData = [
  { icon: "/img/Vorteile.png", title: "Vorteile" },
  {
    icon: "/img/Lernen überall & jederzeit.png",
    title: "Lernen überall & jederzeit",
  },
  {
    icon: "/img/Nachhaltig & papierlos.png",
    title: "Nachhaltig & papierlos",
  },
  {
    icon: "/img/Volle Kontrolle über deinen Fortschritt.png",
    title: "Volle Kontrolle über deinen Fortschritt",
  },
];

const infoCardData = [
  {
    title: "Online-Theorieunterricht",
    description: "Theorie bequem von zu Hause – live oder als Aufzeichnung.",
  },
  {
    title: "360° Fahrsimulator",
    description: "Realistisches Fahrgefühl ohne Risiko – perfekt zum Einstieg.",
  },
  {
    title: "M1Plus App",
    description: "Lernfortschritt, Termine & Rechnungen – alles in einer App.",
  },
  {
    title: "Digitale Lernplattform",
    description: "Zugriff auf Tests, Lernvideos und Prüfungsfragen rund um die Uhr",
  },
];

const page = () => {
  return (
    <main id="class-page" className="digital-services">
      <Hero img={"/img/dg-hero.jpg"} />

      <PageIntro
        title={"Digitale Dienste für deine Führerscheinausbildung"}
        description={
          "Lerne flexibel, modern und effizient – mit unseren digitalen Tools, Online-Unterricht und 360°-Simulator."
        }
        cta={"JETZT ANMELDEN"}
        link={"/contact"}
      />

      <IconCard title={"Vorteile"} data={iconCardData} />

      <Steps img={"/img/dg-steps.png"} />

      <InfoCard title={"Unsere digitalen Angebote"} data={infoCardData} />
    </main>
  );
};

export default page;
