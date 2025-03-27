import { useState, useEffect, useCallback } from "react";

import { httpGetTasks, httpAddTask } from "./requests";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  const getTasks = useCallback(async () => {
    const fetched = await httpGetTasks();
    setTasks(fetched.tasks);
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const submitTask = useCallback(
    async (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const title = data.get("task_title");
      const dueDate = new Date(data.get("task_dusDate"));
      const status = data.get("task_status");
      const description = data.get("task_description");
      const newTask = { title, status, dueDate, description };
      const response = await httpAddTask(newTask);

      if (response.ok) {
        getTasks();
      }
    },
    [getTasks]
  );

  return { tasks, submitTask };
}
