

import { PriceBox } from "@/components/PriceBox/PriceBox"
const priceData = [
    {
        title:"General",
        priceList:[
            {
                name:"Consultație de rutină",
                underName:'',
                price:"100 lei"
            },
            {
                name:"Detartraj și periaj profesional",
                underName:'',
                price:"200 lei"
            },
            {
                name:"Albire dentară",
                underName:'',
                price:"500 lei"
            },
            {
                name:"Plombare simplă",
                underName:'plombă compozită',
                price:"250 lei"
            },
            {
                name:"Plombare complexă",
                underName:'plombă ceramică/inlay/onlay',
                price:"începând de la 600 lei"
            },
            {
                name:"Extracție dentară simplă",
                underName:'',
                price:"150 lei"
            },
            {
                name:"Extracție dentară complexă",
                underName:'inclusiv chirurgicală',
                price:"începând de la 300 lei"
            },
            
        ]
    },
    {
        title:"Coroane si implanturi",
        priceList:[
            {
                name:"Coroană dentară",
                underName:'porțelan/ceramică',
                price:" începând de la 1000 lei"
            },
            {
                name:"Proteză dentară parțială",
                underName:'',
                price:"începând de la 1200 lei"
            },
            {
                name:"Proteză dentară completă",
                underName:'o arcă',
                price:"începând de la 2000 lei"
            },
            {
                name:"Implant dentar",
                underName:'fără coroană',
                price:"începând de la 2500 lei"
            },
            {
                name:"Tratament canal radicular",
                underName:'tratarea nervului (per canal)',
                price:"începând de la 300 lei "
            },
        ]
    }

]
export const metadata = {
    title: "Prețuri",
    description: "Prețuri orientative pentru tratamentele stomatologice oferite de clinica noastră. Consultați această pagină pentru a afla costurile aproximative ale procedurilor dentare."
}

export default async function Page(){
    return(
        <main className="mt-32 mb-32 max-w-[1320px] mx-auto text-center min-h-[40vh]">
            <div className="p-6">
                <h1 className="mb-10">Prețuri</h1>
                <p>Aceste prețuri sunt doar orientative și pot varia în funcție de complexitatea cazului și de regiunea în care se află clinica dentară. Este întotdeauna recomandat să se solicite o evaluare personalizată pentru a obține o estimare exactă a costurilor.</p>
            </div>
            <div className="flex gap-10 my-8 flex-col md:flex-row p-6">
            {
                priceData.map((priceBox, index) => {
                    return <PriceBox key={index} title={priceBox.title} priceList={priceBox.priceList} />

                })
            }
            </div>
            
        </main>
    )
}