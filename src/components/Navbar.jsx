import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-black text-green-500 flex justify-between items-center shadow-lg">
      <div className="space-x-6">
        <NavLink
          to="/"
          className="hover:text-green-400 text-xl font-mono font-bold transition duration-300"
          activeClassName="text-green-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-green-400 text-xl font-mono font-bold transition duration-300"
          activeClassName="text-green-300"
        >
          About Me
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
