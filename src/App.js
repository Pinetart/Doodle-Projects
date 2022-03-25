import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import RecipeContextProvider from "./context/RecipeContext";
import RecipeForm from "./components/RecipeForm";

function App() {
  return (
    <div className="Container">
      <RecipeContextProvider>
        <Navbar />
        <RecipeList />
        <RecipeForm />
      </RecipeContextProvider>
    </div>
  );
}

export default App;
