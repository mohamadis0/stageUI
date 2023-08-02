import Image from "next/image";
import ViewMore from "./ViewMore";

function MiniCard({ title, price, imageSrc, altText }: any) {
  return (
    <div>
      <div className="w-[400px] h-28 flex ">
        <div className="h-full w-2/5 relative">
          <Image src={imageSrc} alt={altText} layout="fill" />
        </div>
        <div className="h-full w-3/5 ">
          <div className="flex flex-col h-full ml-6">
            <p className="font-['spectral'] font-bold text-2xl">{title}</p>
            <p className="font-['spectral'] text-xl">${price}</p>
            <div className=" mt-9 ">
              <ViewMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
