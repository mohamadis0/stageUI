import { Console } from "console";
import "/styles/font.css";
import Image from "next/image";

function Card({ title , price, imageSrc, altText, width, height, titleSize, priceSize  }:any) {

  return (
    <div className={`mt-5 border border-black w-20 h-32 sm:h-60 sm:w-52 md:h-96 md:w-80  lg:w-[300px] lg:h-[370px] shadow-xl`}>
        <div className="border-b border-black flex justify-center h-1/6 items-center">
        <p className={`font-['spectral'] text-[7px] sm:text-lg md:text-xl lg:text-2xl`}>
            {title}
          </p>
        </div>
        <div className="h-4/6 border-b border-black flex justify-center relative">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
        />
        </div>
        <div className="flex flex-row justify-center  h-1/6">
          <div className=" flex w-1/2 justify-center border-r border-black items-center">
          <p className={`font-['spectral'] font-black text-[8px] sm:text-lg md:text-xl lg:text-3xl`}>${price}</p>
          </div>
          <div className="flex justify-center w-1/2 text-center items-center ">
            <p
            className="font-['spectarl'] text-[7px] sm:text-sm lg:text-2xl"
            >VIEW MORE</p>
          </div>
        </div>
      
    </div>
  )
}

export default Card
