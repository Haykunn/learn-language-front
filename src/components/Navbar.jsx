import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { HiOutlineMail} from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from '../assets/fluentoo.png';
import { Link } from "react-scroll";
// import HayderCV from "../assets/cvHayder.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed flex justify-between w-full h-[80px] items-center px-4 text-black-600 z-10">

        {/* Website logo */}
        <div>
                <img src={logo} alt="logo img" style={{width: "200px"}}/>
        </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-green-600">
        <a href="/">Home</a>
        </li>
        <li className="hover:text-green-600">
            About us
        </li>
        <li className="hover:text-green-600">
            <a href="/signin">Sign in</a>
        </li>
        <li className="hover:text-green-600">
            <a href="/signup">Sign up</a>
        </li>
        <li className="hover:text-green-600">
            Contact
        </li>
      </ul>

      {/* Hamburgerr*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={800}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={800}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={800}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={800}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={800}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};


export default Navbar;
