import Link from "next/link";

const InfoCard = ({ title, data }) => {
  return (
    <section className="infocard flex-col wrapper">
      <h2>{title}</h2>
      <div className="list">
        {data.map((item, index) => (
          <div className="box flex-col" key={index}>
            <div className="content flex-col">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <Link className="btn-pr" href={item.link}>
              {item.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCard;
