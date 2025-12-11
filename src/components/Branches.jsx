"use client";

import { useEffect, useState } from "react";
import { MapPointBold, MapPointLinear } from "solar-icon-set";

const Branches = ({ data }) => {
  const [type, setType] = useState("m1_plus");
  const [activeAddress, setActiveAddress] = useState(data[0]);

  useEffect(
    () => setActiveAddress(data.filter((item) => item.company.includes(type))[0]),
    [type]
  );

  return (
    <section className="branches wrapper">
      <h2>Filialen</h2>
      <div className="content flex-row">
        <div className="addresses flex-col">
          <div className="filters flex-row">
            <button
              className={`btn-${type === "m1_plus" ? "pr" : "br"}`}
              onClick={() => setType("m1_plus")}
            >
              m1 plus
            </button>
            <button
              className={`btn-${type === "m1_drive" ? "pr" : "br"}`}
              onClick={() => setType("m1_drive")}
            >
              m1 drive
            </button>
          </div>

          <div className="list flex-col">
            {data
              .filter((item) => item.company.includes(type))
              .map((item, index) => (
                <div
                  key={index}
                  className="address flex-row"
                  onClick={() => setActiveAddress(item)}
                >
                  {activeAddress === item ? (
                    <MapPointBold size={30} />
                  ) : (
                    <MapPointLinear size={30} />
                  )}
                  <p>
                    <strong>{item.address}</strong>
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div
          className="map"
          dangerouslySetInnerHTML={{ __html: activeAddress.iframe }}
        ></div>
      </div>
    </section>
  );
};

export default Branches;
