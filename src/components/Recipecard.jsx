import React from "react";
import { Link } from "react-router-dom";

const Recipecard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link to={`/recipe/detail/${id}`} className="block w-[20vw] rounded overflow-hidden shadow ">
      <img className="w-full h-[23vh] object-cover" src={image} alt="" />
      <h1 className="mt-2 px-2 font-black">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2 pb-3">
        {desc.slice(0, 100)}... <small className="text-blue-300">more</small>
      </p>
    </Link>
  );
};

export default Recipecard;
