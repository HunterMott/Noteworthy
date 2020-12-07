import React from "react";
import "../styles/notes.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      setNotes(resp.data.records);
    };
    getData();
  }, []);
  const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      margintop: 10,
      border: "1px solid",
      borderColor: "#cfd8dc",
      borderRadius: 12,
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item sm>
          form
        </Grid>
        <Grid item sm>
          {notes.map((note) => (
            <Grid sm={3}
              style={{
                padding: 20,
                margin: 20,
              }}
              key={note.id}
              className={classes.root}
              variant="outlined"
            >
              <h2>{note.fields.title}</h2>
              <h4>{note.fields.date}</h4>
              <h3>{note.fields.note}</h3>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Notes;
