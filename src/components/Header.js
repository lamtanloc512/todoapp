import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Header = ({ addTodo }) => {
  const currentDay = new Date().toLocaleDateString();
  console.log(currentDay);
  // eslint-disable-next-line
  const [day, setDay] = useState(currentDay);
  const [task, setTask] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      alert("Please add task");
      return;
    }
    setIsDone(false);
    setIsEdit(true);
    addTodo({ task, day, isDone, isEdit });
    setTask("");
  };
  return (
    <div>
      <Form className="d-flex justify-content-between" onSubmit={onSubmit}>
        <Form.Control
          size="sm"
          type="text"
          placeholder="Add Task"
          className="fw-bold"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button className="btn btn-primary ms-2 fw-bold" type="submits">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default Header;
