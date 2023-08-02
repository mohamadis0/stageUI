'use client';
import {useState} from 'react';
import Link from 'next/link';


function navbar() {

   
        const [activeLink, setActiveLink] = useState(null);
      
        const handleLinkClick = (link : any) => {
          setActiveLink(link);
        };
      

  return (
    <nav className="bg-white-800 p-7 shadow-lg ">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="text-[#CD1818] text-3xl font-serif font-semibold">
       
        Logo
      </div>

      {/* Search Bar */}
      <div className="flex items-center">
        <input id='input1'
          type="text"
          className="px-8 py-3 rounded-[18px] w-[30rem] mr-2 border-4 border-[#CD1818] focus:outline-none "
          style={{
            backgroundImage: "url(../Search.png)",
            backgroundPosition: "95% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "20px 20px",
            paddingRight: "25px",
            fontFamily: "font-serif",
          }}
          placeholder="Search for..."
        />
      </div>

      {/* Navigation Links */}
      <div className="text-black font-serif text-xl">
          <Link
            href="/home"
            className={`mx-6 ${
              activeLink === 'home' ? 'text-[#CD1818] underline underline-offset-4' : ''
            }`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
        
          <Link
            href="/login"
            className={`mx-6 ${
              activeLink === 'login' ? 'text-[#CD1818] underline underline-offset-4' : ''
            }`}
            onClick={() => handleLinkClick('login')}
          >
            Login
          </Link>
          <Link
            href="#"
            className={`mx-6 ${
              activeLink === 'us' ? 'text-[#CD1818] underline underline-offset-4' : ''
            }`}
            onClick={() => handleLinkClick('us')}
          >
          Contact Us
        </Link>
        <Link
            href="#"
            className={`mx-6 ${
              activeLink === 'our' ? 'text-[#CD1818] underline underline-offset-4' : ''
            }`}
            onClick={() => handleLinkClick('our')}
          >
          Our Bakery
        </Link>
        <Link
            href="#"
            className={`mx-6 ${
              activeLink === 'cart' ? 'text-[#CD1818] underline underline-offset-4' : ''
            }`}
            onClick={() => handleLinkClick('cart')}
          >
          Cart
        </Link>
      </div>
    </div>
  </nav>
  )
}

export default navbar
