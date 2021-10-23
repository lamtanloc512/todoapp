import Header from "./Header";
import Tasks from "./Tasks";

const Container = ({ Data, changeState, changeEdit, deleteTask, addTodo }) => {
  return (
    <div className="container my-5">
      <div className="row py-5 px-2 justify-content-center">
        <div className="col-12 col-md-6 bg-secondary rounded py-5 px-4">
          <h2 className="text-center text-dark fw-bold">TODO APP</h2>
          <Header addTodo={addTodo} />
          <Tasks
            Tasks={Data}
            changeState={changeState}
            changeEdit={changeEdit}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
