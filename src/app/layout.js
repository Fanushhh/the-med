import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import Image from "next/image";
import Script from "next/script";
import { CookieBanner } from "@/components/CookieBanner/CookieBanner";

export const metadata = {
  title: "Servicii Stomatologice de Excelență la The Med",
  description: "Descoperiți excelența în stomatologie la The Med, clinica dvs. de încredere pentru chirurgie orală, parodontologie, igienizare profesională și servicii complete oferite de laboratorul nostru intern. Asigurați-vă un zâmbet sănătos cu tratamente de top într-un mediu confortabil și modern.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
  <link rel="icon" href="/images/favicon-the-med.ico" sizes="any" />
  <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
  <link rel="manifest" href="/images/site.webmanifest" />
</head>


      <body className="relative">
      <CookieBanner />
        <Navbar />
        {children}
        <Footer />
        <div className=" bg-green-600 hover:bg-green-800 p-3 text-white fixed z-50 right-5 bottom-[50px] rounded-full">
          <a
            className="flex items-center hover:border-none border-none "
            href="https://wa.me/40726034900"
            target="_blank"
          >
            <Image
              src="/images/whatsappwhite.png"
              width={30}
              height={30}
              alt="whatsapp"
            />
          </a>
        </div>
        {/* <div className=" bg-[var(--accent)] hover:bg-[var(--accent-hover)] p-3 text-white fixed z-50 right-5 bottom-[120px] rounded-full">
          <a
            className="flex items-center hover:border-none border-none "
            href="tel:"
            target="_blank"
          >
            <Image
              src="/images/phone-solid.svg"
              width={30}
              height={30}
              alt="phone"
            />
          </a>
        </div> */}
      </body>
    </html>
  );
}
