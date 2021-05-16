import { Container, Row, Col, Card, Media } from 'react-bootstrap';

import { useUserContext } from '../../contexts/user';
import Todos from '../components/Todo/Todos'
import LogoutButton from '../components/Auth/LogoutButton';

function TodoList() {
	const { user } = useUserContext();

	return (
		<Container>
			<Row>
				<Col md={{ offset: 3, span: 6 }}>
					<Card className="shadow">
						<Card.Body className="d-flex justify-content-between align-items-center">
							<Media>
								<img
									width={48}
									height={48}
									className="mr-3"
									src={user.imageUrl}
									alt={user.name}
								/>
								<Media.Body>
									<h6>{user.name}</h6>
									<small className="text-muted">{user.email}</small>
								</Media.Body>
							</Media>
							<LogoutButton to="/login" />
						</Card.Body>
					</Card>
				</Col>
				<Col md={{ offset: 3, span: 6 }} className="mt-5">
					<Todos/>
				</Col>
			</Row>
		</Container>
	);
}

export default TodoList;