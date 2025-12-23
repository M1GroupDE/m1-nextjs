import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import InfoCard from "@/components/InfoCard";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "360° Fahrsimulator - Realistisches Fahren trainieren",
  description:
    "Unser 360°-Fahrsimulator bietet echtes Fahrgefühl mit realistischer Fahrphysik und Force-Feedback. Perfekt zum sicheren Trainieren für Führerscheinprüfung.",
};

const iconCardData = [
  {
    icon: "/img/360.png",
    title: "360° Rundumsicht & echtes Fahrgefühl",
  },
  {
    icon: "/img/Realistische Fahrphysik mit Force-Feedback.png",
    title: "Realistische Fahrphysik mit Force-Feedback",
  },
  {
    icon: "/img/Sicher & stressfrei üben.png",
    title: "Sicher & stressfrei üben",
  },
  {
    icon: "/img/Umweltfreundlich & kostensparend.png",
    title: "Umweltfreundlich & kostensparend",
  },
];

const infoData = [
  {
    title: "Echtzeit-Fahrphysik",
  },
  {
    title: "Original DEGENER-Software",
  },
  {
    title: "Force-Feedback-Lenkrad",
  },
  {
    title: "360°-Rundumsicht-System",
  },
];

const page = () => {
  return (
    <main id="vr">
      <Hero img={"/img/vr-hero.jpg"} />

      <PageIntro
        title="Fahrtraining mit dem DEGENER 360°-Fahrsimulator"
        description="Realistisch, sicher und bis zu 70 % günstiger als eine normale Fahrstunde - perfekt für den Einstieg und effizientes Lernen."
        cta="JETZT ANMELDEN"
        link="/contact"
      />

      <IconCard title={"Vorteile"} data={iconCardData} />

      <div className="Lerninhalte flex-col wrapper">
        <h2>Lerninhalte</h2>

        <div className="list">
          <div className="box flex-row">
            <img src="/img/ivr-1.png" alt="" width={45} height={45} />
            <p>
              <strong>Grundlagen: Anfahren, Schalten, Anhalten</strong>
            </p>
          </div>
          <div className="box flex-row">
            <img src="/img/ivr-2.png" alt="" width={45} height={45} />
            <p>
              <strong>Parken & Rangieren</strong>
            </p>
          </div>

          <div className="box flex-row">
            <img src="/img/ivr-3.png" alt="" width={45} height={45} />

            <p>
              <strong>Verkehrsbeobachtung & Spiegelarbeit</strong>
            </p>
          </div>
          <div className="box flex-row">
            <img src="/img/ivr-4.png" alt="" width={45} height={45} />
            <p>
              <strong>Nacht- und Schlechtwetterfahrten</strong>
            </p>
          </div>
          <div className="box flex-row">
            <img src="/img/ivr-5.png" alt="" width={45} height={45} />
            <p>
              <strong>Stadt-, Land- und Autobahntraining</strong>
            </p>
          </div>
          <div className="box flex-row">
            <img src="/img/ivr-6.png" alt="" width={45} height={45} />
            <p>
              <strong>Gefahrbremsung & Ausweichmanöver</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="Warum flex-row wrapper">
        <img src="/img/warum.jpg" alt="" />

        <div className="content flex-col">
          <h2>Warum Simulator?</h2>
          <ul>
            <li>
              Mit dem 360°-Fahrsimulator lernst du stressfrei und sicher - ganz ohne
              Straßenverkehr.
            </li>
            <li>
              Perfekt für Anfänger:innen, um ein Gefühl fürs Fahren zu bekommen, bevor es
              auf die Straße geht.
            </li>
          </ul>
        </div>
      </div>

      <InfoCard title={"Technische Details:"} data={infoData} />
    </main>
  );
};

export default page;
