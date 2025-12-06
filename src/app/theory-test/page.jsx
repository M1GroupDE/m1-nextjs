import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import PageIntro from "@/components/PageIntro";

const iconCardData = [
  {
    icon: "/img/Offizielle Prüfungsfragen.png",
    title: "Offizielle Prüfungsfragen",
    description: "Du übst mit den originalen Fragen aus dem amtlichen Fragenkatalog.",
  },
  {
    icon: "/img/Automatische Wiederholung.png",
    title: "Automatische Wiederholung",
    description: "Fragen, die du falsch beantwortest, automatisch erneut im Training.",
  },
  {
    icon: "/img/Lernhilfen & Erklärvideos.png",
    title: "Lernhilfen & Erklärvideos",
    description: "Für schwierige Fragen bekommst du Erklärungen, Beispiele und Videos.",
  },
  {
    icon: "/img/Prüfungsmodus.png",
    title: "Prüfungsmodus",
    description: "Simuliere eine echte Theorieprüfung unter Zeitdruck.",
  },
];

const page = () => {
  return (
    <main id="class-page" className="theory-test">
      <Hero img={"/img/theory-test-hero.jpg"} />

      <PageIntro
        title={"Alle Fragen für die Theorieprüfung – schnell, aktuell und prüfungsnah."}
        description={
          "Übe mit offiziellen Prüfungsfragen, interaktiven Tests und sofortigem Feedback. Perfekt zur Vorbereitung auf deine Theorieprüfung."
        }
        cta={"JETZT ANMELDEN"}
        link={"#"}
      />

      <IconCard title={"Wie funktioniert das Lernen?"} data={iconCardData} />
    </main>
  );
};

export default page;
