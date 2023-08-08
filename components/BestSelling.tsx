import Card from "@/components/cards/Card";
import { cardsData } from "./data/Data";
import ViewMore from "./ViewMore";



function BestSelling() {



  return (
    <div >
      <div className="flex justify-center ">
        <p className="text-[#CD1818] text-lg sm:text-3xl md:text-5xl lg:text-6xl"
          style={{
            fontFamily: "Butterfly Kids",
  
          }}
        >
          Best Selling
        </p>
      </div>
      <br />
      <div className="flex justify-center mx-8 sm:mx-12 md:mx-16 lg:mx-24 text-center">
        <p className="font-['spectral'] text-[6px] sm:text-sm md:text-lg lg:text-2xl"
        >
          Discover our most popular delights, cherished by our customers for
          their exceptional taste and quality. These treats are sure to satisfy
          even the most discerning palates.
        </p>
      </div>
      <div className="justify-center items-center mx-8 sm:mx-12 md:mx-16 lg:mx-24 ">
        <div className="flex flex-wrap justify-around">
          {cardsData.map((card, index) => (
            <Card
              // titleSize={"2xl"}
              // priceSize={"3xl"}
              // height={300}
              // width={300}
              key={index}
              title={card.title}
              price={card.price}
              imageSrc={card.imageSrc}
              altText={card.altText}
            />
          ))}
          
        </div>
        <div className="flex justify-end my-8 mr-5">
          <ViewMore />
        </div>
      </div>
    </div>
  );
}

export default BestSelling;
