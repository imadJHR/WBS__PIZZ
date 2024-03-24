import React from "react";
import { useDarkMode } from "../DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMoon,
  FaSun,
  FaLinkedin,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
    <section
      className={`${
        darkMode ? "dark bg-gray-900" : "light bg-black"
      } w-full h-fit lg-px-20 px-10 py-10 flex flex-col justify-center items-center gap-6`}
    >
      <h1 className="text-white font-bold text-5xl">
        Pizzazz <span className="text-orange-500 italic">Pies</span>
      </h1>
      <p className=" text-center text-xl text-slate-100 leading-OO">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cumque
        quasi et, nisi nihil necessitatibus soluta molestiae eveniet qui minus!
      </p>
      <div
        id="social-icons"
        className="flex justify-center items-center gap-4 "
      >
        <div
          id="incon-box"
          className="text-white p-3 rounded-full bg-orange-500 hover:bg-white  hover:text-black cursor-pointer transform hover
        scale-105 duration-300 "
        >
          <FaFacebook className="w-[25px] h-[25px]" />
        </div>
        <div
          id="incon-box"
          className="text-white p-3 rounded-full bg-orange-500 hover:bg-white  hover:text-black cursor-pointer transform hover
        scale-105 duration-300 "
        >
          <FaInstagram className="w-[25px] h-[25px]" />
        </div>
        <div
          id="incon-box"
          className="text-white p-3 rounded-full bg-orange-500 hover:bg-white  hover:text-black cursor-pointer transform hover
        scale-105 duration-300 "
        >
          <FaGithub className="w-[25px] h-[25px]" />
        </div>
        <div
          id="incon-box"
          className="text-white p-3 rounded-full bg-orange-500 hover:bg-white  hover:text-black cursor-pointer transform hover
        scale-105 duration-300 "
        >
          <FaTwitter className="w-[25px] h-[25px]" />
        </div>
      </div>
    </section>
    {/* dark mode toggle button  */}
    <div>
      <button onClick={toggleDarkMode} className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:bottom-6 left-6 bottom-6">
        {darkMode ? <FaSun size={20} className="text-black" /> : <FaMoon size={20} className="text-black"/>}
        

      </button>
    </div>
    {/*scroll to top button */}
    <div className="fixed lg:bottom-6 right-6 bottom-6 text-black flex rounded-full bg-orange-500 p-3 items-center hover:bg-white cursor-pointer  ">
      <Link to = "hero">
        <FaArrowUp size={25}/>
      </Link>
    </div>
    
    
    
    
    
    </>
  );
};

export default Footer;
