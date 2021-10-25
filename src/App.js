import { useEffect, useState } from "react";
import "./assets/scss/App.scss";
import Container from "./components/Container";

const App = () => {
  const [Data, setData] = useState([]);

  //first load localStorage data
  useEffect(() => {
    const vDataJson = localStorage.getItem("Data");
    if (vDataJson) {
      const vDataObj = JSON.parse(vDataJson);
      setData(vDataObj);
    }
  }, []);

  // save to localStage
  useEffect(() => {
    const vNewDataJson = JSON.stringify(Data);
    localStorage.setItem("Data", vNewDataJson);
  }, [Data]);

  //Delete Task
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
    const id = Math.floor(Math.random() * 10000 + 2);
    const day = new Date().toLocaleDateString();
    const newTask = { id, day, ...todo };
    setData([...Data, newTask]);
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
