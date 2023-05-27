const express = require("express");
const router = express.Router(); // not app , but a mini app, (middleware?)
const { getAllTasks, postNewTask, deleteTask, updateTask } = require("../controllers/task.controller");

router.use(express.json());

router.get("/tasks", (req, res) => {
	getAllTasks(req, res);
});

router.post("/tasks", (req, res) => {
	postNewTask(req, res);
});

router.put("/tasks/:id", (req, res) => {
	updateTask(req, res);
});

router.delete("/tasks/:id", (req, res) => {
	deleteTask(req, res);
});


module.exports = router;
