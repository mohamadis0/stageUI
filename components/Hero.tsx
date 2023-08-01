import Image from "next/image";
import "/styles/font.css";

function Hero() {
  return (
    <div>
    <div
      className="bg-cover bg-center flex justify-between "
      style={{
        backgroundImage: "url(../bg.png)",
        height: "600px",
        width:"full"
      }}
    >
      <div className="m-24 flex-auto w-32 ">
        <p
          style={{
            fontFamily: "Butterfly Kids",
            fontSize: "80px",
            color: "#CD1818",
            textShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          Irresistble Delights Awaits!
        </p>
        <p
          style={{
            fontFamily: "Spectral",
            fontSize: "24px",
          }}
        >
          Indulge in a symphony of sweet delights with our mouthwatering
          offers and exclusive discounts, elevating your taste buds to new
          heights of bliss.
        </p>
      </div>
      <div className=" relative flex-auto w-32">
        <Image
          src="/vect.png"
          alt="My Image"
          width={850}
          height={100}
          className="w-50 h-50 "
        />

        <Image
          src="/cake.png"
          alt="My Image"
          width={650}
          height={100}
          className="absolute bottom-24 left-0"
        />
      </div>
    </div>
    
  </div>
  )
}

export default Hero
