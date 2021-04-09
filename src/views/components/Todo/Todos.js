import React, { useState, useCallback, useEffect } from 'react';
import { Spinner, Tabs, Tab } from 'react-bootstrap';

import AddTodoForm from './AddTodoForm';
import Todo from './Todo';
import API from '../../../service/todoAPI';

function Todos() {
	const [filter, setFilter] = useState("All");
	const [isFetchingTodos, setIsFetchingTodos] = useState(false);
	const [todos, setTodos] = useState([]);

	const getAllTodos = async () => {
		try {
			setIsFetchingTodos(true);
			let response = await API.get("/todos");
			let todos = response.data;
			setTodos([...todos])
		} catch(err) {
			console.log(err)
		} finally {
			setIsFetchingTodos(false);
		}
	}

	useEffect(() => getAllTodos(), []);

	const onNewTodo = useCallback(
		newTodo => setTodos([...todos, newTodo]),
		[todos],
	);

	const onTodoUpdate = useCallback(
			todo => {
				const index = todos.findIndex(currentTodo => currentTodo.id === todo.id);
				setTodos([...todos.slice(0, index), todo, ...todos.slice(index + 1)]);
			},
			[todos],
	);

	const onTodoRemoval = useCallback(
			todo => {
				const newTodos = todos.filter(currentTodo => currentTodo.id !== todo.id);
				setTodos([...newTodos]);
			},
			[todos],
	);

	const TodoList = () => {
		if (isFetchingTodos) {
			return (
				<div className="mt-5 text-center">
					<Spinner animation="border" />
				</div>
			);
		}

		if (todos.length === 0) {
			return <p className="text-center text-muted mt-5">No todos yet! Add one above!</p>;
		}

		return (
			<Tabs
				variant="pills"
				defaultActiveKey={filter}
				transition={false}
				onSelect={(eventKey) => setFilter(eventKey)}>
					<Tab title="Filter" className="text-muted font-weight-bold" disabled></Tab>
					<Tab eventKey="All" title="All">
						{todos.map(todo => (
                <Todo
                    todo={todo}
                    key={todo.id}
                    onTodoUpdate={onTodoUpdate}
                    onTodoRemoval={onTodoRemoval}
                />
            ))}
					</Tab>
					<Tab eventKey="Completed" title="Completed">
						{todos.map(todo => {
							if (todo.completed) {
								return (
									<Todo
                    todo={todo}
                    key={todo.id}
                    onTodoUpdate={onTodoUpdate}
                    onTodoRemoval={onTodoRemoval}
                />)
							}

							return null;
						})}
					</Tab>
					<Tab eventKey="Uncomplete" title="Uncomplete">
						{todos.map(todo => {
							if (!todo.completed) {
								return (
									<Todo
                    todo={todo}
                    key={todo.id}
                    onTodoUpdate={onTodoUpdate}
                    onTodoRemoval={onTodoRemoval}
                />)
							}

							return null;
						})}
					</Tab>
				</Tabs>
		);
	}

	return (
		<>
			<AddTodoForm onNewTodo={onNewTodo} />
			<TodoList />
		</>
	);
}

export default Todos;
