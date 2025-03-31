import { useState, useEffect, useCallback } from "react";

import {
  httpGetTasks,
  httpAddTask,
  httpUpdateTask,
  httpDeleteTask,
} from "./requests";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  const getTasks = useCallback(async () => {
    try {
      const fetched = await httpGetTasks();
      setTasks(fetched.tasks);
    } catch (err) {
      console.warning(err.message);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const submitTask = useCallback(
    async (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const title = data.get("task_title");
      const dueDate = data.get("task_dueDate")
        ? new Date(data.get("task_dueDate"))
        : Date();
      const status = data.get("task_status");
      const description = data.get("task_description");
      const newTask = { title, status, dueDate, description };
      const response = await httpAddTask(newTask);

      if (response.ok) {
        await getTasks();
      }
    },
    [getTasks]
  );

  const updateTask = useCallback(
    async (e) => {
      const data = new FormData(e.target);
      const id = data.get("task_id");
      const title = data.get("task_title");
      const dueDate = data.get("task_dueDate")
        ? new Date(data.get("task_dueDate"))
        : Date();
      const status = data.get("task_status");
      const description = data.get("task_description");

      const updatedTask = { id, title, dueDate, status, description };

      console.log(dueDate);
      const response = await httpUpdateTask(updatedTask);

      if (response.ok) {
        await getTasks();
      }
    },
    [getTasks]
  );

  const deleteTask = useCallback(
    async (e) => {
      const id = e.target.dataset.id;
      const response = await httpDeleteTask(id);

      if (response.ok) {
        window.location.reload();
        await getTasks();
      }
    },
    [getTasks]
  );

  return { tasks, submitTask, updateTask, deleteTask };
}
