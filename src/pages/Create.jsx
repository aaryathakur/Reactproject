import React from "react";
import { useForm } from "react-hook-form";

const Create = () => {
  const { register, handleSubmit } = useForm();
  return (
    <form>
      <input 
      
      className="block border-b outline-0 p-2 "
      {...register("image")} 
      type="file" 
      placeholder="Recipe Title" />

      <small className="text-red-300">Image should be 400x400</small>

      <input 
      className="block border-b outline-0 p-2 "
      {...register("title")} 
      type="text" 
      placeholder="Recipe Title" />
    </form>
  );
};

export default Create;
