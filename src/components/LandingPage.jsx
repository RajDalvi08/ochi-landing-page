import { motion } from 'framer-motion';
import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.5"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      {/* TEXT SECTION */}
      <div className="textstructure mt-32 md:mt-52 px-6 md:px-20">

        {/* Line 1 */}
        <div className="masker font-sans">
          <h1 className="leading-[12vw] md:leading-[6.5vw] tracking-tight text-[12vw] md:text-8xl uppercase font-bold">
            We Create
          </h1>
        </div>

        {/* Line 2 */}
        <div className="leading-[12vw] md:leading-[6.5vw] masker font-sans flex gap-3 items-center">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: "9vw" }} 
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="hidden md:block w-[9vw] h-[5vw] rounded-md relative top-[0.10vw] bg-cover bg-center"
            style={{ backgroundImage: 'url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")' }}
          />
          <h1 className="leading-none tracking-tight text-[12vw] md:text-8xl uppercase font-bold">
            Eye Opening
          </h1>
        </div>

        {/* Line 3 */}
        <div className="masker font-sans">
          <h1 className="leading-none tracking-tight text-[12vw] md:text-8xl uppercase font-bold">
            Presentations
          </h1>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t-[1px] border-zinc-800 mt-10 md:mt-20 flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-start md:items-center py-5 px-6 md:px-20">

        {/* Info Text */}
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-sm md:text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        {/* CTA */}
        <div className="start flex items-center gap-5">
          <div className="px-4 md:px-5 py-2 border-[1px] border-zinc-400 font-light text-sm md:text-md capitalize rounded-full uppercase">
            Start the project
          </div>

          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
