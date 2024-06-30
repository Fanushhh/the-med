"use client";
import { motion } from "framer-motion";
import { useState} from "react";

export default function FlipBox({ front, back, frontColor, backColor }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="box w-[400px] mx-auto">
    <div className="single-box text-white  cursor-pointer font-bold">
      <motion.div className="box-content" onClick={handleFlip}  transition={{duration:0.5}} animate={isFlipped ? {translateZ: -200, rotateX:-90} : {}}>
        <div className={`sides side-1 flex  justify-center items-center ${frontColor}`} ><h2 className="text-3xl md:text-5xl">{front}</h2></div>
        <div className={`sides side-2 text-xs md:text-sm p-4 flex  justify-center items-center ${backColor}`}>
          <div className="content">
            <p>{back}</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
  );
}


// <div
// className={`${
//   isFlipped && isExpanded ? "min-h-[600px]" : "min-h-[300px]"
// } flex items-center justify-center flip-box-container text-white cursor-pointer `}
// >
// <div className="flip-card w-full h-full rounded-md" onClick={handleFlip}>
//   <motion.div
//     className={`flip-card-inner w-full h-full`}
//     initial={false}
//     animate={{ rotateX: isFlipped ? 180 : 0 }}
//     transition={{ duration: 0.3, animationDirection: "normal" }}
//     onAnimationComplete={() => setIsAnimating(false)}
//   >
//     <div className={`flip-card-front ${frontColor} w-full h-full p-4 flex items-center justify-center text-center`}>
//       <h2 className="text-3xl md:text-5xl">{front}</h2>
//     </div>
//     <div
//       className={`flip-card-back ${backColor} w-full h-full flex p-4 items-center justify-center text-center overflow-hidden`}
      
//     >
//       <p ref={backContentRef}>{back}</p>
//     </div>
//   </motion.div>
// </div>
// </div>
