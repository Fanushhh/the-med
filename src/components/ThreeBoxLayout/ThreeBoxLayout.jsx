import Image from "next/image";

export const ThreeBoxLayout = ({title, description, bigDescription,listItems, imgUrl, colReversed}) => {
  return (
    <section className="bg-black three-box-layout">
      <div className={`min-h-[50vh] *:w-full md:flex-row flex-col flex md:*:w-1/2 ${colReversed && 'md:flex-row-reverse'}`}>
        <div className="flex flex-col-reverse *:w-full *:h-1/2">
          <Image
            src={imgUrl}
            width={600}
            height={400}
            alt={title}
            className="object-cover w-full h-full object-right"
          />
          <div className="bg-white h-full p-10 md:p-20 flex flex-col justify-center">
          <h2 className="text-2xl mb-4">{title}</h2>
            <p className="max-w-[800px]">
              {description}
            </p>
          </div>
        </div>
        <div className="text-white p-10 md:p-20">
          
            {bigDescription.map((desc, index) => {
              return <p key={index} className="mb-4">{desc}</p>
            })}
        {listItems && (
          <ul>
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
