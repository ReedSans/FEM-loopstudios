import React from "react";

const OurLeader = () => {
  return (
    <section className="">
      <div className="hero-section relative">
        <div>
          <img src="../images/desktop/image-interactive.jpg" alt="" />
        </div>
        <div className="max-w-full lg:max-w-lg h-[280px] bg-white lg:absolute bottom-0 right-0 flex justify-end items-end">
          <div className="mx-auto lg:mx-0 w-full md:w-4/5 text-center lg:text-left h-3/4">
            <h2 className="text-2xl md:text-[40px] leading-[1.1] font-slim uppercase tracking-wider mb-6">
              The leader in interactive VR
            </h2>
            <p className="text-sm md:text-lg lg:text-sm text-darker max-w-full md:max-w-[70%] lg:max-w-full mx-auto lg:mx-0 lg:w-full px-2 m:px-0">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLeader;
