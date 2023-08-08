import Image from "next/image"

function Hero1({title}:any) {
  return (
      <div className="mb-12 relative bg-cover h-24 sm:h-52 md:h-80 lg:h-[400px] w-full bg-black flex justify-center items-center">
        <Image
          src={"/product.png"}
          alt={"product"}
          fill
          className="opacity-50 "
        />
        <div className="absolute">
          <p className="text-white font-['spectral'] text-xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">
            {title}
          </p>
        </div>
      </div>
  )
}

export default Hero1
