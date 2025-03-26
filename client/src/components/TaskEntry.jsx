export default function TaskEntry({ task }) {
  let created = new Date(task.createdAt);
  let updated = new Date(task.updatedAt);
  let dueDate = new Date(task.dueDate);

  created = `${created.toLocaleDateString()} à ${created.toLocaleTimeString()}`;
  updated = `${updated.toLocaleDateString()} à ${updated.toLocaleTimeString()}`;
  dueDate = `${dueDate.toLocaleDateString()}`;

  return (
    <>
      {task.title}
      <ul>
        <li>Status - {task.status}</li>
        <li>Date limite : {dueDate}</li>
        <li>Créée le{created}</li>
        <li>Modifiée le {updated}</li>
      </ul>
    </>
  );
}
