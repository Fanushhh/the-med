import { AnimatedDiv } from "../AnimatedDiv/AnimatedDiv";
import { Container } from "../Container/Container";

const differencesData = [
  "Peste 10 ani experiență în stomatologie digitală",
  "Peste 90% dintre cazurile rezolvate sunt reabilitări orale complexe",
  "Abordare integrată și multidisciplinară a fiecărui pacient",
  "Eficientizarea și predictibilitatea tratamentelor prin digitalizare",
  "Estetică naturală impecabilă a lucrărilor prin laboratorul dentar propriu",
  "Ne gândim întotdeauna la ce este mai bine pentru pacienții noștri, la fel cum am primi noi înșine sau părinții noștri tratamentul",
  "Vrem să atingem, de fiecare dată, standardul de aur în tratamentul dentar",
];

export const Differences = () => {
  return (
    <Container>
        <AnimatedDiv element="h2" className=" text-4xl mb-6 md:mb-16 overflow-clip">Ce ne diferentiaza:</AnimatedDiv>
      
      <div className="max-w-[900px] md:*:mb-8">
        {differencesData.map((difference, index) => {
          return <div key={index} className="flex mb-4 gap-4">
            <svg
              className="w-6 h-6"
              fill="var(--accent)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
            <p className="w-full">{difference}</p>
          </div>;
        })}
      </div>
      </Container>
  );
};
