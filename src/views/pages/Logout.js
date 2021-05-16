import { useHistory } from "react-router-dom";
import { useGoogleLogout } from 'react-google-login';
import { Row, Col, Spinner } from 'react-bootstrap';

import { useUserContext } from '../../contexts/user';
import { clientId } from '../../config/oauth';

const Logout = () => {
	let history = useHistory();
	let { setUser } = useUserContext();

	let logoutHandler = () => {
		setUser(null);
		localStorage.removeItem("user");
		history.push("/login");
	}

	let { signOut } = useGoogleLogout({
		clientId,
		onLogoutSuccess: logoutHandler,
		onFailure: logoutHandler,
	});

	signOut();
	return (
		<Row
			style={{marginTop: "-50px", marginBottom: "-50px"}}
			className="d-flex justify-content-center align-items-center vh-100 vw-100">
			<Col className="mt-5">
					<div className="text-center">
						<Spinner animation="border" variant="primary" size="lg" />
					</div>
					<h5 className="mt-2 text-center text-muted">
						Logging Out....
					</h5>
			</Col>
		</Row>
	)
}

export default Logout;
