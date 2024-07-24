"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
export const InfoAccordion = ({
  data,
  isSteps,
  oneColor,
  accentFirst,
  primaryFirst,
}) => {
  const [openFaq, setOpenFaq] = useState(data);
  const handleClick = (index) => {
    setOpenFaq((prev) => {
      const newArr = prev.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: !faq.open };
        } else {
          return { ...faq };
        }
      });
      return newArr;
    
    });
  };
  if (isSteps) {
    return (
      <div className="w-full ">
        {openFaq.map(({ title, description, listItems, open }, index) => {
          return (
            <div key={`${title}-${index}`} className={`font-Body w-full rounded-sm border hover:scale-105 ease-in-out transition-all duration-200 ${
                oneColor
                  ? oneColor
                  : accentFirst
                  ? accentFirst
                  : primaryFirst
                  ? primaryFirst
                  : ""
              }`}>
            <button
              onClick={() => document.getElementById(`my_modal_${title}-${index}`).showModal()}
              className="text-start"
              
            >
              <div
                className=" text-lg md:text-xl font-bold text-white p-4 cursor-pointer flex items-center gap-4"
              >
                {open ? (
                  <Image
                    src="/images/minus-solid.svg"
                    width={30}
                    height={30}
                    alt="plus icon"
                    className=""
                  />
                ) : (
                  <Image
                    src="/images/plus-solid.svg"
                    width={30}
                    height={30}
                    alt="plus icon"
                    className=""
                  />
                )}
                {title}
                
              </div>
              </button>
              <motion.dialog initial={{scale: 0}} animate={{scale:1}} id={`my_modal_${title}-${index}`} className="modal sm:modal-middle px-2 w-full bg-[rgba(0,0,0,0.5)]">
                <div className={`modal-box max-h-full relative !max-w-[700px] bg-white rounded-md  py-10 px-4 text-start`}>
                  <div className="p-4">
                  <h3 className="text-black text-2xl mb-5">{title}</h3>
                    {description.map((a, index) => {
                      return (
                        <p className="mb-4" key={index}>
                          {a}
                        </p>
                      );
                    })}
                    <ul className="">
                      {listItems?.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn absolute top-0 right-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000"
                          className="w-6 h-6"
                          viewBox="0 0 384 512"
                        >
                          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </motion.dialog>
              <motion.div
                className={`bg-[#fff6ef] check-list pink overflow-hidden`}
                initial={{ height: 0 }}
                animate={open ? { height: "auto" } : { height: 0 }}
              >
                <div className="p-4">
                  {description.map((a, index) => {
                    return (
                      <p className="mb-4" key={index}>
                        {a}
                      </p>
                    );
                  })}
                  <ul className="">
                    {listItems?.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        
          
        })}
        
      </div>
      
    );
  } else {
    return (
      <section className="max-w-[1320px] w-full mx-auto my-8 *:mb-2 p-4">
        {openFaq.map(({ q, a, paymentMethod, open }, index) => {
          return (
            <div
              href={`#${a}`}
              key={`${q}-${index}`}
              className=" bg-[var(--accent)] rounded-sm border border-[var(--accent)]"
            >
              <div
                onClick={() => handleClick(index)}
                className=" text-xl font-medium text-white p-2 cursor-pointer"
              >
                {q}
              </div>
              <motion.div
                className={`bg-[#fff6ef] overflow-hidden`}
                initial={{ height: 0 }}
                animate={open ? { height: "auto" } : { height: 0 }}
              >
                {}
                {paymentMethod
                  ? a.map((a, index) => {
                      if (index === 0) {
                        return (
                          <div key={index}>
                            <p id={a} className=" p-4" key={index}>
                              {a}
                            </p>
                            <ul className="p-4 list-disc ml-6 font-Body">
                              {paymentMethod.map((method, index) => {
                                return <li key={index}>{method}</li>;
                              })}
                            </ul>
                          </div>
                        );
                      }
                      return (
                        <p className=" p-4" key={index}>
                          {a}
                        </p>
                      );
                    })
                  : a.map((a, index) => {
                      return (
                        <p className=" p-4" key={index}>
                          {a}
                        </p>
                      );
                    })}
              </motion.div>
            </div>
          );
        })}
      </section>
    );
  }
};
