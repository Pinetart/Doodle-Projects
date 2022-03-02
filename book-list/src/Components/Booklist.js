import "./Booklist.css";
import Book from "./Book";

const Booklist = () => {
  const bookArray = [
    {
      id: 1,
      title: "Running Home",
      author: "Marc Smith",
      description:
        "Lorem ipsum dolor sit amet, consectetur ut, faucibus gravida augue.",
    },
    {
      id: 2,
      title: "Medicine for University Students",
      author: "John Doe",
      description:
        "Lorem ipsum dolor sit amet, consectetur ut, faucibus gravida augue.",
    },
    {
      id: 3,
      title: "Learning React: The Tale",
      author: "Zane Birkett",
      description:
        "Lorem ipsum dolor sit amet, consectetur ut, faucibus gravida augue.",
    },
    {
      id: 4,
      title: "JAVA for amateurs",
      author: "Derrick Agdomar",
      description:
        "Lorem ipsum dolor sit amet, consectetur ut, faucibus gravida augue.",
    },
  ];
  return (
    <div className="books">
      <h2>All Books</h2>
      <Book books={bookArray} />
    </div>
  );
};

export default Booklist;
