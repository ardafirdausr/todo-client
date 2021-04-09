import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';

import { name } from '../../config/app';
import { useAuth } from '../components/Auth/Auth';
import LoginButton from '../components/Auth/LoginButton';
import Logo from '../../assets/todo.svg';

function Login() {
	const { user } = useAuth();
	const history = useHistory();

	if (user) {
		history.push("/");
		return null;
	}

	return (
		<Container>
			<Row className="align-items-center">
				<Col md={{ offset: 4, span: 4 }} className="text-center">
					<img src={Logo} alt="TODO APP" width={300}/>
				</Col>
				<Col md={{ offset: 4, span: 4 }} className="mt-4">
					<Card className="shadow">
						<Card.Body>
							<h1 className="text-upper text-info mb-5">{name}</h1>
							<p className="text-muted font-weight-bolder text-center">Sign in to your Google Account to start</p>
							<div className="d-flex justify-content-center">
								<LoginButton to="/" />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Login;