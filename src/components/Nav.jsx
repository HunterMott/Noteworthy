import React from "react";
import Button from "@material-ui/core/Button";

const Nav = () => {
  return (
    <nav>
      <Button href="/" color="primary">
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
