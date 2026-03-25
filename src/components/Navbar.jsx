import React from "react";
import { NavLink } from "react-router-dom";
import Mainroutes from "../routes/Mainroutes";
import NAvbar from "./NAvbar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 text-sm mb-10">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-red-300" : "text-white")}
      >
        Home
      </NavLink>

      <NavLink
        to="/About"
        className={({ isActive }) => (isActive ? "text-red-300" : "text-white")}
      >
        About
      </NavLink>

      <NavLink
        to="/Recipies"
        className={({ isActive }) => (isActive ? "text-red-300" : "text-white")}
      >
        Recipies
      </NavLink>

      <NavLink
      className= {'px-4 py-2  bg-gray-900 rounded ${(e) => (e.isActive ? "bg-red-300" : "")}'}
        to="/create-recipes">
        Create Recipes
      </NavLink>
    </div>
  );
};

export default Navbar;
