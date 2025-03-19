import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <div className=" w-full lg:w-1/3 mb-12 lg:mb-0 lg:mt-5">
      <nav className="flex flex-col justify-between">
        <Link to='/' className="self-center lg:self-start">
          <img src="../images/logo.svg" alt="" />
        </Link>
        <ul className="mt-8 self-center lg:self-start flex flex-col lg:flex-row justify-between">
          <li className="my-3 lg:mr-12">
            <Link to='/' className="link-styling">About</Link>
          </li>
          <li className="my-3 lg:mr-12">
            <Link to='/careers' className="link-styling">Careers</Link>
          </li>
          <li className="my-3 lg:mr-12">
            <Link to='/events' className="link-styling">Events</Link>
          </li>
          <li className="my-3 lg:mr-12">
            <Link to='/products' className="link-styling">Products</Link>
          </li>
          <li className="my-3 lg:mr-12">
            <Link to='/support' className="link-styling">Support</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FooterNav;
