"use client";

import { useEffect, useRef, useState } from "react";
import { AltArrowDownLinear } from "solar-icon-set";

const QA = ({ data, title }) => {
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
      <h2>{title}</h2>
      <div className="list flex-col">
        {data.map((item, index) => (
          <div key={index} className={`item flex-col ${open === index ? "active" : ""}`}>
            <div
              className="question flex-row"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <h3>{item.question}</h3>
              <AltArrowDownLinear
                size={24}
                className={`arrow ${open === index ? "active" : ""}`}
              />
            </div>
            <div className="answer" ref={(el) => (refs.current[index] = el)}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QA;
