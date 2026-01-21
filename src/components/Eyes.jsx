import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
      setRotate(angle - 180);
    };

    // mouse works only on desktop
    if (window.innerWidth >= 640) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background */}
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className='w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'
      ></div>

      {/* Eyes */}
      <div
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          flex gap-6 sm:gap-10
        "
      >
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="
              flex items-center justify-center
              w-[28vw] h-[28vw]
              sm:w-[15vw] sm:h-[15vw]
              rounded-full bg-zinc-100
            "
          >
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-1%, -1%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 
                           -translate-x-1/2 -translate-y-1/2 
                           w-full h-10"
              >
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eyes;
