const express = require("express");

const TaskController = require("./tasks.controller");

const taskController = new TaskController();
const tasksRouter = express.Router();

tasksRouter.get("/", taskController.httpGetAllTasks);
tasksRouter.post("/", taskController.httpAddNewTask);

module.exports = tasksRouter;
