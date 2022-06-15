import "./Navbar.css";
import Logo from "../../assets/CCS Nav-logo.png";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} width="40" alt="logo" />
      </Link>
      <div className="links">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/create">Change Request Form</NavLink>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
