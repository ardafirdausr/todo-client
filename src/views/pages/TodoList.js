import { Container, Row, Col } from 'react-bootstrap';
import Todos from '../components/Todo/Todos'

function TodoList() {
	return (
		<Container>
			<Row>
				<Col md={{ offset: 3, span: 6 }}>
					<Todos/>
				</Col>
			</Row>
		</Container>
	);
}

export default TodoList;