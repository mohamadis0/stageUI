import { AiOutlineArrowRight } from "react-icons/ai";
import {GrFacebookOption} from "react-icons/gr";
import {BiLogoLinkedin} from "react-icons/bi";
import {BiLogoTwitter} from "react-icons/bi";

function Footer() {
  return (
    <footer className="h-[45vh] w-full rounded-t-3xl bg-[#4E3636]">
      <div className="mx-24">
        <div className="pt-12">
          <p className="font-['spectarl'] font-black text-white text-3xl ">
            Logo
          </p>
        </div>
        <div className="flex flex-row">
          <div className="mt-16 flex flex-col gap-3">
            <p className="font-['spectarl'] text-white text-xl">
              +961 81 256 354
            </p>
            <p className="font-['spectarl'] text-white text-base">
              mail@bakery.com
            </p>
          </div>
          <div className="flex justify-between mt-16 gap-20 mx-40">
            <p className="footerText">About Us</p>
            <p className="footerText">Contact Us</p>
            <p className="footerText">FAQs</p>
            <p className="footerText">Career</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="font-['spectarl'] text-white text-2xl">Subscribe</p>
            <div className="flex">
              <input
                id="input2"
                type="text"
                className="  border-1 border-[#ffffff] focus:outline-none "
                style={{
                  height: "50px",
                  fontFamily: "spectral",
                }}
                placeholder="  Get Updates"
              />
              <div className="flex items-center justify-center h-13 w-16 border-2 border-white bg-[#4E3636]">
                <AiOutlineArrowRight className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border border-3 border-white">
        </div>
        <div className="flex justify-between mt-7">
            <div className="flex justify-between gap-5">
            <div className="rounded-full border border-white p-2">
                <BiLogoLinkedin className="text-white text-2xl"/>
                </div>
                <div className="rounded-full border border-white p-2">
                <GrFacebookOption className="text-white text-2xl"/>
                </div>
                <div className="rounded-full border border-white p-2">
                <BiLogoTwitter className="text-white text-2xl"/>
                </div>

            </div>
            <div>
                <p className="font-['spectarl'] text-white text-base">
                © 2023 Bakery. All rights reserved
                </p>
            </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
