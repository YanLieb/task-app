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

  async findTask(filter) {
    return await Task.findOne(filter);
  }

  async updateTask(filter, updates) {
    const task = await this.findTask(filter);
    if (!task) return null;

    Object.assign(task, updates);
    return await task.save();
  }

  async getAllTasks() {
    return await Task.find();
  }
}

module.exports = TaskModel;
