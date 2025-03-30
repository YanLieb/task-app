import { useState } from "react";

import useTasks from "./hooks/useTasks";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/NewTask";
import DeleteModal from "./components/_partials/deleteModal";
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const { tasks, submitTask } = useTasks();

  function displayModal() {
    setShowModal(!showModal);
  }

  if (showModal) {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <div className="container">
        <h1>Task list</h1>
        <AddTaskForm submitTask={submitTask} />
        {tasks ? (
          <TaskList tasks={tasks} displayModal={displayModal} />
        ) : (
          <p>No tasks yet</p>
        )}
      </div>
      {showModal ? <DeleteModal /> : false}
    </>
  );
}
