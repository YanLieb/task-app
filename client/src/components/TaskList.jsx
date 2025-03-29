import Task from "./Task.jsx";

export default function Tasklist({tasks}) {
	return (
		 <>
			 <h1>Liste de tâches</h1>
			 <div className="task-list">
				 {tasks.map((task) => {
					 return (
							<Task key={task._id} task={task}/>
					 );
				 })}
			 </div>
		 </>
	);
}
