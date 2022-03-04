import Booklist from "../Booklist";
import useFetch from "../Fetchers/useFetch";

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
