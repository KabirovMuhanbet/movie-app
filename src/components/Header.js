import React from "react";
import { Link } from "react-router-dom";
const Header = ({myMovies}) => {
  return (
    <nav className="header">
      <Link className="logo" to="/">
        MTM
      </Link>
      <Link className="btn btn-outline-success" to="/saved">
        My Movie List: {myMovies.length}
      </Link>
    </nav>
  );
};

export default Header;
