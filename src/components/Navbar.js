import React from "react";
import { useRecipe } from "../hooks/useRecipe";

const Navbar = () => {
  const { recipes } = useRecipe();
  return (
    <div className="navbar">
      <h1>Recipe Book</h1>
      <p>Currently there are {recipes.length} recipes stored</p>
    </div>
  );
};

export default Navbar;
