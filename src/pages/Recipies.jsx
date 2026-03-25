import React, { useContext } from 'react'
import { recipeContext } from "../context/RecipeContext";

const Recipies = () => {
  const {data} = useContext(recipeContext);

  const renderRecipies = data.map((recipe) =>(
    <div key={recipe.id}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  ));
  return (
    <div>
      {renderRecipies}
    </div>
  )
}

export default Recipies
