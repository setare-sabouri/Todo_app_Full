const TaskTable = require("../models/task.model");

const getAllTasks = async (req, res) => {
	try {
		const allTasks = await TaskTable.findAll();
		res.send(allTasks);
		console.log(allTasks);
	} catch (error) {
		console.error(error);
	}
};

const postNewTask = async (req, res) => {
	const { title, description } = req.body;
	console.log("Received new task request:", title);
	try {
		const newTask = await TaskTable.create({ title, description });
		res.json(newTask.toJSON());
		console.log("new task created : ", newTask);
		res.redirect("/tasks");
	} catch (error) {
		console.error(error);
	}
};

const deleteTask = async (req, res) => {
	const taskID = req.params.id;
	try {
		const numDeleted = await TaskTable.destroy({ where: { id: taskID } });
		if (numDeleted === 1) {
			// Task was deleted successfully
			res.sendStatus(204); // HTTP status code 204 means "No Content"
		} else {
			// Task was not found
			res.sendStatus(404); // HTTP status code 404 means "Not Found"
		}
	} catch (error) {
		console.error('Failed to delete task:', error);
		res.sendStatus(500); // HTTP status code 500 means "Internal Server Error"
	}
}



const updateTask = async (req, res) => {
	const taskId = req.params.id;
	const { title, description, completed } = req.body;
	try {
		const task = await TaskTable.findOne({ where: { id: taskId } });

		if (!task) {
			res.status(404).send({ message: "Task not found!" });
			return;
		}

		task.title = title || task.title;
		task.description = description || task.description;
		task.completed = completed || task.completed;
		console.log(completed + "dddddd");
		const updatedTask = await task.save();

		res.send(updatedTask);
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "Internal server error" });
	}
};


module.exports = { postNewTask, getAllTasks, deleteTask, updateTask };
