"use client";
import { AltArrowDown } from "@solar-icons/react";
import { useEffect, useRef, useState } from "react";

const data = [
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

const QA = () => {
  const [open, setOpen] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((ref, i) => {
      if (!ref) return;
      if (open === i) {
        const scrollHeight = ref.scrollHeight;
        ref.style.maxHeight = `${scrollHeight + 30}px`;
      } else {
        ref.style.maxHeight = "0px";
      }
    });
  }, [open]);

  return (
    <section className="qa flex-col wrapper">
      <h2>Häufig gestellte Fragen</h2>
      <div className="list flex-col">
        {data.map((item, index) => (
          <div key={index} className={`item flex-col ${open === index ? "active" : ""}`}>
            <div
              className="question flex-row"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <h3>{item.q}</h3>
              <AltArrowDown
                size={24}
                className={`arrow ${open === index ? "active" : ""}`}
              />
            </div>
            <div className="answer" ref={(el) => (refs.current[index] = el)}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QA;
