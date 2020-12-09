import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
const Home = () => {
  return (
    <div>
      <Grid container spacing={6} justify="center">
        <Grid item sm={12}>
          <h1>Welcome to NoteWorthy</h1>
          <h3>
            This is a simple productivity app meant to help keep you on track
            and stay productive!
          </h3>
        </Grid>
        <Grid item sm={6}>
          <h3>Click this button to check out your To-Do list!</h3>
          <Button href="/todo" color="primary">
            To-Do
          </Button>
        </Grid>
        <Grid item sm={6}>
          <h3>Click this button to check out your Notes!</h3>
          <Button href="/notes" color="primary">
            Notes
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
