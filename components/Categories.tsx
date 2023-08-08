import "/styles/font.css";
import ViewMore from "./ViewMore";
import MiniCard from "./MiniCard";
import { cardsData1 } from "./data/Data1";

function Categories() {
  return (
    <div>
      <div className="bg-[#ECECEC]/25 lg:h-[680px]">
        <div className="mx-5 lg:mx-28">
          <div className="pt-12 flex justify-center items-center">
            <table className="w-full h-auto sm:h-12 md:h-16 lg:h-20">
              <tbody>
                <tr>
                  <td className="border-2 border-[#4E3636] font-['spectral'] font-semibold text-center text-[#4E3636] bg-white hover:text-white hover:bg-[#4E3636] text-xs sm:text-sm md:text-lg lg:text-xl">Croissants & Pastries</td>
                  <td className="border-2 border-[#4E3636] font-['spectral'] font-semibold text-center text-[#4E3636] bg-white hover:text-white hover:bg-[#4E3636] text-xs sm:text-sm md:text-lg lg:text-xl">Cookies & Brownies</td>
                  <td className="border-2 border-[#4E3636] font-['spectral'] font-semibold text-center text-[#4E3636] bg-white hover:text-white hover:bg-[#4E3636] text-xs sm:text-sm md:text-lg lg:text-xl">Cakes & Cupcakes</td>
                  <td className="border-2 border-[#4E3636] font-['spectral'] font-semibold text-center text-[#4E3636] bg-white hover:text-white hover:bg-[#4E3636] text-xs sm:text-sm md:text-lg lg:text-xl">Breads & Rolls</td>
                  <td className="border-2 border-[#4E3636] font-['spectral'] font-semibold text-center text-[#4E3636] bg-white hover:text-white hover:bg-[#4E3636] text-xs sm:text-sm md:text-lg lg:text-xl">Gluten-Free Delights</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex space-between gap-5 my-10">
            <p className="font-['spectral'] text-xs sm:text-xl md:text-2xl lg:text-3xl font-black">
              Croissants & Pastries
            </p>
            <div className="mt-4 h-0.5 w-full border border-[#4E3636] bg-[#4E3636]">
              
            </div>
            <div className="sm:ml-2 lg:ml-5 mt-1">
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
