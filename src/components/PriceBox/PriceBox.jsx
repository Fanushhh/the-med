




export const PriceBox = ({title, priceList}) => {
    return(
        <div className="md:w-1/2 border border-[var(--primary)] shadow-md rounded-md">
            <h1 className="bg-[var(--primary)] p-4 md:p-6 text-3xl md:text-4xl rounded-t-md">{title}</h1>
            <div className="p-4 md:p-6 text-sm md:text-lg">{priceList.map((price, index) => {
                return(
                    <div key={index} className="flex justify-between items-center *:w-1/2 md:*:w-auto p-4 md:p-6 border-b border-[var(--primary)] font-bold last:border-b-0">
                        <div className="flex flex-col text-start">
                            <p>{price.name}</p>
                            <p className="font-normal">{price.underName}</p>
                            
                        </div>
                        <p className="">{price.price}</p>
                    </div>
                )   
            })}</div>
        </div>
    )
}