import React from "react";

const OurCreations = () => {
  return (
    <section className="mt-56 lg:mt-40">
      <div className="flex flex-col items-center lg:flex-row justify-between ">
        <h2 className="text-4xl font-slim tracking-wide">OUR CREATIONS</h2>
        <button className="hidden lg:inline-block px-8 py-2 tracking-widest bg-white hover:bg-black border-2 border-black hover:border-white text-black hover:text-white transition-all duration-300 ease-in-out">
          SEE ALL
        </button>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between mt-12 lg:mt-20 gap-y-6 gap-x-1 mx-auto">
        <div className="relative hover:opacity-40  w-full lg:basis-1/5 lg:w-1/5 hover:text-black text-white">
          <img
            src="../images/desktop/image-night-arcade.jpg"
            alt="Deep earth"
            className="w-full h-[220px] lg:h-full object-cover object-right-top lg:object-top"
          />
          <span className="text-inherit absolute bottom-5 left-8 text-4xl  w-2/3 font-slim">
            SOCCER <br />
            TEAM VR
          </span>
        </div>
        <div className="relative hover:opacity-40  w-full lg:basis-1/5 lg:w-1/5 hover:text-black text-white">
          <img
            src="../images/desktop/image-soccer-team.jpg"
            alt="Deep earth"
            className="w-full h-[220px] lg:h-full object-cover object-right-top lg:object-top"
          />
          <span className="text-inherit absolute bottom-5 left-8 text-4xl  w-2/3 font-slim">
            THE <br />
            GRID
          </span>
        </div>
        <div className="relative hover:opacity-40  w-full lg:basis-1/5 lg:w-1/5 hover:text-black text-white">
          <img
            src="../images/desktop/image-grid.jpg"
            alt="Deep earth"
            className="w-full h-[220px] lg:h-full object-cover object-right-top lg:object-top"
          />
          <span className="text-inherit absolute bottom-5 left-8 text-4xl  w-2/3 font-slim">
            FROM UP <br />
            ABOVE VR
          </span>
        </div>
        <div className="relative hover:opacity-40  w-full lg:basis-1/5 lg:w-1/5 hover:text-black text-white">
          <img
            src="../images/desktop/image-from-above.jpg"
            alt="Deep earth"
            className="w-full h-[220px] lg:h-full object-cover object-right-top lg:object-top"
          />
          <span className="text-inherit absolute bottom-5 left-8 text-4xl  w-2/3 font-slim">
            POCKET BOREALIS
          </span>
        </div>
        <div className="relative hover:opacity-40  w-full lg:basis-1/5 lg:w-1/5 hover:text-black text-white">
          <img
            src="../images/desktop/image-pocket-borealis.jpg"
            alt="Deep earth"
            className="w-full h-[220px] lg:h-full object-cover object-right-top lg:object-top"
          />
          <span className="text-inherit absolute bottom-5 left-8 text-4xl  w-2/3 font-slim">
            THE <br />
            CURIOSITY
          </span>
        </div>
        <div className="relative hover:opacity-40  w-full lg:basis-1/5 lg:w-1/5 hover:text-black text-white">
          <img
            src="../images/desktop/image-curiosity.jpg"
            alt="Deep earth"
            className="w-full h-[220px] lg:h-full object-cover object-right-top lg:object-top"
          />
          <span className="text-inherit absolute bottom-5 left-8 text-4xl  w-2/3 font-slim">
            MAKE IT <br />
            FISHEYE
          </span>
        </div>
        <div className="relative hover:opacity-40  w-full lg:basis-1/5 lg:w-1/5 hover:text-black text-white">
          <img
            src="../images/desktop/image-fisheye.jpg"
            alt="Deep earth"
            className="w-full h-[220px] lg:h-full object-cover object-right-top lg:object-top"
          />
          <span className="text-inherit absolute bottom-5 left-8 text-4xl  w-2/3 font-slim">
            DEEP <br />
            EARTH
          </span>
        </div>
        <div className="relative hover:opacity-40  w-full lg:basis-1/5 lg:w-1/5 hover:text-black text-white m-0 p-0">
          <img
            src="../images/desktop/image-deep-earth.jpg"
            alt="Deep earth"
            className="w-full h-[220px] lg:h-full object-cover object-right-top lg:object-top"
          />
          <span className="text-inherit absolute bottom-5 left-8 text-4xl  w-2/3 font-slim">
            NIGHT <br /> ARCADE
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="lg:hidden mt-12 bg-white hover:bg-black border-2 border-black hover:border-white text-black hover:text-white px-8 py-2 tracking-widest transition-all duration-300 ease-in-out">
          SEE ALL
        </button>
      </div>
    </section>
  );
};

export default OurCreations;
