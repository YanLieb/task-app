const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    user: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: {
        values: ["todo", "in progress", "done"],
        message: "'{VALUE}' is not a valid status",
      },
      default: "todo",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("task", taskSchema);
