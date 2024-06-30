import { Help } from "@/components/Help/Help"
import { TeamHero } from "@/components/TeamHero/TeamHero"
import { Testimonials } from "@/components/Testimonials/Testimonials"
import { TeamMembers } from "@/components/TeamHero/TeamMembers/TeamMembers"

export const metadata = {
    title: "Echipa The Med - Profesioniști Dedicați Sănătății Tale Orale",
    description: "Cunoaște echipa de experți stomatologi de la The Med. Fiecare membru este dedicat să ofere îngrijire de calitate superioară și să asigure confortul pacienților noștri. Află mai multe despre specialiștii noștri."
}


export default function TeamPage(){
    return(
        <main>
        <TeamHero />
        <TeamMembers />
        <Help />
        <Testimonials />
        </main>
    )
}