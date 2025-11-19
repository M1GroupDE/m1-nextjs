"use client";

import { MapPoint } from "@solar-icons/react";
import { useEffect, useState } from "react";

const data = [
  {
    address: "Trudering – Truderinger Straße 252, 81825 München 1",
    iframe: `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78594.25240648056!2d8.292925539672021!3d52.00559530538168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba2162258c1ef5%3A0x427f28131548380!2s33803%20Steinhagen%2C%20Germany!5e0!3m2!1sen!2s!4v1762543339515!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `,
    type: ["m1 plus", "m1 drive"],
  },
  {
    address: "Trudering – Truderinger Straße 252, 81825 München 3",
    iframe: `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78425.45537342878!2d8.172075930297027!3d52.101653625904625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9f3405e03315b%3A0x426cf77630093e0!2sBad%20Rothenfelde%2C%20Germany!5e0!3m2!1sen!2s!4v1762543357011!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    `,
    type: ["m1 plus"],
  },
  {
    address: "Trudering – Truderinger Straße 252, 81825 München 3",
    iframe: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4918.32710207458!2d8.342178598044304!3d51.94920893766833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba26910c500de1%3A0x3094cb40c027b044!2s33334%20G%C3%BCtersloh-Niehorst%2C%20Germany!5e0!3m2!1sen!2s!4v1762542505301!5m2!1sen!2s"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    `,
    type: ["m1 plus", "m1 drive"],
  },
];

const Branches = () => {
  const [type, setType] = useState("m1 plus");
  const [activeAddress, setActiveAddress] = useState(data[0]);

  useEffect(
    () => setActiveAddress(data.filter((item) => item.type.includes(type))[0]),
    [type]
  );

  return (
    <section className="branches wrapper">
      <h2>Filialen</h2>
      <div className="content flex-row">
        <div className="addresses flex-col">
          <div className="filters flex-row">
            <button
              className={`btn-${type === "m1 plus" ? "pr" : "br"}`}
              onClick={() => setType("m1 plus")}
            >
              m1 plus
            </button>
            <button
              className={`btn-${type === "m1 drive" ? "pr" : "br"}`}
              onClick={() => setType("m1 drive")}
            >
              m1 drive
            </button>
          </div>

          <div className="list flex-col">
            {data
              .filter((item) => item.type.includes(type))
              .map((item, index) => (
                <div
                  key={index}
                  className="address flex-row"
                  onClick={() => setActiveAddress(item)}
                >
                  <MapPoint
                    size={30}
                    weight={activeAddress === item ? "Bold" : "Linear"}
                  />
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
