import Booklist from "../Components/Booklist";
import useFetch from "../Hooks/useFetch";

const Home = () => {
  const {
    data: books,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/books");
  return (
    <div>
      {isLoading && <div>Please Wait...</div>}
      {error && <div>{error}</div>}
      {books && <Booklist books={books} title="All Books" />}
    </div>
  );
};

export default Home;
