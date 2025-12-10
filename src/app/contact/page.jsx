"use client";
import Branches from "@/components/Branches";
import Hero from "@/components/Hero";
import Link from "next/link";

const page = () => {
  return (
    <main id="contact-page">
      <Hero img={"/img/contact-hero.jpg"} title={"Kontakt M1"} />

      <div className="contact-info flex-row wrapper">
        <div className="info flex-col">
          <small>M1 Group</small>
          <h2>Nehmen Sie Kontakt mit der M1 Fahrschule auf</h2>
          <p>
            Egal, ob Sie gerade erst anfangen oder schon Ihre nächste Unterrichtsstunde
            buchen möchten – wir sind hier, um Ihre Fragen zu beantworten und Sie auf dem
            Weg zum Erfolg zu begleiten.
          </p>

          <div className="call">
            <p>Callcenter:</p>
            <p>
              <strong>+49 123 456789</strong>
            </p>
            <p>
              <strong>+49 123 456781</strong>
            </p>
          </div>

          <div className="socials flex-row">
            <Link href={"https://www.instagram.com/m1group_fahrschulen"} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#828282"
                class="icon icon-tabler icons-tabler-filled icon-tabler-brand-instagram"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
              </svg>
            </Link>
            <Link href={"https://wa.me/498945451433"} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#828282"
                class="icon icon-tabler icons-tabler-filled icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18.497 4.409a10 10 0 0 1 -10.36 16.828l-.223 -.098l-4.759 .849l-.11 .011a1 1 0 0 1 -.11 0l-.102 -.013l-.108 -.024l-.105 -.037l-.099 -.047l-.093 -.058l-.014 -.011l-.012 -.007l-.086 -.073l-.077 -.08l-.067 -.088l-.056 -.094l-.034 -.07l-.04 -.108l-.028 -.128l-.012 -.102a1 1 0 0 1 0 -.125l.012 -.1l.024 -.11l.045 -.122l1.433 -3.304l-.009 -.014a10 10 0 0 1 1.549 -12.454l.215 -.203a10 10 0 0 1 13.226 -.217m-8.997 3.09a1.5 1.5 0 0 0 -1.5 1.5v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0 -3h-1l-.144 .007a1.5 1.5 0 0 0 -1.128 .697l-.042 .074l-.022 -.007a4.01 4.01 0 0 1 -2.435 -2.435l-.008 -.023l.075 -.041a1.5 1.5 0 0 0 .704 -1.272v-1a1.5 1.5 0 0 0 -1.5 -1.5" />
              </svg>
            </Link>
            <Link href={"https://www.linkedin.com/company/plusm1/"} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#828282"
                class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
              </svg>
            </Link>
            <Link href={"https://www.tiktok.com/@fahrschule_m1group"} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#828282"
                class="icon icon-tabler icons-tabler-filled icon-tabler-brand-tiktok"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="form flex-col">
          <div className="head">
            <h3>Nehmen Sie Kontakt auf</h3>
            <p>
              Haben Sie Fragen, bevor Sie sich anmelden? Schreiben Sie uns eine Nachricht,
              rufen Sie uns an oder kommen Sie persönlich in einer unserer Filialen
              vorbei.
            </p>
          </div>

          <form className="flex-col">
            <label htmlFor="firstName">Vorname</label>
            <input
              type="text"
              id="firstName"
              placeholder="Geben Sie Ihren Vornamen ein"
            />

            <label htmlFor="lastName">Nachname</label>
            <input
              type="text"
              id="lastName"
              placeholder="Geben Sie Ihren Nachnamen ein"
            />

            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              placeholder="Geben Sie Ihre E-Mail-Adresse ein"
            />

            <button className="btn-pr">Absenden</button>
          </form>
        </div>
      </div>

      <Branches />
    </main>
  );
};

export default page;
