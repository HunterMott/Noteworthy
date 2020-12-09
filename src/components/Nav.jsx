import React from "react";
import Button from "@material-ui/core/Button";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbuttons">
      <Link to="/">
        <Button variant="contained" color="primary">
          Home
        </Button>
      </Link>
      <Link to="/todo">
        <Button variant="contained" color="primary">
          To-Do
        </Button>
      </Link>
      <Link to="/notes">
        <Button variant="contained" color="primary">
          Notes
        </Button>
      </Link>
    </nav>
  );
};

export default Nav;
