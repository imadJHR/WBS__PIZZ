import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import about1 from "../assets/images/about1.jpg";
import { useDarkMode } from "../DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 200,
      easing: "ease",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <section
        id="about"
        className={`${
          darkMode ? "dark bg-black" : "light bg-white"
        } w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10`}
      >
        <div
          data-aos="zoom-in"
          data-aos-delay="250"
          className="border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer"
        >
          <img
            src={icon1}
            className="w-20 h-20 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black text-center font-lg">About Us</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="250"
          className="border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer"
        >
          <img
            src={icon2}
            className="w-20 h-20 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black text-center font-lg">ORGANIC</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="250"
          className="border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer"
        >
          <img
            src={icon3}
            className="w-20 h-20 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black text-center font-lg">PIZZA</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="250"
          className="border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer"
        >
          <img
            src={icon4}
            className="w-20 h-20 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black text-center font-lg">PASTA</h1>
        </div>
      </section>
      <section
        className={`${
          darkMode ? "dark bg-black" : "light bg-white"
        } w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
      >
        <div>
          <img
            data-aos="zoom-in"
            src={about1}
            className="lg:w-[800px] lg:h-[600px] rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1
            data-aos="zoom-in"
            className="text-2xl  font-semibold text-black dark:text-white text-center"
          >
            WELCOME TO
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-5xl  font-semibold text-black dark:text-white text-center"
          >
            PIZZA Pies
          </h1>
          <p
            data-aos="zoom-in"
            className=" text-xl text-slate-800 dark:text-slate-100 text-center"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            tempore animi assumenda! Illo sed at eligendi tempore, voluptatum
            nemo voluptas pariatur quos, repudiandae atque accusamus veritatis.
          </p>
          <button
            data-aos="flip-up"
            className="bg-orange-500 text-lg text-white font-semibold py-2 px-8 rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black dark:hover:bg-white dark:hover:text-black"
          >
            ORDER NOW
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
