import React from "react";

function Cards() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="
        w-full min-h-screen bg-zinc-800
        flex flex-col sm:flex-row
        gap-5 items-center
        px-6 sm:px-32 py-20
      "
    >
      {/* LEFT BIG CARD */}
      <div className="cardcontainer h-[40vh] sm:h-[50vh] w-full sm:w-1/2">
        <div className="card relative w-full h-full bg-gray-950 rounded-xl flex items-center justify-center">
          <img
            className="w-24 sm:w-32"
            src="https://ochi.app/wp-content/uploads/2019/05/OCHI_logo-624x200.png"
            alt=""
          />
          <button className="absolute px-4 py-1 sm:px-5 border-2 rounded-full left-5 sm:left-10 bottom-5 sm:bottom-10 text-sm">
            ©2019
          </button>
        </div>
      </div>

      {/* RIGHT TWO CARDS */}
      <div className="cardcontainer w-full sm:w-1/2 h-[40vh] sm:h-[50vh] flex gap-5">
        
        <div className="card relative rounded-xl w-1/2 h-full bg-green-900 flex items-center justify-center">
          <img
            className="w-24 sm:w-32"
            src="https://delante.co/wp-content/themes/delante/assets/images/clutch-logo.svg"
            alt=""
          />
          <button className="absolute px-4 py-1 sm:px-5 border-2 rounded-full left-5 sm:left-10 bottom-5 sm:bottom-10 text-sm">
            RATING 5.0 ON CLUTCH
          </button>
        </div>

        <div className="card relative rounded-xl w-1/2 h-full bg-gray-900 flex items-center justify-center">
          <img
            className="w-24 sm:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-4 py-1 sm:px-5 border-2 rounded-full left-5 sm:left-10 bottom-5 sm:bottom-10 text-sm">
            BUSINESS BOOTCAMP ALUMINI
          </button>
        </div>

      </div>
    </div>
  );
}

export default Cards;
