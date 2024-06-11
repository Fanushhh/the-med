import { Help } from "@/components/Help/Help"
import { TeamHero } from "@/components/TeamHero/TeamHero"
import { Testimonials } from "@/components/Testimonials/Testimonials"
import { TeamMembers } from "@/components/TeamHero/TeamMembers/TeamMembers"
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