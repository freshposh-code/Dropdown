import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-black">
      <div className=" flex justify-around">
        <div className="z-50 px-2 md:w-auto w-full flex justify-between items-center sm:py-0 py-4">
          <p className="font-semibold text-4xl text-white">LOGO</p>
          <div
            className="text-3xl md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center uppercase gap-8 font-serif text-white">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Kid's
            </Link>
          </li>
        </ul>
        {/* Mobile View */}

        <ul
          className={`md:hidden absolute top-0 w-full  py-32 pl-4 duration-300 text-white bg-black ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Kid's
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
