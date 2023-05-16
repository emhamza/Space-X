import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <a className="logo-container" href="/">
        <img src="src/assets\planet.png" alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </a>
      <ul className="links-container">
        <li>
          <NavLink to="/" className="nav-routes" activeClassName="active">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            className="nav-routes"
            activeClassName="active"
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className="nav-routes"
            activeClassName="active"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
