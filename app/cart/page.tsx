import Hero1 from "@/components/Hero1";
import { cardsData3 } from "@/components/data/Data3";
import Card2 from "@/components/cards/Card2";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import "/styles/font.css";

function page() {
  return (
    <div>
      <Hero1 title={"Cart"} />
      <div className="mx-40 mt-20 h-auto">
        <div className="flex flex-col border border-black h-[90vh] mb-32">
          <div className=" flex justify-between bg-[#4E3636] h-[10vh] w-full pr-10">
            <p className="w-1/12"></p>
            <p className="font-['spectral'] text-white font-bold text-xl flex justify-center items-center">
              Product
            </p>
            <p className="font-['spectral'] text-white font-bold text-xl flex justify-center items-center">
              Price
            </p>
            <p className="font-['spectral'] text-white font-bold text-xl flex justify-center items-center">
              Quantity
            </p>
            <p className="font-['spectral'] text-white font-bold text-xl flex justify-center items-center">
              Subtotal
            </p>
          </div>
          <div className="mx-10">
            <div className=" flex h-[20vh] w-full ">
              <div className="flex items-center justify-between w-1/6">
                <AiOutlineCloseCircle className="w-6 h-6 " />
                <div className="relative h-3/5 w-3/5 mr-4 border border-black">
                  <Image src={"/donut.png"} alt={"donut"} fill />
                </div>
              </div>

              <div className="flex justify-between w-full ml-5">
                <p className="pl-4 flex justify-center items-center font-['spectral'] text-2xl font-bold">
                  Sweet Donut
                </p>
                <p className="flex justify-center items-center font-['spectral'] text-2xl font-bold">
                  $1.99
                </p>
                <div className="flex justify-center items-center h-full">
                  <p className="border border-black px-7 py-4 flex justify-center items-center font-['spectral'] text-2xl font-bold">
                    1
                  </p>
                </div>
                <p className="flex justify-center items-center font-['spectral'] text-2xl font-bold">
                  $1.99
                </p>
              </div>
            </div>
            <div className="w-full bg-gray-100 h-0.5"></div>
            <div className="w-2/5 h-[20vh] mt-5  ">
              <input
                id="input2"
                type="text"
                className=" w-full h-1/3  border border-black focus:outline-none "
                placeholder="    CUPON CODE"
              />
              <div className="flex gap-3 mt-5 h-1/3">
                <p className="border border-black font-['spectral'] text-lg flex items-center justify-center w-1/2">
                  APPLY CUPON
                </p>
                <p className="border border-black font-['spectral'] text-lg flex items-center justify-center w-1/2">
                  UPDATE CART
                </p>
              </div>
            </div>
            <div className="h-auto">
              <p className="font-['spectral'] text-2xl text-[#4E3636] font-bold ">Cart Totals</p>
              <div className="w-full bg-black h-0.5 my-4"></div>
              <div className="flex justify-between">
                <p className="font-['spectral'] text-xl text-[#4E3636]  ">Subtotal</p>
                <p className="font-['spectral'] text-xl text-[#4E3636]  ">$1.99</p>
              </div>
              <div className="w-full bg-black h-0.5 my-4"></div>
              <div className="flex justify-between">
                <p className="font-['spectral'] text-xl text-[#4E3636]  ">Total</p>
                <p className="font-['spectral'] text-xl text-[#4E3636]  ">$1.99</p>
              </div>
              <div className="mt-5">
              <Link href="/checkout"
              className="border border-black font-['spectral'] text-lg flex items-center justify-center w-1/4 h-[7vh]  ">
                  PROCEED TO CHECKOUT
                </Link></div>
            </div>
          </div>
        </div>

        <div>
          <p className="font-semibold font-sans text-2xl">YOU MIGHT ALSO ADD</p>

          <div className="flex flex-wrap justify-between">
            {cardsData3.map((card, index) => (
              <Card2
                titleSize={"2xl"}
                priceSize={"3xl"}
                // height={300}
                // width={300}
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
  );
}

export default page;
