import { Locations } from "@/components/Locations/Locations";


export const metadata = {
    title: "Contactează The Med - Programări și Întrebări",
    description: "Ai întrebări sau dorești să programezi o vizită? Contactează echipa The Med prin telefon, email sau vizitează-ne la adresa noastră. Suntem aici pentru a răspunde tuturor nevoilor tale stomatologice."
}

export default function Page(){
    return(
        <main className="md:my-32">
            
            <Locations />
        </main>
    )
}