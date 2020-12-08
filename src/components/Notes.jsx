import React from "react";
import "../styles/notes.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Notes = () => {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleDelete = async (id) => {
    const deleteURL = `${baseURL}/${id}`
    await axios.delete(deleteURL, config)
    setToggle(!toggle);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      date,
      note,
    };



    await axios.post(baseURL, { fields }, config);
    setToggle(!toggle);
    setTitle("");
    setDate("");
    setNote("");
  };

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      setNotes(resp.data.records);
    };
    getData();
  }, [toggle]);

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
      <Grid container
        direction="column"
        alignItems="center"
      >
        <Grid item sm={12}>
          <h1>Notes</h1>
        </Grid>
        <Grid item sm>
          <form
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              fullWidth={true}
              required
              id="outlined-required"
              label="Title"
              variant="outlined"
              value={title}
            />
            <TextField
              onChange={(e) => setDate(e.target.value)}
              fullWidth={true}
              id="outlined-required"
              label="Date"
              variant="outlined"
              value={date}
            />
            <TextField
              onChange={(e) => setNote(e.target.value)}
              fullWidth={true}
              required
              id="filled-multiline-static"
              label="Note"
              multiline
              rows={8}
              rowsMax={24}
              variant="outlined"
              value={note}
            />
            <Button
              fullWidth={true}
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit!
            </Button>
          </form>
        </Grid>
        <Grid item sm>
          {notes.map((note) => (
            <Card
              sm={3}
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
              <IconButton aria-label="delete"
              onClick={() => handleDelete(note.id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Notes;
