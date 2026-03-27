import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipeContext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => recipe.id == params.id);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe.title,
      chef : recipe.chefName,
      desc : recipe.desc,
      image : recipe.image, 
      ingr : recipe.ingr,
      inst : recipe.inst,
      category : recipe.category,
    },
  });

  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setData(copydata);
    toast.success("Recipe updated successfully");
  };

  const DeleteHandler = () => {
    const filteredData = data.filter((recipe) => recipe.id !== params.id);
    setData(filteredData);
    toast.success("Recipe deleted successfully");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img className="h-20vh" src={recipe.image} alt="" />
      </div>

      <form className="w-1/2 p-2" onSubmit={handleSubmit(SubmitHandler)}>
        <input
          className="block border-b outline-none p-2 bg-transparent"
          {...register("image")}
          type="url"
          placeholder="enter image url"
        />
        <small className="text-sm text-red-400">
          This is how error is shown
        </small>

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

        <button className="mt-5 block bg-blue-800 px-4 py-2 rounded">
          Update recipe
        </button>
        <button
          onClick={DeleteHandler}
          className="mt-5 block bg-red-800 px-4 py-2 rounded"
        >
          Delete recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
