import React, { useContext, useState } from "react";
import { useRecipe } from "../hooks/useRecipe";
// import { RecipeContext } from "../context/RecipeContext";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  //   const { dispatch } = useContext(RecipeContext);
  const { addRecipe } = useRecipe();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch({ type: "ADD_RECIPE", recipe: { title, author, description } });
    addRecipe(title, author, description);
    setTitle("");
    setAuthor("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Book Title:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="author">Author:</label>
      <input
        id="author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        value={description}
        id="description"
        rows="4"
        cols="50"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
