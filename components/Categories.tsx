import "/styles/font.css";
import ViewMore from "./ViewMore";
import MiniCard from "./MiniCard";
import { cardsData1 } from "./Data1";

function Categories() {
  return (
    <div>
      <div className="my-40  bg-[#ECECEC]/25 h-[680px]">
        <div className="mx-28">
          <div className="pt-12 flex justify-center items-center">
            <table className="w-full h-[72px]">
              <tbody>
                <tr>
                  <td className="table0">Croissants & Pastries</td>
                  <td className="table0">Cookies & Brownies</td>
                  <td className="table0">Cakes & Cupcakes</td>
                  <td className="table0">Breads & Rolls</td>
                  <td className="table0">Gluten-Free Delights</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex space-between gap-5 my-10">
            <p className="font-['spectral'] text-3xl font-black">
              Croissants & Pastries
            </p>
            <div className="mt-4">
              <svg
                width="810"
                height="4"
                viewBox="0 0 804 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="804" y2="0.5" stroke="#4E3636" />
              </svg>
            </div>
            <div className="ml-5 mt-1">
              <ViewMore />
            </div>
          </div>
          <div className="justify-center items-center w-full">
        <div className="flex flex-wrap gap-8  mx-auto justify-center ">
          {cardsData1.map((card, index) => (
            <MiniCard
              key={index}
              title={card.title}
              price={card.price}
              imageSrc={card.imageSrc}
              altText={card.altText}
            />
          ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
