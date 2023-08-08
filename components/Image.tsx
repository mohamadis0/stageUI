import Image from "next/image";
import { useState } from "react";

function Image0({ source }: any) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="m-2">
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="relative  border border-black w-[22vh] h-[22vh] "
      >
        <Image
        src={source}
        alt={"image"}
        fill
        className="hover:opacity-50"
        />

        {isHovering && (
          <div className="ml-[5vh] mt-[6vh] absolute bg-white border border-black w-auto h-1/3 flex justify-center items-center">
           <p className="flex ">Quick View</p> 
          </div>
        )}
      </div>
     
    </div>
  );
}

export default Image0;
