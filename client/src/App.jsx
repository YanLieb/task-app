import useTasks from "./hooks/useTasks";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

export default function App() {
  const { tasks, submitTask } = useTasks();
  return (
    <>
      <TaskList tasks={tasks} />
      <AddTaskForm submitTask={submitTask} />
    </>
  );
}
