import React, { useState, useEffect } from "react";
import { header } from "../data";

// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  //destructure header
  const { logo, btnLoginText, btnSignupText } = header;

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
      } fixed z-30 right-0 left-0 flex max-w-[1440px] mx-auto justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      <a href="/">
        <img src={logo} alt="logo" className="h-[30px]" />
      </a>
      <Nav />

      <div className="hidden lg:flex space-x-4">
        <button className="btn btn-sm text-white hover:text-primary-200 transition">
          {btnLoginText}
        </button>
        <button className="btn btn-sm btn-primary">{btnSignupText}</button>
      </div>

      <div
        className="lg:hidden absolute right-4 top-0"
        onClick={() => setNavMobile(!navMobile)}
      >
        {navMobile ? (
          <RiCloseFill className="text-primary-200 text-3xl" />
        ) : (
          <RiMenu4Fill className="text-primary-200 text-3xl" />
        )}
      </div>

      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;
