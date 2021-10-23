import React from "react";
import Task from "./Task";

const Tasks = ({ Tasks, changeState, changeEdit, deleteTask }) => {
  return (
    <div className="my-4 text-white">
      <h5 className="text-dark fw-bold">Todo list:</h5>
      <ul className="p-0">
        {Tasks.map((paramTask) => (
          <Task
            key={paramTask.id}
            Task={paramTask}
            changeState={changeState}
            changeEdit={changeEdit}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
