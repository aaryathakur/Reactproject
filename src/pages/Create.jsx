import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { useContext } from "react";
import { createContext, useState } from "react";

const Create = () => {
  const { data, setData } = useContext(recipeContext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      
      <input
        className="block border-b outline-none p-2 bg-transparent"
        {...register("image")}
        type="url"
        placeholder="enter image url"
      />

      <input
        className="block border-b outline-none p-2 bg-transparent"
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />

      <input
        className="block border-b outline-none p-2 bg-transparent"
        {...register("chefName")}
        type="text"
        placeholder="Chef name"
      />

      <textarea
        className="block border-b outline-none p-2 bg-transparent"
        {...register("desc")}
        placeholder="description"
      ></textarea>

      <textarea
        className="block border-b outline-none p-2 bg-transparent"
        {...register("ingr")}
        placeholder="ingredients (comma separated)"
      ></textarea>

      <textarea
        className="block border-b outline-none p-2 bg-transparent"
        {...register("inst")}
        placeholder="instructions"
      ></textarea>

      <select
        className="block border-b outline-none p-2 bg-transparent"
        {...register("category")}
      >
        <option value="breakfast ">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      <button className="mt-5 block bg-gray-800 px-4 py-2 rounded">
        Save recipe
      </button>
    </form>
  );
};

export default Create;