const express = require("express");

const { httpAddNewTask } = require("./tasks.controller");

const tasksRouter = express.Router();

tasksRouter.get("/", httpAddNewTask);

module.exports = tasksRouter;
