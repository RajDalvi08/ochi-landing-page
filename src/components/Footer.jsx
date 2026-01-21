import React from "react";

function Footer() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full min-h-screen bg-zinc-900 px-6 sm:px-20 py-20"
    >
      <div className="flex flex-col sm:flex-row gap-20">
        
        {/* LEFT */}
        <div className="w-full sm:w-1/2">
          <div className="heading">
            <h1 className="text-[14vw] sm:text-[6vw] uppercase leading-none sm:-mb-20 font-semibold">
              Eye-
            </h1>
            <h1 className="text-[14vw] sm:text-[6vw] uppercase leading-none sm:mt-20 font-semibold">
              Opening
            </h1>
          </div>

          <h1 className="text-[5vw] sm:text-[2vw] mt-10 font-semibold">
            Ochi
          </h1>
        </div>

        {/* RIGHT */}
        <div className="w-full sm:w-1/2 relative">
          <h1 className="text-[12vw] sm:text-[6vw] uppercase leading-none font-semibold">
            Presentations
          </h1>

          <div className="flex flex-col sm:flex-row gap-20 mt-10">
            
            {/* SOCIAL + LOCATION */}
            <div>
              <h1 className="mt-5">S:</h1>
              {["Instagram", "Behance", "Facebook", "LinkedIn"].map((item) => (
                <h1
                  key={item}
                  className="underline decoration-2 decoration-white hover:decoration-black cursor-pointer"
                >
                  {item}
                </h1>
              ))}

              <h1 className="mt-5">L:</h1>
              <h1 className="underline decoration-2 decoration-white">202-1965 W 4th Ave</h1>
              <h1 className="underline decoration-2 decoration-white">Vancouver, Canada</h1>
              <h1 className="underline decoration-2 decoration-white">30 Chukarina St</h1>
              <h1 className="underline decoration-2 decoration-white">Lviv, Ukraine</h1>

              <h1 className="mt-5">E:</h1>
              <h1 className="underline decoration-2 decoration-white cursor-pointer">
                hello@ochi.design
              </h1>
            </div>

            {/* MENU */}
            <div>
              <h1 className="mt-5">M:</h1>
              {["Home", "Services", "Our Work", "About Us", "Insights", "Contact Us"].map(
                (item) => (
                  <h1
                    key={item}
                    className="underline decoration-2 decoration-white hover:decoration-black cursor-pointer"
                  >
                    {item}
                  </h1>
                )
              )}
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-80 mt-20">
            <h1 className="text-[3vw] sm:text-[1vw] text-gray-300">
              © ochi design 2026. Legal Terms
            </h1>
            <h1 className="text-[3vw] sm:text-[1vw] text-gray-300">
              Website by Obys
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
