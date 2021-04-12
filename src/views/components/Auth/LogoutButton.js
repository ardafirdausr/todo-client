import React from 'react';
import { useHistory } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';

import { clientId } from '../../../config/oauth';
import { useAuth } from './Auth';

function LogoutButton({ to }) {
	const { setUser } = useAuth();
	const history = useHistory();

	const successHandler = function() {
		localStorage.removeItem("user")
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
