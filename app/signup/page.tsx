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
                <p className="text-6xl font-['spectral'] ">Sign up</p>
              </div>
              <div>
                <p className="text-lg font-['spectral'] text-[#8D8D8D]">
                  Have an Account?
                </p>
                <Link
                  href="/login"
                  style={{
                    fontFamily: "spectral",
                    color: "#B87514",
                  }}
                >
                  Sign in
                </Link>
              </div>
            </div>
            <div className="flex items-end h-full ">
              <div className="flex flex-col w-full h-5/6 ">
                <div className="flex flex-col  w-fullborder h-2/5">
                  <p className="my-3 font-['spectral'] text-lg">
                    Enter your username and email address
                  </p>
                  <input
                    type="text"
                    className="h-1/2 w-full border border-1 "
                    placeholder="  Username or email address"
                  />
                </div>
                <div className="flex h-2/5 justify-between">
                  <div className="h-full ">
                    <div className="flex flex-col  w-fullborder h-full">
                      <p className="my-3 font-['spectral'] text-lg">
                        User name
                      </p>
                      <input
                        type="text"
                        className="h-1/2 w-full border border-1 "
                        placeholder="  User name"
                      />
                    </div>
                  </div>
                  <div className="h-full">
                    <div className="flex flex-col  w-fullborder h-full">
                      <p className="my-3 font-['spectral'] text-lg">
                        Contact Number
                      </p>
                      <input
                        type="text"
                        className="h-1/2 w-full border border-1 "
                        placeholder="  Contact Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col  w-full h-2/5 ">
                  <p className="my-3 font-['spectral'] text-lg">
                    Enter your Password
                  </p>
                  <input
                    type="text"
                    className="h-1/2 w-full border border-1 "
                    placeholder="  Password"
                  />
                </div>
                <div className="bg-[#4E3636] h-1/6 w-full mt-9">
                  <p className="font-['spectral'] font-bold text-lg text-white text-center p-5">
                    Sign up
                  </p>
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
