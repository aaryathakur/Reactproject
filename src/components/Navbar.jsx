import React from "react";
import { NavLink } from "react-router-dom";
import Mainroutes from "../routes/Mainroutes";
import NAvbar from "./NAvbar";

const Navbar = () => {

  const linkClass = ({ isActive }) =>
    isActive ? "text-red-300" : "";

  const buttonClass = ({ isActive }) =>
    `px-4 py-2 rounded  ${
      isActive ? "bg-red-300" : "bg-gray-900"
    }`;

  return (
    <div className="flex items-center justify-center gap-x-10 text-sm mb-10">
      
      <NavLink to="/" className={linkClass}>Home</NavLink>
      <NavLink to="/About" className={linkClass}>About</NavLink>
      <NavLink to="/Recipies" className={linkClass}>Recipies</NavLink>

      <NavLink to="/create-recipe" className={buttonClass}>
        Create Recipe
      </NavLink>

    </div>
  );
};
export default Navbar;
