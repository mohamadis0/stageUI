import { Console } from "console";
import "/styles/font.css";
import Image from "next/image";

function Card2({ title , price, imageSrc, altText, width, height, titleSize, priceSize  }:any) {
//   console.log(height)
//   console.log(width)
  return (
    <div className={`mt-8 border border-black w-[380px] h-[400px] shadow-xl`}>
        <div className="border-b border-black flex justify-center h-1/6 items-center">
        <p className={`font-['spectral'] text-${titleSize}`}>
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
          <p className={`font-['spectral'] font-black text-${priceSize}`}>${price}</p>
          </div>
          <div className="flex justify-center w-1/2 text-center items-center ">
            <p
            className="font-['spectarl']"
            >VIEW MORE</p>
          </div>
        </div>
      
    </div>
  )
}

export default Card2
