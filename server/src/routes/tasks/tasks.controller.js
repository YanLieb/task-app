const TaskModel = require("../../models/task.model");

class TaskController {
  constructor() {
    this.formatDate = this.formatDate.bind(this);
    this.httpAddNewTask = this.httpAddNewTask.bind(this);
    this.httpUpdateTask = this.httpUpdateTask.bind(this);
  }

  formatDate(date, res) {
    console.log(date);
    const formattedDate = new Date(date);

    if (isNaN(formattedDate)) {
      return res.status(400).json({
        error: "Invalid due date",
      });
    }

    return formattedDate;
  }

  async httpAddNewTask(req, res) {
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
      return res
        .status(500)
        .json({ error: "Internal server error - " + err.message });
    }
  }

  async httpUpdateTask(req, res) {
    try {
      const filter = { _id: req.params.id };

      const update = req.body;
      if (!update.title) throw new Error("Title missing");

      update.dueDate = update.dueDate
        ? this.formatDate(update.dueDate)
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
      return res
        .status(500)
        .json({ error: "Internal server error - " + err.message });
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
      return res
        .status(500)
        .json({ error: "Internal server error - " + err.message });
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
      return res
        .status(500)
        .json({ error: "Internal server error - " + err.message });
    }
  }
}

module.exports = TaskController;
