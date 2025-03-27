export default function AddTaskForm(props) {
  return (
    <>
      <form onSubmit={props.submitTask}>
        <div className="form-group">
          <label htmlFor="task_title">Title</label>
          <input type="text" name="task_title" id="task_title" />
        </div>
        <div className="form-group">
          <label htmlFor="task_description">Description</label>
          <textarea name="task_description" id="task_description" />
        </div>
        <div className="form-group">
          <label htmlFor="task_status">Status</label>
          <select name="task_status" id="task_status">
            <option value="todo">To do</option>
            <option value="in progress">In progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="task_dueDate">Due date</label>
          <input type="date" id="task_dueDate" />
        </div>
        <button type="submit">Save task</button>
      </form>
    </>
  );
}
