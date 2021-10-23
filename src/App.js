import { useState } from "react";
import "./assets/scss/App.scss";
import Container from "./components/Container";

const App = () => {
  const [Data, setData] = useState([
    {
      id: 1,
      task: "Tomorrow i will have an exam",
      day: "Oct 20th at 12:30pm",
      isDone: true,
      isEdit: true,
    },
  ]);

  const deleteTask = (paramDelete) => {
    console.log(paramDelete);
    setData(Data.filter((paramData) => paramData.id !== paramDelete));
  };

  const changeEdit = (pramChange) => {
    console.log(pramChange);
    setData(
      Data.map((paramData) => {
        if (paramData.id === pramChange) {
          return { ...paramData, isEdit: !paramData.isEdit };
        } else {
          return paramData;
        }
      })
    );
  };

  const changeStateTask = (paramCheck) => {
    setData(
      Data.map((paramData) => {
        if (paramData.id === paramCheck) {
          return { ...paramData, isDone: !paramData.isDone };
        } else {
          return paramData;
        }
      })
    );
  };

  const addTodo = (todo) => {
    console.log(todo);
    const id = Math.floor(Math.random() * 10000 + 2);
    const newTask = { id, ...todo };
    setData([...Data, newTask]);

    console.log(Data);
  };
  return (
    <>
      <Container
        Data={Data}
        changeState={changeStateTask}
        changeEdit={changeEdit}
        deleteTask={deleteTask}
        addTodo={addTodo}
      />
    </>
  );
};

export default App;
