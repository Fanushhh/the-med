import Image from "next/image";

export const ThreeBoxLayout = ({title, description,descriptionStyle, titleStyling, bigDescription,listItems, imgUrl, colReversed, bgColor="black", checkList}) => {
  return (
    <section className={`${bgColor !== 'black' ? `bg-[${bgColor}]` : 'bg-black'} three-box-layout my-10`}>
      <div className={`min-h-[50vh] *:w-full md:flex-row flex-col flex md:*:w-1/2 ${colReversed && 'md:flex-row-reverse'}`}>
        <div className="flex flex-col-reverse *:w-full ">
          <Image
            src={imgUrl}
            width={600}
            height={400}
            alt={title}
            className="object-cover w-full h-full object-right "
          />
          <div className="bg-white h-1/3 p-10 md:p-20 flex flex-col justify-center">
          <h2 className={`text-4xl mb-4 ${titleStyling ? titleStyling : 'text-[var(--accent)] text-center'}`}>{title}</h2>
            <p className={`max-w-[800px] ${descriptionStyle && descriptionStyle}`}>
              {description && description}
            </p>
          </div>
        </div>
        <div className={`text-white p-4 my-8 md:p-20 ${checkList}`}>
          
            {bigDescription?.map((desc, index) => {
              return <p key={index} className="mb-4">{desc}</p>
            })}
        {listItems && (
          <ul className="!ml-0 md:ml-8">
            {listItems.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        )}
        </div>
      </div>
    </section>
  );
};
