import Branches from "@/components/Branches";
import Coaches from "@/components/Coaches";
import CtaBox from "@/components/CtaBox";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import QA from "@/components/QA";
import TopJob from "@/components/TopJob";
import Vehicles from "@/components/Vehicles";
import Link from "next/link";
import Besonderheiten from "./Besonderheiten";
import Feedbacks from "./Feedbacks";
import Modern from "./Modern";
import Schritte from "./Schritte";
import Vertrau from "./Vertrau";

const iconCarddata = [
  { icon: "/img/Strukturierter Lehrplan.png", title: "Strukturierter Lehrplan" },
  {
    icon: "/img/Fahrstunden auch in Englisch.png",
    title: "Fahrstunden auch in Englisch",
  },
  {
    icon: "/img/Deine Fahrstunde gehört dir allein.png",
    title: "Deine Fahrstunde gehört dir allein",
  },
  { icon: "/img/Wir sind jung und digital.png", title: "Wir sind jung und digital" },
  {
    icon: "/img/Deine Fahrstunde gehört dir allein.png",
    title: "Deine Fahrstunde gehört dir allein",
  },
  { icon: "/img/Spezialist für Umschreiber.png", title: "Spezialist für Umschreiber" },
  { icon: "/img/Strukturierter Lehrplan2.png", title: "Strukturierter Lehrplan" },
  { icon: "/img/Du stehst im Mittelpunkt.png", title: "Du stehst im Mittelpunkt" },
  {
    icon: "/img/Was zählt, ist deine Selbsteinschätzung.png",
    title: "Was zählt, ist deine Selbsteinschätzung",
  },
];

const qaData = [
  {
    q: "Ab welchem Alter kann ich mich anmelden?",
    a: "Inventore dignissimos corporis quisquam ducimus. Tempora quibusdam doloremque facere consectetur modi cupiditate quod, praesentium suscipit delectus quae blanditiis et harum vero porro quidem corporis laboriosam cum voluptas libero magni.",
  },
  {
    q: "Wie starte ich mit dem Theorieunterricht?",
    a: "Aliquid quo? Eveniet earum enim neque rem. Et soluta incidunt, aspernatur excepturi dolorem officia ex laborum neque, nulla pariatur esse reprehenderit est.",
  },
  {
    q: "Welche Unterlagen benötige ich für die Anmeldung?",
    a: "Soluta praesentium. Explicabo, aliquid quo? Eveniet earum enim neque rem. Et soluta incidunt, aspernatur excepturi dolorem officia ex laborum neque.",
  },
  {
    q: "Welche Fahrzeuge werden für die Ausbildung verwendet?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti, officia voluptate rem porro animi rerum.",
  },
];

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
          <Link href={"/class-b"} className="card flex-col">
            <img src="/img/auto-1.png" alt="" />
            <p>Auto</p>
          </Link>
          <Link href={"/class-a"} className="card flex-col">
            <img src="/img/motor.png" alt="" />
            <p>MOTORRAD</p>
          </Link>
          <div className="card flex-col">
            <img src="/img/auto-2.png" alt="" />
            <p>AUTO-ANHÄNGER</p>
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

      <IconCard data={iconCarddata} title={"Schritte zum Erhalt des Zertifikats"} />

      <CtaBox
        title={"Fragen zur Theorieprüfung"}
        cta={"JETZT ANMELDEN"}
        link={"#"}
        img={"/img/cta-3.png"}
      />

      <Feedbacks />

      <Vehicles />

      <QA data={qaData} title={"Häufig gestellte Fragen"} />
    </main>
  );
};

export default Index;
