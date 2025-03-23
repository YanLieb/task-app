// 1. check and send task coming from front
// 2. check and display task from back
// 3. check and update task from front in back
// 4. check and delete task from front in back
const { format } = require("morgan");
const TaskModel = require("../../models/task.model");

class TaskController {
  constructor() {
    this.taskModel = new TaskModel();
  }

  formatDate = (date, res) => {
    const formattedDate = new Date(date);

    if (isNaN(formattedDate)) {
      return res.status(400).json({
        error: "Invalid due date",
      });
    }

    return formattedDate;
  };

  httpAddNewTask = async (req, res) => {
    try {
      const task = req.body;

      if (!task.title) throw new Error("Title missing");

      task.dueDate ? this.formatDate(task.dueDate, res) : undefined;

      await this.taskModel.createTask(task);

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

  httpUpdateTask = async (req, res) => {};

  httpGetAllTasks = () => {
    console.log("all tasks");
  };
}

module.exports = TaskController;
