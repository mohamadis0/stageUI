import "/styles/font.css";
import Image from "next/image";

function Card({ title , price, imageSrc, altText }:any) {
  return (
    <div className="mt-5 border border-black h-[500px] w-[411px] shadow-xl">
        <div className="border-b border-black flex justify-center h-1/6 items-center">
        <p style={{
            fontFamily: "Spectral",
            fontSize: "24px",
          }}>
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
            <p className="font-['spectarl'] font-black text-3xl"
            >${price}</p>
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

export default Card
