import Hero1 from "@/components/Hero1";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";
import Image from "next/image";
import "/styles/font.css";

function page() {
  return (
    <div>
      <Hero1 title={"Checkout"} />
      <div className="mx-40 h-auto">
        <div className="mb-5 bg-gray-200 w-full h-[10vh] border-t-4 border-black ">
          <div className="m-5 flex">
            <GrCircleInformation className="w-6 h-6 " />

            <p className="ml-3 font-['spectral'] text-black font-bold text-xl">
              Returning Customer?
            </p>
            <p className=" ml-3 font-['spectral'] text-[#4E3636] font-bold text-xl">
              Click here to login
            </p>
          </div>
        </div>
        <div className="mb-5 bg-gray-200 w-full h-[10vh] border-t-4 border-black ">
          <div className="m-5 flex">
            <GrCircleInformation className="w-6 h-6 " />

            <p className="ml-3 font-['spectral'] text-black font-bold text-xl">
              Have a Coupon
            </p>
            <p className="ml-3 font-['spectral'] text-[#4E3636] font-bold text-xl">
              Click here to enter your code
            </p>
          </div>
        </div>
        <p className="font-['spectral'] text-black font-bold text-xl mb-5">
          Billing Details
        </p>
        <div className="w-full flex flex-col gap-4 mb-5">
          <div className="flex w-full gap-4">
            <input
              id="input2"
              type="text"
              className=" w-1/2 h-[8vh]  border border-black focus:outline-none "
              placeholder="    First Name"
            />
            <input
              id="input2"
              type="text"
              className=" w-1/2 h-[8vh]  border border-black focus:outline-none "
              placeholder="    Last Name"
            />
          </div>
          <div className="flex w-full gap-4">
            <input
              id="input2"
              type="text"
              className=" w-1/2 h-[8vh]  border border-black focus:outline-none "
              placeholder="    Company Name (Optional)"
            />
            <select className="bg-white border border-black text-gray-500 font-['spectral'] w-1/2 pl-5 ">
              <option> Country / Region</option>
            </select>
          </div>
          <div className="flex w-full gap-4">
            <input
              id="input2"
              type="text"
              className=" w-1/2 h-[8vh]  border border-black focus:outline-none "
              placeholder="    Adress"
            />
            <input
              id="input2"
              type="text"
              className=" w-1/2 h-[8vh]  border border-black focus:outline-none "
              placeholder="    Town / City"
            />
          </div>
          <div className="flex w-full gap-4">
          <select className="bg-white border border-black text-gray-500 font-['spectral'] w-1/2 pl-5 ">
              <option> State</option>
            </select>
            <input
              id="input2"
              type="text"
              className=" w-1/2 h-[8vh]  border border-black focus:outline-none "
              placeholder="    ZIP Code "
            />
          </div><div className="flex w-full gap-4">
            <input
              id="input2"
              type="text"
              className=" w-1/2 h-[8vh]  border border-black focus:outline-none "
              placeholder="    Phone"
            />
            <input
              id="input2"
              type="text"
              className=" w-1/2 h-[8vh]  border border-black focus:outline-none "
              placeholder="    Email Adress"
            />
          </div>
          <div className="flex w-full gap-4">
            <input
              id="input2"
              type="text"
              className=" w-full h-[28vh]  border border-black focus:outline-none pb-36"
              placeholder="    Order Notes (Optional)"
            />
            </div>
        </div>
        <div className="flex mb-6">
          <input type="checkbox"
          className="p-32"
          />
          <p className="ml-3 font-['spectral'] text-black  text-lg">
          Create an account
          </p>

        </div>
        <p className=" font-['spectral'] font-bold text-black  text-4xl mb-4">Your Order</p>
        <div className="flex flex-col border border-black h-[60vh] mb-12">
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

            <div className="h-auto mt-5">
              <p className="font-['spectral'] text-2xl text-[#4E3636] font-bold ">
                Cart Totals
              </p>
              <div className="w-full bg-black h-0.5 my-4"></div>
              <div className="flex justify-between">
                <p className="font-['spectral'] text-xl text-[#4E3636]  ">
                  Subtotal
                </p>
                <p className="font-['spectral'] text-xl text-[#4E3636]  ">
                  $1.99
                </p>
              </div>
              <div className="w-full bg-black h-0.5 my-4"></div>
              <div className="flex justify-between">
                <p className="font-['spectral'] text-xl text-[#4E3636]  ">
                  Total
                </p>
                <p className="font-['spectral'] text-xl text-[#4E3636]  ">
                  $1.99
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center w-full bg-[#4E3636] h-[10vh]">
          <p className=" font-['spectral'] text-white font-bold text-xl ">
            Place Order
          </p>
        </button>
      </div>
    </div>
  );
}

export default page;
