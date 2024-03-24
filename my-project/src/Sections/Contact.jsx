import React, { useEffect } from "react";
import contact1 from "../assets/images/contact1.jpg";
import contact2 from "../assets/images/contact2.jpg";
import { useDarkMode } from "../DarkModeContext";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 100,
      easing: "ease-in-sine",
      offset: 200,
    });
  });
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section
      id="contact"
      className={`${
        darkMode ? "dark:bg-salte-900" : "light bg-black"
      } w-full lg:px-20 px-10 lg:py-20 py-10 h-fit flex flex-col justify-center items-center bg-center`}
      style={{ backgroundImage: `url(${contact1})` }}
    >
      <div className="lg:w-[80%] w-full grid lg-grid-cols-3 grid-cols-1 justify-center items-center gap-10">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col justify-center items-center gap gap-4 border-1-[10px] border-oranfe-500"
        >
          <div
            id="icon-box"
            className="p-5 rounded-full bg-black hover:bg-orange-500 text-white cursor-pointer transform hover-scale-105 transition duration-300 "
          >
            <FaMapLocationDot className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-xl text-black dark:text-white font-bold">
            REACH US
          </h1>
          <p className=" dark:text-white text-slate-800 justify-center items-center text-lg text-center">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            necessitatibus amet possimus veniam delectus atque facilis
          </p>
          <button className="background-transparent bg-orange-500 text-white hover:bg-black  font-bold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-full">
            GET IN TOUCH
          </button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col justify-center items-center gap gap-4 border-1-[10px] border-oranfe-500"
        >
          <div
            id="icon-box"
            className="p-5 rounded-full bg-black hover:bg-orange-500 text-white cursor-pointer transform hover-scale-105 transition duration-300 "
          >
            <MdEmail className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-xl text-black dark:text-white font-bold">
            EMAIL US
          </h1>
          <p className=" dark:text-white text-slate-800 justify-center items-center text-lg text-center">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, fugiat consectetur cumque asperiores tenetur ratione amet sit molestiae illo excepturi?
          </p>
          <button className="background-transparent bg-orange-500 text-white hover:bg-black  font-bold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-full">
          imadjohar4@gmail.com
          </button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col justify-center items-center gap gap-4 border-1-[10px] border-oranfe-500"
        >
          <div
            id="icon-box"
            className="p-5 rounded-full bg-black hover:bg-orange-500 text-white cursor-pointer transform hover-scale-105 transition duration-300 "
          >
            <FaPhoneAlt className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-xl text-black dark:text-white font-bold">
            CALL US
          </h1>
          <p className=" dark:text-white text-slate-800 justify-center items-center text-lg text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor officia enim soluta ex praesentium explicabo nemo distinctio omnis ipsam blanditiis!
            
          </p>
          <button className="background-transparent bg-orange-500 text-white hover:bg-black  font-bold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-full">
          +212 656629707
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
