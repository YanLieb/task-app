const API_URL = "http://localhost:2609/v1";

async function httpGetTasks() {
  try {
    const response = await fetch(`${API_URL}/tasks`);

    if (!response.ok) {
      throw new Error("No tasks yet");
    } else {
      return await response.json();
    }
  } catch (err) {
    console.error(err.message);
    return {
      error: "Could not fetch data" + err.message,
      ok: false,
    };
  }
}

async function httpAddTask(task) {
  try {
    return await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
  } catch (err) {
    console.error(err.message);
    return {
      error: "Could not add task : " + err.message,
      ok: false,
    };
  }
}

async function httpUpdateTask(task) {
  try {
    return await fetch(`${API_URL}/tasks/${task.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
  } catch (err) {
    console.error(err.message);
    return {
      error: "Could not update task : " + err.message,
      ok: false,
    };
  }
}

async function httpDeleteTask(taskId) {
  try {
    return await fetch(`${API_URL}/tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: taskId }),
    });
  } catch (err) {
    console.error(err.message);
    return {
      error: "Could not delete task : " + err.message,
      ok: false,
    };
  }
}

export { httpAddTask, httpGetTasks, httpUpdateTask, httpDeleteTask };
