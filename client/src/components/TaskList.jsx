import TaskEntry from "./TaskEntry";

export default function Tasklist({ tasks }) {
  return (
    <>
      <h1>Liste de tâches</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task._id}>
              <TaskEntry task={task} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
