import  { useEffect } from "react";
import { pizza } from "../Components/export";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../DarkModeContext";

const BestSellers = () => {
  useEffect(() => {
    Aos.init({
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section
      className={`${
        darkMode ? "dark bg-black" : "light bg-black"
      } w-full lg:px-20 px-10 lg:py-20 py-10 h-fit flex flex-col justify-center items-center gap-14    `}
    >
      <h1
        data-aos="zoom-in"
        className="text-3xl font-bold text-center text-white"
      >
        Our Best Sellers
      </h1>
      <div
        data-aos="slide_up"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center items-center "
      >
        {pizza.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 flex flex-col justify-center items-center gap-4 rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt="pizza image"
              className="rounded-lg  transform transition-transform duration-300  hover:scale-105 cursor-pointer"
            />
            <h1 className="text-2xl font-bold text-black text-center ">
              {item.title}
            </h1>
            <h1 className="text-3xl font-bold text-orange-600 text-center">
              {item.price}
            </h1>
            <p className="text-lg text-slate-800 text-center dark:text-white">
              {item.para}
            </p>
            <button className="bg-orange-600 text-white px-8 py-2 rounded-full cursor-pointer border-2 font-semibold hover:bg-white hover:text-orange-600 dark:hover:bg-white dark:hover:text-black">
              ORDER NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
