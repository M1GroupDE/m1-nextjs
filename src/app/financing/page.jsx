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

const page = async () => {
  const qaData = await getQAData();

  return (
    <main id="days714">
      <Hero img={"/img/Financing-hero.jpg"} />
      <PageIntro
        title="Führerschein finanzieren  flexibel, fair, stressfrei."
        description=" Wir wissen: Der Führerschein ist eine Investition. Mit unseren flexiblen Ratenmodellen kannst du deine Ausbildung bequem in kleinen monatlichen Beträgen bezahlen - ganz ohne finanzielle Belastung."
        cta="JETZT ANMELDEN"
        link="/contact"
      />
      <IconCard title={"So funktioniert’s"} data={iconCardData} />

      <Steps img={"/img/financing-steps.png"} />

      <ContactCard />

      <QA data={qaData} title={"Häufig gestellte Fragen"} />
    </main>
  );
};

export default page;
