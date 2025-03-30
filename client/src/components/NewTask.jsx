import "./NewTask.css";

export default function AddTaskForm(props) {
  return (
    <>
      <h2>Add a task</h2>
      <form onSubmit={props.submitTask}>
        <div className="form-group task__data task__data-title">
          <label className="task__title" htmlFor="task_title">
            Title
          </label>
          <input type="text" name="task_title" id="task_title" />
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
          <button type="submit">Save task</button>
        </div>
      </form>
    </>
  );
}
