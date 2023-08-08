"use client";
import Image from "next/image";
import "/styles/font.css";
import { cardsData2 } from "@/components/data/Data2";
import Card1 from "@/components/cards/Card1";
import Hero1 from "@/components/Hero1";
import ReactSlider from "react-slider";

function page() {
  return (
    <div>
      <Hero1
      title={"Products"} 
      />
      <div className="mx-5 sm:mx-12 md:mx-16 lg:mx-20">
        <div className="flex justify-between ">
          <p className="font-['spectral'] flex items-center text-[7px] sm:text-xs lg:text-sm">
            Showing 1–9 of 25 results
          </p>

          <select className="bg-white border border-black text-[#4E3636] font-['spectral'] p-1 pr-2 lg:p-4 lg:pr-8 text-[7px] sm:text-xs lg:text-sm">
            <option >Default Sorting</option>
          </select>
        </div>
        <div className="flex gap-3">
          <div className="flex w-3/4 ">
            <div className="flex flex-wrap justify-around">
              {cardsData2.map((card, index) => (
                <Card1
                  // titleSize={"xl"}
                  // priceSize={"2xl"}
                  // height={80}
                  // width="80"
                  key={index}
                  title={card.title}
                  price={card.price}
                  imageSrc={card.imageSrc}
                  altText={card.altText}
                />
              ))}
            </div>
          </div>
          <div className="flex w-1/4  ">
            <div className="  w-full h-5/6">
              <div className="  w-full h-2/6">
                <p className="flex font-['spectral'] mt-3 text-xs sm:text-lg md:text-xl lg:text-2xl">CART</p>
                <div className="flex h-1/4 mt-3 gap-2">
                  <div className=" relative w-1/3 h-full border border-black">
                    <Image src={"/donut.png"} alt={"donut"} fill />
                  </div>
                  <div>
                    <p className="flex font-['spectral'] text-[9px] sm:text-xs md:text-sm lg:text-lg font-bold">
                      Sweet donut
                    </p>
                    <p className="flex font-['spectral'] text-[9px] sm:text-xs md:text-lg lg:text-lg">1 x $1.99</p>
                  </div>
                </div>
                <div className="bg-black w-full h-0.5 my-4"></div>
                <div className="flex justify-between">
                  <p className="flex font-['spectral'] text-2xl">Subtotal</p>
                  <p className="flex font-['spectral'] text-lg">$1.99</p>
                </div>
                <div className="flex h-1/6 gap-3 mt-2">
                  <div className="flex h-full w-1/2 border border-black">
                    <p className=" font-['spectral'] text-lg flex items-center justify-center w-full">
                      VIEW CART
                    </p>
                  </div>
                  <div className="flex h-full w-1/2 border border-black">
                    <p className=" font-['spectral'] text-lg flex items-center justify-center w-full">
                      CHECKOUT
                    </p>
                  </div>
                </div>
                <select className="mt-5 h-1/6 w-full bg-white border border-black text-[#4E3636] font-['spectral'] p-4 pr-8 ">
                  <option>Categories</option>
                </select>
              </div>
              <div className=" h-1/5 ">
                <p className="flex flex-col font-['spectral'] text-2xl">
                  Filter By Price
                </p>
                <div className="flex items-center my-2 ">
                  <div className="rounded-full bg-[#4E3636] h-5 w-5"></div>
                  <div className="w-full bg-gray-200 h-2"></div>
                  <div className="rounded-full bg-[#4E3636] h-5 w-5"></div>
                </div>
                <div className="h-1/4 mt-4 flex justify-between">
                  <div className="flex h-full w-5/12 border border-black">
                    <p className=" font-['spectral'] text-lg flex items-center justify-center w-full">
                      FILTER
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="font-['spectral'] text-lg">Price:</p>
                    <p className="font-['spectral'] text-lg font-semibold">
                      $0-$120
                    </p>
                  </div>
                </div>

                {/* <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[0, 100]}
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                  ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                  pearling
                  minDistance={10}
                /> */}
              </div>
              <div className=" h-3/6">
                <p className=" font-['spectral'] text-2xl w-full">
                  FEATURED PRODUCTS
                </p>
                <div className="flex flex-col h-1/4">
                  <div className="flex h-full mt-3 gap-2">
                    <div className=" relative w-1/3 h-5/6 border border-black">
                      <Image src={"/donut.png"} alt={"donut"} fill />
                    </div>
                    <div>
                      <p className="flex font-['spectral'] text-lg font-bold">
                        Sweet donut
                      </p>
                      <p className="flex font-['spectral'] text-lg">$1.99</p>
                    </div>
                    
                  </div>
                  <div className="bg-gray-200 w-full h-0.5 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
