"use client";
import { Star } from "@solar-icons/react";

const data = [
  {
    name: "Name1",
    description: "Description",
    review: "“A fantastic bit of feedback”",
    rate: 5,
  },
  {
    name: "Name2",
    description: "Description",
    review: "“A fantastic bit of feedback”",
    rate: 4,
  },
  {
    name: "Name3",
    description: "Description",
    review: "“A fantastic bit of feedback”",
    rate: 3,
  },
];

const Feedbacks = () => {
  return (
    <section className="feedbacks wrapper flex-col">
      <h2>Schritte zum Erhalt des Zertifikats</h2>

      <div className="list">
        {data.map((item) => (
          <div key={item.name} className="box flex-col">
            <p className="review">{item.review}</p>

            <div className="footer flex-row">
              <div className="profile flex-row">
                <div className="img"></div>
                <div className="flex-col title">
                  <strong>{item.name}</strong>
                  <small>{item.description}</small>
                </div>
              </div>
              <div className="rate">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star weight={"Bold"} color={index < item.rate ? "#E7B65F" : "gray"} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
