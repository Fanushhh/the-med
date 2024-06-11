'use client'
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
export const InfoAccordion = ({data, isSteps}) => {
  const [openFaq, setOpenFaq] = useState(data);
  
  const handleClick = (index) => {
    setOpenFaq((prev) => {
      const newArr =  prev.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: !faq.open };
        } else {
          return { ...faq};
      }
      

      })
      return newArr;
    })
  }
  if(isSteps){
    return (
      <div className="*:mb-2">
      {openFaq.map(({ title, description, open }, index) => {
        return (
          <div key={`${title}-${index}`} className="font-Body even:bg-[var(--accent)] odd:bg-[var(--primary)] rounded-sm border even:border-[var(--accent)] ">
           
            <div onClick={() => handleClick(index)} className=" text-xl font-medium text-white p-2 cursor-pointer flex items-center gap-4">
              {open ?<Image src="/images/minus-solid.svg" width={30} height={30} alt="plus icon" className="" /> :<Image src="/images/plus-solid.svg" width={30} height={30} alt="plus icon" className="" />}
              {title}
            </div>
            <motion.div className={`bg-[#fff6ef] overflow-hidden`} initial={{height:0}} animate={open ? {height:'auto'} : {height:0}}>
              
              {description.map((a, index) => {
                return <p className=" p-4" key={index}>{a}</p>
              
              })}
              
            </motion.div>
          </div>
        );
      })}
    </div>
    )
  }
  else{
    return (
      <section className="max-w-[1320px] w-full mx-auto my-8 *:mb-2 p-4">
        {openFaq.map(({ q, a, paymentMethod, open }, index) => {
          return (
            <div key={`${q}-${index}`} className=" bg-[var(--accent)] rounded-sm border border-[var(--accent)]">
             
              <div onClick={() => handleClick(index)} className=" text-xl font-medium text-white p-2 cursor-pointer">
                {q}
              </div>
              <motion.div className={`bg-[#fff6ef] overflow-hidden`} initial={{height:0}} animate={open ? {height:'auto'} : {height:0}}>
                {}
                {paymentMethod ? a.map((a, index) => {
                  if(index === 0){
                      return <div key={index}>
                          <p className=" p-4" key={index}>{a}</p>
                          <ul className="p-4 list-disc ml-6 font-Body">
                              {paymentMethod.map((method, index) => {
                                  return <li key={index}>{method}</li>
                              })}
                          </ul>
                      </div>
                  }
                      return <p className=" p-4" key={index}>{a}</p>
  
                  }) : a.map((a, index) => {
                  return <p className=" p-4" key={index}>{a}</p>
                })}
                
              </motion.div>
            </div>
          );
        })}
      </section>
    );
  }
  
};
