const express = require("express");

require("dotenv").config();

const tasksRouter = require("./routes/task.routes");
const sequelize = require("./models/index");

const app = express();
const port = 5000;

const main = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
		await sequelize.sync({ force: false });
		console.log("Models synchronized successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

app.use(express.json());
app.use(tasksRouter);

app.get("/", (req, res) => {
	res.send("welcome");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

main();
