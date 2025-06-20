const express = require("express");
const { createTask, getAllTasks, getTaskByUserId } = require("../controllers/task.controller");

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTaskByUserId);

module.exports = router;
