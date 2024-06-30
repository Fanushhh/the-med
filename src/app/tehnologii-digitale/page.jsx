import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Hero } from "@/components/Hero/Hero";
import { TechStack } from "@/components/TechStack/TechStack";
import { ThreeBoxLayout } from "@/components/ThreeBoxLayout/ThreeBoxLayout";
import { Help } from "@/components/Help/Help";

export const metadata = {
  title: "Tehnologii Dentare de Ultimă Generație la The Med",
  description: "Descoperă inovațiile tehnologice din stomatologie la The Med. Folosim echipamente de ultimă generație pentru a oferi tratamente precise și eficiente. Află cum tehnologia modernă îți poate îmbunătăți sănătatea orală.",
}
const threeBoxLayoutData = [
  {
    title: "EMS - Guided Biofilm Therapy",
    id: "EMSProp",
    bgColor:"bg-black text-white",
    titleStyling: "text-black text-center",
    description:
      "AIRFLOW® Prophylaxis Master este cea mai recentă inovație EMS pentru „Terapia ghidată a biofilmului” și reprezintă o soluție unică pentru prevenirea cariilor, având deopotrivă și rezultate uimitoare după finalizarea ședințelor de profilaxie, la fiecare șase luni.",
    bigDescription: [
      "Creat pentru utilizare profesională intensivă, dispozitivul se caracterizează printr-o ergonomie unică, precizie ridicată, întreținere ușoară și respectarea celor mai înalte standarde de igienă.",
      "AIRFLOW® Prophylaxis Master a fost proiectat având în vedere cele mai înalte standarde de performanță, siguranță și confort, fiind construit special pentru a satisface cele 3 tratamente de bază ale terapiei ghidate a biofilmului.",
      "Pulberea AIRFLOW PLUS îndepărtează confortabil și eficient biofilmul, petele și tartrul incipient supra și subgingival, reducând nevoia de folosire a altor instrumente adiționale folosite în practica stomatologică veche.",
      "Aparatul de detartraj NO PAIN (fără durere) oferă o experiență foarte plăcută pacientului deoarece acesta nu atinge suprafața dentară, așadar pacientul nu simte disconfort, vibrații care îi pot declanșa o stare anxioasă.",
    ],
    imgUrl: "https://newsite.themed.ro/uploads/tehnologii-digitale/three-box-1.png",
    colReversed: false,
    isEven:true,
  },
  {
    id: "LaserulDentarElexxionNano",
    title: "Laserul dentar Elexxion Nano",
    bgColor:"bg-black text-white",
    titleStyling: "text-black text-center",
    description:
      "Elexxion Nano 2.0 propune îmbinarea perfectă dintre simplitate și modul individual de lucru, fiind prevăzut cu 40 de aplicații care acoperă tot spectrul tratamentelor dentare cu laser",
    bigDescription: [
      "Acest laser se bazează pe tehnologia DPL, acoperind astfel o gamă largă de tratamente dentare. Fie că realizăm tratamente de canal, parodontale, albiri dentare sau tratamente postchirurgicale (după inserarea implanturilor dentare), laserul dentar Elexxion Nano este cea mai bună alegere pentru rezultate rapide și de durată.",
      "Acesta îi oferă medicului libertate și o varietate maximă de lucru prin intermediul a 8 programe care pot fi personalizate în conformitate cu nevoile clinice ale pacientului.",
      "Printre avantajele folosirii laserului Elexxion Nano enumerăm:",
    ],
    listItems: [
      "cea mai mare rată de varietate a intensității și durateiputerii impulsului",
      "eficiență crescută și siguranță în realizarea tratamentelor prin control digital",
      "asigură proceduri fără sângerare, precum și un disconfort minim pentru pacient",
      "controlul optimizat al energiei fasciculului de lumină, acționează selectiv doar asupra țesutului bolnav",
      "scurtează durata de tratament și scade numărul de vizite la cabinet",
      "poate fi utilizat pentru managementul durerii, inclusiv în cazul intervențiilor cu implant dentar",
    ],
    imgUrl: "https://newsite.themed.ro/uploads/tehnologii-digitale/three-box-2.png",
    colReversed: true,
    isEven:true,
  },
  {
    id: "ScanerulIntraoralMediti700",
    title: "Scanerul intraoral Medit i700",
    bgColor:"bg-black text-white",
    titleStyling: "text-black text-center",
    bigDescription: [
      "În cadrul clinicii The Med, alegem să oferim pacienților o experiență cât mai bună, dar și rapiditate în realizarea tratamentelor protetice, fie că este vorba despre fațete, coroane dentare sau proteze fixe pe implanturi.",
      "Scanerul intraoral este folosit pentru preluarea amprentei dentare în mod digital. Acest lucru are avantaje enorme față de amprentele dentare convenționale care sunt mult mai predispuse la erori, pot necesita vizite repetate ale pacientului și nu în ultimul rând sunt mult mai invazive, îngreunând procesul de amprentare în special în cazul pacienților cu reflex de vomă.",
      "Utilizarea acestei tehnologii ne ajută în eficientizarea comunicării interne dintre medici și laboratorul dentar, precum și în comunicarea cu pacientul, punând la dispoziția acestuia imagini de înaltă precizie care ajută pacientul să observe problemele pe care le are și să înțeleagă mai ușor planul de tratament propus",
    ],
    imgUrl: "https://newsite.themed.ro/uploads/tehnologii-digitale/three-box-3.png",
    colReversed: false,
    isEven:true,
  },
  {
    id:'',
    title: "",
    bgColor:"bg-black text-white",
    description:
      "Eficiența de neegalat este una din caracteristicile remarcabile ale scanerului intraoral Medit i700. Tehnologia avansată asigură acuratețea datelor scanate și că elementele de protetică dentară se vor potrivi perfect.",
    bigDescription: [
      "În tot acest proces de scanare a cavității bucale, siguranța și confortul pacientului sunt și ele beneficii ale tehnologiei de scanare digitală.",
      "Scanerul nu produce radiații dăunătoare în timpul procesului de scanare și nu este nevoie de material de amprentare care să creeze disconfort pacientului, sau să rămână lipit de dinții acestuia.",
      "Amprentele digitale se pot folosi în numeroase tratamente stomatologice printre care enumerăm: coroane și fațete dentare, punți dentare, lucrări protetice cu suport implantar.",
      "De asemenea, scanarea intraorală se folosește atât în tratamentul ortodontic, cât și în tratamentele chirurgicale, prin combinarea tomografiilor digitale realizate cu ajutorul CBCT-ului cu datele scanării intraorale.",
      "Astfel, se pot realiza ghiduri chirurgicale digitale pentru intervențiile cu implanturi dentare care asigură predictibilitatea tratamentului.",
    ],
    imgUrl: "https://newsite.themed.ro/uploads/tehnologii-digitale/three-box-4.png",
    colReversed: true,
    isEven:true,
  },
  {
    id: "MicroscopulDentarCJOptikAdvancedOptomic5",
    title: "Microscopul dentar CJ Optik Advanced, Optomic 5",
    titleStyling: "text-black text-center",
   bgColor:"bg-black text-white",
    description:
      "Medicii noștri utilizează microscopul dentar CJ Optik Advanced, Optomic 5 în tratamentele de canal, în cazul restaurărilor estetice cu compozit din zona frontală, în șlefuirea pentru fațete dentare sau a altor lucrări protetice, dar și în tratamentul cariilor pentru o precizie ridicată a tratamentului.",
    bigDescription: [
      "Adevărul este că pacienților le este frică de a merge la medicul dentist chiar dacă identifică anumite probleme. De cele mai multe ori, aceștia amână vizita la dentist până când durerea de dinți devine insuportabilă.",
      "Specialiștii The Med au ales folosirea microscopului dentar deoarece beneficiile directe pentru pacient sunt de neegalat, în comparație cu abordarea clasică fără microscop, sau cu lupe. Printre acestea enumerăm:",
    ],
    listItems: [
      "Crește vizibilitatea în câmpul de lucru cu până la 12,5x ceea ce oferă medicului magnificație extraordinară asupra zonei pe care o tratează, precum și precizie în realizarea tratamentului",
      "Permite un tratament conservator cu scopul menținerii dintelui natural afectat pe arcada dentară și păstrarea a cât mai mult din structura acestuia",
      "Fără durere și cu un grad mare de confort pentru pacient",
      "Reducerea numărului de ședințe pentru realizarea tratamentului",
      "Grad ridicat de reușită a tratamentelor, chiar și în cazurile diagnosticate cu șanse mici de salvare a dintelui",
      "Ușurează comunicarea cu pacientul prin capacitatea microscopului de a documenta intervenția",
      "Permite eliminarea eficientă a infecției din canalele radiculare, scâzând șansele de retratament",
    ],
    imgUrl: "https://newsite.themed.ro/uploads/tehnologii-digitale/three-box-5.png",
    colReversed: false,
    isEven:true,
  },
  {
    id: "DigitalSmileDesign",
    title: "Digital Smile Design, tehnologie Smile Cloud",
    bgColor:"bg-black text-white",
    titleStyling: "text-black text-center",
    description:
      "Această aplicație care folosește inteligența artificială va pune la dispoziția medicului o bibliotecă cu zeci de mii de zâmbete din care poate alege cea mai bună și naturală soluție pentru restaurarea zâmbetului tău.",
    bigDescription: [
      "Cum ar fi pentru o clipă să ne imaginăm că putem vedea cum va arăta zâmbetul nostru nou dinainte ca medicul să înceapă tratamentul propriu-zis?",
      "În clinica stomatologică The Med acest lucru este posibil cu ajutorul tehnologiei DSD (Digital Smile Design) oferită prin aplicația Smile Cloud. Astfel, această tehnologie ajută la preconfigurarea zâmbetului tău pentru a-ți permite să vezi cum vor arăta dinții tăi noi la finalul tratamentului.",
      "Concret, specialistul nostru îți va face niște poze digitale, conform unui protocol foarte riguros, pe care le va încarca în aplicația Smile Cloud. De altfel, în funcție de fizionomia și dorințele tale, forma, dimensiunea și nuanța de alb a dinților pot fi personalizate.",
      "Această abordare este eficientă și în comunicarea dintre medicul protetician The Med și pacient deoarece propunere de tratament este mult mai ușor înțeleasă și acceptată de pacient.",
      "De asemenea, este un instrument extrem de eficient și în colaborarea dintre medic și tehnicianul dentar pentru a obține lucrări protetice cu estetică naturală, impecabile.",
    ],
    imgUrl: "https://newsite.themed.ro/uploads/tehnologii-digitale/three-box-6.png",
    colReversed: true,
    isEven:true,
  },
  {
    id: "GhidulChirurgicalDigital",
    title: "Ghidul chirurgical digital",
    titleStyling: "text-black text-center",
    bgColor:"bg-black text-white",
    description:
      "Ghidurile chirurgicale sunt instrumente de planificare care ajută medicul specialist să identifice cu precizie zonele sau unghiurile potrivite pentru implantare, ceea ce este esențial pentru inserarea cu precizie a unui implant în maxilar și pentru reușita tratamentului.",
    bigDescription: [
      "Ghidul chirurgical se realizează în laboratorul dentar prin combinarea a două tehnologii pe care medicii din echipa The Med le utilizează în mod frecvent în abordarea cazurilor ce necesită implant dentar: scanarea intraorală și computerul tomograf (CBCT), necesare pentru diagnosticarea corectă, dar și în realizarea planului de tratament.",
      "Deoarece clinica The Med dispune de laborator dentar propriu, acest proces de realizare a ghidului chirurgical este mult mai rapid și eficient datorită colaborării strânse dintre medicul specialist și tehnicianul dentar.",
      "Printre avantajele folosirii ghidului chirurgical, enumerăm:",
    ],
    listItems: [
      "Precizia și eficiența costurilor sunt aspecte importante ale oricărei proceduri dentare. Folosirea unui ghid chirurgical ajută specialistul să se asigure că implantul este plasat în cea mai favorabilă poziție din os și în locul potrivit pentru viitoarea lucrare protetică",
      "Sporește confortul pacientului",
      "Ajută pacientul să se vindece mai repede datorită preciziei inserării implantului și a tehnicilor chirurgicale minim invazive",
      "Eficientizează comunicarea medicului cu pacientul, îndeosebi în cazul pacientului anxios care are nevoie de predictibilitate și înțelegere profundă a tratamentului",
      "Reduce riscul apariției anumitor complicații",
    ],
    imgUrl: "https://newsite.themed.ro/uploads/tehnologii-digitale/three-box-7.png",
    colReversed: false,
    isEven:true,
  },
  {
    id: "Cadiax4",
    title: "Piezosurgery: chirurgie ultrasonică",
    bgColor:"bg-black text-white",
    titleStyling: "text-black text-center",
    bigDescription: [
      "Piezochirurgia, sau chirurgia ultrasonică, folosește vibrația ultrasonică modulată pentru a permite tăierea controlată a structurilor dentare osoase. Structurile osoase delicate pot fi tăiate cu ușurință și cu mare precizie, fără distrugerea țesuturilor moi.",
      "Tehnologia oferă chirurgilor precizie, siguranță, ergonomie perfectă și cea mai înaltă calitate a procedurii, reducând, deopotrivă, disconfortul postoperator pentru pacienți.",
      "Printre beneficiile pentru pacienți se numără:",
    ],
    listItems: [
      "mai puține edeme post intervenție",
      "osteointegrare mai rapidă",
      "recuperare postoperatorie mai rapidă și mai puțin traumatică",
      "mai puține complicații chirurgicale în comparație cu instrumentele chirurgicale tradiționale",
    ],

    imgUrl: "https://newsite.themed.ro/uploads/tehnologii-digitale/three-box-8.png",
    colReversed: true,
    isEven:true,
  },
];
export default function TechPage() {
  return (
    <main className="">
      <Hero
      heroImg="https://newsite.themed.ro/uploads/tehnologii-digitale/tehno-hero.jpg"
        heroHeading="Tehnologii digitale"
        heroSubHead="pentru zâmbete perfecte"
      />
      <TechStack />
      <div className="my-10">
        {threeBoxLayoutData.map((data, index) => (
          <ThreeBoxLayout key={index} {...data} />
        ))}
      </div>
      <Help />
      <Testimonials />
    </main>
  );
}
