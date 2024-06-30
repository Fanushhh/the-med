import Image from "next/image"
import { InfoAccordion } from "../InfoAccordion/Accordion"
import { proteticData } from "./proteticData"


export const ProteticPlan = () => {
    return(
        <section className="max-w-[1320px] w-full mx-auto my-20 flex-col-reverse gap-4 md:flex-row flex p-4 md:px-0 md:py-10  md:justify-between">
        <div className="md:w-[600px] max-w-full">
            <InfoAccordion data={proteticData.steps} isSteps={true} primaryFirst="odd:bg-[var(--primary)] even:bg-[var(--accent)]"/>
        </div>
        <div>
            <Image className="w-full md:w-[650px] lg:h-[470px] object-cover object-right" src="https://newsite.themed.ro/uploads/protetica/dropdown-image.jpg" width={600} height={500} alt="Protetic Plan" />
        </div>
        </section>
    )
}