import React from "react";
import FooterNav from "./FooterNav";
import SocialLinks from "./SocialLinks";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="mt-40 py-20 lg:py-10 bg-black max-h-[500px] lg:max-h-[200px]">
      <div className="container max-w-6xl mx-auto flex lg:flex-row flex-col justify-between text-white text-center h-full">
        <FooterNav />
        <div className="w-full lg:w-1/3 flex flex-col justify-evenly">
          <SocialLinks />
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
