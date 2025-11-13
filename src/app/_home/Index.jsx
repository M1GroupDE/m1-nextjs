import Besonderheiten from "./Besonderheiten";
import CtaBox from "./CtaBox";
import Feedbacks from "./Feedbacks";
import Filialen from "./Filialen";
import Hero from "./Hero";
import Modern from "./Modern";
import QA from "./QA";
import Schritte from "./Schritte";
import TopJob from "./TopJob";
import Unsere from "./Unsere";
import Vertrau from "./Vertrau";
import Wegbegleiter from "./Wegbegleiter";
import Zertifikats from "./Zertifikats";

const Index = () => {
  return (
    <main id="home-page">
      <Hero />

      <CtaBox
        title={"Führerschein jetzt starten - bequem in Raten zahlen"}
        img={"/img/cta-1.png"}
        cta={"JETZT ANMELDEN"}
        link={"#"}
      />

      <Filialen />

      <Besonderheiten />

      <Modern />

      <CtaBox
        title={"Fahrtraining mit dem DEGENER 360° - Fahrsimulator"}
        img={"/img/cta-2.png"}
        cta={"JETZT ANMELDEN"}
        link={"#"}
      />

      <Vertrau />

      <Wegbegleiter />

      <Schritte />

      <TopJob />

      <Zertifikats />

      <CtaBox title={"Fragen zur Theorieprüfung"} cta={"JETZT ANMELDEN"} link={"#"} />

      <Feedbacks />

      <Unsere />

      <QA />
    </main>
  );
};

export default Index;
