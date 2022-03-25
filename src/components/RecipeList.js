import React, { useContext } from "react";
import Recipe from "./Recipe";
// import { useRecipe } from "../hooks/useRecipe";
import { RecipeContext } from "../context/RecipeContext";

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);
  // const { recipes } = useRecipe();

  return recipes.length > 0 ? (
    <div className="recipe-list">
      <ul>
        {recipes.map((recipe) => {
          return <Recipe recipe={recipe} key={recipe.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Recipes to display.</div>
  );
};

export default RecipeList;
