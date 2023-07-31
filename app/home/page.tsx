import Image from "next/image";
import "/styles/font.css";

function page() {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url(../bg.png)",
        height: "800px",
      }}
    >
      <div className="flex justify-between items-center">
        <p
          style={{
            fontFamily: "Butterfly Kids",
            fontSize: "150px",
            color: "#CD1818",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          hello
        </p>
        <div className="relative">
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
            width={850}
            height={100}
            className="w-45 h-45 absolute top-10 left-0 z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
