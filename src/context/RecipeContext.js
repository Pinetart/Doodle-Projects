import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

export const RecipeContext = createContext();

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [
        ...state,
        {
          title: action.recipe.title,
          author: action.recipe.author,
          description: action.recipe.description,
          id: uuid(),
        },
      ];
    case "REMOVE_RECIPE":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

const RecipeContextProvider = ({ children }) => {
  const [recipes, dispatch] = useReducer(recipeReducer, []);

  // const addRecipe = (title, author, description) => {
  //   dispatch({
  //     type: "ADD_RECIPE",
  //     payload: {
  //       title,
  //       author,
  //       description,
  //       id: uuid(),
  //     },
  //   });
  // };

  // const removeRecipe = (id) => {
  //   dispatch({
  //     type: "REMOVE_RECIPE",
  //     payload: id,
  //   });
  // };

  return (
    // <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe }}>
    <RecipeContext.Provider value={{ recipes, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
