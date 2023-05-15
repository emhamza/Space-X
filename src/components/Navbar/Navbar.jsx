import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="src/assets\planet.png" alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="links-container">
        <li>
          <Link to="/" activeClassName="active">Rockets</Link>
        </li>
        <li>
          <Link to="/missions" activeClassName="active">Missions</Link>
        </li>
        <li>
          <Link to="/profile" activeClassName="active">My Profile</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
