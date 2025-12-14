import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Providers from "@/providers";
import "@/style/style.scss";
import { Inter } from "next/font/google";
const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "M1 Academy - Deine moderne Fahrschule",
    template: "%s | M1 Academy",
  },
  description:
    "M1 Academy ist deine moderne Fahrschule mit innovativer Ausbildung, Fahrsimulator und flexiblen Zeiten. Wir bieten Führerscheinkurse für alle Klassen.",
  keywords:
    "Fahrschule, Führerschein, Fahrstunden, Fahrausbildung, Fahrsimulator, M1 Academy",
  metadataBase: new URL("https://drivem1.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://drivem1.de",
    siteName: "M1 Academy",
    title: "M1 Academy - Deine moderne Fahrschule",
    description:
      "M1 Academy ist deine moderne Fahrschule mit innovativer Ausbildung, Fahrsimulator und flexiblen Zeiten.",
    images: [
      {
        url: "https://drivem1.de/img/logo.png",
        width: 1200,
        height: 630,
        alt: "M1 Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="alternate" hrefLang="de" href="https://drivem1.de" />
      </head>
      <body className={`${InterFont.className}`}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
