import { useState } from "react";
import useFetch from "../../Hooks/useFetch";

const filterList = ["all", "open", "pending", "solved", "closed"];

export default function FormFilter({ changeFilter }) {
  const { data, error, isLoading } = useFetch("http://localhost:8000/books");
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter);
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by: </p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
