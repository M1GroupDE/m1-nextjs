"use client";

import { useRef, useState } from "react";
import { CheckCircleLinear } from "solar-icon-set";

const ExpandableInfoCard = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="infocard flex-col wrapper">
      <h2>Klassen im Detail</h2>
      <div className="list">
        {data.map((item, index) => (
          <div className="box flex-col expandable-box" key={index}>
            <div className="content flex-col expandable-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div
                className={`expandable-section ${
                  expandedIndex === index ? "expanded" : ""
                }`}
                ref={(el) => (contentRefs.current[index] = el)}
              >
                <div className="expandable-inner">
                  {item.requirements?.length > 0 && <strong>Voraussetzungen:</strong>}
                  {item.requirements?.map((reqItem, reqIndex) => (
                    <div className="checklist-item flex-row" key={reqIndex}>
                      <p>{reqItem}</p>
                    </div>
                  ))}

                  {item.training?.length > 0 && <strong>Ausbildung:</strong>}
                  {item.training?.map((trainItem, trainIndex) => (
                    <div className="checklist-item flex-row" key={trainIndex}>
                      <CheckCircleLinear size={24} />
                      <p>{trainItem}</p>
                    </div>
                  ))}

                  {item.highlights && (
                    <>
                      {item.highlights.length > 0 && <strong>Besonderheiten:</strong>}
                      <ul>
                        {item.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
            <button onClick={() => toggleExpand(index)} className="expand-button btn-pr">
              {expandedIndex === index ? "Weniger anzeigen" : "Mehr Erfahren"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpandableInfoCard;
