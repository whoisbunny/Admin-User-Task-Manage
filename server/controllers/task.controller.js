const { get } = require("mongoose");
const Task = require("../models/task.model");

const createTask = async (req, res) => {
  try {
    const { timeSlot, description, date, userId } = req.body;

    if (!timeSlot || !description || !date || !userId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const task = new Task({
      timeSlot,
      description,
      date,
      userId,
    });

    await task.save();

    res.status(201).json({ message: "Task Created Successfully", task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("userId", "username email");

    res.status(200).json({ tasks, message: "Fetch All Tasks" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getTaskByUserId = async (req, res) => {
  try {
    const { id } = req.params;

    const tasks = await Task.find({ userId: id }).populate(
      "userId",
      "username email"
    );

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found for this user" });
    }

    res.status(200).json({ tasks, message: "Fetch Task By User ID" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskByUserId,
};
