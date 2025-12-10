import Branches from "@/components/Branches";
import Coaches from "@/components/Coaches";
import CtaBox from "@/components/CtaBox";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import QA from "@/components/QA";
import TopJob from "@/components/TopJob";
import Vehicles from "@/components/Vehicles";
import Link from "next/link";
import { RoundArrowLeftUpBold } from "solar-icon-set";
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
        img={"/img/home-hero.jpg"}
        title={"Modern, familiär, digital"}
        subtitle={"Deine Wahl, deine Schule – Egal, Auto, Motorrad"}
        ctaTitle={"JETZT ANMELDEN"}
        ctaLink={"#"}
      />

      <svg width="0" height="0" viewBox="0 0 1248 651" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="roundedShape" clipPathUnits="objectBoundingBox">
          <path
            d="M0 32C0 14.3269 14.3269 0 32 0H745.388H830H1216C1233.67 0 1248 14.3269 1248 32V502.082C1248 519.755 1233.67 534.082 1216 534.082H581.242C571.034 534.082 561.438 538.953 555.412 547.193L489.088 637.889C483.062 646.129 473.466 651 463.258 651H32C14.3269 651 0 636.673 0 619V32Z"
            transform="scale(0.000801, 0.001537)"
          />
        </clipPath>
      </svg>

      <div className="sub-hero flex-row wrapper">
        <div className="text">
          <p>
            M1 Fahrschulen stehen für innovative Ausbildung, persönliche Betreuung und
            höchste Erfolgsquoten.
          </p>
        </div>

        <div className="cards">
          <Link href={"/class-b"} className="card flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-car"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
            </svg>
            <p>Auto</p>
            <RoundArrowLeftUpBold color="white" className="cta-icon" size={34} />
          </Link>
          <Link href={"/class-a"} className="card flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-motorbike"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
              <path d="M13 6h2l1.5 3l2 4" />
            </svg>
            <p>MOTORRAD</p>
            <RoundArrowLeftUpBold color="white" className="cta-icon" size={34} />
          </Link>
          <div className="card flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-truck"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
            </svg>
            <p>AUTO-ANHÄNGER</p>
            <RoundArrowLeftUpBold color="white" className="cta-icon" size={34} />
          </div>
          <div className="card flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-tractor"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M7 15l0 .01" />
              <path d="M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M10.5 17l6.5 0" />
              <path d="M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5" />
              <path d="M18 5h-1a1 1 0 0 0 -1 1v4" />
            </svg>
            <p>TRAKTOR</p>
            <RoundArrowLeftUpBold color="white" className="cta-icon" size={34} />
          </div>
        </div>
      </div>

      <CtaBox
        title={"Führerschein jetzt starten - bequem in Raten zahlen"}
        img={"/img/cta-1.jpg"}
        cta={"JETZT ANMELDEN"}
        link={"#"}
      />

      <Branches />

      <Besonderheiten />

      <Modern />

      <CtaBox
        title={"Fahrtraining mit dem DEGENER 360° - Fahrsimulator"}
        img={"/img/cta-2.jpg"}
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
        img={"/img/cta-3.jpg"}
      />

      <Feedbacks />

      <Vehicles />

      <QA data={qaData} title={"Häufig gestellte Fragen"} />
    </main>
  );
};

export default Index;
