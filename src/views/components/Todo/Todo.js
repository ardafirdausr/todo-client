import React, { useState } from 'react'
import { Card, Button, Form, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCheckCircle,
	faTimesCircle,
	faTrash,
	faEdit,
	faSave
} from '@fortawesome/free-solid-svg-icons'

import todoAPI from '../../../adapters/todoAPI';

function EditTodo({ todo, onTodoUpdate }) {
	const [newTask, setNewTask] = useState(todo.task);
	const [isUpdating, setIsUpdating] = useState(false);

	const updateTodo = async e => {
		e.preventDefault();
		try {
			setIsUpdating(true)
			let response = await todoAPI.put(`/todos/${todo.id}`, {
				task: newTask,
				completed: todo.completed,
			});
			let updatedTodo = response.data;
			onTodoUpdate(updatedTodo);
		} catch(err) {
			console.log(err);
		}
	}

	return (
		<Card className="my-2 shadow">
			<Card.Body>
				<Form onSubmit={updateTodo}>
					<div>
						<Form.Control
							type="text"
							value={newTask}
							onChange={e => setNewTask(e.target.value)}/>
					</div>
					<div className="text-right">
						<Button
							type="submit"
							size="sm"
							className={`font-weight-bolder text-success ${isUpdating ? 'disabled' : ''}`}
							variant="none"
							disabled={isUpdating}>
							{isUpdating
								? <Spinner animation="border" size="sm" variant="primary"/>
								: (<div><FontAwesomeIcon icon={faSave} className="mr-1 mt-2" /> Save</div>)
							}
						</Button>
					</div>
				</Form>
			</Card.Body>
		</Card>
	)
}

function DisplayTodo({ todo, onTodoUpdate, onTodoRemoval, onTodoEdit }) {
	const toggleCompletion = async () => {
		onTodoUpdate(todo)
		try {
			let response = await todoAPI.put(`/todos/${todo.id}`, {
				task: todo.task,
				completed: !todo.completed,
			});
			let updatedTodo = response.data;
			onTodoUpdate(updatedTodo);
		} catch(err) {
			console.log(err)
		}
	};

	const deleteTodo = async () => {
		try {
			await todoAPI.delete(`/todos/${todo.id}`)
			onTodoRemoval(todo);
		} catch(err) {
			console.log(err)
		}
	}

	return (
		<Card className="my-2 shadow">
			<Card.Body>
				<h6 style={{textDecoration: todo.completed ? "line-through" : ""}}>{todo.task}</h6>
				<div className="text-right">
					<Button
						size="sm"
						className={`font-weight-bolder ${todo.completed ? 'text-warning' : 'text-primary'}`}
						variant="none"
						onClick={toggleCompletion}>
						<FontAwesomeIcon
							icon={todo.completed ? faTimesCircle : faCheckCircle }
							className={`${todo.completed ? 'text-warning' : 'text-primary'} mr-1`} />
							{todo.completed ? "Undone" : "Done"}
					</Button>
					<Button
						size="sm"
						className="font-weight-bolder text-success"
						variant="none"
						onClick={onTodoEdit}>
						<FontAwesomeIcon icon={faEdit} className="text-success mr-1" /> Edit
					</Button>
					<Button
						size="sm"
						className="font-weight-bolder text-danger"
						variant="none"
						onClick={deleteTodo}>
						<FontAwesomeIcon icon={faTrash} className="text-danger mr-1" /> Remove
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
}

function Todo({ todo, onTodoUpdate, onTodoRemoval }) {
	const [isEditing, setIsEditing] = useState(false);

	const showEditForm = () => setIsEditing(true);

	if (isEditing) {
		return (
			<EditTodo
				todo={todo}
				onTodoUpdate={onTodoUpdate}/>
		)
	}

	return (
		<DisplayTodo
			todo={todo}
			onTodoUpdate={onTodoUpdate}
			onTodoRemoval={onTodoRemoval}
			onTodoEdit={showEditForm}/>
	)
}

export default Todo;
