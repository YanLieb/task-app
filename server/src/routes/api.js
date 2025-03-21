const express = require("express");

const tasksRouter = require("./tasks/tasks.router");

const api = express.Router();

api.use("/tasks", tasksRouter);

module.exports = api;
