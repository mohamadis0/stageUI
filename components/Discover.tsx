import "/styles/font.css";
import Image from "next/image";
import ViewMore from "./ViewMore";

function Discover() {
  return (
    <div className=" h-auto w-full pb-10 mt-8 sm:mt-10 md:mt-20 lg:mt-32 mb-7 sm:mb-10 md:mb-20 lg:mb-32 bg-[#ECECEC]/25 ">
      <div className=" flex items-center pt-5 sm:pt-10 md:pt-14 lg:pt-20">
        <p
          className="flex w-3/5 md:pl-18 lg:pl-40 text-lg sm:text-3xl md:text-5xl lg:text-6xl "
          style={{
            fontFamily: "Butterfly Kids",
            color: "#CD1818",
            marginLeft: "20%",
          }}
        >
          Discover Our Irresistible Selection
        </p>

        <div>
          <ViewMore />
        </div>
      </div>
      <div className=" flex justify-center gap-4 mx-5 sm:mx-10 lg:mx-32 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-36 lg:h-36">
            <Image src="/croissant.png" alt="My Image" fill />
          </div>
          <div className="flex justify-center">
            <p className="discover text-center text-[7px] sm:text-lg md:text-xl lg:text-2xl">
              Croissants & Pastries
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-36 lg:h-36">
            <Image src="/cookies.png" alt="My Image" fill />
          </div>
          <div className="flex justify-center">
            <p className="discover text-center text-[7px] sm:text-lg md:text-xl lg:text-2xl">
              Cookies & Brownies
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="relative w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-36 lg:h-36">
            <Image src="/cake1.png" alt="My Image" fill />
          </div>
          <div className="flex justify-center">
            <p className="discover text-center text-[7px] sm:text-lg md:text-xl lg:text-2xl">
              Cakes & Cupcakes
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-36 lg:h-36">
            <Image src="/Bread.png" alt="My Image" fill />
          </div>
          <div className="flex justify-center">
            <p className="discover text-center text-[7px] sm:text-lg md:text-xl lg:text-2xl">
              Breads & Rolls
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-36 lg:h-36">
            <Image src="/gluten.png" alt="My Image" fill />
          </div>
          <div className="flex justify-center">
            <p className="discover text-center text-[7px] sm:text-lg md:text-xl lg:text-2xl">
              gluten-free Delights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
