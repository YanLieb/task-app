import {useState} from "react";

export default function Task({task}) {
	const [editEntry, setEditEntry] = useState(false);
	
	function editMode() {
		setEditEntry(!editEntry);
	}
	
	return (
		 <form /*onSubmit={editEntry ? props.updateTask : undefined}*/ className="task">
			 <div className="task__data">
				 <label className="task__title" htmlFor="task_title">Title</label>
				 {!editEntry ? (
						<p className="task__value">{task.title}</p>
				 ) : (
						<input
							 type="text"
							 name="task_title"
							 id="task_title"
							 placeholder={task.title}
							 defaultValue={task.title}
						/>
				 )}
			 </div>
			 <div className="task__data">
				 <label className="task__title" htmlFor="task_status">Status</label>
				 {!editEntry ? (
						<p className="task__value">{task.status}</p>
				 ) : (
						<select name="task_status" id="task_status" defaultValue={task.status}>
							<option value="todo">To do</option>
							<option value="in progress" >In progress</option>
							<option value="done">Done</option>
						</select>
				 )}
			 </div>
			 <div className="task__data">
				 <label className="task__title" htmlFor="task_description">Description</label>
				 {!editEntry ? (
						<p className="task__value">{task.description}</p>
				 ) : (
						<textarea name="task_description" id="task_description" cols="30"
						          rows="10" defaultValue={task.description}></textarea>
				 )}
			 </div>
			 <div className="task__data">
				 <label
						htmlFor="task_dueDate">Due date</label>
				 {!editEntry ?
						(
							 <p
									className="task__value">{new Date(task.dueDate).toLocaleDateString()} at {new Date(task.dueDate).toLocaleTimeString()}</p>
						) : (
							 <input
									type="datetime-local"
									id="task_dueDate"
									defaultValue={new Date(task.dueDate).toISOString().slice(0, 16)}/>
						)}
			 </div>
			 <div className="task__update">
				 <input type="button" onClick={editMode} value="Edit"/>
				 <button type="submit">Update</button>
			 </div>
		 </form>
	);
}
