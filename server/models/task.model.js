const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    timeSlot: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
