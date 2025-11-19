import Branches from "@/components/Branches";
import Coaches from "@/components/Coaches";
import CtaBox from "@/components/CtaBox";
import Hero from "@/components/Hero";
import TopJob from "@/components/TopJob";
import Vehicles from "@/components/Vehicles";
import Besonderheiten from "./Besonderheiten";
import Feedbacks from "./Feedbacks";
import Modern from "./Modern";
import QA from "./QA";
import Schritte from "./Schritte";
import Vertrau from "./Vertrau";
import Zertifikats from "./Zertifikats";

const Index = () => {
  return (
    <main id="home-page">
      <Hero
        img={"/img/hero.png"}
        title={"Modern, familiär, digital"}
        subtitle={"Deine Wahl, deine Schule – Egal, Auto, Motorrad"}
        ctaTitle={"JETZT ANMELDEN"}
        ctaLink={"#"}
      />

      <div className="sub-hero flex-row wrapper">
        <div className="text">
          <p>
            M1 Fahrschulen stehen für innovative Ausbildung, persönliche Betreuung und
            höchste Erfolgsquoten.
          </p>
        </div>

        <div className="cards">
          <div className="card flex-col">
            <img src="/img/auto-1.png" alt="" />
            <p>Auto</p>
          </div>
          <div className="card flex-col">
            <img src="/img/auto-2.png" alt="" />
            <p>AUTO-ANHÄNGER</p>
          </div>
          <div className="card flex-col">
            <img src="/img/motor.png" alt="" />
            <p>MOTORRAD</p>
          </div>
          <div className="card flex-col">
            <img src="/img/traktor.png" alt="" />
            <p>TRAKTOR</p>
          </div>
        </div>
      </div>

      <CtaBox
        title={"Führerschein jetzt starten - bequem in Raten zahlen"}
        img={"/img/cta-1.png"}
        cta={"JETZT ANMELDEN"}
        link={"#"}
      />

      <Branches />

      <Besonderheiten />

      <Modern />

      <CtaBox
        title={"Fahrtraining mit dem DEGENER 360° - Fahrsimulator"}
        img={"/img/cta-2.png"}
        cta={"JETZT ANMELDEN"}
        link={"#"}
      />

      <Vertrau />

      <Coaches />

      <Schritte />

      <TopJob />

      <Zertifikats />

      <CtaBox
        title={"Fragen zur Theorieprüfung"}
        cta={"JETZT ANMELDEN"}
        link={"#"}
        img={"/img/cta-3.png"}
      />

      <Feedbacks />

      <Vehicles />

      <QA />
    </main>
  );
};

export default Index;
