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
          <a href="">Rockets</a>
        </li>
        <li>
          <a href="">Missions</a>
        </li>
        <li>
          <a href="">My Profile</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
