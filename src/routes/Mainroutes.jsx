import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipies from "../pages/Recipies";
import Create from "../pages/Create";
import SingleRecipe from "../pages/SingleRecipe";



const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipies" element={<Recipies />} />
      <Route path="/recipes/details/:id" element={<SingleRecipe />} />
      <Route path="/create-recipe" element={<Create />} />
      <Route path="/about" element={<About />} />
      
    </Routes>
  );
};
export default Mainroutes;
