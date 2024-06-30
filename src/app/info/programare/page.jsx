import { Form } from "@/components/Form/Form";


export const metadata = {
    title: "Programează o Vizită la The Med - Simplu și Rapid",
    description: "Programează-ți consultația la The Med online sau prin telefon. Oferim o modalitate simplă și rapidă de a-ți rezerva vizita, pentru a primi îngrijirea stomatologică de care ai nevoie."
}

export default function ContactPage(){
    return(
        <main className="mb-20 mt-40 text-center">
            <h1>Contact Page</h1>
            <Form />
        </main>
    )
}