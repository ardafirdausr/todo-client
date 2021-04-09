import React, { useState } from 'react';
import { Form, InputGroup, Button, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import API from '../../../service/todoAPI';

function AddTodoForm({ onNewTodo }) {
	const [newTodo, setNewTodo] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submitNewTodo = async e => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			let response = await API.post('/todos', {task: newTodo});
			let todo = response.data;
			onNewTodo(todo);
		} catch(err) {
			console.log(err)
		} finally {
			setIsSubmitting(false);
			setNewTodo('');
		}
	};

	return (
		<Form onSubmit={submitNewTodo}>
			<InputGroup className="mb-3">
				<Form.Control
					value={newTodo}
					onChange={e => setNewTodo(e.target.value)}
					type="text"
					placeholder="New Todo"/>
				<InputGroup.Append>
					<Button
						type="submit"
						variant="success"
						disabled={!newTodo.length}
						className={isSubmitting ? 'disabled' : ''}>
						{isSubmitting
							? <Spinner animation="border" size="sm" />
							: <div>Add Todo <FontAwesomeIcon icon={faPlus} className="ml-2" /></div>
						}
					</Button>
				</InputGroup.Append>
			</InputGroup>
		</Form>
	);
}

export default AddTodoForm;