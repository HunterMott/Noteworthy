import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "../styles/tasklist.css";
import axios from "axios";
import { config, taskURL } from "../services";
import { useState } from "react";

const TaskList = (props) => {
  let data = props.list.records;

  const handleDelete = async (id) => {
    const idURL = `${taskURL}/${id}`;
    await axios.delete(idURL, config);
    props.setToggle((prev) => !prev);
  };

  const handleStatus = async (id, newStatus) => {
    const idURL = `${taskURL}/${id}`;
    const fields = {
      status: newStatus,
    };
    await axios.patch(idURL, { fields }, config);
    props.setToggle((prev) => !prev);
  };

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
              {todo.fields.status !== 'todo' && <Button
                size="small"
                color="primary"
                onClick={(e) => handleStatus(todo.id, "todo")}
              >
                Todo
              </Button>}
              {todo.fields.status !== 'doing' && <Button
                size="small"
                color="primary"
                onClick={(e) => handleStatus(todo.id, "doing")}
              >
                Doing
              </Button>}
              {todo.fields.status !== 'done' && <Button
                size="small"
                color="primary"
                onClick={(e) => handleStatus(todo.id, "done")}
              >
                Done
              </Button>}
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(todo.id)}
              >
                <DeleteIcon fontSize="small" color="primary" />
              </IconButton>
            </Card>
          ))}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default TaskList;
