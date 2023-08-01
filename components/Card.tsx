import "/styles/font.css";
import Image from "next/image";

function Card() {
  return (
    <div className="m-40 border border-black h-[500px] w-[411px]">
        <div className="border-b border-black flex justify-center">
        <p style={{
            fontFamily: "Spectral",
            fontSize: "24px",
          }}>
            SUIIIII
          </p>
        </div>
        <div className="h-4/5 border-b border-black flex justify-center">
        <Image
          src="/cake.png"
          alt="My Image"
          width={100}
          height={100}
          className=" w-full" 
        />
        </div>
        <div className="flex flex-row justify-center border-2 border-red-500">
          <div className=" flex w-1/2 justify-center">
            <p>mmm</p>
          </div>
          <div className="flex justify-center w-1/2 text-center items-center ">
            <p>bbbb</p>
          </div>
        </div>
      
    </div>
  )
}

export default Card
