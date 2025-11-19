import Link from "next/link";

const Hero = ({ img, title, subtitle, ctaTitle, ctaLink }) => {
  return (
    <section className="hero wrapper">
      <div className="hero-image">
        <img src={img} alt={title} />
        <div className="content flex-col">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {ctaTitle && (
            <Link href={ctaLink} className="btn-pr">
              {ctaTitle}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
