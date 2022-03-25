import React, { useContext } from "react";
import { useRecipe } from "../hooks/useRecipe";
// import { RecipeContext } from "../context/RecipeContext";

const Recipe = ({ recipe }) => {
  const { removeRecipe } = useRecipe();
  // const { dispatch } = useContext(RecipeContext);
  return (
    // <li onClick={() => dispatch({ type: "REMOVE_RECIPE", id: recipe.id })}>
    <li
      onClick={() => {
        removeRecipe(recipe.id);
      }}
    >
      <div className="title">{recipe.title}</div>
      <div className="author">{recipe.author}</div>
      <div className="description">{recipe.description}</div>
    </li>
  );
};

export default Recipe;
