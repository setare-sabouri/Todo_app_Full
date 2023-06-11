const express = require("express");

require("dotenv").config();
const app = express();

const tasksRouter = require("./routes/task.routes");
const sequelize = require("./models/index");

const path = require('path')
app.use(express.static(path.join(__dirname + "/public")))

const port = process.env.PORT || 5000;

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
