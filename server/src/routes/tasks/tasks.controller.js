// 1. check and send task coming from front
// 2. check and display task from back
// 3. check and update task from front in back
// 4. check and delete task from front in back

const TaskModel = require("../../models/task.model");

class TaskController {
  formatDate(date, res) {
    const formattedDate = new Date(date);
    if (isNaN(formattedDate)) {
      return res.status(400).json({
        error: "Invalid due date",
      });
    }

    return formattedDate;
  }

  httpAddNewTask = async (req, res) => {
    try {
      const task = req.body;

      if (!task.title) throw new Error("Title missing");

      task.dueDate = task.dueDate
        ? this.formatDate(task.dueDate, res)
        : undefined;

      await TaskModel.createTask(task);

      return res.status(201).json(task);
    } catch (err) {
      if (err.name === "ValidationError") {
        const errors = Object.values(err.errors).map((e) => e.message);
        return res.status(400).json({ errors });
      }
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  async httpUpdateTask(req, res) {
    try {
      const filter = { _id: req.params.id };

      const update = req.body;
      if (!update.title) throw new Error("Title missing");

      update.dueDate = update.dueDate
        ? this.formatDate(update.dueDate, res)
        : undefined;

      const updatedTask = await TaskModel.updateTask(filter, update);

      res.status(200).json(updatedTask);
    } catch (err) {
      if (err.name === "ValidationError") {
        const errors = Object.values(err.errors).map((e) => e.message);
        return res.status(400).json({ errors });
      }
      if (err.cause === "NotFound") {
        return res.status(404).json({ error: "Task not found" });
      }
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async httpGetAllTasks(req, res) {
    try {
      const tasks = await TaskModel.getAllTasks();

      return res.status(200).json({ tasks: tasks });
    } catch (err) {
      if (err.cause === "NotFound") {
        return res.status(404).json({ error: err.message });
      }
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
  async httpGetTask(req, res) {
    try {
      const filter = { _id: req.params.id };
      const task = await TaskModel.getTask(filter);
      return res.status(200).json({ task: task });
    } catch (err) {
      if (err.cause === "NotFound") {
        return res.status(404).json({ error: err.message });
      }

      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async httpDeleteTask(req, res) {
    try {
      const filter = { _id: req.params.id };
      const deletedTask = await TaskModel.deleteTask(filter);

      return res
        .status(200)
        .json({ success: `Task '${deletedTask.title}' deleted` });
    } catch (err) {
      if (err.cause === "NotFound") {
        return res.status(404).json({ error: err.message });
      }
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = TaskController;
