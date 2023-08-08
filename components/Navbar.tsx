"use client";
import { useState } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import "/styles/font.css";

function navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white-800 p-2 md:p-5 lg:p-7 shadow-lg w-full">
      <div className=" mx-auto flex justify-between gap-3 items-center">
        {/* Logo */}
        <Link
          href="/home"
          className="text-[#CD1818] text-sm sm:text-lg md:text-2xl lg:text-3xl font-['spectral'] font-semibold "
          onClick={() => handleLinkClick("home")}
        >
          Logo
        </Link>

        {/* Search Bar */}
        <div className="flex items-center w-auto mx-4">
          <input
            id="input1"
            type="text"
            className="px-1  rounded-[2vh] h-[4vh]  sm:h-[6vh]  md:h-[7vh]  lg:h-[8vh]  w-[30vh] sm:w-[30vh] md:w-[40vh] lg:w-[70vh] mr-2 border lg:border-2 border-[#CD1818] focus:outline-none "
            style={{
              backgroundImage: "url(../Search.png)",
              backgroundPosition: "95% 50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "5% 40%",
              paddingRight: "5%",
            }}
            placeholder="Search for..."
          />
        </div>

        {/* Navigation Links */}
        <div className=" hidden gap-6 lg:gap-10 md:flex text-black font-['spectaral'] md:text-xs lg:text-xl">
          <Link
            href="/home"
            className={` ${
              activeLink === "home"
                ? "text-[#CD1818] underline underline-offset-4"
                : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>

          <Link
            href="/login"
            className={` ${
              activeLink === "login"
                ? "text-[#CD1818] underline underline-offset-4"
                : ""
            }`}
            onClick={() => handleLinkClick("login")}
          >
            Login
          </Link>
          <Link
            href="#"
            className={` ${
              activeLink === "us"
                ? "text-[#CD1818] underline underline-offset-4"
                : ""
            }`}
            onClick={() => handleLinkClick("us")}
          >
            Contact Us
          </Link>
          <Link
            href="/products"
            className={` ${
              activeLink === "our"
                ? "text-[#CD1818] underline underline-offset-4"
                : ""
            }`}
            onClick={() => handleLinkClick("our")}
          >
            Our Bakery
          </Link>
          <Link
            href="/cart"
            className={` ${
              activeLink === "cart"
                ? "text-[#CD1818] underline underline-offset-4"
                : ""
            }`}
            onClick={() => handleLinkClick("cart")}
          >
            Cart
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="outline-none mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            <svg
              className={`w-6 h-6 text-gray-500 hover:text-[#CD1818] ${
                showMenu ? "transform rotate-90" : ""
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`  h-auto ${showMenu ? "block" : "hidden"}`}
      >
        <ul>
          <li>
            <Link
              href="/home"
              className="flex justify-center font-['spectral'] text-sm px-2 py-2 text-black hover:bg-red-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="flex justify-center font-['spectral'] text-sm px-2 py-2 text-black hover:bg-red-400 transition duration-200"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex justify-center font-['spectral'] text-sm px-2 py-2 text-black hover:bg-red-400 transition duration-200"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="flex justify-center font-['spectral'] text-sm px-2 py-2 text-black hover:bg-red-400 transition duration-200"
            >
              Our Bakery
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="flex justify-center font-['spectral'] text-sm   text-black px-2 py-2 hover:bg-red-400 transition duration-200"
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
