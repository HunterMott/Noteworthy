import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "../styles/tasklist.css";
import axios from 'axios';
import {config, taskURL} from '../services'

const TaskList = (props) => {
  let data = props.list.records;
  const handleDelete = async (id) => {
    const deleteURL = `${taskURL}/${id}`
    await axios.delete(deleteURL, config)
    props.setToggle((prev) => !prev)
  }
  return (
    <div>
      {data ? (
        <div>
          {data.map((todo) => (
            <Card
              style={{
                padding: 15,
                margin: 15,
              }}
              key={todo.id}
            >
              <h4 className="task-title">{todo.fields.title}</h4>
              <Button size="small" color="primary">Todo</Button>
              <Button size="small" color="primary">Doing</Button>
              <Button size="small" color="primary">Done</Button>
              <IconButton aria-label="delete" onClick={() => handleDelete(todo.id)} >
                <DeleteIcon fontSize="small" color="primary"/>
              </IconButton>
            </Card>
          ))}
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default TaskList;
