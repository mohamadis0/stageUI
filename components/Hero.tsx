import Image from "next/image";
import "/styles/font.css";

function Hero() {
  return (
    <div>
    <div
      className="bg-cover bg-center flex justify-between "
      style={{
        backgroundImage: "url(../bg.png)",
        width:"full"
      }}
    >
      <div className=" m-7 sm:m-16 md:m-20 lg:m-24 flex-auto w-32  ">
        <p className="mb-5 text-sm sm:text-4xl md:text- lg:text-7xl"
          style={{
            fontFamily: "Butterfly Kids",
            color: "#CD1818",
            textShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          Irresistble Delights Awaits!
        </p>
        <p className="text-[6px] sm:text-sm md:text-lg lg:text-2xl"
          style={{
            fontFamily: "Spectral",
            
          }}
        >
          Indulge in a symphony of sweet delights with our mouthwatering
          offers and exclusive discounts, elevating your taste buds to new
          heights of bliss.
        </p>
      </div>
      
      <div className="h-32 md:h-[40vh] lg:h-[83vh] relative lg:flex-auto  md:flex-auto w-32 justify-center">
       <div className=""> <Image
          src="/vect.png"
          alt="My Image"
          // width={850}
          // height={100}
          fill
          
        
        /></div>

        <div className="mt-10"><Image
          src="/cake.png"
          alt="My Image"
          width={650}
          height={100}
          className="absolute"
        /></div>
      </div>
    </div>
    
  </div>
  )
}

export default Hero
