import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Hello from "../assets/helloDiff.png"

export const Home = () => {
  return (
    <div name="home" className=" w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">


        <div className="absolute w-[500px] insert-y left-[800px] image-div">
          <img src={Hello} alt="Hello :)" />
        </div>

        {/* <p className="text-green-300">Welcome to fluent</p> */}
        <h1 className="text-4xl sm:text7xl font-bold text-black-600">
          Learn on your own !
        </h1>
        <p className="text-black-200 py-4 max-w-[700px] text-start">
          Welcome to the best website for learning new languages by your own<br></br>
          Become fluent rapidly !
        </p>
        <div>
          <button className="text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600">
            <Link to="about" smooth={true} duration={800}>
              Get started !
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <Link to="about" smooth={true} duration={800}>
                <HiArrowNarrowRight className="ml-3" />
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
