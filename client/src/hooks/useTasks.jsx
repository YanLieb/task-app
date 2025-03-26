import { useState, useEffect, useCallback } from "react";

import { httpGetTasks } from "./requests";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  const getTasks = useCallback(async () => {
    const fetched = await httpGetTasks();
    setTasks(fetched.tasks);
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const submitTask = useCallback((e) => {
    e.preventDefault;
    const data = new FormData(e.target);
    console.log(data);
  });

  return { tasks, submitTask };
}
