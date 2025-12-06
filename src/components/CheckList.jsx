import Link from "next/link";
import { CheckCircleLinear } from "solar-icon-set";

const CheckList = ({ title, data, link, cta }) => {
  return (
    <section className="checklist">
      <div className="content flex-col wrapper">
        <h2>{title}</h2>
        <div className="list">
          {data.map((item, index) => (
            <div className="box flex-row" key={index}>
              <CheckCircleLinear size={24} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <Link href={link} className="btn-pr">
          {cta}
        </Link>
      </div>
    </section>
  );
};

export default CheckList;
