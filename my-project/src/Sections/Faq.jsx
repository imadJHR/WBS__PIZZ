import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import faqimg1 from "../assets/images/faq1.jpg";
import faqimg2 from "../assets/images/faq2.jpg";
import faqimg3 from "../assets/images/faq3.jpg";
import faqimg4 from "../assets/images/faq4.jpg";
import { Accordion } from "flowbite-react";
import { useDarkMode } from "../DarkModeContext";

const Faq = () => {
  useEffect(() => {
    Aos.init({
      delay: 100,
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section
      id="faq"
      className={` ${
        darkMode ? "dark bg-black" : "light bg-white"
      } w-full lg:px-20 px-10 lg:py-20 py-10 grid lg:grid-cols-2  grid-cols-1  justify-center items-start gap-14 `}
    >
      <div
        id="left"
        className="flex flex-col justify-center items-center gap-12"
      >
        <h1
          data-aos="zoom-in"
          className="text-6xl font-bold text-center text-black dark:text-white dark:bg-black "
        >
          Frequently Asked Questions
        </h1>
        <div data-aos="slide_up" className="w-full">
          <Accordion className="flex flex-col justify-center items-center gap-2">
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">
                What are your open hours?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  cumque aliquid molestiae maxime adipisci officiis atque,
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">
                What are your open hours?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  cumque aliquid molestiae maxime adipisci officiis atque,
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">
                What are your open hours?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  cumque aliquid molestiae maxime adipisci officiis atque,
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">
                What are your open hours?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  cumque aliquid molestiae maxime adipisci officiis atque,
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">
                What are your open hours?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  cumque aliquid molestiae maxime adipisci officiis atque,
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <button data-aos="slide_up" className="bg-orange-600 text-white px-8 py-2 rounded-full cursor-pointer border-2 font-semibold hover:bg-white hover:text-orange-600 dark:hover:bg-white dark:hover:text-black">
            CONTACT US
        </button>
      </div>
      <div id="image-box" className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4 ">
            <img data-aos="zoom-in" src={faqimg1} className="w-[400px] h-[400px] rounded-lg" />
            <img data-aos="zoom-in" src={faqimg2} className="w-[400px] h-[400px] rounded-lg" />
            <img data-aos="zoom-in" src={faqimg3} className="w-[400px] h-[400px] rounded-lg" />
            <img data-aos="zoom-in" src={faqimg4} className="w-[400px] h-[400px] rounded-lg" />
      </div>
    </section>
  );
};

export default Faq;
