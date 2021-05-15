import React from 'react';
import { useHistory } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';

import { useUserContext } from '../../../contexts/user';
import { clientId } from '../../../config/oauth';

function LogoutButton({ to }) {
	const history = useHistory();
	let { setUser } = useUserContext();

	const successHandler = function() {
		localStorage.removeItem("user");
		setUser(null);
		history.push(to);
	}

	return (
		<GoogleLogout
			clientId={clientId}
			buttonText="Logout"
			onLogoutSuccess={successHandler}
			theme="dark"/>
	);
}

export default LogoutButton;
