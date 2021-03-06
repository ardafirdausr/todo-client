import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { name } from '../../config/app';
import LoginButton from '../components/Auth/LoginButton';
import Logo from '../../assets/todo.svg';

function Login() {
	return (
		<Container>
			<Row className="align-items-center">
				<Col md={{ offset: 4, span: 4 }} className="text-center">
					<img src={Logo} alt="TODO" width={300}/>
				</Col>
				<Col md={{ offset: 4, span: 4 }} className="mt-4">
					<Card className="shadow">
						<Card.Body>
							<h1 className="text-upper text-info mb-5 text-center">{name}</h1>
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