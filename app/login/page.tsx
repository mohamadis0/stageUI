import "/styles/font.css";
import Link from "next/link";

function page() {
  return (
    <div>
      <div
        className="flex bg-cover"
        style={{
          backgroundImage: "url(../bg.png)",
          height: "750px",
        }}
      >
        <div className="flex my-28 mx-72 border border-black h-full w-full bg-white">
          <div className="flex flex-col mx-52 mt-20 mb-20 content-between  h-auto w-full">
            <div className="flex justify-between ">
              <div>
                <p className="text-xl font-['spectral'] ">Welcome to Pastry</p>
              </div>
              <div>
                <p className="text-lg font-['spectral'] text-[#8D8D8D]">
                  No Account?
                </p>
                <Link href="/signup"
                 style={{
                  fontFamily: "spectral",
                  color: "#BF0007",
                }}>
                
                  Sign up

                </Link>
              </div>
            </div>
            <div className="flex items-end h-full ">
              <div className="flex flex-col w-full h-5/6 ">
                <div className="flex flex-col  w-fullborder h-1/3">
                  <p className="my-3 font-['spectral'] text-lg">
                    Enter your username and email address
                  </p>
                  <input
                    type="text"
                    className="h-2/5 w-full border border-1 "
                    placeholder="  Username or email address"
                  />
                </div>
                <div className="flex flex-col  w-full h-1/3 ">
                  <p className="my-3 font-['spectral'] text-lg">
                    Enter your Password
                  </p>
                  <input
                    type="text"
                    className="h-2/5 w-full border border-1 "
                    placeholder="  Password"
                  />
                </div>
                <div className="flex justify-end">
                <button
                  style={{
                    fontFamily: "spectral",
                    color: "#BF0007",
                  }}
                >
                  Forgot Password
                </button>
                </div>
                <div className="bg-[#4E3636] h-1/6 w-full my-5">
                  <p className="font-['spectral'] font-bold text-lg text-white text-center p-5">Sign In</p>
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
