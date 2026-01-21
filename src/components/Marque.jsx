import React from "react";
import { motion } from "framer-motion";

function Marque() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full py-6 sm:py-10 rounded-tl-3xl rounded-tr-3xl bg-green-900 overflow-hidden"
    >
      <div className="border-t-2 border-b-2 border-zinc-300">
        <motion.div
          className="flex w-max whitespace-nowrap uppercase"
          initial={{ x: "0%" }}
          animate={{ x: "-60%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 10,
          }}
        >
          {/* FIRST SET */}
          <div className="flex">
            <h1 className="text-[18vw] sm:text-[15vw] leading-none font-bold py-6 sm:py-10 pr-10 sm:pr-20">
              We are ochi
            </h1>
            <h1 className="text-[18vw] sm:text-[15vw] leading-none font-bold py-6 sm:py-10 pr-10 sm:pr-20">
              We are ochi
            </h1>
            <h1 className="text-[18vw] sm:text-[15vw] leading-none font-bold py-6 sm:py-10 pr-10 sm:pr-20">
              We are ochi
            </h1>
          </div>

          {/* DUPLICATE SET */}
          <div className="flex">
            <h1 className="text-[18vw] sm:text-[15vw] leading-none font-bold py-6 sm:py-10 pr-10 sm:pr-20">
              We are ochi
            </h1>
            <h1 className="text-[18vw] sm:text-[15vw] leading-none font-bold py-6 sm:py-10 pr-10 sm:pr-20">
              We are ochi
            </h1>
            <h1 className="text-[18vw] sm:text-[15vw] leading-none font-bold py-6 sm:py-10 pr-10 sm:pr-20">
              We are ochi
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Marque;
