export default async function Page() {
  return (
    <main className="mt-40 mb-32 max-w-[1320px] mx-auto *:mb-4 p-4 md:p-0">
      <h1 className="text-3xl md:text-5xl">Politica de cookie</h1>
      <p>
        Va informam ca site-ul nostru foloseste module cookies pentru a oferi
        servicii mai bune utilizatorilor si vizitatorilor sai.
      </p>
      <section>
        <h2 className="text-xl md:text-3xl mb-4">Definitia modulelor cookie</h2>
        <p>
          Un cookie HTTP sau un modul cookie este un text special, deseori
          codificat, trimis de un server unui navigator web si apoi trimis
          inapoi (nemodificat) de catre navigator, de fiecare data cand
          acceseaza acel server. Cookie-urile sunt folosite pentru autentificare
          precum si pentru urmarirea comportamentului utilizatorilor. Pentru mai
          multe detalii, va rugam sa accesati{" "}
          <a
            className="text-[var(--accent)] underline"
            href="http://ro.wikipedia.org/wiki/Cookie"
          >
            aici.
          </a>
        </p>
      </section>
      <section>
        <h2 className="text-xl md:text-3xl mb-4">Rolul modulelor cookie</h2>
        <p>
          Aceste module permit navigarea rapida si eficienta intre pagini,
          memorarea alegerilor, optiunilor si preferintelor dumneavoastra,
          precum si optimizarea utilizarii site-ului web.
        </p>
      </section>
      <section>
        <h2 className="text-xl md:text-3xl mb-4">
          Informatii accesate cu ajutorul modulelor cookie
        </h2>
        <p>
          Modulele cookies sunt pastrate in memoria browser-ului si contin
          informatii precum: numele serverului de la care modulul cookie a fost
          trimis, durata de pastrare a modulului cookie, o valoare – de regula,
          un numar unic generat aleatoriu. Fisierele cookies nu permit
          identificarea dumneavoastra personala.
        </p>
      </section>
      <section>
        <h2 className="text-xl md:text-3xl mb-4">
          Utilizarea modulelor cookies plasate la terti
        </h2>
        <p>
          Site-ul nostru poate sa utilizeaze module cookie plasate la terti.
        </p>
        <p>
          Acesta beneficiaza de module de analiza trafic Google analytics si
          butoane de Facebook si Twitter, acestea introduc propriile cookies.
          Pentru mai multe detalii, va rugam sa accesati:
        </p>
        <ul>
          <li>
          <a className="underline text-[var(--accent)]" href="https://developers.google.com/analytics/resources/concepts/gaConceptsCookies">
              https://developers.google.com/analytics/resources/concepts/gaConceptsCookies
            </a>
          </li>
          <li>
          <a className="underline text-[var(--accent)]" href="http://www.facebook.com/help/cookies">
              http://www.facebook.com/help/cookies
            </a>
          </li>
          <li>
          <a className="underline text-[var(--accent)]" href="https://twitter.com/privacy">
              https://twitter.com/privacy
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl md:text-3xl mb-4">
          Gestionarea modulelor cookie
        </h2>
        <p>
          In cazul in care ati fost de acord cu includerea modulelor cookie in
          browserul dumneavoastra, va rugam sa tineti cont de faptul ca acceptul
          dumneavoastra poate fi retras oricand doriti.
        </p>
        <p>
          Browserele actuale (navigatoarele web) ofera posibilitatea de a
          seta/dezactiva cookie-urile. Pentru a face acest lucru, in general, se
          acceseaza rubrica &quot;optiuni&ldquo; (options) sau &quot;preferinte&ldquo; (preferences).
        </p>
        <p className="mb-2">
          Pentru mai multe detalii si sfaturi tehnice, va rugam sa accesati
          site-urile oficiale:
        </p>
        <ul className="font-Body ">
          <li>
            <a className="underline text-[var(--accent)]" href="https://support.microsoft.com/en-us/kb/196955">
              Cookie settings on Internet Explorer
            </a>
          </li>
          <li>
          <a className="underline text-[var(--accent)]" href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies">
              Cookie settings on Firefox
            </a>
          </li>
          <li>
          <a className="underline text-[var(--accent)]" href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies">
            Cookie settings on Chrome
            </a>
          </li>
          <li>
          <a className="underline text-[var(--accent)]" href="https://support.apple.com/kb/PH5042?locale=en_US">
            Cookie settings on Safari
            </a>
          </li>
        </ul>
      </section>
      <section>
      <h2 className="text-xl md:text-3xl mb-4">
      Linkuri utile
        </h2>
        <p>Daca doriti sa afli mai multe infromatii despre cookie-uri si la ce sunt utilizate, recomandam urmatoarele linkuri:</p>
        <ul>
            <li>
            <a className="underline text-[var(--accent)]" href="http://www.microsoft.com/info/cookies.mspx">Microsoft Cookies guide</a>
            </li>
            <li>
            <a className="underline text-[var(--accent)]" href="http://www.allaboutcookies.org/">All About Cookies</a>
            </li>
            <li>
            <a className="underline text-[var(--accent)]" href="http://www.youronlinechoices.com/ro/">http://www.youronlinechoices.com/ro/</a>
            </li>
        </ul>
      </section>
    </main>
  );
}
