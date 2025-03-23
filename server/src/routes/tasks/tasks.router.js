const express = require("express");

const TaskController = require("./tasks.controller");

const taskController = new TaskController();
const tasksRouter = express.Router();

tasksRouter.get("/", taskController.httpGetAllTasks);
tasksRouter.post("/", taskController.httpAddNewTask);

tasksRouter.get("/:id", taskController.httpGetTask);
tasksRouter.post("/:id", taskController.httpUpdateTask);
tasksRouter.delete("/:id", taskController.httpDeleteTask);

module.exports = tasksRouter;
