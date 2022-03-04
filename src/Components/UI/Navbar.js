import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>React Project II</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/createbook">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
