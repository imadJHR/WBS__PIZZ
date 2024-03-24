import { useEffect } from "react";
import banner4 from "../assets/images/banner4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init(
      {
        duration: 800,
        offset: 200,
        easing: "ease",
        delay: 100,
      },
      []
    );
  });
  return (
    <>
      <section
        id="hero"
        className="w-full lg:px-20 px-20 lg:py-20 py-10 h-[600px] bg-cover bg-center flex flex-col justify-center gap-8 "
        style={{ backgroundImage: `url(${banner4})` }}
      >
        <h1 data-aos="zoom-in" className="text-6xl text-white font-bold">
          Life is a combination <br /> of Pizza & Magic
        </h1>
        <p data-aos="zoom-in" className="text-white text-xl font-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis
          amet <br /> labore officiis, cum voluptatibus inventore quibusdam?
          Corporis, <br />
          labore fugiat. Quisquam quas unde officiis molestiae voluptatem
          voluptas <br />
          iste sapiente dicta.
        </p>
        <div className="flex justify-center items-center">
          <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black">
            ORDER NOW
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
