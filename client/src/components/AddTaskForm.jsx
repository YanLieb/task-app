export default function AddTaskForm(props) {
  return (
    <>
      <form onSubmit={props.useSubmit}>
        <div className="form-group">
          <label htmlFor="task_title">Title</label>
          <input type="text" id="task_title" />
        </div>
        <div className="form-group">
          <label htmlFor="task_status">Status</label>
          <select name="task_status" id="task_status">
            <option value="To do">To do</option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
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
