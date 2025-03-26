const Task = require("./task.mongo");

class TaskModel {
  static async createTask(data) {
    try {
      const task = new Task(data);

      return await task.save();
    } catch (err) {
      console.error(`Could not save task : ${err.message}`);
      throw err;
    }
  }

  static async getTask(filter) {
    const task = await Task.findOne(filter);
    if (!task) throw new Error("No existing task found", { cause: "NotFound" });
    return task;
  }

  static async updateTask(filter, updates) {
    try {
      const task = await this.getTask(filter);
      Object.assign(task, updates);
      return await task.save();
    } catch (err) {
      console.error(`Could not update task : ${err.message}`);
      throw err;
    }
  }

  static async getAllTasks() {
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

  static async deleteTask(filter) {
    try {
      const task = await this.getTask(filter);

      await Task.deleteOne({ _id: task._id });
      return task;
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }
}

module.exports = TaskModel;
