import { motion } from "framer-motion"
import React, { useState } from "react"

function Featured() {
  const [hovered, setHovered] = useState(false)

  return (
    <div  data-scroll
      data-scroll-section
      data-scroll-speed="-.1" className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-8xl font-serif tracking-tight">
          Featured projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">

          {/* CARD 1 */}
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="cardcontainer  relative w-1/2 h-[75vh]"
          >
            <div className="card relative w-full h-full rounded-xl ">

              <h1 className="absolute flex text-yellow-200 
                left-full -translate-x-1/2 
                top-1/2 -translate-y-1/2
                z-[9] text-8xl font-sans 
                leading-none tracking-tighter overflow-hidden font-bold">

                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={{ y: hovered ? "0%" : "100%" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 0.2,
                      delay: index * 0.08,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt=""
              />
            </div>
          </div>

          {/* CARD 2 (static for now) */}
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <div className="card relative w-full h-full rounded-xl ">
        
              
              
              
              
              
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
                alt=""
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Featured
