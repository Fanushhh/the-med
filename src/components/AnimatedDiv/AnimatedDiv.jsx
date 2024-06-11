'use client'
import React from "react"
import { motion, useInView } from "framer-motion"

export const AnimatedDiv = ({children, element="div", ...delegated}) => {
    const elemRef = React.useRef(null);
    const isInView = useInView(elemRef);
    const elementMapping = {
        svg: motion.svg,
        section:motion.section,
        div: motion.div,
        p: motion.p,
        h1: motion.h1,
        h2: motion.h2,
        span: motion.span,
        a:motion.a,
      };
      const MotionElement = elementMapping[element] || elementMapping.div;
    
    return(
        <MotionElement ref={elemRef} initial={{y:50, opacity:0}} transition={{duration:.7}} animate={isInView ? {y:0, opacity:1} : {y:150, opacity:0}} {...delegated}>
            {children}
        </MotionElement>
    )
}