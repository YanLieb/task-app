import { useState } from "react";
import "./Task.css";
import useTasks from "../hooks/useTasks";

export default function Task(props) {
  const task = props.task;
  const [editEntry, setEditEntry] = useState(false);
  const { deleteTask } = useTasks();

  function editMode() {
    setEditEntry(!editEntry);
  }

  function getLocalDateTimeString(date) {
    const newDate = new Date(date);
    const tzOffset = newDate.getTimezoneOffset() * 60000;
    const localISOTime = new Date(newDate.getTime() - tzOffset);
    return localISOTime.toISOString().slice(0, 16);
  }

  return (
    <form onSubmit={props.updateTask} className="task">
      <div className="task__data task__data-title">
        <label className="task__title" htmlFor="task_title">
          Title
        </label>
        {!editEntry ? (
          <p className="task__value">{task.title}</p>
        ) : (
          <input
            type="text"
            name="task_title"
            id="task_title"
            placeholder={task.title}
            defaultValue={task.title}
          />
        )}
      </div>
      <div className="task__data task__data-status">
        <label className="task__title" htmlFor="task_status">
          Status
        </label>
        {!editEntry ? (
          <p className="task__value">{task.status}</p>
        ) : (
          <select
            name="task_status"
            id="task_status"
            defaultValue={task.status}
          >
            <option value="todo">To do</option>
            <option value="in progress">In progress</option>
            <option value="done">Done</option>
          </select>
        )}
      </div>
      <div className="task__data task__data-description">
        <label className="task__title" htmlFor="task_description">
          Description
        </label>
        {!editEntry ? (
          <p className="task__value">{task.description}</p>
        ) : (
          <textarea
            name="task_description"
            id="task_description"
            cols="30"
            rows="10"
            defaultValue={task.description}
          ></textarea>
        )}
      </div>
      <div className="task__data task__data-dueDate">
        <label className="task__title" htmlFor="task_dueDate">
          Due date
        </label>
        {!editEntry ? (
          <p className="task__value">
            {new Date(task.dueDate).toLocaleDateString()} at{" "}
            {new Date(task.dueDate).toLocaleTimeString()}
          </p>
        ) : (
          <input
            type="datetime-local"
            id="task_dueDate"
            name="task_dueDate"
            defaultValue={getLocalDateTimeString(task.dueDate)}
          />
        )}
      </div>
      <div className="task__update">
        <input
          type="hidden"
          name="task_id"
          id="task_id"
          defaultValue={task._id}
        />
        {!editEntry ? (
          <>
            <input type="button" onClick={editMode} value="Edit" />
            <input
              type="button"
              className="task__update-delete"
              value="Delete"
              onClick={deleteTask}
              data-id={task._id}
            />
          </>
        ) : (
          <>
            <input type="button" onClick={editMode} value="Back" />
            <button type="submit">Update</button>
          </>
        )}
      </div>
    </form>
  );
}
