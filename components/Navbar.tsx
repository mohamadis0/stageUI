'use client';
import {useState} from 'react';


function navbar() {

   
        const [activeLink, setActiveLink] = useState(null);
      
        const handleLinkClick = (link : any) => {
          setActiveLink(link);
        };
      

  return (
    <nav className="bg-white-800 p-8 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="text-[#CD1818] text-3xl font-serif font-semibold">
       
        Logo
      </div>

      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          className="px-8 py-3 rounded-[18px] w-[30rem] mr-2 border-2 border-[#CD1818] focus:outline-none "
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
          <a
            href="#"
            className={`mx-6 ${
              activeLink === 'home' ? 'text-[#CD1818] underline underline-offset-4' : ''
            }`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
        
          <a
            href="#"
            className={`mx-6 ${
              activeLink === 'login' ? 'text-[#CD1818] underline underline-offset-4' : ''
            }`}
            onClick={() => handleLinkClick('login')}
          >
            Login
          </a>
          <a
            href="#"
            className={`mx-6 ${
              activeLink === 'us' ? 'text-[#CD1818] underline underline-offset-4' : ''
            }`}
            onClick={() => handleLinkClick('us')}
          >
          Contact Us
        </a>
        <a
            href="#"
            className={`mx-6 ${
              activeLink === 'our' ? 'text-[#CD1818] underline underline-offset-4' : ''
            }`}
            onClick={() => handleLinkClick('our')}
          >
          Our Bakery
        </a>
        <a
            href="#"
            className={`mx-6 ${
              activeLink === 'cart' ? 'text-[#CD1818] underline underline-offset-4' : ''
            }`}
            onClick={() => handleLinkClick('cart')}
          >
          Cart
        </a>
      </div>
    </div>
  </nav>
  )
}

export default navbar
