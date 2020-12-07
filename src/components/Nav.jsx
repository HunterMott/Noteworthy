import React from "react";
import Button from "@material-ui/core/Button";
import '../styles/header.css'

const Nav = () => {
  return (
    <nav className='navbuttons'>
      <Button varient="contained" href="/" color="primary">
        Home
      </Button>
      <Button href="/todo" color="primary">
        To-Do
      </Button>
      <Button href="/notes" color="primary">
        Notes
      </Button>
    </nav>
  );
};

export default Nav;
