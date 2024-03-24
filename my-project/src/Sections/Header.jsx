import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { useDarkMode } from "../DarkModeContext";
import { FaSearch } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { menuOpen, setMenuOpen } = useDarkMode();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const togglemenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const navItems = [
    { link: "Home", name: "home" },
    { link: "About", name: "about" },
    { link: "Pizza", name: "pizza" },
    { link: "Faq", name: "faq" },
    { link: "Services", name: "services" },
  ];
  return (
    <nav
      className={`${
        darkMode ? "dark bg-gray-800" : "light bg-black"
      } w-full flex justify-beetween items-center gap-1 lg:px-16 px-6 py-6 sticky top-0 z-50`}
    >
      <div id="logo">
        <h1 className="text-3xl font-bold text-white lg:text-5xl  ">
          Pizza <span className="italic text-orange-500"> Pies </span>
        </h1>
      </div>
      <ul className="lg:flex justify-center items-center gap-10 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 dark:hover:text-black "
            to={link}
            spy={true}
            smooth={true}
            offset={-100}
          ></Link>
        ))}
      </ul>

      <div
        id="header-icons"
        className="lg:flex hidden justify-center items-center gap-8 text-white "
      >
        <FaSearch className="w-[-22px] h-[22px] transform hover:scale-123 transition-transform duration-300 cursor-pointer" />
        <IoPerson className="w-[-22px] h-[22px] transform hover:scale-123 transition-transform duration-300 cursor-pointer" />
        <FaHandHoldingHeart className="w-[-22px] h-[22px] transform hover:scale-123 transition-transform duration-300 cursor-pointer" />
        <div className="relative">
          <FaShoppingCart className="w-[-22px] h-[22px] transform hover:scale-123 transition-transform duration-300 cursor-pointer" />
          <div className="bg-orange-500 dark:bg-white dark:text-black px-3 py-1 text-white rounded-full absolute -top-[28px] -right-[20px] text-sm">

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
