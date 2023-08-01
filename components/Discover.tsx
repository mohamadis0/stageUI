import "/styles/font.css";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

function Discover() {
  return (
    <div className="mt-32 mb-32 bg-[#ECECEC]/25 " style={{ height: "476px" }}>
      <div className="flex">
        <div className="flex-auto mt-16">
          <p
            style={{
              fontFamily: "Butterfly Kids",
              fontSize: "64px",
              color: "#CD1818",
              marginLeft: "30%",
            }}
          >
            Discover Our Irresistible Selection
          </p>
        </div>
        <div className="flex mt-16 mr-8 ">
          <div className="flex  items-center ">
            <button
              style={{
                fontFamily: "spectral",
              }}
            >
              VIEW MORE
            </button>
            <div className="ms-1">
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-24 mx-32 mt-8">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image
              src="/croissant.png"
              alt="My Image"
              width={116}
              height={116}
              className="w-36 h-36 "
            />
          </div>
          <div className="flex justify-center">
            <p className="discover text-center">Croissants & Pastries</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/cookies.png"
            alt="My Image"
            width={116}
            height={116}
            className="w-36 h-36 "
          />
          <div className="flex justify-center">
            <p className="discover text-center">Cookies & Brownies</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/cake1.png"
            alt="My Image"
            width={116}
            height={116}
            className="w-36 h-36 "
          />
          <div className="flex justify-center">
            <p className="discover text-center">Cakes & Cupcakes</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/Bread.png"
            alt="My Image"
            width={116}
            height={116}
            className="w-36 h-36 "
          />
          <div className="flex justify-center">
            <p className="discover text-center">Breads & Rolls</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/gluten.png"
            alt="My Image"
            width={116}
            height={116}
            className="w-36 h-36"
          />
          <div className="flex justify-center">
            <p className="discover text-center">Gluten-Free Delights</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
