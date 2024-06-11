

const techStackData = [
    {
        name:'EMS Prophylaxis<br />Master - GBT',
        icon:'https://site.themed.ro/images/s1.svg',
    },
    {
        name:'Laserul dentar<br /> Elexxion Nano',
        icon:'https://site.themed.ro/images/s2.svg',
    },
    {
        name:'Scanerul intraoral<br /> Medit i700',
        icon:'https://site.themed.ro/images/s3.svg',
    },
    {
        name:'Microscopul dentar CJ<br /> Optik Advanced, Optomic 5',
        icon:'https://site.themed.ro/images/s4.svg',
    },
    {
        name:'Digital Smile<br /> Design',
        icon:'https://site.themed.ro/images/s1.svg',
    },
    {
        name:'Ghidul chirurgical<br /> digital',
        icon:'https://site.themed.ro/images/s1.svg',
    },
    {
        name:'Cadiax 4 – sistem de<br /> înregistrare a dinamicii<br /> mandibulare',
        icon:'https://site.themed.ro/images/s1.svg',
    },
   
]


export const TechStack = () => {
  return (
    <section className='max-w-[1320px] w-full my-10 p-4 mx-auto'>
      <div className="*:my-4">
        <p>Într-o lume care evoluează rapid, în special, prin inovațiile tehnologice, stomatologia se numără și ea printre
industriile marcată de progresele incredibile din ultimele două decenii.
</p>
        <p>Tehnologia din clinica stomatologică The Med este utilizată pentru a îmbunătăți sănătatea orală, a diagnostica cu
precizie problemele dentare, bazându-ne pe date reale și concrete, dar și pentru a îmbunătăți experiența generală a
pacientului în clinică.
</p>
<p>În clinica noastră, pacienții beneficiază de o experiență inedită în abordarea clinică a cazurilor prin experiența vastă
a medicilor coordonatori, dar și prin tehnologii precum:
</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-center my-20">
        {
            techStackData.map((tech,index)=>{
                return(
                    <div key={index} className='flex flex-col items-center gap-4 my-4 w-[300px]  justify-between'>
                        <img className="w-20 h-20" src={tech.icon} alt={tech.name} />
                        <p dangerouslySetInnerHTML={{__html:tech.name}}></p>
                    </div>
                )
            })
        }
      </div>
    </section>
  );
};
