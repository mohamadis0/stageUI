import { AiOutlineArrowRight } from "react-icons/ai";

function ViewMore() {
  return (
    <div>
      <div className="flex items-center text-[6px] sm:text-sm md:text-lg lg:text-xl">
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
  );
}

export default ViewMore;
