import useTasks from "../hooks/useTasks";
import Task from "./Task.jsx";

import "./TaskList.css";

export default function TaskList(props) {
  const tasks = props.tasks;
  const { updateTask } = useTasks();
  return (
    <>
      <h2>All tasks</h2>
      <div className="task-list">
        {tasks.map((task) => {
          return (
            <Task
              key={task._id}
              task={task}
              updateTask={updateTask}
              displayModal={props.displayModal}
            />
          );
        })}
      </div>
    </>
  );
}
