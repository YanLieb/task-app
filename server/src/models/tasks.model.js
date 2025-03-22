// TODO
// 1. create a new task
// 2. display one task
// 3. display list of tasks
// 4. modify task
// 5. delete task

const tasks = require("./tasks.mongo");

class TaskModel {
  async createTask(task) {
    try {
      await tasks.updateOne(
        {
          title: task.title,
        },
        {
          $set: task,
        },
        {
          upsert: true,
        }
      );
    } catch (err) {
      console.error(`Could not save task : ${err}`);
    }
  }
}

module.exports = TaskModel;
