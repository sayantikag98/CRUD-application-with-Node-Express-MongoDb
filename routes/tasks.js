const express = require("express");
const {getAllTasks, addTask, getTaskById, deleteTask, updateTask} = require("../controllers/tasks");

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", addTask);

router.get("/:id", getTaskById);

router.delete("/:id", deleteTask);

router.patch("/:id", updateTask);

module.exports = router;