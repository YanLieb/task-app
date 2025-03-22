// 1. check and send task coming from front
// 2. check and display task from back
// 3. check and update task from front in back
// 4. check and delete task from front in back
const { format } = require("morgan");
const TaskModel = require("../../models/tasks.model");

class TaskController {
  constructor() {
    this.taskModel = new TaskModel();
  }

  formatTaskDueDate = (dueDate, res) => {
    console.log(dueDate);
    const date = new Date(dueDate);
    console.log(date);
    if (isNaN(date)) {
      return res.status(400).json({
        error: "Invalid due date",
      });
    }

    return date;
  };

  httpAddNewTask = async (req, res) => {
    const task = req.body;

    task.dueDate = this.formatTaskDueDate(task.dueDate, res);

    await this.taskModel.createTask(task);
    return res.status(201).json(task);
  };

  httpGetAllTasks = () => {
    console.log("all tasks");
  };
}

module.exports = TaskController;
