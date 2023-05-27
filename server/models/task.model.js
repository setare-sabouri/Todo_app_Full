const { DataTypes, UUID } = require("sequelize");
const sequelize = require("./index");

const Task = sequelize.define("Task", {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: "U didn't pick a title stoopid",
	},
	description: {
		type: DataTypes.TEXT,
	},
	completed: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
});

module.exports = Task;
