import React from "react";
import Nav from "./Nav";
import "../styles/header.css";
import { Grid } from "@material-ui/core";
const Header = () => {
  return (
    <Grid container className='header-main'>
      <Grid item sm={3}>
        <h2 className="app-title">NoteWorthy</h2>
      </Grid>
      <Grid item sm={9}>
        <Nav />
      </Grid>
    </Grid>
  );
};

export default Header;
