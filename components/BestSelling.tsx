import Card from "@/components/Card";
import { cardsData } from "./Data";
import ViewMore from "./ViewMore";

function BestSelling() {
  return (
    <div>
      <div className="flex justify-center">
        <p
          style={{
            fontFamily: "Butterfly Kids",
            fontSize: "64px",
            color: "#CD1818",
          }}
        >
          Best Selling
        </p>
      </div>
      <br />
      <div className="flex justify-center mx-40 text-center">
        <p
          style={{
            fontFamily: "Spectral",
            fontSize: "24px",
          }}
        >
          Discover our most popular delights, cherished by our customers for
          their exceptional taste and quality. These treats are sure to satisfy
          even the most discerning palates.
        </p>
      </div>
      <div className="justify-center items-center ">
        <div className="flex flex-wrap gap-8 mx-auto justify-center ">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              price={card.price}
              imageSrc={card.imageSrc}
              altText={card.altText}
            />
          ))}
        </div>
        <div className="flex justify-end m-8 mr-28">
          <ViewMore />
        </div>
      </div>
    </div>
  );
}

export default BestSelling;
