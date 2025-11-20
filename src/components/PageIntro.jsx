import Link from "next/link";

const PageIntro = ({ title, description, cta, link }) => {
  return (
    <section className="intro flex-col wrapper">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={link} className="btn-pr">
        {cta}
      </Link>
    </section>
  );
};

export default PageIntro;
