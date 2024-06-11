import Image from "next/image"
import { InfoAccordion } from "../InfoAccordion/Accordion"
import { proteticData } from "./proteticData"


export const ProteticPlan = () => {
    return(
        <section className="max-w-[1320px] w-full mx-auto my-20 flex-col-reverse gap-4 md:flex-row flex p-4 md:p-0  justify-between">
        <div className="md:w-[600px] max-w-full">
            <InfoAccordion data={proteticData.steps} isSteps={true}/>
        </div>
        <div>
            <Image className="w-full md:w-[650px]" src="https://site.themed.ro/uploads/images/10-26-2023-themed6963-jpg_9B7R.webp" width={600} height={500} alt="Protetic Plan" />
        </div>
        </section>
    )
}