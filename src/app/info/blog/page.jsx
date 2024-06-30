import { Blog } from "@/components/Blog/Blog";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export const metadata = {
    title: "Blogul The Med: Sfaturi, Noutăți și Informații Utile",
    description: "Rămâneți informat cu Blogul The Med! Descoperiți sfaturi utile pentru îngrijirea dentară, ultimele noutăți din stomatologie, informații despre tratamente moderne și povești de succes ale pacienților."
}

export default function BlogPage(){
    return(
        <main>
            <Blog />
            <Testimonials />
        </main>
    )
}