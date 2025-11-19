import Link from "next/link";

const CtaBox = ({ title, img, cta, link }) => {
  return (
    <div className="wrapper cta-box">
      <section className="content flex-row" style={{ backgroundImage: `url(${img})` }}>
        {title && <h2>{title}</h2>}
        {link && (
          <Link href={link} className="btn-pr">
            {cta}
          </Link>
        )}
      </section>
    </div>
  );
};

export default CtaBox;
