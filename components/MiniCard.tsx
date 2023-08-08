import Image from "next/image";
import ViewMore from "./ViewMore";

function MiniCard({ title, price, imageSrc, altText }: any) {
  return (
    <div>
      <div className="w-50 sm:w-64 md:w-80 lg:w-[400px] h-12 sm:h-16 md:h-20 lg:h-28 flex ">
        <div className="h-full w-2/5 relative">
          <Image src={imageSrc} alt={altText} layout="fill" />
        </div>
        <div className="h-full w-3/5 ">
          <div className="flex flex-col h-full ml-2 lg:ml-6">
            <p className="font-['spectral'] font-bold text-[7px] sm:text-lg md:text-xl lg:text-2xl">{title}</p>
            <p className="font-['spectral'] text-[6px] sm:text-sm md:text-lg lg:text-xl">${price}</p>
            <div className=" lg:mt-9 ">
              <ViewMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
