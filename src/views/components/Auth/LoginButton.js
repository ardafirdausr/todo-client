import React from 'react';
import { useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

import { clientId } from '../../../config/oauth';
import { useAuth } from './Auth';

function LoginButton({ to }) {
	const { setUser } = useAuth();
	const history = useHistory();

	const successHandler = function (response) {
		let { profileObj: profile, tokenObj: token } = response;

		setUser({
			name: profile.name,
			email: profile.email,
			imageUrl: profile.imageUrl,
			token: token.id_token
		});

		history.push(to);
	}

	const failedHandler = function (resp) {
		console.log(resp)
	}

	return (
		<GoogleLogin
			clientId={clientId}
			buttonText="Login With Google"
			onSuccess={successHandler}
			onFailure={failedHandler}
			cookiePolicy={'single_host_origin'}
			isSignedIn={true}
			theme="dark"/>
	);
}

export default LoginButton;
