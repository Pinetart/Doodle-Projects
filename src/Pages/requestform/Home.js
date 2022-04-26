import { useState } from "react";
import Booklist from "../../Components/Booklist";
import useFetch from "../../Hooks/useFetch";
import FormFilter from "./FormFilter";

const Home = () => {
  const { data, error, isLoading } = useFetch("http://localhost:8000/books");

  const [filter, setFilter] = useState("All Requests");

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const books = data
    ? data.filter((book) => {
        switch (filter) {
          case "all":
            return true;
          case "open":
            return book.category === filter;
          case "pending":
            return book.category === filter;
          case "solved":
            return book.category === filter;
          case "closed":
            return book.category === filter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2>All Requests</h2>
      {isLoading && <div style={{ marginTop: "10px" }}>Please Wait...</div>}
      {error && <div style={{ marginTop: "10px" }}>{error}</div>}
      {data && <FormFilter changeFilter={changeFilter} />}
      {books && <Booklist books={books} />}
    </div>
  );
};

export default Home;
