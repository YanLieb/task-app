import useTasks from "./hooks/useTasks";

export default function App() {
  const tasks = useTasks();

  return (
    <>
      <h1>Liste de tâches</h1>
      <ul>
        {tasks.map((task, id) => {
          let created = new Date(task.createdAt);
          let updated = new Date(task.updatedAt);
          let dueDate = new Date(task.dueDate);
          created = `${created.toLocaleDateString()} à ${created.toLocaleTimeString()}`;
          updated = `${updated.toLocaleDateString()} à ${updated.toLocaleTimeString()}`;
          dueDate = `${dueDate.toLocaleDateString()}`;

          return (
            <li key={id} id={task._id}>
              {task.title}
              <ul>
                <li>Status - {task.status}</li>
                <li>Date limite : {dueDate}</li>
                <li>Créée le{created}</li>
                <li>Modifiée le {updated}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
}
