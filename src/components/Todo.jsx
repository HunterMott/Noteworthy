import React from "react";
import "../styles/todo.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { taskURL, config, todoURL, doingURL, doneURL } from "../services";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TaskList from "./TaskList";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);
  const [title, setTitle] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      status: "todo",
    };
    await axios.post(taskURL, { fields }, config);
    setToggle(!toggle);
    setTitle("");
  };

  useEffect(() => {
    const getTodo = async () => {
      const todoResp = await axios.get(todoURL, config);
      setTodo(todoResp.data);
    };
    const getDoing = async () => {
      const todoResp = await axios.get(doingURL, config);
      setDoing(todoResp.data);
    };
    const getDone = async () => {
      const todoResp = await axios.get(doneURL, config);
      setDone(todoResp.data);
    };
    getTodo();
    getDoing();
    getDone();
  }, [toggle]);
  return (
    <Grid container spacing={0}>
      <Grid item xs={3}>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            fullWidth={true}
            required
            id="outlined-required"
            label="Task"
            defaultValue=""
            variant="outlined"
            value={title}
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
      <Grid item xs={3}>
        <h1>Todo</h1>
        <TaskList list={todo} setToggle={setToggle} />
      </Grid>
      <Grid item xs={3}>
        <h1>Doing</h1>
        <TaskList list={doing} />
      </Grid>
      <Grid item xs={3}>
        <h1>Done</h1>
        <TaskList list={done} />
      </Grid>
    </Grid>
  );
};

export default Todo;
