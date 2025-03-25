import {useState, useEffect, useCallback} from "react";

import httpGetTasks from "./requests";

export default function useTasks() {
	const [tasks, setTasks] = useState([]);
	
	const getTasks = useCallback(async () => {
		const fetched = await httpGetTasks();
		setTasks(fetched.tasks);
	}, [])
	
	useEffect(() => {
		getTasks();
	}, [getTasks])
	
	return tasks;
}