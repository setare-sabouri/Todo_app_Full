import React, { useEffect, useState } from "react";
import { SingleTask } from "./components/Single_Task/singleTask";
import { NewTaskForm } from "./components/Single_Task/NewTaskform/newTaskForm";

import './index.css'
const App = () => {
	const [backendData, setBackendData] = useState([{}]);

	useEffect(() => {
		fetch("/tasks")
			.then((response) => response.json())
			.then((data) => {
				setBackendData(data);
			});
	}, []);

	return (
		<main className="tasks-wrapper">
			<div className="header-todo">
				<span className="material-symbols-outlined">
					note
				</span>
				<h1 >TO-DO Desk</h1>

			</div>

			<NewTaskForm setTasks={setBackendData} tasks={backendData} />

			{backendData.map((item) => (
				<SingleTask
					key={item.id}
					id={item.id}
					title={item.title}
					description={item.description}
					completed={item.completed}
					tasks={backendData}
					setTasks={setBackendData}
				/>
			))}
		</main>
	);
};
export default App;
