"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Script from "next/script";
export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  useEffect(() => {
    const cookiesAccepted = document.cookie.includes("cookies_accepted=true");
    setCookiesAccepted(cookiesAccepted);
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);
  const acceptCookies = () => {
    document.cookie =
      "cookies_accepted=true; path=/; max-age=" + 60 * 60 * 24 * 30;
    setIsVisible(false);
    setCookiesAccepted(true);
  };

  const refuseCookies = () => {
    document.cookie =
      "cookies_accepted=false; path=/; max-age=" + 60 * 60 * 24 * 30;
    setIsVisible(false);
  };
  return (
    <>
    {cookiesAccepted && (
        <>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Z8HG2KJ4B8"
          />
          <Script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z8HG2KJ4B8');`}
          </Script>
        </>
      )}
      {isVisible && (
        <div className="fixed bottom-0 left-0 md:bottom-6 md:left-6 z-20 w-full max-w-[500px] flex flex-col bg-slate-200 shadow-md border p-4 rounded md text-gray-600">
          <p className="text-sm mb-2">
            Acest site folosește cookie-uri pentru a îmbunătăți experiența
            utilizatorilor și pentru a analiza traficul folosind Google
            Analytics.
          </p>
          <p className="text-sm">
            {" "}
            De asemenea, colectăm informații din formularele completate pe site precum nume, prenume, email, număr de telefon, mesaj, etc. Aceste informații sunt folosite pentru a răspunde la solicitările dumneavoastră și pentru a vă oferi informații despre serviciile noastre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 *:bg-[var(--accent)] *:py-2 *:px-4 *:text-white mt-4 *:rounded-md">
            <button
              className="hover:bg-[var(--accent-hover)]"
              onClick={acceptCookies}
            >
              Acceptă
            </button>
            <button
              className="hover:bg-[var(--accent-hover)]"
              onClick={refuseCookies}
            >
              Refuză
            </button>
            <Link
              href="/info/politica-cookies"
              className="hover:bg-[var(--accent-hover)] w-full text-center"
            >
              Mai multe informații
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

{
  /* <><Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-Z8HG2KJ4B8"
              />
              <Script id="google-analytics">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', 'G-Z8HG2KJ4B8');`}
              </Script>
              </> */
}
