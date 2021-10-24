import { InputGroup, FormControl } from "react-bootstrap";

const Task = ({ Task, changeState, changeEdit, deleteTask }) => {
  return (
    <div className="form-group d-flex flex-column align-items-start my-4">
      <div className="row w-100 p-0 m-0">
        <div className="col-12 p-2 bg-light text-dark rounded">
          <InputGroup className="fs-5">
            <FormControl
              as="textarea"
              aria-label="With textarea"
              defaultValue={Task.task}
              disabled={Task.isEdit}
              className="fs-6"
              rows="1"
            />
            <InputGroup.Checkbox
              defaultChecked={Task.isDone}
              onClick={() => changeState(Task.id)}
              className="star align-self-center"
            />
          </InputGroup>
          <span
            className="input-group-text bg-warning fw-bold m-0 my-2 fs-6"
            id="date-created"
          >
            Day created: {Task.day}
          </span>
          <div className="btn-group d-block">
            <button
              className={
                Task.isEdit
                  ? "btn btn-success btn-sm px-3 rounded fw-bold me-1"
                  : "btn btn-primary btn-sm px-3 rounded fw-bold me-1"
              }
              onClick={() => changeEdit(Task.id)}
            >
              {Task.isEdit ? "EDIT" : "SAVE"}
            </button>

            {Task.isEdit ? (
              ""
            ) : (
              <button
                className="btn btn-danger btn-sm fw-bold rounded ms-1"
                onClick={() => deleteTask(Task.id)}
              >
                DELETE
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
