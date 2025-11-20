import ContactCard from "@/components/ContactCard";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import PageIntro from "@/components/PageIntro";
import Steps from "@/components/Steps";

const iconCardData = [
  {
    icon: "/img/Schnell & effizient.png",
    title: "Schnell & effizient",
    description: "Führerschein in 7–14 Tagen",
  },
  {
    icon: "/img/Flexible Zeiten.png",
    title: "Flexible Zeiten",
    description: "Du entscheidest, wann du startest",
  },
  {
    icon: "/img/Individuelles Coaching.png",
    title: "FAHRSTIL/Individuelles Coaching",
    description: "Fahrstunden nach deinem Rhythmus",
  },
  {
    icon: "/img/Komplette Unterstützung.png",
    title: "Komplette Unterstützung",
    description: "Wir helfen dir bei Anmeldung & Behörden",
  },
];

const courseData = [
  {
    title: "Standard Intensivkurs",
    length: "14 Tage",
    level: "Anfänger",
    description: "Klassische Variante mit täglichem Unterricht",
  },
  {
    title: "Express Intensivkurs",
    length: "7 Tage",
    level: "Erfahrene",
    description: "Kompakt & intensiv, perfekt bei Vorkenntnissen.",
  },
  {
    title: "Flex Intensivkurs",
    length: "Individuell",
    level: "Berufstätige",
    description: "Flexible Termine, persönliche Betreuung.",
  },
];

const page = () => {
  return (
    <main id="days714">
      <Hero img={"/img/714days-hero.png"} />
      <PageIntro
        title="Dein Führerschein in nur 7-14 Tagen"
        description="Unsere Intensivkurse bringen dich schnell, strukturiert und stressfrei ans Ziel. Mit täglichem Theorieunterricht, individuell geplanten Fahrstunden und persönlicher Betreuung."
        cta="JETZT ANMELDEN"
        link="#"
      />
      <IconCard title={"So funktioniert’s"} data={iconCardData} />

      <Steps img={"/img/714days-steps.png"} />

      <Courses data={courseData} />

      <ContactCard />
    </main>
  );
};

export default page;
