import "./DeleteModal.css";
import useTasks from "../../hooks/useTasks";

export default function DeleteModal(task) {
  const { deleteTask } = useTasks();
  return (
    <>
      <div className="modal modal__delete">
        <p>Are you sure you want to delete?</p>
        <div className="task__delete">
          <input type="button" value="Go back" />
          <input
            type="button"
            className="task__update-delete"
            value="Confirm"
            onClick={deleteTask}
            data-id={task._id}
          />
        </div>
      </div>
      <div className="modal-overlay"></div>
    </>
  );
}
