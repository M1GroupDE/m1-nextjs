import ContactCard from "@/components/ContactCard";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import PageIntro from "@/components/PageIntro";
import QA from "@/components/QA";
import Steps from "@/components/Steps";

const iconCardData = [
  {
    icon: "/img/Flexible Laufzeiten.png",
    title: "Flexible Laufzeiten",
    description: "Wähle zwischen 3, 6 oder 12 Monaten",
  },
  {
    icon: "/img/Keine versteckten Kosten.png",
    title: "Keine versteckten Kosten",
    description: "Volle Transparenz - keine Zinsen, keine Gebühren",
  },
  {
    icon: "/img/Einfacher Antrag.png",
    title: "Einfacher Antrag",
    description: "Online oder im Büro - in nur 2 Minuten beantragen",
  },
  {
    icon: "/img/Sicher & geprüft.png",
    title: "Sicher & geprüft",
    description: "Zusammenarbeit mit seriösen Partnerbanken",
  },
];

const qaData = [
  {
    q: "Muss ich Zinsen zahlen?",
    a: "Inventore dignissimos corporis quisquam ducimus. Tempora quibusdam doloremque facere consectetur modi cupiditate quod, praesentium suscipit delectus quae blanditiis et harum vero porro quidem corporis laboriosam cum voluptas libero magni.",
  },
  {
    q: "Wann beginnt die erste Rate?",
    a: "Aliquid quo? Eveniet earum enim neque rem. Et soluta incidunt, aspernatur excepturi dolorem officia ex laborum neque, nulla pariatur esse reprehenderit est.",
  },
  {
    q: "Kann ich früher alles bezahlen?",
    a: "Soluta praesentium. Explicabo, aliquid quo? Eveniet earum enim neque rem. Et soluta incidunt, aspernatur excepturi dolorem officia ex laborum neque.",
  },
];

const page = () => {
  return (
    <main id="days714">
      <Hero img={"/img/Financing-hero.png"} />
      <PageIntro
        title="Führerschein finanzieren  flexibel, fair, stressfrei."
        description=" Wir wissen: Der Führerschein ist eine Investition. Mit unseren flexiblen Ratenmodellen kannst du deine Ausbildung bequem in kleinen monatlichen Beträgen bezahlen - ganz ohne finanzielle Belastung."
        cta="JETZT ANMELDEN"
        link="#"
      />
      <IconCard title={"So funktioniert’s"} data={iconCardData} />

      <Steps img={"/img/financing-steps.png"} />

      <ContactCard />

      <QA data={qaData} title={"Häufig gestellte Fragen"} />
    </main>
  );
};

export default page;
