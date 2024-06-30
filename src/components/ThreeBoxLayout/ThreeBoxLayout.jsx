import Image from "next/image";
import { AnimatedDiv } from "../AnimatedDiv/AnimatedDiv";

export const ThreeBoxLayout = ({
  title,
  id,
  description,
  descriptionStyle,
  titleStyling,
  isEven,
  boldedText,
  bigDescription,
  secondBigDescription,
  listItems,
  imgUrl,
  colReversed,
  bgColor = "black",
  checkList,
}) => {
  return (
    <section className={` three-box-layout`}>
      <div
        className={` *:w-full md:flex-row flex-col flex md:*:w-1/2 ${
          colReversed && "md:flex-row-reverse "
        }`}
      >
        <div
          className={`flex flex-col-reverse *:w-full ${
            isEven ? "md:*:h-1/2" : ""
          }`}
        >
          <AnimatedDiv className="h-full overflow-clip">
            <Image
              src={imgUrl}
              width={600}
              height={400}
              alt={title}
              className={`object-cover w-full h-full`}
            />
          </AnimatedDiv>
          <div
            id={id}
            className={`bg-white p-4 md:p-20 flex flex-col justify-center`}
          >
            <div className="flex flex-col gap-2 md:gap-0">
              <AnimatedDiv
                element="h2"
                className={`text-3xl md:text-4xl md:mb-4 ${
                  titleStyling
                    ? titleStyling
                    : "text-[var(--accent)] text-center"
                }`}
              >
                {title}
              </AnimatedDiv>
              <p
                className={`max-w-[800px] ${
                  descriptionStyle && descriptionStyle
                }`}
              >
                {description && description}
              </p>
            </div>
          </div>
        </div>
        <div className={`${bgColor} p-6 md:p-20 ${checkList}`}>
          {boldedText?.map((desc, index) => {
            return (
              <p key={index} className="mb-4 font-bold">
                {desc}
              </p>
            );
          })}
          {bigDescription?.map((desc, index) => {
            return (
              <p key={index} className="mb-4">
                {desc}
              </p>
            );
          })}
          {listItems && (
            <ul className="ml-4 md:ml-8">
              {listItems.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          )}
          {secondBigDescription?.map((desc, index) => {
            return (
              <p key={index} className="mb-4">
                {desc}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};
