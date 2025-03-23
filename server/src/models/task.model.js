// TODO
// 1. create a new task
// 2. display one task
// 3. display list of tasks
// 4. modify task
// 5. delete task

const Task = require("./task.mongo");

class TaskModel {
  async createTask(data) {
    try {
      const task = new Task(data);

      console.log(task);

      return await task.save();
    } catch (err) {
      console.error(`Could not save task : ${err.message}`);
      throw err;
    }
  }

  async updateTask(filter, updates) {
    try {
      const task = await Task.findOne(filter);
      if (!task)
        throw new Error("No existing task found", { cause: "NotFound" });

      Object.assign(task, updates);
      return await task.save();
    } catch (err) {
      console.error(`Could not update task : ${err.message}`);
      throw err;
    }
  }

  async getAllTasks() {
    try {
      const tasks = await Task.find();
      if (tasks.length === 0)
        throw new Error("No tasks yet", { cause: "NotFound" });
      return tasks;
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }
}

module.exports = TaskModel;
