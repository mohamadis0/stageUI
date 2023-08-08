import { AiOutlineArrowRight } from "react-icons/ai";
import {GrFacebookOption} from "react-icons/gr";
import {BiLogoLinkedin} from "react-icons/bi";
import {BiLogoTwitter} from "react-icons/bi";

function Footer() {
  return (
    <footer className="flex h-24 sm:h-52 md:h-72 lg:h-[45vh] mt-32 rounded-t-3xl w-full bg-[#4E3636] ">
      <div className="flex flex-col lg:mx-24">
        <div className=" p-2 lg:pt-12">
          <p className="font-['spectarl'] font-black text-white text-[10px] sm:text-sm md:text-lg lg:text-3xl ">
            Logo
          </p>
        </div>
        <div className="flex flex-row justify-between ">
          <div className="lg:mt-16 flex flex-col  lg:gap-3">
            <p className="font-['spectarl'] text-white text-[6px] sm:text-sm md:text-lg lg:text-xl">
              +961 81 256 354
            </p>
            <p className="font-['spectarl'] text-white text-[6px] sm:text-sm md:text-lg lg:text-xl">
              mail@bakery.com
            </p>
          </div>
          <div className="flex justify-between  lg:mt-16 gap-5 lg:gap-20 mx-6 lg:mx-72">
            <p className="font-['spectral'] text-white text-[8px] sm:text-sm md:text-lg lg:text-xl">About Us</p>
            <p className="font-['spectral'] text-white text-[8px] sm:text-sm md:text-lg lg:text-xl">Contact Us</p>
            <p className="font-['spectral'] text-white text-[8px] sm:text-sm md:text-lg lg:text-xl">FAQs</p>
            <p className="font-['spectral'] text-white text-[8px] sm:text-sm md:text-lg lg:text-xl">Career</p>
          </div>
          <div className=" flex flex-col  gap-1 md:gap-4 lg:gap-4">
            <p className="font-['spectarl'] text-white text-xs sm:text-lg md:text-xl lg:text-2xl ">Subscribe</p>
            <div className="flex">
              <input
                id="input2"
                type="text"
                className="font-['spectral'] w-5 lg:w-32 h-2 sm:h-5 md:h-8 lg:h-10  border-1 border-[#ffffff] focus:outline-none "
  
                placeholder="  Get Updates"
              />
              <div className="flex items-center justify-center h-13 w-5 md:w-10 lg:w-16 border-2 border-white bg-[#4E3636]">
                <AiOutlineArrowRight className="text-white text-[3px] sm:text-sm md:text-xl lg:text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 mt-2 sm:mt-4 md:mt-6 lg:mt-8 border border-3 border-white">
        </div>
        <div className="flex   justify-between mt-2 sm:mt-3 md:mt-5 lg:mt-7">
            <div className=" flex justify-between gap-2 lg:gap-5">
            <div className="rounded-full border border-white p-1 lg:p-2">
                <BiLogoLinkedin className="text-white text-[7px] sm:text-sm md:text-xl lg:text-2xl"/>
                </div>
                <div className="rounded-full border border-white p-1 lg:p-2">
                <GrFacebookOption className="text-white text-[7px] sm:text-sm md:text-xl lg:text-2xl"/>
                </div>
                <div className="rounded-full border w-fit h-fit border-white  p-1 lg:p-2">
                <BiLogoTwitter className="text-white text-[7px] sm:text-sm md:text-xl lg:text-2xl"/>
                </div>

            </div>
            <div>
                <p className=" font-['spectarl'] text-white mr-12 text-[6px] sm:text-sm md:text-lg lg:text-xl">
                © 2023 Bakery. All rights reserved
                </p>
            </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
