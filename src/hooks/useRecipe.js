import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

export const useRecipe = () => {
  const context = useContext(RecipeContext);

  if (!context) {
    throw new Error("Recipe context is out of scope (useRecipe())");
  }
  return context;
};
