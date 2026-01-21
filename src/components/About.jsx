import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function About() {
  return (
    <div className="w-full bg-yellow-200 text-black rounded-tl-3xl rounded-tr-3xl px-[6vw] py-[8vw]">
      {/* Heading */}
      <h1 className="font-serif text-[6vw] sm:text-[3vw] leading-[6vw] sm:leading-[3vw] max-w-[90%] tracking-tight">
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </h1>

      {/* Content Section */}
      <div className="flex flex-col sm:flex-row gap-10 w-full border-t-[1px] bg-yellow-200 mt-10 sm:mt-20 pt-10">
        
        {/* Left Side */}
        <div className="w-full sm:w-1/2">
          <h1 className="text-5xl sm:text-7xl">Our approach:</h1>
          <button className="flex uppercase gap-5 sm:gap-10 items-center px-6 sm:px-10 py-4 sm:py-6 bg-zinc-900 rounded-full text-white mt-6 sm:mt-10">
            Read More
            <div className="w-1 h-1 bg-zinc-100 rounded-full hover:h-8 w-8 "></div>
            
          </button>
        </div>

        {/* Right Side */}
        
        <img className="w-full sm:w-1/2 h-60 sm:h-[70vh] rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        
      </div>
    </div>
  );
}

export default About;
