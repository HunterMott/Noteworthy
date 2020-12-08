import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "../styles/tasklist.css";

const TaskList = (props) => {
  let data = props.list.records;
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
              <ButtonGroup
                size="small"
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
              >
                <Button>Todo</Button>
                <Button>Doing</Button>
                <Button>Done</Button>
                <IconButton aria-label="delete">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </ButtonGroup>
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
