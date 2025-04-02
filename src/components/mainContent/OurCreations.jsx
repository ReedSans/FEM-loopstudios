import React from "react";
import CreationsCard from "./CreationsCard";
import NightArcade from "../../../public/images/desktop/image-night-arcade.jpg"
import SoccerTeamVr from "../../../public/images/desktop/image-soccer-team.jpg"
import TheGrid from "../../../public/images/desktop/image-grid.jpg"
import FromUpAbove from "../../../public/images/desktop/image-from-above.jpg"
import PocketBorealis from "../../../public/images/desktop/image-pocket-borealis.jpg"
import TheCuriosity from "../../../public/images/desktop/image-curiosity.jpg"
import FishEye from "../../../public/images/desktop/image-fisheye.jpg"
import DeepEarth from "../../../public/images/desktop/image-deep-earth.jpg"

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
        <CreationsCard imgUrl={DeepEarth} altText="Deep Earth" cardText="DEEP EARTH" />
        <CreationsCard imgUrl={NightArcade} altText="Night Arcade" cardText="NIGHT ARCADE" />
        <CreationsCard imgUrl={SoccerTeamVr} altText="Soccer Team Vr" cardText="SOCCER TEAM VR" />
        <CreationsCard imgUrl={TheGrid} altText="The Grid" cardText={`THE GRID`} />
        <CreationsCard imgUrl={FromUpAbove} altText="From Up Above Vr" cardText="NIGHT ARCADE" />
        <CreationsCard imgUrl={PocketBorealis} altText="Pocket Borealis" cardText="POCKET BOREALIS" />
        <CreationsCard imgUrl={TheCuriosity} altText="The Curiosity" cardText="THE CURIOSITY" />
        <CreationsCard imgUrl={FishEye} altText="Make It Fisheye" cardText="MAKE IT FISHEYE" />
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
