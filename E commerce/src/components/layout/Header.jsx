import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex lg:flex-row flex-row py-4 lg:px-16 px-1 items-center lg:justify-normal justify-around lg:gap-12 gap-1 text-gray-500">
      <NavLink
        exact
        to="/"
        className="font-medium rounded-lg lg:text-sm text-[10px] lg:px-8 px-2 py-2.5 me-2 mb-2 focus:outline-none bg-[#BE0CE7] text-white"
        activeclassName="text-white"
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        className="font-medium rounded-lg lg:text-sm text-[10px] lg:px-8 px-2 py-2.5 me-2 mb-2 focus:outline-none  text-gray-700"
        activeclassName="text-white"
      >
        Shop
      </NavLink>
      <NavLink
        to="/subscribe"
        className="font-medium rounded-lg lg:text-sm text-[10px] lg:px-8 px-2 py-2.5 me-2 mb-2 focus:outline-none text-gray-700"
        activeclassName="text-white"
      >
        Subscribe
      </NavLink>
      <NavLink
        to="/account"
        className="font-medium rounded-lg lg:text-sm text-[10px] lg:px-8 px-2 py-2.5 me-2 mb-2 focus:outline-none text-gray-700"
        activeclassName="text-white"
      >
        Account
      </NavLink>
    </div>
  );
};

export default Header;
