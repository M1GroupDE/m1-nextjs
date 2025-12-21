import Link from "next/link";

const Hero = ({ img, title, subtitle, ctaTitle, ctaLink, video }) => {
  return (
    <section className="hero wrapper">
      {video ? (
        <div className="hero-image">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={img}
          ></video>
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
      ) : (
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
      )}
    </section>
  );
};

export default Hero;
