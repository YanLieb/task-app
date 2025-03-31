import "./NewTask.css";
import { useState } from "react";

export default function AddTaskForm(props) {
  const [checkTitle, setCheckTitle] = useState(true);

  const checkInput = (e) => {
    const title = e.target.value;
    if (title === "") {
      setCheckTitle(false);
    } else {
      setCheckTitle(true);
    }
  };

  const checkInputOnSubmit = (e) => {
    const title = e.target.task_title.value;
    if (title === "") {
      setCheckTitle(false);
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    checkInputOnSubmit(e);
    props.submitTask(e);
  };

  return (
    <>
      <h2>Add a task</h2>
      <form onSubmit={handleSubmit} className="task">
        <div className="form-group task__data task__data-title">
          <label className="task__title" htmlFor="task_title">
            Title*
          </label>
          <input
            type="text"
            name="task_title"
            id="task_title"
            onBlur={checkInput}
            onChange={checkInput}
          />
          {!checkTitle && <p className="task__error">Title is required</p>}
        </div>
        <div className="form-group task__data task__data-description">
          <label className="task__title" htmlFor="task_description">
            Description
          </label>
          <textarea
            rows="5"
            cols="10"
            name="task_description"
            id="task_description"
          />
        </div>
        <div className="form-group task__data task__data-status">
          <label className="task__title" htmlFor="task_status">
            Status
          </label>
          <select name="task_status" id="task_status">
            <option value="todo">To do</option>
            <option value="in progress">In progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="form-group task__data task__data-dueDate">
          <label className="task__title" htmlFor="task_dueDate">
            Due date
          </label>
          <input type="datetime-local" id="task_dueDate" name="task_dueDate" />
        </div>
        <div className="form-group task__submit">
          <button type="submit" disabled={!checkTitle && "disabled"}>
            Save task
          </button>
        </div>
      </form>
    </>
  );
}
