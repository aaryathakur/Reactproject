import React, { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import Recipecard from "../components/Recipecard";

const Recipies = () => {
  const { data } = useContext(recipeContext);

  const renderRecipies = data.map((recipe) => (
    <Recipecard key={recipe.id} recipe={recipe} />
  ));
  return <div>{renderRecipies}</div>;
};

export default Recipies;
