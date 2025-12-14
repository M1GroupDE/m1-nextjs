import Coaches from "@/components/Coaches";
import Hero from "@/components/Hero";
import PageIntro from "@/components/PageIntro";
import TopJob from "@/components/TopJob";
import Vehicles from "@/components/Vehicles";

export const metadata = {
  title: "Über M1 Academy - Moderne Fahrschule mit Erfahrung",
  description:
    "Erfahre mehr über M1 Academy: Unsere Mission, unser 10.000 m² großer Übungsplatz, moderner 360°-Fahrsimulator und unser erfahrenes Coach-Team. Qualität in der Fahrausbildung.",
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
  const coachesData = await getCoachesData();
  return (
    <main id="about-page">
      <Hero
        img={"/img/about-hero.jpg"}
        title={"Über M1"}
        subtitle={
          "Jeder Mensch hat einen eigenen Fahrstil. Warum sollte das nicht auch fürs Lernen gelten?"
        }
      />

      <PageIntro
        title={"Das B steht für Freiheit"}
        description={
          "Bei M1 setzen wir auf Erfahrung, Fachkompetenz und einen eigenen Übungsplatz, um optimale Bedingungen für eine konzentrierte und stressfreie Fahrausbildung zu schaffen. Mit über 10.000 Quadratmetern Trainingsfläche ermöglichen wir praktische Übungen ohne Ablenkung durch andere Verkehrsteilnehmer – ideal für Motorrad- und Lkw-Ausbildungen sowie für den Einstieg ins Autofahren. Ergänzend dazu kommt der Einsatz eines modernen 360°-Fahrsimulators."
        }
        cta={"JETZT ANMELDEN"}
        link={"/contact"}
      />

      <TopJob />

      <Coaches data={coachesData} />

      <div className="unternehmen wrapper flex-col">
        <h2>Andere Unternehmen</h2>
        <div className="list flex-row">
          <img src="/img/m1drive.png" alt="m1-drive" />
          <img src="/img/m1plus.png" alt="m1-plus" />
        </div>
      </div>

      <Vehicles />
    </main>
  );
};

export default page;
