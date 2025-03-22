// TODO
// 1. create a new task
// 2. display one task
// 3. display list of tasks
// 4. modify task
// 5. delete task

const task = require("./task.mongo");

class TaskModel {
  async createTask(task) {
    try {
      await task.create(
        {
          title: task.title,
        },
        {
          title: task.title,
          description: task.description,
          user: task.user,
          dueDate: task.dueDate,
          status: task.status,
        }
      );
    } catch (err) {
      console.error(`Could not save task : ${err}`);
    }
  }
}

module.exports = TaskModel;
